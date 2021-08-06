var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv04.mohawkT');
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
  trans = await instance.suAddNewRole.sendTransaction('role31', { from: su });
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
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t7, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t9, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [9], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t10-t10], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t10-t10], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [7], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t6-t6], [NOT role14], t8, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [-1 * 24], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t10-t10], [NOT role32], t6, role31>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [-1 * 14], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role14, role32], t4, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [24, 14], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role14], t10, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [24], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role14], t2, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [24], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role17], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [22], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role14], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [24], [8], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role14], t6, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [24], [6], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role14], t9, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [24], [9], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role32], t5, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [14], [5], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role32], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [14], [4], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role29], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [29], [2], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role29], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [29], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role14], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [24], [1], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role32], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [14], [7], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role32], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [14], [5], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role32], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [14], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role14], t7, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [24], [7], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role32], t7, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [14], [7], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role14], t2, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [24], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role22], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [2], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role24], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [10], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role7], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [8], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role28], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [30], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role4], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [17], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role4], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [17], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role21], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [27], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role21], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [27], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role6], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [7], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [7], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role23], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [26], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role23], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [26], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role21], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [27], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role28], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [30], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role3], t9, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [20], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role4], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [17], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role24, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [10, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role7, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [8, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role7, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [8, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role28, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [30, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [17, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [26, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role23, NOT role8, NOT role22, NOT role24], t8, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [26, -1 * 5, -1 * 2, -1 * 10], [8], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [26, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [7], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [6], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t10, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [10], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [7], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [10], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [9], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t5, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t8, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t9, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t10, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t6, role31>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [9], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t3, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [5], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [10], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [6], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t8, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t2, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [2], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t8, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t9, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t10, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t7-t7], [NOT role14], t1, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [-1 * 24], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t4-t4], [NOT role32], t1, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 4, 4, [-1 * 14], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t3-t3], [NOT role32], t2, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 3, 3, [-1 * 14], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t5-t5], [NOT role32], t5, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 5, 5, [-1 * 14], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t6-t6], [NOT role32], t10, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 6, 6, [-1 * 14], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t10-t10], [role14, role32], t2, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 10, 10, [24, 14], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role14, role32], t1, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [24, 14], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t6-t6], [role14, role32], t3, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 6, 6, [24, 14], [3], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t3-t3], [role14, role32], t8, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 3, 3, [24, 14], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t3, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [24], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t9, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [24], [9], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t9, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [24], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t1, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [24], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role17], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [22], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role17], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [22], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role17], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [22], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role17], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [22], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role17], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [22], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [24], [4], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [24], [1], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role14], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [24], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role32], t9, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [14], [9], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role32], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [14], [8], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role32], t2, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [14], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role32], t10, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [14], [10], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role32], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [14], [1], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role32], t3, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [14], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role32], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [14], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role29], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [29], [5], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role29], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [29], [1], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role14], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [24], [9], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role14], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [24], [7], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role14], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [24], [10], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role14], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [24], [8], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role14], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [24], [3], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role14], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [24], [4], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role14], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [24], [5], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [14], [1], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role32], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [14], [8], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role32], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [14], [9], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role32], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [14], [2], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role32], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [14], [10], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [14], [3], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [14], [4], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t10-t10], [role14], t6, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [24], [6], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role14], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [24], [8], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t9-t9], [role32], t9, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [14], [9], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t5-t5], [role32], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [14], [8], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t8-t8], [role32], t10, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [14], [10], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t6-t6], [role32], t6, role31>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [14], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t7-t7], [role32], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [14], [1], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t10-t10], [role32], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [14], [4], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role32], t2, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [14], [2], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t2-t2], [role32], t5, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [14], [5], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t4-t4], [role32], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [14], [3], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role14], t1, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [24], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role14], t5, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [24], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role14], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [24], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [14], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role32], t7, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [14], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role2], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [4], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role2], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [4], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role2], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [4], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t3-t3], [role2], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [4], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role2], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [4], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t9-t9], [role2], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [4], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role2], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [4], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role2], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [4], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role2], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [4], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role22], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [2], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t9-t9], [role22], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [2], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role22], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [2], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t9-t9], [role24], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [10], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role24], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [10], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role28], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [30], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role28], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [30], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role28], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [30], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [20], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [17], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role4], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [17], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [17], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [17], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [17], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role22], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [2], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [2], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [2], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role22], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [2], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role22], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [2], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role21], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [27], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role21], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [27], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role6], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [7], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [10], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [26], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role23], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role23], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [26], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role8], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [5], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role8], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [5], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [27], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [10], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role23], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [26], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [26], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role23], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role28], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [30], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [20], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [20], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t10, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [20], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role3], t8, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [20], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [20], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [20], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t2, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [20], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role4], t3, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [17], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [17], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role4], t10, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [17], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role4], t2, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [17], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role4], t9, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [17], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [17], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [17], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t9, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role22, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 7, 7, [2, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role22, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [2, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role24, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [10, -1 * 9], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role24, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [10, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role24, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [10, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role24, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [10, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role7, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 3, 3, [8, -1 * 9], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role7, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [8, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role7, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [8, -1 * 9], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role7, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 7, 7, [8, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role7, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [8, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role7, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [8, -1 * 9], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role7, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [8, -1 * 9], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role7, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [8, -1 * 9], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role28, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [30, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role28, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [30, -1 * 9], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role28, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [30, -1 * 9], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [20, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [17, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [17, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [27, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t6-t6], [role23, NOT role8, NOT role22, NOT role24], t9, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 6, 6, [26, -1 * 5, -1 * 2, -1 * 10], [9], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t9-t9], [role23, NOT role8, NOT role22, NOT role24], t10, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 9, 9, [26, -1 * 5, -1 * 2, -1 * 10], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t5-t5], [role23, NOT role8, NOT role22, NOT role24], t1, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 5, 5, [26, -1 * 5, -1 * 2, -1 * 10], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 3, 3, [26, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t2, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 2, 2, [26, -1 * 5, -1 * 2, -1 * 10], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t7-t7], [role23, NOT role8, NOT role22, NOT role24], t3, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 7, 7, [26, -1 * 5, -1 * 2, -1 * 10], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t9-t9], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [26, -1 * 7, -1 * 2, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t8-t8], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [26, -1 * 7, -1 * 2, -1 * 10], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t10-t10], [role23, NOT role6, NOT role22, NOT role24], t4, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [26, -1 * 7, -1 * 2, -1 * 10], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [26, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [26, -1 * 7, -1 * 2, -1 * 10], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t2-t2], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [26, -1 * 7, -1 * 2, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t9, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 3, 3, [], [9], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t5, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t10, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t9-t9], TRUE, t8, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 9, 9, [], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t2, role18>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [2], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t4, role14>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t6, role33>
  trans = await instance.suAddCRRule.sendTransaction(0, 3, 3, [], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t10, role13>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t3, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 6, 6, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t2, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t7, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 2, 2, [], [7], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t8, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t9-t9], TRUE, t10, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 9, 9, [], [10], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t4, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t4, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t2, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t6, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t1, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t6, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t4, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t5, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t2, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t7, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t9, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [9], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t3, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t9, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t6, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t3, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t10-t10], TRUE, t6, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 10, 10, [], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t8-t8], TRUE, t2, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 8, 8, [], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t1, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t4, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 2, 2, [], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t8, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t5, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t9, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 5, 5, [], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t7-t7], TRUE, t6, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 7, 7, [], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t8-t8], TRUE, t7, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 8, 8, [], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t3-t3], TRUE, t6, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 3, 3, [], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t4-t4], TRUE, t7, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 4, 4, [], [7], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t6-t6], TRUE, t5, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 6, 6, [], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t9-t9], TRUE, t6, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 9, 9, [], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t1, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t7, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 1, 1, [], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t9-t9], TRUE, t8, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t2-t2], [role8], t1, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 2, 2, [5], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t5-t5], [role12], t1, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 5, 5, [1], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t6-t6], [role2], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 6, 6, [4], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t1-t1], [role3], t4, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [20], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t6-t6], [role6], t9, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 6, 6, [7], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t5-t5], [role7], t6, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 5, 5, [8], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t9-t9], [role21], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [27], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t9-t9], [role4], t6, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [17], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t1-t1], [role6], t6, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [7], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t1-t1], [role8], t8, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [5], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t9-t9], [role12], t10, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [1], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t3-t3], [role12], t9, role25>
  trans = await instance.suAddCERule.sendTransaction(0, 3, 3, [1], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t3-t3], [role3], t9, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 3, 3, [20], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t5-t5], [role7], t2, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 5, 5, [8], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t7-t7], [role8], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 7, 7, [5], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t9-t9], [role8], t10, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [5], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t10-t10], [role12], t2, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 10, 10, [1], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t7-t7], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCERule.sendTransaction(0, 7, 7, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t8-t8], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCERule.sendTransaction(0, 8, 8, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t8-t8], TRUE, t2, role32>
  trans = await instance.suAddCERule.sendTransaction(7, 8, 8, [], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t10-t10], TRUE, t2, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t3, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t8-t8], TRUE, t6, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t6-t6], TRUE, t1, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t6, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t4-t4], TRUE, t4, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t4-t4], TRUE, t10, role14>
  trans = await instance.suAddCERule.sendTransaction(7, 4, 4, [], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t5-t5], TRUE, t3, role20>
  trans = await instance.suAddCERule.sendTransaction(6, 5, 5, [], [3], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role4], t5, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [17], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role4], t10, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [17], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role4], t1, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [17], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role22], t3, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [2], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role22], t5, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [2], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role22], t4, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [2], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role6], t4, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [7], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role6], t8, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [7], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role12], t2, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [1], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role12], t9, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [1], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role3], t10, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [20], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role4], t4, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [17], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role4], t7, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [17], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role22], t6, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [2], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t7-t7], [role22], t10, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 7, 7, [2], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role21], t3, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [27], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t7-t7], [role21], t2, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 7, 7, [27], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role23], t5, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [26], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t9-t9], [role8], t10, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 9, 9, [5], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role12], t3, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [1], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role12], t4, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [1], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role2], t8, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [4], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role4], t8, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [17], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role6], t6, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [7], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role7], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [8], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role9], t8, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [33], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role9], t5, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [33], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role12], t7, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [1], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role22], t6, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [2], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role22], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [2], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role3], t7, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [20], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role3], t8, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [20], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role3], t5, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [20], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role3], t1, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [20], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role4], t2, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [17], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role4], t4, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [17], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role22], t2, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [2], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role21], t5, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [27], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role6], t3, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [7], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t9-t9], [role8], t3, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 9, 9, [5], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role8], t10, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [5], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role8], t1, role11>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [5], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role22], t7, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [2], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role22], t3, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [2], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role6], t2, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [7], [2], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role6], t8, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [7], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role24], t8, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [10], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role24], t10, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [10], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role23], t6, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [26], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role23], t1, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [26], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t3-t3], [role8], t9, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 3, 3, [5], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t6-t6], [role12], t4, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [1], [4], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t2-t2], [role12], t5, role25>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [1], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t2-t2], [role2], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [4], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t2-t2], [role3], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [20], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role4], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [17], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t10-t10], [role7], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 10, 10, [8], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t8-t8], [role8], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [5], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t8-t8], [role9], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [33], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t7-t7], [role12], t9, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 7, 7, [1], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t8-t8], [role12], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [1], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t5-t5], [role23], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 5, 5, [26], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role28], t8, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [30], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role8, [t5-t5], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t7-t7], [role23, NOT role8, NOT role22, NOT role24], t3, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 7, 7, [26, -1 * 5, -1 * 2, -1 * 10], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 4, 4, [26, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t2-t2], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 2, 2, [26, -1 * 7, -1 * 2, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t7-t7], TRUE, t5, role30>
  trans = await instance.suAddCDRule.sendTransaction(0, 7, 7, [], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t3-t3], TRUE, t9, role14>
  trans = await instance.suAddCDRule.sendTransaction(0, 3, 3, [], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t2-t2], [role6], t7, role16>
  trans = await instance.suAddCDRule.sendTransaction(0, 2, 2, [7], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t6-t6], [role22], t1, role19>
  trans = await instance.suAddCDRule.sendTransaction(0, 6, 6, [2], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t10-t10], [role24], t1, role19>
  trans = await instance.suAddCDRule.sendTransaction(0, 10, 10, [10], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t1-t1], [role9], t4, role10>
  trans = await instance.suAddCDRule.sendTransaction(0, 1, 1, [33], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t3-t3], [role12], t5, role10>
  trans = await instance.suAddCDRule.sendTransaction(0, 3, 3, [1], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t8-t8], [role22], t9, role10>
  trans = await instance.suAddCDRule.sendTransaction(0, 8, 8, [2], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t2-t2], [role21], t7, role11>
  trans = await instance.suAddCDRule.sendTransaction(0, 2, 2, [27], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t9-t9], [role6], t6, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 9, 9, [7], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t1-t1], [role24], t1, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 1, 1, [10], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t8-t8], [role23], t8, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 8, 8, [26], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t6-t6], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCDRule.sendTransaction(0, 6, 6, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t2-t2], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCDRule.sendTransaction(0, 2, 2, [26, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCDRule.sendTransaction(0, 6, 6, [26, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t2-t2], TRUE, t2, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 2, 2, [], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t8-t8], [role4], t8, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 8, 8, [17], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t5-t5], [role4], t2, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 5, 5, [17], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t7-t7], [role21], t8, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 7, 7, [27], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t1-t1], [role23], t8, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 1, 1, [26], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t2-t2], [role23], t3, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 2, 2, [26], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t3-t3], [role8], t6, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 3, 3, [5], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t4-t4], [role3], t6, role19>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [20], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t6-t6], [role21], t5, role19>
  trans = await instance.suAddCDRule.sendTransaction(5, 6, 6, [27], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t4-t4], [role8], t4, role19>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [5], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t8-t8], [role8], t8, role19>
  trans = await instance.suAddCDRule.sendTransaction(5, 8, 8, [5], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t8-t8], [role2], t5, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 8, 8, [4], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t9-t9], [role4], t2, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 9, 9, [17], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t1-t1], [role6], t7, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 1, 1, [7], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t8-t8], [role9], t7, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 8, 8, [33], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t4-t4], [role24], t9, role10>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [10], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t10-t10], [role3], t2, role11>
  trans = await instance.suAddCDRule.sendTransaction(5, 10, 10, [20], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t10-t10], [role8], t7, role11>
  trans = await instance.suAddCDRule.sendTransaction(5, 10, 10, [5], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t7-t7], [role3], t1, role25>
  trans = await instance.suAddCDRule.sendTransaction(5, 7, 7, [20], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t7-t7], [role22], t6, role25>
  trans = await instance.suAddCDRule.sendTransaction(5, 7, 7, [2], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t2-t2], [role21], t8, role25>
  trans = await instance.suAddCDRule.sendTransaction(5, 2, 2, [27], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t5-t5], [role12], t10, role25>
  trans = await instance.suAddCDRule.sendTransaction(5, 5, 5, [1], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t5-t5], [role2], t5, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 5, 5, [4], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t4-t4], [role6], t2, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [7], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t7-t7], [role6], t3, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 7, 7, [7], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t5-t5], [role8], t8, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 5, 5, [5], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t6-t6], [role9], t2, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 6, 6, [33], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t8-t8], [role22], t7, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 8, 8, [2], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t9-t9], [role23], t5, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 9, 9, [26], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role8, [t3-t3], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCDRule.sendTransaction(5, 3, 3, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role8, [t4-t4], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t9-t9], [role23, NOT role8, NOT role22, NOT role24], t10, role6>
  trans = await instance.suAddCDRule.sendTransaction(10, 9, 9, [26, -1 * 5, -1 * 2, -1 * 10], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t2, role6>
  trans = await instance.suAddCDRule.sendTransaction(10, 2, 2, [26, -1 * 5, -1 * 2, -1 * 10], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCDRule.sendTransaction(7, 1, 1, [26, -1 * 7, -1 * 2, -1 * 10], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};