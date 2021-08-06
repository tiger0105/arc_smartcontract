var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv05.mohawkT');
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
  trans = await instance.suAddTimeSlot.sendTransaction(11, 12, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(12, 13, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(13, 14, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(14, 15, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(15, 16, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(16, 17, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(17, 18, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(18, 19, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(19, 20, { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t11, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [11], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t13, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [13], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [7], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t18, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [18], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t16-t16], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t19, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [19], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t15-t15], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [], [9], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t16-t16], TRUE, t15, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [], [15], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t20-t20], TRUE, t16, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [], [16], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t16, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t18, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [18], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t8, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [8], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t12, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [12], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t14, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [14], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t6, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [6], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t14-t14], TRUE, t1, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t15, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [15], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [9], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [17], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t5-t5], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t15, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t10, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t4-t4], [NOT role14], t16, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [-1 * 23], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t5-t5], [NOT role32], t3, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [-1 * 14], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t15-t15], [NOT role32], t16, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [-1 * 14], [16], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t12-t12], [NOT role32], t5, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [-1 * 14], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t13-t13], [NOT role32], t11, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [-1 * 14], [11], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t14-t14], [NOT role32], t4, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [-1 * 14], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role6, role8], t1, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [7, 5], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role14], t12, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role14], t9, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [23], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role14], t5, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [23], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role14], t19, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [23], [19], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role17], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [21], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role32], t15, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [14], [15], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role32], t16, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [14], [16], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role29], t14, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [28], [14], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role14], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [23], [7], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role14], t16, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [23], [16], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role14], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [23], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role14], t19, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [23], [19], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role14], t16, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23], [16], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role14], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [23], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role14], t20, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [23], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role14], t13, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [23], [13], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role32], t2, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [14], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role32], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [14], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role32], t12, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [14], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role22], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [2], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role22], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [2], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role22], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [2], [11], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role7], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [8], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role28], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [29], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role28], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [29], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role4], t9, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [16], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role6], t15, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [7], [15], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role6], t9, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [7], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role6], t16, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [7], [16], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role6], t20, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [7], [20], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role6], t14, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [7], [14], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role24], t2, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [10], [2], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role23], t5, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [25], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role12], t12, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [1], [12], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role16], t13, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [22], [13], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role16], t12, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [22], [12], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role16], t8, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [22], [8], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role2], t12, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [4], [12], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role12], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [1], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role21], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [26], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role21], t7, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [26], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role21], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [26], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role24], t10, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [10], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role24], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [10], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role24], t13, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [10], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role24], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [10], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role24], t17, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [10], [17], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role24], t18, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [10], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role23], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [25], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role23], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [25], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role28], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [29], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role28], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [29], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role28], t7, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [29], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role28], t11, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [29], [11], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t20-t20], [role22, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [2, -1 * 9], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t9-t9], [role22, NOT role15], t16, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [2, -1 * 9], [16], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t12-t12], [role22, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [2, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role24, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [10, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role24, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [10, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role7, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [8, -1 * 9], [17], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t13-t13], [role7, NOT role15], t18, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [8, -1 * 9], [18], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role28, NOT role15], t12, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [29, -1 * 9], [12], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t18-t18], [role28, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [29, -1 * 9], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t13-t13], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t13-t13], [role23, NOT role6, NOT role8, NOT role22], t13, role24>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [25, -1 * 7, -1 * 5, -1 * 2], [13], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t15-t15], [role23, NOT role6, NOT role8, NOT role22], t18, role24>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [25, -1 * 7, -1 * 5, -1 * 2], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role23, NOT role8, NOT role22, NOT role24], t11, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [25, -1 * 5, -1 * 2, -1 * 10], [11], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t9, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t7, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t20, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [20], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t14, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [14], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t16, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [16], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t19, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [19], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t16, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [16], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t14, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [14], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t14, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [14], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t12, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [17], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t13, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [13], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t15, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [15], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t16, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t11, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [11], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t12, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t14, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [14], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t17, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [17], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t8, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t12, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t18, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t13, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t17, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t9, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t14, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t19, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t10, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t20, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [20], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t11, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [11], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t17, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [17], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t7, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t13, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [13], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t15, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [15], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t12, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [12], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t10, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t13, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [13], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t16, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [16], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t9, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t16, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t18, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [18], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t19, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [19], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t17, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [17], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t20, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t19, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t1, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t12, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [12], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t2-t2], [NOT role14], t20, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [-1 * 23], [20], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t3-t3], [NOT role14], t6, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [-1 * 23], [6], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t7-t7], [NOT role14], t14, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [-1 * 23], [14], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t9-t9], [NOT role14], t7, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [-1 * 23], [7], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t11-t11], [NOT role14], t17, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [-1 * 23], [17], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t19-t19], [NOT role14], t15, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [-1 * 23], [15], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t10-t10], [NOT role14], t18, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 10, 10, [-1 * 23], [18], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t20-t20], [NOT role14], t8, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [-1 * 23], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t3-t3], [NOT role32], t13, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 3, 3, [-1 * 14], [13], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t17-t17], [NOT role32], t2, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 17, 17, [-1 * 14], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t11-t11], [NOT role32], t12, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 11, 11, [-1 * 14], [12], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t6-t6], [NOT role32], t20, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 6, 6, [-1 * 14], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t18-t18], [NOT role32], t6, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 18, 18, [-1 * 14], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t16-t16], [NOT role32], t7, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 16, 16, [-1 * 14], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t19-t19], [NOT role32], t8, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 19, 19, [-1 * 14], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t20-t20], [NOT role32], t14, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 20, 20, [-1 * 14], [14], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t6-t6], [role6, role8], t8, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 6, 6, [7, 5], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role6, role8], t7, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [7, 5], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t14-t14], [role6, role8], t15, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 14, 14, [7, 5], [15], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t16, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [16], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role14], t6, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [23], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role14], t11, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [23], [11], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t18, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [23], [18], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role14], t7, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [23], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role14], t10, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [23], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role14], t17, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [23], [17], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role14], t1, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [23], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t2, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [23], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role14], t8, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [23], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role14], t15, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [23], [15], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role17], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [21], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role17], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [21], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role17], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [21], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role17], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [21], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role14], t15, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [23], [15], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role14], t17, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [23], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role32], t20, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [14], [20], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role29], t11, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [28], [11], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role29], t12, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [28], [12], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role14], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [23], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role14], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [23], [18], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t16-t16], [role14], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 16, 16, [23], [4], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role14], t15, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [23], [15], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role14], t17, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [23], [17], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role32], t15, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [14], [15], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t16, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [14], [16], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t20-t20], [role32], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 20, 20, [14], [4], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t17, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [14], [17], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role32], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [14], [10], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [14], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role32], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [14], [5], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t12-t12], [role14], t19, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [23], [19], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t13-t13], [role14], t13, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [23], [13], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t17-t17], [role14], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [23], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t14-t14], [role14], t17, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [23], [17], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t7-t7], [role14], t11, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [23], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t8-t8], [role14], t12, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [23], [12], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t18-t18], [role14], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [23], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t11-t11], [role32], t17, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [14], [17], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t12-t12], [role32], t13, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [14], [13], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role14], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [23], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role14], t10, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [23], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role14], t11, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [23], [11], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role14], t18, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [23], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role32], t4, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [14], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [14], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role32], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [14], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role32], t10, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [14], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role32], t16, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [14], [16], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t20-t20], [role32], t11, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 20, 20, [14], [11], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role2], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [4], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role22], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [2], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role22], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [2], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role24], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [10], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role24], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [10], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role24], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [10], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role7], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 15, 15, [8], [9], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role7], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [8], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role7], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [8], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role7], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [8], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role7], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [8], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role7], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [8], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role28], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [29], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role28], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [29], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role28], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [29], [9], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t12-t12], [role28], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 12, 12, [29], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role28], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [29], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role28], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [29], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role28], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [29], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role28], t20, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [29], [20], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t13-t13], [role28], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 13, 13, [29], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role28], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [29], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role28], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 15, 15, [29], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t4-t4], [role28], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [29], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role4], t3, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [16], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role4], t16, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [16], [16], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role4], t17, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [16], [17], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role4], t5, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [16], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role4], t12, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [16], [12], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t18, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [16], [18], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t6, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [16], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role4], t19, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16], [19], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t1, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role22], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [2], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role22], t5, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [2], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role22], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [2], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t12, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [2], [12], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role22], t6, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [2], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role22], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [2], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role22], t18, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [2], [18], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t12, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [26], [12], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role21], t6, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [26], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role6], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [7], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role6], t19, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [7], [19], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role6], t10, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [7], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t3, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role6], t13, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [7], [13], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [7], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role6], t1, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [7], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role24], t14, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [10], [14], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role24], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [10], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role24], t13, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [10], [13], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role24], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [10], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role23], t18, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [25], [18], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role23], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [25], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role23], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [25], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t4, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25], [4], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role23], t6, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [25], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role23], t17, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [25], [17], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role23], t9, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [25], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role8], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [5], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role8], t19, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [5], [19], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role8], t1, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [5], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role12], t4, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [1], [4], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t6, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [1], [6], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role12], t5, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [1], [5], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t2, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [1], [2], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role12], t13, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [1], [13], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role12], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [1], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role12], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [1], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role12], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [1], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role16], t6, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [22], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role16], t9, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [22], [9], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role16], t5, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [22], [5], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role16], t14, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [22], [14], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role16], t7, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [22], [7], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role16], t18, role26>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [22], [18], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t10-t10], [role2], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [4], [1], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t20-t20], [role2], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [4], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t14-t14], [role2], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [4], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t6-t6], [role2], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [4], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role2], t13, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [4], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t7-t7], [role9], t6, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [33], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t7-t7], [role12], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [1], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t19-t19], [role12], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [1], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role12], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [1], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role12], t14, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [1], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role12], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [1], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t17-t17], [role12], t18, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [1], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role12], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [1], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t6-t6], [role12], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [1], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t11-t11], [role22], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [2], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t15-t15], [role22], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [2], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role22], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [2], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t18-t18], [role21], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [26], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t17-t17], [role21], t18, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [26], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role21], t14, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [26], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t10-t10], [role21], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [26], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t20-t20], [role21], t17, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [26], [17], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t6-t6], [role24], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [10], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t7-t7], [role24], t14, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [10], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t11-t11], [role24], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [10], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t10-t10], [role24], t7, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [10], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t9-t9], [role24], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [10], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t12-t12], [role24], t19, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [10], [19], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role24], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [10], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t20-t20], [role24], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [10], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t12-t12], [role23], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [25], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role23], t17, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [25], [17], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t8-t8], [role23], t14, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [25], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t18-t18], [role23], t7, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [25], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role23], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [25], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t13-t13], [role23], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [25], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t20-t20], [role23], t12, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [25], [12], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t11-t11], [role23], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [25], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role28], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [29], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role28], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [29], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t8-t8], [role28], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [29], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role28], t18, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [29], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role28], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [29], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t19-t19], [role28], t19, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [29], [19], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t13-t13], [role28], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [29], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role22, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 3, 3, [2, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role22, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [2, -1 * 9], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role22, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [2, -1 * 9], [20], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t19-t19], [role22, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 19, 19, [2, -1 * 9], [17], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role22, NOT role15], t18, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [2, -1 * 9], [18], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role22, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [2, -1 * 9], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t13-t13], [role22, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 13, 13, [2, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t19-t19], [role24, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 19, 19, [10, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t14-t14], [role24, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 14, 14, [10, -1 * 9], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role24, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [10, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role24, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [10, -1 * 9], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role24, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [10, -1 * 9], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t14-t14], [role7, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 14, 14, [8, -1 * 9], [20], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role7, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [8, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t15-t15], [role7, NOT role15], t19, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 15, 15, [8, -1 * 9], [19], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role7, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [8, -1 * 9], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role7, NOT role15], t11, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 4, 4, [8, -1 * 9], [11], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t11-t11], [role7, NOT role15], t14, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [8, -1 * 9], [14], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t16-t16], [role7, NOT role15], t13, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 16, 16, [8, -1 * 9], [13], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role7, NOT role15], t15, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [8, -1 * 9], [15], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t20-t20], [role7, NOT role15], t12, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 20, 20, [8, -1 * 9], [12], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role28, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 3, 3, [29, -1 * 9], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t19-t19], [role28, NOT role15], t15, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 19, 19, [29, -1 * 9], [15], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role28, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 4, 4, [29, -1 * 9], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t20-t20], [role28, NOT role15], t14, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 20, 20, [29, -1 * 9], [14], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role28, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 9, 9, [29, -1 * 9], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role28, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [29, -1 * 9], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role28, NOT role15], t18, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [29, -1 * 9], [18], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t12-t12], [role28, NOT role15], t16, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 12, 12, [29, -1 * 9], [16], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role28, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [29, -1 * 9], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t17-t17], [role28, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 17, 17, [29, -1 * 9], [17], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t6-t6], [role28, NOT role15], t19, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [29, -1 * 9], [19], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role28, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(8, 7, 7, [29, -1 * 9], [20], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t16-t16], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t14, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [14], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t11, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [11], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [15], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t11-t11], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t16, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [16], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t11-t11], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t3-t3], [role23, NOT role6, NOT role8, NOT role22], t16, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [25, -1 * 7, -1 * 5, -1 * 2], [16], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t14-t14], [role23, NOT role6, NOT role8, NOT role22], t4, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [25, -1 * 7, -1 * 5, -1 * 2], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t19-t19], [role23, NOT role8, NOT role22, NOT role24], t6, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 19, 19, [25, -1 * 5, -1 * 2, -1 * 10], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t10-t10], [role23, NOT role8, NOT role22, NOT role24], t13, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 10, 10, [25, -1 * 5, -1 * 2, -1 * 10], [13], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 2, 2, [25, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t16, role6>
  trans = await instance.suAddCARule.sendTransaction(10, 3, 3, [25, -1 * 5, -1 * 2, -1 * 10], [16], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t13-t13], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 13, 13, [25, -1 * 7, -1 * 2, -1 * 10], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t12-t12], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 12, 12, [25, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t10-t10], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [25, -1 * 7, -1 * 2, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [25, -1 * 7, -1 * 2, -1 * 10], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t8-t8], [role23, NOT role6, NOT role22, NOT role24], t12, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [25, -1 * 7, -1 * 2, -1 * 10], [12], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t18-t18], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [25, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t17, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [25, -1 * 7, -1 * 2, -1 * 10], [17], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t2-t2], TRUE, t1, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 2, 2, [], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t15-t15], TRUE, t2, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 15, 15, [], [2], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t9-t9], TRUE, t16, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 9, 9, [], [16], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t13-t13], TRUE, t20, role33>
  trans = await instance.suAddCRRule.sendTransaction(0, 13, 13, [], [20], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t10, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t3, role23>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [3], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t15-t15], TRUE, t19, role23>
  trans = await instance.suAddCRRule.sendTransaction(0, 15, 15, [], [19], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t2, role23>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t19-t19], TRUE, t16, role23>
  trans = await instance.suAddCRRule.sendTransaction(0, 19, 19, [], [16], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t13-t13], TRUE, t10, role23>
  trans = await instance.suAddCRRule.sendTransaction(0, 13, 13, [], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t14-t14], TRUE, t8, role13>
  trans = await instance.suAddCRRule.sendTransaction(0, 14, 14, [], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t1, role24>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t11-t11], TRUE, t7, role24>
  trans = await instance.suAddCRRule.sendTransaction(0, 11, 11, [], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t12-t12], TRUE, t4, role24>
  trans = await instance.suAddCRRule.sendTransaction(0, 12, 12, [], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t16, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [16], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t7, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t18-t18], TRUE, t13, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 18, 18, [], [13], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t19-t19], TRUE, t16, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 19, 19, [], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t9, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t10, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t1, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t20-t20], TRUE, t4, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 20, 20, [], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t17, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [17], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t19-t19], TRUE, t1, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 19, 19, [], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t6-t6], TRUE, t3, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 6, 6, [], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t7, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t11, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t2, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t13, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t12, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [12], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t8-t8], TRUE, t13, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 8, 8, [], [13], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t19-t19], TRUE, t20, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 19, 19, [], [20], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t11-t11], TRUE, t5, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 11, 11, [], [5], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t13-t13], TRUE, t6, role4>
  trans = await instance.suAddCRRule.sendTransaction(2, 13, 13, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t18-t18], TRUE, t15, role23>
  trans = await instance.suAddCRRule.sendTransaction(2, 18, 18, [], [15], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t5, role23>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t7-t7], TRUE, t4, role23>
  trans = await instance.suAddCRRule.sendTransaction(2, 7, 7, [], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t6, role23>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [6], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t11, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 4, 4, [], [11], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t10-t10], TRUE, t7, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 10, 10, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t13-t13], TRUE, t14, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 13, 13, [], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t13, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t16-t16], TRUE, t17, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 16, 16, [], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t3, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 5, 5, [], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t18-t18], TRUE, t18, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 18, 18, [], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t9, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t15-t15], TRUE, t10, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 15, 15, [], [10], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t5-t5], TRUE, t17, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 5, 5, [], [17], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t18-t18], TRUE, t18, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 18, 18, [], [18], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t2-t2], TRUE, t20, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 2, 2, [], [20], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t1-t1], TRUE, t4, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 1, 1, [], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t6-t6], TRUE, t7, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 6, 6, [], [7], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t8, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t12-t12], TRUE, t11, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 12, 12, [], [11], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t5, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t14-t14], TRUE, t18, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 14, 14, [], [18], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t10-t10], TRUE, t15, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 10, 10, [], [15], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t13-t13], TRUE, t4, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 13, 13, [], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t15-t15], TRUE, t19, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 15, 15, [], [19], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t11-t11], TRUE, t6, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 11, 11, [], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t20-t20], TRUE, t9, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 20, 20, [], [9], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t19-t19], TRUE, t4, role18>
  trans = await instance.suAddCERule.sendTransaction(0, 19, 19, [], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t14-t14], TRUE, t8, role33>
  trans = await instance.suAddCERule.sendTransaction(0, 14, 14, [], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t10-t10], TRUE, t18, role2>
  trans = await instance.suAddCERule.sendTransaction(0, 10, 10, [], [18], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t3-t3], TRUE, t3, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 3, 3, [], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t4-t4], TRUE, t4, role19>
  trans = await instance.suAddCERule.sendTransaction(0, 4, 4, [], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t8-t8], TRUE, t13, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 8, 8, [], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t12-t12], TRUE, t18, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 12, 12, [], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t13-t13], TRUE, t20, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 13, 13, [], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t11-t11], TRUE, t18, role28>
  trans = await instance.suAddCERule.sendTransaction(0, 11, 11, [], [18], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t6-t6], TRUE, t9, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t2-t2], TRUE, t1, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 2, 2, [], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t4-t4], TRUE, t14, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 4, 4, [], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t9-t9], TRUE, t17, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 9, 9, [], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t13-t13], TRUE, t7, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 13, 13, [], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t11-t11], TRUE, t16, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 11, 11, [], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t3, role18>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t3-t3], TRUE, t17, role14>
  trans = await instance.suAddCERule.sendTransaction(7, 3, 3, [], [17], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t9-t9], TRUE, t18, role14>
  trans = await instance.suAddCERule.sendTransaction(7, 9, 9, [], [18], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t8-t8], TRUE, t15, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 8, 8, [], [15], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t18-t18], TRUE, t14, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 18, 18, [], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t10-t10], TRUE, t10, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 10, 10, [], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t10-t10], TRUE, t7, role5>
  trans = await instance.suAddCERule.sendTransaction(7, 10, 10, [], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t4-t4], TRUE, t17, role5>
  trans = await instance.suAddCERule.sendTransaction(7, 4, 4, [], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t2, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 5, 5, [], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t19-t19], TRUE, t6, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 19, 19, [], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t20-t20], TRUE, t11, role19>
  trans = await instance.suAddCERule.sendTransaction(5, 20, 20, [], [11], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t20-t20], TRUE, t7, role10>
  trans = await instance.suAddCERule.sendTransaction(5, 20, 20, [], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t8-t8], TRUE, t6, role26>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t20-t20], TRUE, t16, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [], [16], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t12-t12], TRUE, t6, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 12, 12, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t20-t20], TRUE, t13, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [], [13], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t8-t8], TRUE, t16, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t16-t16], TRUE, t12, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 16, 16, [], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t19-t19], TRUE, t1, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 19, 19, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t9-t9], TRUE, t8, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 9, 9, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t14-t14], TRUE, t16, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 14, 14, [], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t3-t3], [role23, NOT role6, NOT role8, NOT role22], t16, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 3, 3, [25, -1 * 7, -1 * 5, -1 * 2], [16], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 4, 4, [25, -1 * 7, -1 * 2, -1 * 10], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t8-t8], [role23, NOT role6, NOT role22, NOT role24], t12, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 8, 8, [25, -1 * 7, -1 * 2, -1 * 10], [12], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t18-t18], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 18, 18, [25, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t12-t12], TRUE, t5, role18>
  trans = await instance.suAddCDRule.sendTransaction(0, 12, 12, [], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t18-t18], TRUE, t7, role18>
  trans = await instance.suAddCDRule.sendTransaction(0, 18, 18, [], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t15-t15], [role23, NOT role6, NOT role8, NOT role22], t18, role24>
  trans = await instance.suAddCDRule.sendTransaction(0, 15, 15, [25, -1 * 7, -1 * 5, -1 * 2], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t19-t19], TRUE, t16, role32>
  trans = await instance.suAddCDRule.sendTransaction(7, 19, 19, [], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t14-t14], TRUE, t17, role30>
  trans = await instance.suAddCDRule.sendTransaction(5, 14, 14, [], [17], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t11-t11], TRUE, t11, role17>
  trans = await instance.suAddCDRule.sendTransaction(5, 11, 11, [], [11], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t10-t10], TRUE, t18, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 10, 10, [], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t6-t6], TRUE, t12, role5>
  trans = await instance.suAddCDRule.sendTransaction(7, 6, 6, [], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t5-t5], TRUE, t1, role5>
  trans = await instance.suAddCDRule.sendTransaction(7, 5, 5, [], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t9-t9], TRUE, t18, role19>
  trans = await instance.suAddCDRule.sendTransaction(5, 9, 9, [], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t7-t7], TRUE, t10, role11>
  trans = await instance.suAddCDRule.sendTransaction(5, 7, 7, [], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t20-t20], TRUE, t10, role25>
  trans = await instance.suAddCDRule.sendTransaction(5, 20, 20, [], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t6-t6], TRUE, t14, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 6, 6, [], [14], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t4-t4], TRUE, t10, role21>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t15-t15], TRUE, t3, role21>
  trans = await instance.suAddCDRule.sendTransaction(2, 15, 15, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t8-t8], TRUE, t14, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 8, 8, [], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.suAddCDRule.sendTransaction(10, 2, 2, [25, -1 * 5, -1 * 2, -1 * 10], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t16, role6>
  trans = await instance.suAddCDRule.sendTransaction(10, 3, 3, [25, -1 * 5, -1 * 2, -1 * 10], [16], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};