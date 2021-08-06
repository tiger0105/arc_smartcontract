var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
contract('ATRBAC', function(accounts) {
  var su = accounts[0];
  let instance;
  let trans;
  let totalGas=0;
  let allGas=[];
  let gas=0;

  before(async () => {
    instance = await atrbac.deployed();
    let deployGas = await atrbac.new.estimateGas();
    console.log('Deployed Gas:', deployGas);
    totalGas+=deployGas; allGas.push(deployGas);
  });

  //////////////////////////////////////////////////////////
  // Create Roles
  it('Should create new roles', async () => {
    trans = await instance.suAddNewRole.sendTransaction('role3', { from: su });
    gas += trans.receipt.gasUsed;
    trans = await instance.suAddNewRole.sendTransaction('role1', { from: su });
    gas += trans.receipt.gasUsed;
    trans = await instance.suAddNewRole.sendTransaction('goalRole', { from: su });
    gas += trans.receipt.gasUsed;
    console.log('[createRoles] Total Gas used:', gas);
    totalGas+=gas; allGas.push(gas); gas = 0;
  });
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  // Create Timeslots
  it('Should create new timeslots', async () => {
    trans = await instance.suAddTimeSlot.sendTransaction(0, 1, { from: su });
    gas += trans.gasUsed;
    console.log('[createTimeslots] Total Gas used:', gas);
    totalGas+=gas; allGas.push(gas); gas = 0;
  });
  //////////////////////////////////////////////////////////
  it('print gas', async () => {
    console.log('Total Gas:', totalGas);
    console.log('All Gas:', allGas);
  });
});