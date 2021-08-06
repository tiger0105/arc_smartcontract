var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv03.mohawkT');
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
  trans = await instance.suAddNewRole.sendTransaction('role33', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role11', { from: su });
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
  trans = await instance.suAddTimeSlot.sendTransaction(5, 6, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(6, 7, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(7, 8, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(8, 9, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(9, 10, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(10, 11, { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t6, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t5-t5], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t10-t10], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [7], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [6], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t9, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t9, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t10-t10], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [], [4], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t8, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t2-t2], [NOT role14], t1, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [-1 * 23], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t5-t5], [NOT role14], t4, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [-1 * 23], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role6, role8], t7, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [7, 5], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role6, role8], t2, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [7, 5], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role14], t3, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [23], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role14], t2, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [23], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role29], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [27], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role29], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [27], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role29], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [27], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role14], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [23], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role32], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [14], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role32], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [14], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role32], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [14], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role32], t7, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [14], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role14], t1, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [23], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role24], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [10], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role3], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [19], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role4], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [16], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role22], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [2], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role6], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [7], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role24], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [10], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role24], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [10], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role24], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [10], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role12], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [1], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role12], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [1], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role3], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [19], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role3], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [19], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role4], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [16], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role21], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [25], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role21], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [25], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role6], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [7], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [7], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role6], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [7], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role8], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [5], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role21], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [25], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role24], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [10], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role23], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [24], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role23], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [24], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role22, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [2, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role24, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [10, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t9-t9], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [24, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t9-t9], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [24, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [24, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role23, NOT role8, NOT role22, NOT role24], t6, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [24, -1 * 5, -1 * 2, -1 * 10], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t9, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [24, -1 * 7, -1 * 2, -1 * 10], [9], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role23, NOT role6, NOT role22, NOT role24], t1, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [24, -1 * 7, -1 * 2, -1 * 10], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [24, -1 * 7, -1 * 2, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t9, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t7, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t10, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [4], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [9], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t6, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [6], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t10, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t6, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [2], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [3], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t9, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [9], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t1, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [1], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [7], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [6], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t10, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [10], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [8], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [5], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [9], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [6], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t3, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t2, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t1, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t6-t6], [NOT role14], t2, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [-1 * 23], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t7-t7], [NOT role14], t3, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [-1 * 23], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t1-t1], [NOT role32], t2, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 1, 1, [-1 * 14], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t9-t9], [NOT role32], t3, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 9, 9, [-1 * 14], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t6-t6], [NOT role32], t9, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 6, 6, [-1 * 14], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t2-t2], [NOT role32], t4, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 2, 2, [-1 * 14], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t7-t7], [NOT role32], t5, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 7, 7, [-1 * 14], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t8-t8], [NOT role32], t1, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 8, 8, [-1 * 14], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t4-t4], [NOT role32], t6, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 4, 4, [-1 * 14], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t8-t8], [role6, role8], t9, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 8, 8, [7, 5], [9], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role6, role8], t10, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [7, 5], [10], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t10-t10], [role6, role8], t8, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 10, 10, [7, 5], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t7-t7], [role6, role8], t4, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 7, 7, [7, 5], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t9-t9], [role6, role8], t1, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 9, 9, [7, 5], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t3-t3], [role6, role8], t3, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 3, 3, [7, 5], [3], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role7], t9, role26>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [8], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t1, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [23], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t4, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [23], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t10, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [23], [10], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role14], t7, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t4, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [23], [4], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role17], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [21], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role17], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [21], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role17], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [21], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t9, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [23], [9], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role32], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [14], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role32], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [14], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role32], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [14], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role32], t6, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [14], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role32], t3, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [14], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role32], t5, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [14], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role29], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [27], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role29], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [27], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role29], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [27], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role29], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [27], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role29], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [27], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role29], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [27], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role29], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [27], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role14], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [23], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role14], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [23], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role14], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [23], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role14], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [23], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role14], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [23], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role14], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [23], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role14], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [23], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role14], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [23], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role14], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [23], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [14], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role32], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [14], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [14], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role32], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [14], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [14], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role32], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [14], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t6-t6], [role14], t7, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [23], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t9-t9], [role14], t2, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [23], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role14], t9, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [23], [9], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t7-t7], [role14], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [23], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t5-t5], [role14], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [23], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t8-t8], [role14], t5, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [23], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t10-t10], [role14], t10, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [23], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t2-t2], [role14], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [23], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t3-t3], [role14], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [23], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t4-t4], [role14], t6, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [23], [6], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role14], t8, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [23], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role14], t7, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [23], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role32], t6, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [14], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t2, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [14], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role2], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [4], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t3-t3], [role2], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [4], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role2], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [4], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role2], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [4], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role2], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [4], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role2], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [4], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role2], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [4], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role2], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [4], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role22], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [2], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role22], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [2], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t9-t9], [role22], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [2], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role24], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [10], [9], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role24], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [10], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role24], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [10], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role7], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [8], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role7], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [8], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role7], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [8], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role28], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [28], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [19], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [19], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [19], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [19], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [2], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role22], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [2], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role22], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [2], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [25], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role21], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [25], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role21], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [25], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [25], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role21], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [25], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role6], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [7], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role24], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [10], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role24], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [10], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [10], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role24], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [10], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [10], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role23], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [24], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role23], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [24], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [24], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role8], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [5], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role8], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [5], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role8], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [5], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [1], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role12], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [1], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role12], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [1], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role12], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [1], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role12], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [1], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [19], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [19], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [19], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [19], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [19], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [19], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role3], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [19], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role4], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [16], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [2], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role21], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [25], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [25], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [25], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [25], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role21], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [25], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role21], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [25], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role21], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [25], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role21], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [25], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [10], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [24], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role8], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [5], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role8], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [5], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role8], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [5], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role8], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [5], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role21], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [25], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role21], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [25], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [25], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role24], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [10], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [10], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [10], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role24], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [10], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role24], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [10], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role24], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [10], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [10], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role23], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [24], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role23], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [24], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role23], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [24], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role23], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [24], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [24], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [24], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role22, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [2, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role24, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [10, -1 * 9], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role24, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 7, 7, [10, -1 * 9], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role24, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [10, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role24, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 4, 4, [10, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role24, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [10, -1 * 9], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role24, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [10, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role24, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [10, -1 * 9], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role24, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [10, -1 * 9], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role24, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 3, 3, [10, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role7, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [8, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role28, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [28, -1 * 9], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [24, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [24, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [24, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t7-t7], [role23, NOT role6, NOT role8, NOT role22], t2, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [24, -1 * 7, -1 * 5, -1 * 2], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t9-t9], [role23, NOT role6, NOT role8, NOT role22], t4, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [24, -1 * 7, -1 * 5, -1 * 2], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t2-t2], [role23, NOT role6, NOT role8, NOT role22], t5, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [24, -1 * 7, -1 * 5, -1 * 2], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t10-t10], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 10, 10, [24, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t6-t6], [role23, NOT role8, NOT role22, NOT role24], t10, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 6, 6, [24, -1 * 5, -1 * 2, -1 * 10], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t5-t5], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 5, 5, [24, -1 * 5, -1 * 2, -1 * 10], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t1, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 3, 3, [24, -1 * 5, -1 * 2, -1 * 10], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t9-t9], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [24, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [24, -1 * 7, -1 * 2, -1 * 10], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t3-t3], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [24, -1 * 7, -1 * 2, -1 * 10], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t7-t7], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [24, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t9, role26>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [24, -1 * 7, -1 * 2, -1 * 10], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t2-t2], TRUE, t9, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 2, 2, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t10-t10], TRUE, t1, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 10, 10, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t3, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t10-t10], TRUE, t1, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 10, 10, [], [1], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t2-t2], TRUE, t7, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 2, 2, [], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t2, role14>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t8, role20>
  trans = await instance.suAddCRRule.sendTransaction(0, 3, 3, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t10-t10], TRUE, t2, role20>
  trans = await instance.suAddCRRule.sendTransaction(0, 10, 10, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t9, role20>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [9], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t5, role33>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t7, role15>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t3, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t4, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t6-t6], TRUE, t1, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 6, 6, [], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t6, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t10, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t1, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 3, 3, [], [1], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t1, role26>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t9, role26>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t7, role3>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t4, role4>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [4], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t6, role4>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t2-t2], TRUE, t4, role24>
  trans = await instance.suAddCRRule.sendTransaction(0, 2, 2, [], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t8, role24>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t3, role6>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t9-t9], TRUE, t6, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 9, 9, [], [6], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t4, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 6, 6, [], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t5, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t1, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t7, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [7], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t3, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t10-t10], TRUE, t8, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 10, 10, [], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t7, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t3, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t6, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t8, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t2, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t10, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t2, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t4, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [4], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t7, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t9, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [9], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t3, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t4, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t9, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 6, 6, [], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t4, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t7, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 1, 1, [], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t9-t9], TRUE, t1, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 9, 9, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t6, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t5, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t8, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t9-t9], TRUE, t7, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 9, 9, [], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t2-t2], TRUE, t3, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 2, 2, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t8-t8], TRUE, t5, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 8, 8, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t7-t7], TRUE, t6, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 7, 7, [], [6], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t6-t6], TRUE, t1, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 6, 6, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t1-t1], TRUE, t4, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 1, 1, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t5-t5], TRUE, t10, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 5, 5, [], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t5-t5], TRUE, t2, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 5, 5, [], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t1-t1], TRUE, t1, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 1, 1, [], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t2-t2], TRUE, t6, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 2, 2, [], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t6-t6], TRUE, t7, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 6, 6, [], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t4, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 1, 1, [], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t9, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [9], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t3, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t6, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t5, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t10, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t8, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 6, 6, [], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t1, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t10-t10], TRUE, t8, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 10, 10, [], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t7-t7], TRUE, t9, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 7, 7, [], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t4-t4], TRUE, t10, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 4, 4, [], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t3-t3], TRUE, t1, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 3, 3, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t9, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t2, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t3, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t8, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t4, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t9, role26>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t10, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t1, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t5, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t6, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t2, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t5, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t6, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t3, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t2, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t7, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t9, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t10, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t5, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t9, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t3, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t2, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t5, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t4, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t9, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t7, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t1, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t8, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [8], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t9, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [9], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t10, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [10], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t6, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t2, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [2], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t2, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t6, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [6], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t3, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t4, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [4], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t8, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t1, role21>
  trans = await instance.suAddCRRule.sendTransaction(2, 4, 4, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t7, role21>
  trans = await instance.suAddCRRule.sendTransaction(2, 5, 5, [], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t9-t9], TRUE, t2, role21>
  trans = await instance.suAddCRRule.sendTransaction(2, 9, 9, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t8-t8], TRUE, t3, role21>
  trans = await instance.suAddCRRule.sendTransaction(2, 8, 8, [], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t9, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t9-t9], TRUE, t10, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 9, 9, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t10-t10], TRUE, t2, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 10, 10, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t8, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t1, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 2, 2, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t3, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 1, 1, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t2, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [2], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t3, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 5, 5, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t1, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 4, 4, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t9-t9], TRUE, t8, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 9, 9, [], [8], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t5, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 2, 2, [], [5], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t10-t10], TRUE, t7, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 10, 10, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t10-t10], TRUE, t3, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 10, 10, [], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t7-t7], TRUE, t5, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 7, 7, [], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t9-t9], TRUE, t7, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 9, 9, [], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t1, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 1, 1, [], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t9, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 5, 5, [], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t8, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 1, 1, [], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t3, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t9, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [9], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t4, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t2, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t10, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 6, 6, [], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t5, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [XX1Tru] <role6, [t8-t8], TRUE, t3, role32>
  trans = await instance.suAddCERule.sendTransaction(7, 8, 8, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t3, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t8-t8], [role23, NOT role6, NOT role8, NOT role22], t6, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [24, -1 * 7, -1 * 5, -1 * 2], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t10-t10], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 10, 10, [24, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t5-t5], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 5, 5, [24, -1 * 5, -1 * 2, -1 * 10], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t9-t9], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 9, 9, [24, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 6, 6, [24, -1 * 7, -1 * 2, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t7-t7], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 7, 7, [24, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t10-t10], TRUE, t1, role30>
  trans = await instance.suAddCDRule.sendTransaction(0, 10, 10, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t9, role8>
  trans = await instance.suAddCDRule.sendTransaction(0, 5, 5, [24, -1 * 7, -1 * 2, -1 * 10], [9], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t2-t2], TRUE, t5, role32>
  trans = await instance.suAddCDRule.sendTransaction(7, 2, 2, [], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t10-t10], TRUE, t8, role32>
  trans = await instance.suAddCDRule.sendTransaction(7, 10, 10, [], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t9-t9], TRUE, t7, role30>
  trans = await instance.suAddCDRule.sendTransaction(5, 9, 9, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};