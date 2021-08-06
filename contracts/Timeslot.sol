pragma solidity ^0.5.0;

/**
 * @title Timeslots
 * @author Jonathan Shahen
 * @dev Library for managing timeslots and time intervals in an ATRBAC policy.
 */
library Timeslot {
    /**
     * @title Timeslot
     * @notice Representation of a timeslot, which can be translated to the real world.
                This SPECIFIC implementation of a timeslot if for a single day!
                Any larger, or finer grain than hours, will need a new
                implementation connected to the ATRBAC policy.
     * @param start_hour This holds the inclusive starting hour of the day (hours range [0,23])
     * @param end_hour This holds the inclusive ending hour of the day (hours range [0,23])
     */
    struct timeslot {
        uint start_hour;
        uint end_hour;
    }

    

    uint constant SECONDS_PER_DAY = 24 * 60 * 60;
    uint constant SECONDS_PER_HOUR = 60 * 60;
    uint constant SECONDS_PER_MINUTE = 60;
    function getHour(uint timestamp) internal pure returns (uint hour) {
        uint secs = timestamp % SECONDS_PER_DAY;
        hour = secs / SECONDS_PER_HOUR;
    }

    /**
     * @dev Check if at timestamp is active for a timeslot.
     * @return bool
     */
    function active(timeslot storage ts, uint timestamp) internal view returns (bool) {
        uint hour = getHour(timestamp);

        if(ts.start_hour <= ts.end_hour) {
            return (ts.start_hour <= hour && hour <= ts.end_hour);
        }else {
            // We allow timeslots to wrap.
            // 11pm - 1am is a valid timeslot which contains the hours: 23(11pm), 0(12am), 1(1am)
            return (hour <= ts.start_hour || ts.end_hour <= hour);
        }
    }
}