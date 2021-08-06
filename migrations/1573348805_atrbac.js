var Timeslot = artifacts.require('Timeslot');
var Rule = artifacts.require('Rule');
var RoleTimeslots = artifacts.require('RoleTimeslots');
var ATRBAC = artifacts.require('ATRBAC');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  // Deploy the RoleTimeslots contract
  // console.log('TESTing message in the Deploy for ATRBAC');
  deployer.deploy(Timeslot);
  deployer.deploy(RoleTimeslots);
  deployer.deploy(Rule);
  deployer.link(Timeslot, ATRBAC);
  deployer.link(RoleTimeslots, ATRBAC);
  deployer.link(Rule, ATRBAC);
  deployer.deploy(ATRBAC);
};
