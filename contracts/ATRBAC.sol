pragma solidity ^0.5.0;

import "./RoleTimeslots.sol";

import "./Rule.sol";
import "./Timeslot.sol";

/**
 * @title ATRBAC
 * @author Jonathan Shahen
 * @notice Implements the Administrative Temporal Role Based Access Control empirical version described
 *          in the Mohawk+T paper in SACMAT'15 (http://dx.doi.org/10.1145/2752952.2752966)
 */
contract ATRBAC {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // VARIABLES
    using RoleTimeslots for RoleTimeslots.Role;
    using Timeslot for Timeslot.timeslot;
    using Rule for Rule.rule;
    
    bool constant IGNORE_TIME_DEBUG = true;
    /**
     * @title TRBAC State
     * @notice this variable stores the current state of the access control policy.
                We use this to determine if a rule can fire and if a user satisfies a condition.
     */
    RoleTimeslots.Role[] public trbac_state;

    /**
     * @title Role Enablement State
     * @notice This variable stores wether a role is enabled for a particular timeslot.
                If a role is enabled, then that allows rules to be fired for the admin condition.
     */
    mapping(uint => mapping(uint => bool)) public role_enablement;

    /** Rule Sets */
    /**
     * @title Can Assign Rules
     * @notice Can Assign rules allow for changes to the TRBAC State by adding role/timeslots to a target user.
     */
    Rule.rule[] ca_rules;
    /**
     * @title Can Revoke Rules
     * @notice Can Revoke rules allow for changes to the TRBAC State by removing role/timeslots from a target user.
     */
    Rule.rule[] cr_rules;
    /**
     * @title Can Enable Rules
     * @notice Can Enable rules allow for changes to the Role Enablement table by enabling role/timeslots.
     */
    Rule.rule[] ce_rules;
    /**
     * @title Can Disable Rules
     * @notice Can Disable rules allow for changes to the Role Enablement table by disabling role/timeslots.
     */
    Rule.rule[] cd_rules;
    enum RuleType {CanAssign, CanRevoke, CanEnable, CanDisable}

    /**
     * @title A list of all the timeslots in the policy
     * @notice A timeslot must be added before it is referenced in a rule's time interval or timeslots array
     */
    Timeslot.timeslot[] public timeslots;

    /**
     * The list of users who can DO ANYTHING to the ATRBAC policy
     * SECURITY: Limit this list to the MINIMUM number of users
     * (if you can setup the policy and then have zero super users that is ideal)
     */
    mapping(address=>bool) public super_users;
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR AND EVENTS
    constructor() public {
        super_users[msg.sender] = true;
        suAddNewRole("TRUE"); // Add the TRUE role (assigned to all users and enabled for all timeslots)
    }

    event SuperUser_AddSuperUser(address _super_user, address _new_super_user);
    event SuperUser_RemoveSuperUser(address _super_user, address _new_super_user);
    ////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Modifiers
    modifier onlySuperUsers {
        require(super_users[msg.sender] == true, "Sender must be a Super User.");
        _;
    }
    modifier noZeroAddress(address account) {
        require(account != address(0), "Address cannot be the zero address");
        _;
    }    
    modifier roleExists(uint _role) {
        require(_role < trbac_state.length, "Role does not exists.");
        _;
    }
    modifier timeslotExists(uint _timeslot) {
        require(_timeslot < timeslots.length, "Timeslot does not exists.");
        _;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Super User Actions
    function suAddSuperUser(address _super_user) public onlySuperUsers noZeroAddress(_super_user) returns(bool){
        require(super_users[_super_user] == false, "User is already a Super User.");
        super_users[_super_user] = true;
        
        emit SuperUser_AddSuperUser(msg.sender, _super_user);
        return true;
    }
    function suRemoveSuperUser(address _super_user) public onlySuperUsers noZeroAddress(_super_user) returns(bool){
        require(super_users[_super_user] == true, "User is not a Super User.");
        super_users[_super_user] = false;

        emit SuperUser_RemoveSuperUser(msg.sender, _super_user);
        return true;
    }

    function suAddRoleTimeslotToUser(address _user, uint _role, uint _timeslot) public
            onlySuperUsers noZeroAddress(_user) roleExists(_role) returns(bool){
        trbac_state[_role].add(_timeslot, _user);
        return true;
    }
    function suRemoveRoleTimeslotToUser(address _user, uint _role, uint _timeslot) public
            onlySuperUsers noZeroAddress(_user) roleExists(_role) returns(bool){
        trbac_state[_role].remove(_timeslot, _user);
        return true;
    }

    function suAddTimeSlot(uint _start_hour, uint _end_hour) public onlySuperUsers returns(uint) {
        require(_start_hour <= _end_hour, "The Start Hour must be less than or equal to the End Hour.");
        require(IGNORE_TIME_DEBUG || (0 <= _start_hour && _start_hour <= 23), "The Start Hour must be in the range [0,23]");
        require(IGNORE_TIME_DEBUG || (0 <= _end_hour && _end_hour <= 23), "The End Hour must be in the range [0,23]");

        timeslots.push(Timeslot.timeslot(_start_hour, _end_hour));
        return timeslots.length - 1;
    }
    function suAddNewRole(string memory _name) public onlySuperUsers returns(uint) {
        require(bytes(_name).length > 0, "The Role's name must be non-zero length");

        trbac_state.push(RoleTimeslots.Role(_name));
        return trbac_state.length - 1;
    }

    function suEnableRole(uint _role, uint _timeslot) public
        onlySuperUsers roleExists(_role) timeslotExists(_timeslot) returns(bool) {
        role_enablement[_role][_timeslot] = true;
        return true;
    }
    function suDisableRole(uint _role, uint _timeslot) public
        onlySuperUsers roleExists(_role) timeslotExists(_timeslot) returns(bool) {
        role_enablement[_role][_timeslot] = false;
        return true;
    }

    /**
     * @notice Adds a new Can Assign rule to the policy
     * @param _adminRole The role that will act as administrator (0 for TRUE)
     * @param _adminTimeIntervalStart The index of the timeslot to start the interval
     * @param _adminTimeIntervalEnd The index of the timeslot to end the interval
     * @param _precondition List of role indexes, negative role indexes indicate a negative precondition
     * @param _targerTimeSlotArray List of timeslot indexes that the target user/role must satisfy
     * @param _targetRole Index of the target role
     */
    function suAddCARule(uint _adminRole, uint _adminTimeIntervalStart, uint _adminTimeIntervalEnd,
                int[] memory _precondition, uint[] memory _targerTimeSlotArray, uint _targetRole) public
                roleExists(_adminRole) roleExists(_targetRole)
                timeslotExists(_adminTimeIntervalStart) timeslotExists(_adminTimeIntervalEnd) {
        require(_adminTimeIntervalStart <= _adminTimeIntervalEnd,
            "The Admin Time Interval Start index must be <= to the End index");

        // Verify Precondition
        PreconditionRole memory r;
        for(uint i = 0; i < _precondition.length; i++) {
            r = splitRolePrecondition(_precondition[i]);
            require(r.role < trbac_state.length, "Role does not exists.");
        }
        // Verify Timeslot Array
        for(uint i = 0; i < _targerTimeSlotArray.length; i++) {
            require(_targerTimeSlotArray[i] < timeslots.length, "Timeslot does not exists.");
        }

        ca_rules.push(Rule.rule(_adminRole, _adminTimeIntervalStart, _adminTimeIntervalEnd, _precondition,
            _targerTimeSlotArray, _targetRole));
    }
    /**
     * @notice Adds a new Can Revoke rule to the policy
     * @param _adminRole The role that will act as administrator (0 for TRUE)
     * @param _adminTimeIntervalStart The index of the timeslot to start the interval
     * @param _adminTimeIntervalEnd The index of the timeslot to end the interval
     * @param _precondition List of role indexes, negative role indexes indicate a negative precondition
     * @param _targerTimeSlotArray List of timeslot indexes that the target user/role must satisfy
     * @param _targetRole Index of the target role
     */
    function suAddCRRule(uint _adminRole, uint _adminTimeIntervalStart, uint _adminTimeIntervalEnd,
                int[] memory _precondition, uint[] memory _targerTimeSlotArray, uint _targetRole) public
                roleExists(_adminRole) roleExists(_targetRole)
                timeslotExists(_adminTimeIntervalStart) timeslotExists(_adminTimeIntervalEnd) {
        require(_adminTimeIntervalStart <= _adminTimeIntervalEnd,
            "The Admin Time Interval Start index must be <= to the End index");

        // Verify Precondition
        PreconditionRole memory r;
        for(uint i = 0; i < _precondition.length; i++) {
            r = splitRolePrecondition(_precondition[i]);
            require(r.role < trbac_state.length, "Role does not exists.");
        }
        // Verify Timeslot Array
        for(uint i = 0; i < _targerTimeSlotArray.length; i++) {
            require(_targerTimeSlotArray[i] < timeslots.length, "Timeslot does not exists.");
        }

        cr_rules.push(Rule.rule(_adminRole, _adminTimeIntervalStart, _adminTimeIntervalEnd, _precondition,
            _targerTimeSlotArray, _targetRole));
    }
    /**
     * @notice Adds a new Can Enable rule to the policy
     * @param _adminRole The role that will act as administrator (0 for TRUE)
     * @param _adminTimeIntervalStart The index of the timeslot to start the interval
     * @param _adminTimeIntervalEnd The index of the timeslot to end the interval
     * @param _precondition List of role indexes, negative role indexes indicate a negative precondition
     * @param _targerTimeSlotArray List of timeslot indexes that the target user/role must satisfy
     * @param _targetRole Index of the target role
     */
    function suAddCERule(uint _adminRole, uint _adminTimeIntervalStart, uint _adminTimeIntervalEnd,
                int[] memory _precondition, uint[] memory _targerTimeSlotArray, uint _targetRole) public
                roleExists(_adminRole) roleExists(_targetRole)
                timeslotExists(_adminTimeIntervalStart) timeslotExists(_adminTimeIntervalEnd) {
        require(_adminTimeIntervalStart <= _adminTimeIntervalEnd,
            "The Admin Time Interval Start index must be <= to the End index");

        // Verify Precondition
        PreconditionRole memory r;
        for(uint i = 0; i < _precondition.length; i++) {
            r = splitRolePrecondition(_precondition[i]);
            require(r.role < trbac_state.length, "Role does not exists.");
        }
        // Verify Timeslot Array
        for(uint i = 0; i < _targerTimeSlotArray.length; i++) {
            require(_targerTimeSlotArray[i] < timeslots.length, "Timeslot does not exists.");
        }

        ce_rules.push(Rule.rule(_adminRole, _adminTimeIntervalStart, _adminTimeIntervalEnd, _precondition,
            _targerTimeSlotArray, _targetRole));
    }
    /**
     * @notice Adds a new Can Disable rule to the policy
     * @param _adminRole The role that will act as administrator (0 for TRUE)
     * @param _adminTimeIntervalStart The index of the timeslot to start the interval
     * @param _adminTimeIntervalEnd The index of the timeslot to end the interval
     * @param _precondition List of role indexes, negative role indexes indicate a negative precondition
     * @param _targerTimeSlotArray List of timeslot indexes that the target user/role must satisfy
     * @param _targetRole Index of the target role
     */
    function suAddCDRule(uint _adminRole, uint _adminTimeIntervalStart, uint _adminTimeIntervalEnd,
                int[] memory _precondition, uint[] memory _targerTimeSlotArray, uint _targetRole) public
                roleExists(_adminRole) roleExists(_targetRole)
                timeslotExists(_adminTimeIntervalStart) timeslotExists(_adminTimeIntervalEnd) {
        require(_adminTimeIntervalStart <= _adminTimeIntervalEnd,
            "The Admin Time Interval Start index must be <= to the End index");

        // Verify Precondition
        PreconditionRole memory r;
        for(uint i = 0; i < _precondition.length; i++) {
            r = splitRolePrecondition(_precondition[i]);
            require(r.role < trbac_state.length, "Role does not exists.");
        }
        // Verify Timeslot Array
        for(uint i = 0; i < _targerTimeSlotArray.length; i++) {
            require(_targerTimeSlotArray[i] < timeslots.length, "Timeslot does not exists.");
        }

        cd_rules.push(Rule.rule(_adminRole, _adminTimeIntervalStart, _adminTimeIntervalEnd, _precondition,
            _targerTimeSlotArray, _targetRole));
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Users
    function hasAccess(address _user, uint _role, uint _timeslot) public view
        roleExists(_role) timeslotExists(_timeslot) returns(bool) {
        return trbac_state[_role].has(_timeslot, _user);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // ROLES
    function getRoleName(uint _role) public view roleExists(_role) returns(string memory) {
        return trbac_state[_role].name;
    }
    function roleEnabled(uint _role, uint _timeslot) public view
        roleExists(_role) timeslotExists(_timeslot) returns(bool) {
        return role_enablement[_role][_timeslot];
    }
    function getLastRoleId() public view returns(uint) {
        return trbac_state.length - 1;
    }
    function getNextRoleId() public view returns(uint) {
        return trbac_state.length;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // TIMESLOTS
    function getTimeslotHours(uint _timeslot) public view timeslotExists(_timeslot) returns(uint[2] memory) {
        return([timeslots[_timeslot].start_hour, timeslots[_timeslot].end_hour]);
    }
    function getLastTimeslotId() public view returns(uint) {
        return timeslots.length - 1;
    }
    function getNextTimeslotId() public view returns(uint) {
        return timeslots.length;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // HELPER FUNCTIONS
    function getCanAssign() public pure returns(uint) { return uint(RuleType.CanAssign); }
    function getCanRevoke() public pure returns(uint) { return uint(RuleType.CanRevoke); }
    function getCanEnable() public pure returns(uint) { return uint(RuleType.CanEnable); }
    function getCanDisable() public pure returns(uint) { return uint(RuleType.CanDisable); }

    struct PreconditionRole {
        uint role;
        bool not;
    }

    function splitRolePrecondition(int _role) internal pure returns(PreconditionRole memory){
        uint role = (_role < 0)? uint(-1 * _role) : uint(_role);
        bool not = _role < 0;
        return(PreconditionRole(role, not));
    }

    function nowInTimeslot(uint _timeslot) public view timeslotExists(_timeslot) returns(bool) {
        return timeslots[_timeslot].active(now);
    }

    /**
     * @notice Returns TRUE only if the sender is allowed to fire the rule at the timestamp provided.
     *          Only checks the administrative condition.
     * @param _rule 
     * @param _timestamp 
     */
    function canFire(Rule.rule memory _rule, uint _timestamp) internal view returns (bool) {
        if(IGNORE_TIME_DEBUG == true){
            if(_rule.admin_role == 0) {
                return true;
            }

            for(uint i = _rule.admin_start_timeslot; i <= _rule.admin_end_timeslot; i++) {
                if(trbac_state[_rule.admin_role].has(i, msg.sender) == true){
                    return true;
                }
            }
        }else{
            for(uint i = _rule.admin_start_timeslot; i <= _rule.admin_end_timeslot; i++) {
                require(i < timeslots.length, "The Rule references a timeslot that does not exists.");
                
                if(timeslots[i].active(_timestamp) || IGNORE_TIME_DEBUG == true) {
                    if(_rule.admin_role > 0) {
                        return trbac_state[_rule.admin_role].has(i, msg.sender);
                    }
                    return true;    
                }
            }
        }
        return false;
    }
    function satifiesPrecondition(Rule.rule memory _rule, address _target_user) internal view returns (bool) {
        for(uint r = 0; r < _rule.precondition.length; r++) {
            for(uint ts = 0; ts < _rule.target_timeslot_array.length; ts++) {
                uint role = (_rule.precondition[r] < 0)? uint(-1 * _rule.precondition[r]) : uint(_rule.precondition[r]);
                bool not = _rule.precondition[r] < 0;
                if(trbac_state[role].has(_rule.target_timeslot_array[ts], _target_user) == not) {
                    return false;
                }
            }
        }
        return true;
    }
    function satifiesPreconditionRole(Rule.rule memory _rule) internal view returns (bool) {
        for(uint r = 0; r < _rule.precondition.length; r++) {
            for(uint ts = 0; ts < _rule.target_timeslot_array.length; ts++) {
                uint role = (_rule.precondition[r] < 0)? uint(-1 * _rule.precondition[r]) : uint(_rule.precondition[r]);
                bool not = _rule.precondition[r] < 0;
                if(role_enablement[role][_rule.target_timeslot_array[ts]] == not) {
                    return false;
                }
            }
        }
        return true;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // RULES
    function fireCanAssignRule(uint _ruleIndex, address _targetUser) public {
        require(_ruleIndex < ca_rules.length, "Unknown Can Assign Rule Index");
        require(canFire(ca_rules[_ruleIndex], now) == true, "Sender is not authorized to fire this rule at this time.");
        require(satifiesPrecondition(ca_rules[_ruleIndex], _targetUser) == true, 
                "Target User does not satisfy the preconditions for the rule.");

        for(uint i = 0; i < ca_rules[_ruleIndex].target_timeslot_array.length; i++) {
            trbac_state[ca_rules[_ruleIndex].target_role].add(ca_rules[_ruleIndex].target_timeslot_array[i],
                _targetUser);
        }
    }
    function fireCanRevokeRule(uint _ruleIndex, address _targetUser) public {
        require(_ruleIndex < cr_rules.length, "Unknown Can Revoke Rule Index");
        require(canFire(cr_rules[_ruleIndex], now) == true, "Sender is not authorized to fire this rule at this time.");
        require(satifiesPrecondition(cr_rules[_ruleIndex], _targetUser) == true, 
                "Target User does not satisfy the preconditions for the rule.");

        for(uint i = 0; i < cr_rules[_ruleIndex].target_timeslot_array.length; i++) {
            trbac_state[cr_rules[_ruleIndex].target_role].remove(cr_rules[_ruleIndex].target_timeslot_array[i], 
                _targetUser);
        }
    }

    function fireCanEnableRule(uint _ruleIndex) public {
        require(_ruleIndex < ce_rules.length, "Unknown Can Enable Rule Index");
        require(canFire(ce_rules[_ruleIndex], now) == true, "Sender is not authorized to fire this rule at this time.");
        require(satifiesPreconditionRole(ce_rules[_ruleIndex]) == true, 
                "Target Role does not satisfy the preconditions for the rule.");

        for(uint i = 0; i < ce_rules[_ruleIndex].target_timeslot_array.length; i++) {
            role_enablement[ce_rules[_ruleIndex].target_role][ce_rules[_ruleIndex].target_timeslot_array[i]] = true;
        }
    }
    function fireCanDisableRule(uint _ruleIndex) public {
        require(_ruleIndex < cd_rules.length, "Unknown Can Disable Rule Index");
        require(canFire(cd_rules[_ruleIndex], now) == true, "Sender is not authorized to fire this rule at this time.");
        require(satifiesPreconditionRole(cd_rules[_ruleIndex]) == true, 
                "Target Role does not satisfy the preconditions for the rule.");

        for(uint i = 0; i < cd_rules[_ruleIndex].target_timeslot_array.length; i++) {
            role_enablement[cd_rules[_ruleIndex].target_role][cd_rules[_ruleIndex].target_timeslot_array[i]] = false;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
}