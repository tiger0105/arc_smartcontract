var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv08.mohawkT');
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
  trans = await instance.suAddNewRole.sendTransaction('role32', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role10', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role4', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role30', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role3', { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddNewRole.sendTransaction('role19', { from: su });
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
  trans = await instance.suAddTimeSlot.sendTransaction(20, 21, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(21, 22, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(22, 23, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(23, 24, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(24, 25, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(25, 26, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(26, 27, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(27, 28, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(28, 29, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(29, 30, { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t25-t25], TRUE, t14, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [], [14], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t23, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [23], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t27-t27], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [6], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t11, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [11], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t1, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t15-t15], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t27, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t16, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [16], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t8-t8], TRUE, t26, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [], [26], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t22, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [22], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t21, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [21], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t26-t26], TRUE, t17, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [], [17], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t10-t10], TRUE, t23, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [], [23], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t27, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [27], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t9, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t20, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [20], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t22-t22], TRUE, t12, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t20-t20], TRUE, t26, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [], [26], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t14-t14], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t27, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t25-t25], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [], [17], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t23-t23], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [], [3], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t22-t22], TRUE, t17, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [], [17], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t23-t23], TRUE, t18, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [], [18], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t15, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [15], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t4-t4], [NOT role14], t15, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [-1 * 21], [15], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t16-t16], [NOT role14], t27, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [-1 * 21], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t21-t21], [NOT role14], t17, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [-1 * 21], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t28-t28], [NOT role14], t6, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [-1 * 21], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t5-t5], [NOT role14], t8, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [-1 * 21], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t2-t2], [NOT role29], t22, role29>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [-1 * 25], [22], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t12-t12], [NOT role32], t26, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [-1 * 12], [26], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t1-t1], [NOT role32], t13, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [-1 * 12], [13], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role14, role32], t20, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [21, 12], [20], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role14], t15, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [21], [15], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role14], t7, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [21], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role14], t17, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [21], [17], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role14], t29, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [21], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role14], t19, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [21], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role14], t3, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [21], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role17], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [19], [11], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role17], t26, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [19], [26], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role14], t24, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [21], [24], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role14], t26, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [21], [26], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role32], t29, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [12], [29], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role32], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [12], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role29], t27, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [25], [27], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [25], [22], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role29], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [25], [24], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role14], t17, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [21], [17], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role14], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [21], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role32], t11, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [12], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role23], t12, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [23], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role23], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [23], [29], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role23], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [23], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role23], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [23], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role23], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [23], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role8], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [5], [15], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role12], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [1], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role12], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [1], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role12], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [1], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role2], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [4], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role2], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [4], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role3], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [16], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role3], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [16], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role3], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [16], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role6], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [6], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role6], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [6], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role6], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [6], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role6], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [6], [16], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [6], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role6], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [6], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role6], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [6], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role7], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [7], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role7], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [7], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role7], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [7], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role7], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [7], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role8], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [5], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role9], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [30], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role12], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [1], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role12], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [1], [16], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role12], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [1], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role12], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [1], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role12], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [1], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role22], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [2], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role22], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [2], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role22], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [2], [25], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role22], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [2], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role21], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [24], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role21], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [24], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role21], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [24], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role24], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [9], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role24], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [9], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role23], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [23], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role23], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [23], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role23], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [23], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role23], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [23], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role23], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [23], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role23], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role23], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [23], [27], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role23], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [23], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role28], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [26], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role3], t11, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [16], [11], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role3], t24, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [16], [24], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role22], t19, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [2], [19], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role22], t18, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [2], [18], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role21], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [24], [6], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role21], t11, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [24], [11], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role6], t14, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [6], [14], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role24], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [9], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role24], t12, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [9], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role8], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [5], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role8], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [5], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role8], t12, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [5], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role8], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [5], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role4], t29, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [14], [29], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role4], t2, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [14], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role22], t24, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [2], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role21], t21, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [24], [21], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t14-t14], [role7, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [7, -1 * 8], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role7, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [7, -1 * 8], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t17-t17], [role7, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [7, -1 * 8], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t17-t17], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [28], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t19-t19], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t21-t21], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t16, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t18, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [18], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role23, NOT role6, NOT role22, NOT role24], t25, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [23, -1 * 6, -1 * 2, -1 * 9], [25], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t18-t18], [role23, NOT role6, NOT role22, NOT role24], t15, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [23, -1 * 6, -1 * 2, -1 * 9], [15], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t28, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [28], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t19, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [19], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t29, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [29], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t24, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [24], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t25, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [25], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t15, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t27, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [27], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t20, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t8, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t30, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t21, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [21], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t25, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [25], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t23, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [23], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t30, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [30], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t26, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [26], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t20, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [20], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t26, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [26], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t29, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [29], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t30, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [30], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t24, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [24], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t18, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [18], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t11, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [11], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t6, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t25, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [25], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t24, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [24], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t11, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [11], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t14, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [14], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t23, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [23], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t27, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [27], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t20, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t13, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t12, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [12], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t28, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [28], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t29, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [29], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t22, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [22], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t6, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t29, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [29], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t18, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [18], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t13, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [13], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [5], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t23, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [23], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t19, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [19], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t28, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [28], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t16, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t25, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [25], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t28, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [28], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t20, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [20], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t29, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [29], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t12, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [12], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t20, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t30, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t6, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t21, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [21], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t17, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [17], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t22, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [22], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t1, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t7, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t24, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [24], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t28, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [28], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t25, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [25], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t17, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [17], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t27, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [27], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t23, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [23], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t14, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [14], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t22, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [22], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t15, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [15], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t11, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [11], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t21, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [21], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t28, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [28], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t16, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [16], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t24, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [24], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t30, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [30], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t25, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [25], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t26, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [26], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t6, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t28, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [28], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t19, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [19], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t26, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [26], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t22, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [22], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [9], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t27, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [27], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t11, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [11], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t16, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t4, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [4], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t30, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [30], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t28, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [28], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t14, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [14], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t21, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [21], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t23, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [23], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t11, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [11], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t26, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [26], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t16, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [6], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t10, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [10], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t22, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [22], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t19, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [19], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t20, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [20], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t3-t3], [NOT role14], t16, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [-1 * 21], [16], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t7-t7], [NOT role14], t19, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [-1 * 21], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t29-t29], [NOT role14], t2, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [-1 * 21], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t16-t16], [NOT role32], t21, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 16, 16, [-1 * 12], [21], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t17-t17], [NOT role32], t16, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 17, 17, [-1 * 12], [16], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t10-t10], [NOT role32], t12, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [-1 * 12], [12], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t22-t22], [NOT role32], t14, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 22, 22, [-1 * 12], [14], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t5-t5], [NOT role32], t18, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 5, 5, [-1 * 12], [18], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t20-t20], [NOT role32], t11, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 20, 20, [-1 * 12], [11], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t13-t13], [NOT role32], t5, role14>
  trans = await instance.suAddCARule.sendTransaction(8, 13, 13, [-1 * 12], [5], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t12-t12], [role14, role32], t5, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 12, 12, [21, 12], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t8-t8], [role14, role32], t17, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 8, 8, [21, 12], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t2-t2], [role14, role32], t6, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 2, 2, [21, 12], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t27-t27], [role14, role32], t7, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 27, 27, [21, 12], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role14, role32], t10, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [21, 12], [10], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t29-t29], [role14, role32], t25, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 29, 29, [21, 12], [25], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t20-t20], [role14, role32], t14, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 20, 20, [21, 12], [14], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t13-t13], [role14, role32], t26, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 13, 13, [21, 12], [26], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t11-t11], [role14, role32], t18, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 11, 11, [21, 12], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t17-t17], [role14, role32], t15, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 17, 17, [21, 12], [15], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t28-t28], [role14, role32], t16, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 28, 28, [21, 12], [16], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t3-t3], [role14, role32], t19, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 3, 3, [21, 12], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role14], t1, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [21], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role14], t10, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [21], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role14], t16, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [21], [16], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t2, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [21], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role14], t11, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [21], [11], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role14], t2, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [21], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t15, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [21], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role14], t14, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [21], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role14], t16, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [21], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role14], t23, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [21], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role14], t25, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [21], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role14], t17, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [21], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role14], t5, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [21], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t18, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [21], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role14], t10, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [21], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role14], t11, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [21], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t28, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [21], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role17], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [19], [18], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role17], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [19], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role17], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [19], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role17], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [19], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role17], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [19], [14], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role17], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [19], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [21], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role14], t19, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [21], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role14], t16, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [21], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role14], t23, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [21], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role14], t6, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [21], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role14], t30, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [21], [30], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role14], t25, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [21], [25], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role14], t21, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [21], [21], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role14], t22, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [21], [22], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t17, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [21], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role14], t18, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [21], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role14], t20, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [21], [20], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role14], t15, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [21], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role14], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [21], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role32], t26, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [12], [26], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role32], t14, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [12], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role32], t27, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [12], [27], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role32], t5, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [12], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t24-t24], [role29], t21, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 24, 24, [25], [21], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role29], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [25], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role29], t11, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [25], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role29], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [25], [28], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role29], t29, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [25], [29], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role29], t23, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [25], [23], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t23-t23], [role29], t30, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 23, 23, [25], [30], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role14], t15, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [21], [15], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role14], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [21], [18], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t12-t12], [role14], t16, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 12, 12, [21], [16], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role14], t21, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [21], [21], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role14], t14, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [21], [14], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role14], t19, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [21], [19], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role14], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [21], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t5-t5], [role32], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 5, 5, [12], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role32], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [12], [6], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role32], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [12], [18], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t16-t16], [role32], t16, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 16, 16, [12], [16], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [12], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role32], t12, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [12], [12], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role32], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [12], [25], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t24-t24], [role32], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 24, 24, [12], [24], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role32], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [12], [28], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t15, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [12], [15], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role15, [t22-t22], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(8, 22, 22, [25], [22], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role7, [t20-t20], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [25], [22], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [25], [22], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role25], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [29], [22], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [19], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role23], t14, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [23], [14], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role23], t20, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [23], [20], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role23], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [23], [18], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role23], t21, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [23], [21], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role23], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [23], [16], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role23], t22, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [23], [22], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [23], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role23], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [23], [17], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role8], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [5], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role8], t12, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [5], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role8], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [5], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role8], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [5], [19], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role8], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [5], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role12], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [1], [29], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role12], t24, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [1], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role12], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [1], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role12], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [1], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role12], t30, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [1], [30], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role12], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [1], [5], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role12], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [1], [16], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role12], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [1], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role12], t28, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [1], [28], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role12], t11, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [1], [11], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role12], t13, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [1], [13], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role12], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [1], [25], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t14, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [1], [14], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role12], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [1], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role12], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [1], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role12], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [1], [17], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role12], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [1], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role2], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [4], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role2], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [4], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role2], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [4], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role2], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [4], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role2], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [4], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role2], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [4], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role2], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [4], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role2], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [4], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role2], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [4], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role2], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [4], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role2], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [4], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role2], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [4], [16], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role2], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [4], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role3], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [16], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role3], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [16], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role3], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [16], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [16], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role3], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [16], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [16], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role3], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [16], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role3], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [16], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role3], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [16], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [16], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role4], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [14], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role4], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [14], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role4], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [14], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role4], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [14], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role6], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [6], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role6], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [6], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role6], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [6], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role6], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [6], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [6], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role6], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [6], [27], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role6], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [6], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [6], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role6], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [6], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role6], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [6], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role6], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [6], [25], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role7], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role7], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [7], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role7], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [7], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role7], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [7], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role7], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [7], [27], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role7], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [7], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role7], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [7], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role7], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role7], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role7], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [7], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role7], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [7], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role8], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [5], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role8], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [5], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role9], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [30], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role9], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [30], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role9], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [30], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role9], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [30], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role9], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [30], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role9], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [30], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role9], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [30], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role9], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [30], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role12], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [1], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role12], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [1], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role12], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [1], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role12], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [1], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role12], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [1], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role12], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [1], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role12], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [1], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role12], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [1], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role12], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [1], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role12], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [1], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role22], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [2], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role22], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [2], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [2], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role22], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [2], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [2], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role22], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [2], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role22], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [2], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role22], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [2], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role21], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [24], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [24], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role21], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [24], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [24], [16], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [24], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role21], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [24], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role21], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [24], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role21], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [24], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role21], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [24], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role21], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [24], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role21], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [24], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role24], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [9], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [9], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role24], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [9], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role24], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [9], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role24], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [9], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role24], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [9], [16], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role24], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [9], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role24], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [9], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role24], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [9], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role23], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [23], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role23], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [23], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role23], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [23], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role23], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [23], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role23], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [23], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role23], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [23], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role23], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [23], [25], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role23], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [23], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role23], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [23], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role28], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [26], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role28], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [26], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role28], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [26], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role28], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [26], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role28], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [26], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role28], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [26], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role28], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [26], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role28], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [26], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role3], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [16], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t23, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16], [23], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role3], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [16], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role3], t20, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [16], [20], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role3], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [16], [28], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role3], t8, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [16], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role3], t25, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [16], [25], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t26, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [16], [26], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role4], t14, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [14], [14], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role4], t26, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [14], [26], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t17, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [2], [17], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role22], t21, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [2], [21], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role22], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [2], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role22], t9, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [2], [9], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role22], t12, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [2], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role22], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [2], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role22], t10, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [2], [10], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [2], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role22], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [2], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role22], t13, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [2], [13], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role22], t29, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [2], [29], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role22], t27, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [2], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role22], t11, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [2], [11], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role22], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [2], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t12, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [24], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t22, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [24], [22], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role21], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [24], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t20, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [24], [20], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role21], t21, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [24], [21], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role21], t10, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [24], [10], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role21], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [24], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role21], t16, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [24], [16], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role6], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [6], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [6], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role6], t16, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [6], [16], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role6], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [6], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role6], t15, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [6], [15], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role24], t27, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [9], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t8, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [9], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role24], t16, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [9], [16], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role24], t17, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [9], [17], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role24], t13, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [9], [13], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role24], t9, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [9], [9], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role23], t25, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [23], [25], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role23], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [23], [28], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role23], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [23], [6], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role8], t13, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [5], [13], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role8], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [5], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role8], t14, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [5], [14], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role8], t24, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [5], [24], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role8], t29, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [5], [29], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role8], t8, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [5], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role8], t23, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [5], [23], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role8], t17, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [5], [17], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role8], t2, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [5], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role12], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [1], [28], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role12], t18, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [1], [18], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role12], t19, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [1], [19], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role12], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [1], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role12], t27, role11>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [1], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role3], t15, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [16], [15], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role4], t22, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [14], [22], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role4], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [14], [11], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role4], t9, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [14], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role4], t25, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [14], [25], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role4], t1, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [14], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role4], t5, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [14], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role4], t17, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [14], [17], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role4], t18, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [14], [18], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role4], t27, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [14], [27], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role4], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [14], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role4], t19, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [14], [19], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role22], t29, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [2], [29], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role21], t2, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [24], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role21], t15, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [24], [15], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role21], t10, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [24], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role21], t24, role25>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [24], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t30-t30], [role7, NOT role15], t14, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 30, 30, [7, -1 * 8], [14], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t18-t18], [role7, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [7, -1 * 8], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role7, NOT role15], t15, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [7, -1 * 8], [15], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role7, NOT role15], t30, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [7, -1 * 8], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t29-t29], [role7, NOT role15], t26, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 29, 29, [7, -1 * 8], [26], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t22-t22], [role7, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 22, 22, [7, -1 * 8], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t12-t12], [role7, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 12, 12, [7, -1 * 8], [17], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role7, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [7, -1 * 8], [25], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role7, NOT role15], t24, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [7, -1 * 8], [24], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role7, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [7, -1 * 8], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t28-t28], [role7, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [7, -1 * 8], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t28-t28], [role28, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [26, -1 * 8], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t24-t24], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [22], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [29], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [20], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [23], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [6], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t16, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [16, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [14, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [14, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [28], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [20], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t24, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [24], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [15], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t11-t11], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [27], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t18, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [18], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [24, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [26], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [6, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [26], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [6, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [6, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [19], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t13-t13], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [15], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t11-t11], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t11, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [11], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [28], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [23, -1 * 4, -1 * 7, -1 * 2, -1 * 9], [25], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t17-t17], [role23, NOT role6, NOT role22, NOT role24], t18, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [23, -1 * 6, -1 * 2, -1 * 9], [18], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t28-t28], [role23, NOT role6, NOT role22, NOT role24], t21, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [23, -1 * 6, -1 * 2, -1 * 9], [21], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t19-t19], [role23, NOT role6, NOT role22, NOT role24], t26, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [23, -1 * 6, -1 * 2, -1 * 9], [26], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t4, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [23, -1 * 6, -1 * 2, -1 * 9], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t22-t22], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [23, -1 * 6, -1 * 2, -1 * 9], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t23-t23], [role23, NOT role6, NOT role22, NOT role24], t27, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [23, -1 * 6, -1 * 2, -1 * 9], [27], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t30-t30], [role23, NOT role6, NOT role22, NOT role24], t28, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [23, -1 * 6, -1 * 2, -1 * 9], [28], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t25-t25], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [23, -1 * 6, -1 * 2, -1 * 9], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t29-t29], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [23, -1 * 6, -1 * 2, -1 * 9], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t10-t10], TRUE, t10, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 10, 10, [], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t14-t14], TRUE, t12, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 14, 14, [], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t28-t28], TRUE, t29, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 28, 28, [], [29], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t25-t25], TRUE, t29, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 25, 25, [], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t30, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t9-t9], TRUE, t7, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 9, 9, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t21-t21], TRUE, t2, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 21, 21, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t29, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t20-t20], TRUE, t29, role18>
  trans = await instance.suAddCRRule.sendTransaction(0, 20, 20, [], [29], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t15, role18>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t21-t21], TRUE, t19, role2>
  trans = await instance.suAddCRRule.sendTransaction(0, 21, 21, [], [19], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t11-t11], TRUE, t21, role2>
  trans = await instance.suAddCRRule.sendTransaction(0, 11, 11, [], [21], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t27-t27], TRUE, t14, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 27, 27, [], [14], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t28-t28], TRUE, t20, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 28, 28, [], [20], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t26-t26], TRUE, t1, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 26, 26, [], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t20, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t18-t18], TRUE, t29, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 18, 18, [], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t27-t27], TRUE, t20, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 27, 27, [], [20], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t21-t21], TRUE, t1, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 21, 21, [], [1], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t15-t15], TRUE, t25, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 15, 15, [], [25], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t8, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t14, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 6, 6, [], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t23-t23], TRUE, t17, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 23, 23, [], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t11-t11], TRUE, t8, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 11, 11, [], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t12-t12], TRUE, t30, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 12, 12, [], [30], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t1, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 1, 1, [], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t13-t13], TRUE, t28, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 13, 13, [], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t17-t17], TRUE, t18, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 17, 17, [], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t8, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t5, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t26-t26], TRUE, t15, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 26, 26, [], [15], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t6, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t3, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t14, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t7, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t4, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t9, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t27, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t28, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t25, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t10, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t15, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t8, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t16, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t1, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t19, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t10, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t20, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [20], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t21-t21], TRUE, t6, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 21, 21, [], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t18, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t8, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [8], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t26, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [26], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t14, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t1, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t24, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [24], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t16, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t16-t16], TRUE, t5, role14>
  trans = await instance.suAddCRRule.sendTransaction(6, 16, 16, [], [5], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t12-t12], TRUE, t20, role14>
  trans = await instance.suAddCRRule.sendTransaction(6, 12, 12, [], [20], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t7-t7], TRUE, t13, role2>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [13], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t12-t12], TRUE, t5, role2>
  trans = await instance.suAddCRRule.sendTransaction(7, 12, 12, [], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t10-t10], TRUE, t30, role2>
  trans = await instance.suAddCRRule.sendTransaction(7, 10, 10, [], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t27-t27], TRUE, t20, role2>
  trans = await instance.suAddCRRule.sendTransaction(7, 27, 27, [], [20], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t22-t22], TRUE, t8, role2>
  trans = await instance.suAddCRRule.sendTransaction(7, 22, 22, [], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t24, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [24], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t26, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [26], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t4, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t22, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t5, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t27, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [27], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t24, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [24], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t23, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [23], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t19, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t29, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t26, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [26], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t8, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t20, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [20], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t10, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t3, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t6, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t25, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [25], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t24, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t30, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t19-t19], TRUE, t9, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 19, 19, [], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t26, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t19, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t3, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t21-t21], TRUE, t22, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 21, 21, [], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t17, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t13, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t2, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t4, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t20-t20], TRUE, t11, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 20, 20, [], [11], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t26, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [26], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t9, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [9], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t22, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [22], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t3, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [3], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t27, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t18, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [18], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t21, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [21], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t16-t16], TRUE, t14, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 16, 16, [], [14], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t30, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t19, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [19], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t22-t22], TRUE, t12, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 22, 22, [], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t28, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [28], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t15, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [15], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t2, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t28, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [28], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t11, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [11], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t20-t20], TRUE, t6, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 20, 20, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t19, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [19], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t16-t16], TRUE, t24, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 16, 16, [], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t16, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [16], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t7, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t25, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [25], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t27, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [27], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t12-t12], TRUE, t16, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 12, 12, [], [16], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t16-t16], TRUE, t15, role6>
  trans = await instance.suAddCRRule.sendTransaction(9, 16, 16, [], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t5-t5], TRUE, t3, role6>
  trans = await instance.suAddCRRule.sendTransaction(9, 5, 5, [], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t27-t27], TRUE, t17, role6>
  trans = await instance.suAddCRRule.sendTransaction(9, 27, 27, [], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t18-t18], TRUE, t18, role6>
  trans = await instance.suAddCRRule.sendTransaction(9, 18, 18, [], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t30-t30], TRUE, t29, role6>
  trans = await instance.suAddCRRule.sendTransaction(9, 30, 30, [], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t23-t23], TRUE, t25, role8>
  trans = await instance.suAddCRRule.sendTransaction(6, 23, 23, [], [25], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t21-t21], TRUE, t8, role8>
  trans = await instance.suAddCRRule.sendTransaction(6, 21, 21, [], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t10-t10], TRUE, t10, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 10, 10, [], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t14-t14], TRUE, t12, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 14, 14, [], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t22-t22], [role12], t11, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 22, 22, [1], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t14-t14], [role12], t13, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 14, 14, [1], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t11-t11], [role21], t16, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 11, 11, [24], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t29-t29], [role23], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 29, 29, [23], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t16-t16], [role23], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 16, 16, [23], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t29-t29], [role23, NOT role6, NOT role8, NOT role22], t10, role24>
  trans = await instance.suAddCERule.sendTransaction(0, 29, 29, [23, -1 * 6, -1 * 5, -1 * 2], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t29-t29], [role23, NOT role8, NOT role22, NOT role24], t2, role6>
  trans = await instance.suAddCERule.sendTransaction(0, 29, 29, [23, -1 * 5, -1 * 2, -1 * 9], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t12-t12], TRUE, t30, role32>
  trans = await instance.suAddCERule.sendTransaction(6, 12, 12, [], [30], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t1-t1], TRUE, t1, role32>
  trans = await instance.suAddCERule.sendTransaction(6, 1, 1, [], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t7-t7], TRUE, t8, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 7, 7, [], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t29-t29], TRUE, t3, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 29, 29, [], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t8-t8], TRUE, t14, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t7, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [], [7], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t27-t27], TRUE, t4, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 27, 27, [], [4], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t8-t8], TRUE, t8, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 8, 8, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t28-t28], TRUE, t16, role17>
  trans = await instance.suAddCERule.sendTransaction(5, 28, 28, [], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t23-t23], [role9], t30, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 23, 23, [30], [30], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t21-t21], [role12], t24, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 21, 21, [1], [24], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t20-t20], [role12], t19, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [1], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t12-t12], [role12], t8, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 12, 12, [1], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t13-t13], [role12], t20, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 13, 13, [1], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t15-t15], [role12], t27, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 15, 15, [1], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t26-t26], [role12], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 26, 26, [1], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t22-t22], [role22], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [2], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t20-t20], [role22], t19, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [2], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t21-t21], [role21], t18, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 21, 21, [24], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t10-t10], [role24], t29, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 10, 10, [9], [29], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role23], t27, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [23], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t23-t23], [role23], t28, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 23, 23, [23], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t2-t2], [role23], t15, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [23], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t24-t24], [role23, NOT role6, NOT role8, NOT role22], t9, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [23, -1 * 6, -1 * 5, -1 * 2], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t17-t17], [role23, NOT role6, NOT role8, NOT role22], t12, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 17, 17, [23, -1 * 6, -1 * 5, -1 * 2], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t14, role6>
  trans = await instance.suAddCERule.sendTransaction(9, 3, 3, [23, -1 * 5, -1 * 2, -1 * 9], [14], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t6-t6], [role23, NOT role8, NOT role22, NOT role24], t16, role6>
  trans = await instance.suAddCERule.sendTransaction(9, 6, 6, [23, -1 * 5, -1 * 2, -1 * 9], [16], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t16-t16], [role23, NOT role6, NOT role22, NOT role24], t1, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 16, 16, [23, -1 * 6, -1 * 2, -1 * 9], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t19-t19], [role23, NOT role6, NOT role22, NOT role24], t26, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 19, 19, [23, -1 * 6, -1 * 2, -1 * 9], [26], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t4, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 6, 6, [23, -1 * 6, -1 * 2, -1 * 9], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t25-t25], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 25, 25, [23, -1 * 6, -1 * 2, -1 * 9], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [XA3Pos] <TRUE, [t4-t4], [role12], t16, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 4, 4, [1], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t5-t5], [role22], t15, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 5, 5, [2], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t17-t17], [role24], t16, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 17, 17, [9], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t30-t30], [role24], t23, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 30, 30, [9], [23], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t13-t13], [role23], t18, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 13, 13, [23], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t3-t3], TRUE, t27, role17>
  trans = await instance.suAddCDRule.sendTransaction(5, 3, 3, [], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t27-t27], TRUE, t10, role17>
  trans = await instance.suAddCDRule.sendTransaction(5, 27, 27, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t23-t23], TRUE, t19, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 23, 23, [], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t16-t16], [role12], t12, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 16, 16, [1], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t24-t24], [role12], t28, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 24, 24, [1], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t7-t7], [role22], t21, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 7, 7, [2], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t17-t17], [role21], t10, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 17, 17, [24], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t4-t4], [role21], t19, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [24], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t30-t30], [role23], t13, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 30, 30, [23], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t6-t6], [role23], t10, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 6, 6, [23], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role22, [t12-t12], [role23, NOT role6, NOT role8, NOT role22], t11, role24>
  trans = await instance.suAddCDRule.sendTransaction(2, 12, 12, [23, -1 * 6, -1 * 5, -1 * 2], [11], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t18-t18], [role23, NOT role8, NOT role22, NOT role24], t7, role6>
  trans = await instance.suAddCDRule.sendTransaction(9, 18, 18, [23, -1 * 5, -1 * 2, -1 * 9], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t19-t19], [role23, NOT role8, NOT role22, NOT role24], t17, role6>
  trans = await instance.suAddCDRule.sendTransaction(9, 19, 19, [23, -1 * 5, -1 * 2, -1 * 9], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t9-t9], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCDRule.sendTransaction(6, 9, 9, [23, -1 * 6, -1 * 2, -1 * 9], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t16, role8>
  trans = await instance.suAddCDRule.sendTransaction(6, 5, 5, [23, -1 * 6, -1 * 2, -1 * 9], [16], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};