pragma solidity ^0.5.0;

/**
 * @title Roles
 * @dev Library for managing addresses assigned to a Role.
 */
library RoleTimeslots {
    struct Role {
        string name;
        mapping (address => mapping (uint => bool)) bearer;
    }

    /**
     * @dev Give an account access to this role.
     */
    function add(Role storage role, uint timeslot, address account) public {
        require(!has(role, timeslot, account), "Roles: account already has role");
        role.bearer[account][timeslot] = true;
    }

    /**
     * @dev Remove an account's access to this role.
     */
    function remove(Role storage role, uint timeslot, address account) internal {
        require(has(role, timeslot,  account), "Roles: account does not have role");
        role.bearer[account][timeslot] = false;
    }

    /**
     * @dev Check if an account has this role.
     * @return bool
     */
    function has(Role storage role, uint timeslot, address account) internal view returns (bool) {
        require(account != address(0), "Roles: account is the zero address");
        return role.bearer[account][timeslot];
    }
}