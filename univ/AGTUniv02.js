var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv02.mohawkT');
  let accounts = await web3.eth.getAccounts();
  var su = accounts[0];
  let instance;
  let trans;
  let totalGas=0;
  let allGas=[];
  let gas=0;

  instance = await atrbac.deployed();
  let deployGas = await atrbac.new.estimateGas();
  console.log('Deployed Gas:', deployGas);
  totalGas+=deployGas; allGas.push(deployGas);


  //////////////////////////////////////////////////////////
  // Create Roles
  trans = await instance.suAddNewRole.sendTransaction('role12', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role22', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role1', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role2', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role8', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role19', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role6', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role7', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role15', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role24', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role34', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role11', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role33', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role32', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role10', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role4', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role30', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role5', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role3', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role18', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role17', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role16', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role14', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role13', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role23', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role21', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role20', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role29', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role28', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role27', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role26', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role25', { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createRoles] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create Timeslots
  trans = await instance.suAddTimeSlot.sendTransaction(0, 1, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(1, 2, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(2, 3, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(3, 4, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(4, 5, { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t5-t5], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t2, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t5-t5], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [4], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t1-t1], [NOT role14], t1, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [-1 * 23], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role14, role32], t1, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [23, 14], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role14], t3, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [23], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role14], t4, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [23], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role14], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [23], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role32], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [14], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role32], t2, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [14], [2], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role2], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [4], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role22], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [2], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role28], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [29], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role22], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [2], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role21], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [26], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role6], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [7], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role23], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [25], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role23], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [25], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role8], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [5], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role12], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [1], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role22], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [2], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role21], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [26], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role3], t3, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [19], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role4], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [16], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role8], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [5], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role9], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [33], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role12], t3, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [1], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role12], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [1], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role22], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [2], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role24], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [10], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role23], t3, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [25], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role23], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [25], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [25, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [4], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t3, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t1, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [2], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role8, [t4-t4], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role6, [t4-t4], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role8, [t4-t4], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t3-t3], [NOT role14], t5, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [-1 * 23], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t2-t2], [NOT role14], t2, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [-1 * 23], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t2-t2], [NOT role32], t4, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 2, 2, [-1 * 14], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role14, role32], t4, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [23, 14], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t5-t5], [role14, role32], t5, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 5, 5, [23, 14], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t2-t2], [role14, role32], t2, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 2, 2, [23, 14], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t1, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t5, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [23], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t2, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [23], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t2, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t3, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [23], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role17], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [21], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role17], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [21], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role17], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [21], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role32], t2, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [14], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role32], t5, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [14], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role32], t3, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [14], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role32], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [14], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role32], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [14], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role29], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [28], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role14], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [23], [5], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role14], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [23], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [14], [4], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [14], [5], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role32], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [14], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t2-t2], [role14], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [23], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t3-t3], [role14], t5, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [23], [5], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role14], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [23], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t4-t4], [role32], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [14], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t2-t2], [role32], t5, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [14], [5], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t3-t3], [role32], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [14], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role2], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [4], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role2], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [4], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role24], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [10], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role24], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [10], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role24], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [10], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role7], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [8], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role7], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [8], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role28], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [29], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role28], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [29], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role21], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role21], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [26], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role6], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [7], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role8], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [5], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [1], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role12], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [1], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role9], t3, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [33], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role9], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [33], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role12], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [1], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role12], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [1], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role24], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [10], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role28], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [29], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role28], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [29], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role28], t3, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [29], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t1-t1], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [25, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t1, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 3, 3, [25, -1 * 5, -1 * 2, -1 * 10], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t2, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 2, 2, [25, -1 * 5, -1 * 2, -1 * 10], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t5-t5], [role23, NOT role8, NOT role22, NOT role24], t3, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 5, 5, [25, -1 * 5, -1 * 2, -1 * 10], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t1-t1], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 1, 1, [25, -1 * 5, -1 * 2, -1 * 10], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [25, -1 * 7, -1 * 2, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t2, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 3, 3, [], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t3, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t1, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t2, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t5, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t3, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t4, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t2, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t3, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t4, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t1, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [1], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t1, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t2, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t3-t3], TRUE, t1, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 3, 3, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t5-t5], TRUE, t4, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 5, 5, [], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t4-t4], TRUE, t5, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 4, 4, [], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t1, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t2, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t3, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t3, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t4, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t5, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t4, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t3, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t4, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [4], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t1, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t1, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 2, 2, [], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t4, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 4, 4, [], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t5-t5], TRUE, t1, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 5, 5, [], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t1-t1], TRUE, t4, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 1, 1, [], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t2-t2], TRUE, t5, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 2, 2, [], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t4, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [XA3Pos] <TRUE, [t1-t1], [role6], t4, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [7], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t2-t2], [role22], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 2, 2, [2], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t2-t2], [role21], t3, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 2, 2, [26], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t3-t3], [role12], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 3, 3, [1], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t1-t1], [role23], t3, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [25], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t3, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t4-t4], TRUE, t1, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [], [1], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t2, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t4-t4], TRUE, t1, role14>
  trans = await instance.suAddCERule.sendTransaction(7, 4, 4, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t3-t3], TRUE, t5, role20>
  trans = await instance.suAddCERule.sendTransaction(6, 3, 3, [], [5], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t3-t3], TRUE, t1, role15>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role28], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [29], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role4], t1, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [16], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role22], t2, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [2], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role22], t5, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [2], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role24], t4, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [10], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role23], t2, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [25], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role8], t5, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [5], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role4], t3, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [16], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role22], t5, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [2], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role6], t5, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [7], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role24], t1, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [10], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t3-t3], [role6], t2, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 3, 3, [7], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role6], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [7], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t3-t3], [role9], t3, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 3, 3, [33], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t1-t1], [role12], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 1, 1, [1], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role21], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [26], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t1-t1], [role24], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 1, 1, [10], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t1-t1], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 1, 1, [25, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t2-t2], TRUE, t1, role20>
  trans = await instance.suAddCDRule.sendTransaction(0, 2, 2, [], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t1-t1], [role24], t2, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 1, 1, [10], [2], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t5-t5], [role3], t3, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 5, 5, [19], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t1-t1], TRUE, t2, role14>
  trans = await instance.suAddCDRule.sendTransaction(7, 1, 1, [], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role19, [t5-t5], TRUE, t2, role20>
  trans = await instance.suAddCDRule.sendTransaction(6, 5, 5, [], [2], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role12, [t2-t2], TRUE, t2, role33>
  trans = await instance.suAddCDRule.sendTransaction(1, 2, 2, [], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role7, [t3-t3], TRUE, t1, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 3, 3, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t5-t5], [role7], t5, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 5, 5, [8], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t4-t4], [role8], t1, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [5], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t2-t2], [role22], t4, role11>
  trans = await instance.suAddCDRule.sendTransaction(5, 2, 2, [2], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t2-t2], [role16], t1, role26>
  trans = await instance.suAddCDRule.sendTransaction(5, 2, 2, [22], [1], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t5-t5], [role21], t4, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 5, 5, [26], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t5-t5], [role23, NOT role8, NOT role22, NOT role24], t3, role6>
  trans = await instance.suAddCDRule.sendTransaction(10, 5, 5, [25, -1 * 5, -1 * 2, -1 * 10], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};