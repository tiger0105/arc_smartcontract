pragma solidity ^0.5.0;

import "./Timeslot.sol";

/**
 * @title Rules
 * @dev Library for managing rules in an ATRBAC policy.
 */
library Rule {
    struct rule {
        uint admin_role;
        uint admin_start_timeslot;
        uint admin_end_timeslot;
        int[] precondition;
        uint[] target_timeslot_array;
        uint target_role;
    }
}