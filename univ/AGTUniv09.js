var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv09.mohawkT');
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
  trans = await instance.suAddNewRole.sendTransaction('role21', { from: su });
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
  trans = await instance.suAddTimeSlot.sendTransaction(30, 31, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(31, 32, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(32, 33, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(33, 34, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(34, 35, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(35, 36, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(36, 37, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(37, 38, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(38, 39, { from: su });
  gas += trans.receipt.gasUsed;
  trans = await instance.suAddTimeSlot.sendTransaction(39, 40, { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t37, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [37], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t32, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [32], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t36-t36], TRUE, t33, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [], [33], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t34, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [34], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t17, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [17], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t21, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [21], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t26-t26], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t17-t17], TRUE, t22, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t17-t17], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t35-t35], TRUE, t2, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [], [2], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t32, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [32], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t23-t23], TRUE, t20, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [], [20], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t15-t15], TRUE, t33, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [], [33], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t14, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [14], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t36, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [36], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t40-t40], TRUE, t18, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [], [18], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t37-t37], TRUE, t31, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [], [31], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t14, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [14], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t14, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [14], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t4, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t26-t26], [NOT role14], t12, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [-1 * 24], [12], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t38-t38], [NOT role14], t18, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 38, 38, [-1 * 24], [18], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t2-t2], [NOT role14], t19, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [-1 * 24], [19], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t9-t9], [NOT role14], t28, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [-1 * 24], [28], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t28-t28], [NOT role14], t8, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [-1 * 24], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t29-t29], [NOT role14], t35, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [-1 * 24], [35], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t35-t35], [NOT role14], t14, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [-1 * 24], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t12-t12], [NOT role32], t7, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [-1 * 15], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t36-t36], [NOT role32], t20, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [-1 * 15], [20], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t35-t35], [NOT role32], t19, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [-1 * 15], [19], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t28-t28], [NOT role32], t2, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [-1 * 15], [2], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t4-t4], [NOT role32], t22, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [-1 * 15], [22], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t3-t3], [NOT role32], t34, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [-1 * 15], [34], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t40-t40], [NOT role32], t6, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [-1 * 15], [6], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6, role8], t18, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [8, 6], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t37-t37], [role6, role8], t8, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [8, 6], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role6, role8], t20, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [8, 6], [20], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role6, role8], t35, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [8, 6], [35], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t39-t39], [role6, role8], t38, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [8, 6], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role14], t33, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [24], [33], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role14], t3, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [24], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role17], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [22], [33], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role17], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [22], [16], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role32], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [15], [8], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role29], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [28], [10], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role29], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [28], [24], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role29], t33, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [28], [33], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role14], t7, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [24], [7], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role14], t38, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [24], [38], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role14], t16, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [24], [16], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role14], t21, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [24], [21], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role14], t29, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [24], [29], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role14], t27, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [24], [27], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role32], t32, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [15], [32], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role32], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [15], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role32], t26, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [15], [26], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t39-t39], [role32], t31, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [15], [31], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role32], t38, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [15], [38], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role14], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [24], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role14], t23, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [24], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role32], t15, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [15], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role32], t1, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [15], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role32], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [15], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role22], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [2], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role22], t20, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [2], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role24], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [11], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role24], t35, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [11], [35], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role24], t25, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [11], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role24], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [11], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role7], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [9], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role7], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [9], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role3], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [20], [11], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role3], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [20], [21], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t32-t32], [role3], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [20], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role3], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [20], [14], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role3], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [20], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t36-t36], [role23], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [26], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role8], t35, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [6], [35], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role8], t34, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [6], [34], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role8], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [6], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t40-t40], [role12], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [1], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t35-t35], [role12], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [1], [13], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role12], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [1], [37], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role12], t31, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [1], [31], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role12], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [1], [17], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role12], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [1], [29], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role4], t37, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [17], [37], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role4], t33, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [17], [33], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role4], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [17], [25], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role22], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [2], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role22], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [2], [26], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role22], t22, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [2], [22], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role24], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [11], [16], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t40-t40], [role24], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [11], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role24], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [11], [23], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role24], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [11], [26], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role24], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [11], [19], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role24], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [11], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role23], t24, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [26], [24], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role8], t30, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [6], [30], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role12], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [1], [29], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t38-t38], [role12], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 38, 38, [1], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role2], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [5], [11], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role3], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [20], [27], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role24], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [11], [9], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role24], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [11], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t37-t37], [role24], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [11], [26], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role23], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [26], [23], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role3], t33, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [20], [33], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role4], t36, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [17], [36], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t39-t39], [role24], t34, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [11], [34], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role24], t37, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [11], [37], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role24], t35, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [11], [35], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role23], t37, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [26], [37], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role23], t38, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [26], [38], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role8], t27, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [6], [27], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role8], t34, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [6], [34], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role12], t34, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [1], [34], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role12], t31, role25>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [1], [31], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role16], t11, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [23], [11], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role16], t12, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [23], [12], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role16], t36, role26>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [23], [36], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role2], t34, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [5], [34], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role4], t37, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [17], [37], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role4], t15, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [17], [15], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role4], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [17], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t36-t36], [role4], t32, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [17], [32], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t35-t35], [role7], t7, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [9], [7], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role7], t35, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [9], [35], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role28], t22, role13>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [29], [22], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t17-t17], [role24, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [11, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t13-t13], [role24, NOT role15], t13, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [11, -1 * 10], [13], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t33-t33], [role24, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [11, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t40-t40], [role28, NOT role15], t26, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [29, -1 * 10], [26], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t9-t9], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t29-t29], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t40-t40], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t35-t35], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t19-t19], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [27], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t19-t19], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [21], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t20-t20], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t25-t25], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [15], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [10], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t11, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [11], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t39-t39], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t12-t12], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t33-t33], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t30-t30], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t34, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [34], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t38-t38], [role23, NOT role6, NOT role22, NOT role24], t26, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 38, 38, [26, -1 * 8, -1 * 2, -1 * 11], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [4], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t36, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [36], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t10, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t15, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [15], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t38-t38], TRUE, t23, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [], [23], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t37-t37], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 37, 37, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t32, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [32], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t24, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t31, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [31], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t32-t32], TRUE, t19, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 32, 32, [], [19], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t12, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [12], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t34-t34], TRUE, t16, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [], [16], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t38-t38], TRUE, t15, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [], [15], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t40, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [40], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t38, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [38], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t30, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [30], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t36-t36], TRUE, t25, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 36, 36, [], [25], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t34-t34], TRUE, t37, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [], [37], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t31, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [31], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t12, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [12], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t17, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [17], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t37-t37], TRUE, t24, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 37, 37, [], [24], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t32, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [32], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t31, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [31], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [9], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t25, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [25], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t37-t37], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 37, 37, [], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t12, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [12], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t19, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t32-t32], TRUE, t21, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 32, 32, [], [21], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t16, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [16], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t30, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t6, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t33, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [33], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t14, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [14], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t17, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t12, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t24, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t35, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [35], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t19, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [19], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t29, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [29], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t23, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [23], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t21, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [21], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t18, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [18], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t28, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [28], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t37, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [37], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t31, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [31], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t40-t40], TRUE, t34, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 40, 40, [], [34], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t19, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [19], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t32-t32], TRUE, t5, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 32, 32, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t31-t31], TRUE, t20, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 31, 31, [], [20], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t3, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [3], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t30, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [30], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t12, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t33, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [33], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t37, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [37], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t11, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [11], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t13, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [13], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t39-t39], TRUE, t36, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 39, 39, [], [36], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t4, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t1, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [1], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t23, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [23], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t32, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [32], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t31, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [31], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t39, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [39], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t27, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [27], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t30, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [30], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t2, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [3], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t37, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [37], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t36-t36], TRUE, t24, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 36, 36, [], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t34-t34], TRUE, t34, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [], [34], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t35, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [35], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t38-t38], TRUE, t38, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [], [38], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t31-t31], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 31, 31, [], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t33-t33], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t32-t32], TRUE, t13, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 32, 32, [], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t30, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [30], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t35-t35], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 35, 35, [], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t19, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [19], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t37, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [37], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t28, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [28], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t33, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [33], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t23, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [23], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t6, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t28, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [28], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t40, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [40], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t19, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [19], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t35-t35], TRUE, t32, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 35, 35, [], [32], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t6, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [6], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t26, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [26], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t22, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [22], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t11, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [11], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t24, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [24], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t18, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [18], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t35-t35], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 35, 35, [], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t2, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t31-t31], TRUE, t34, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 31, 31, [], [34], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role15, [t26-t26], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(10, 26, 26, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role19, [t26-t26], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(7, 26, 26, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role21, [t26-t26], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role12, [t2-t2], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role6, [t6-t6], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role8, [t8-t8], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role7, [t7-t7], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(9, 7, 7, [], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t19-t19], [NOT role14], t26, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [-1 * 24], [26], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t32-t32], [NOT role14], t21, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 32, 32, [-1 * 24], [21], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t11-t11], [NOT role14], t25, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [-1 * 24], [25], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t10-t10], [NOT role14], t29, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [-1 * 24], [29], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t27-t27], [NOT role14], t24, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [-1 * 24], [24], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t23-t23], [NOT role14], t9, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [-1 * 24], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t5-t5], [NOT role14], t40, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [-1 * 24], [40], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t33-t33], [NOT role14], t27, role32>
  trans = await instance.suAddCARule.sendTransaction(5, 33, 33, [-1 * 24], [27], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t39-t39], [NOT role32], t23, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 39, 39, [-1 * 15], [23], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t33-t33], [NOT role32], t17, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 33, 33, [-1 * 15], [17], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t5-t5], [NOT role32], t39, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 5, 5, [-1 * 15], [39], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t38-t38], [NOT role32], t18, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 38, 38, [-1 * 15], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t7-t7], [NOT role32], t24, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 7, 7, [-1 * 15], [24], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t2-t2], [NOT role32], t21, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 2, 2, [-1 * 15], [21], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t15-t15], [NOT role32], t5, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 15, 15, [-1 * 15], [5], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t16-t16], [NOT role32], t36, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 16, 16, [-1 * 15], [36], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t17-t17], [NOT role32], t3, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 17, 17, [-1 * 15], [3], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t9-t9], [NOT role32], t40, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 9, 9, [-1 * 15], [40], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t13-t13], [NOT role32], t29, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 13, 13, [-1 * 15], [29], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t18-t18], [NOT role32], t15, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 18, 18, [-1 * 15], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t37-t37], [NOT role32], t4, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 37, 37, [-1 * 15], [4], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t34-t34], [NOT role32], t11, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 34, 34, [-1 * 15], [11], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t26-t26], [NOT role32], t8, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 26, 26, [-1 * 15], [8], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t19-t19], [NOT role32], t37, role14>
  trans = await instance.suAddCARule.sendTransaction(10, 19, 19, [-1 * 15], [37], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t11-t11], [role6, role8], t24, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 11, 11, [8, 6], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t34-t34], [role6, role8], t23, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 34, 34, [8, 6], [23], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t30-t30], [role6, role8], t25, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 30, 30, [8, 6], [25], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t36-t36], [role6, role8], t21, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 36, 36, [8, 6], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t19-t19], [role6, role8], t22, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 19, 19, [8, 6], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t5-t5], [role6, role8], t16, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 5, 5, [8, 6], [16], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t20-t20], [role6, role8], t9, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 20, 20, [8, 6], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t14-t14], [role6, role8], t29, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 14, 14, [8, 6], [29], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t2-t2], [role6, role8], t31, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 2, 2, [8, 6], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t17-t17], [role6, role8], t26, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 17, 17, [8, 6], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t26-t26], [role6, role8], t11, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 26, 26, [8, 6], [11], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t25-t25], [role6, role8], t1, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 25, 25, [8, 6], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t12-t12], [role6, role8], t27, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 12, 12, [8, 6], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t40-t40], [role6, role8], t12, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 40, 40, [8, 6], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t38-t38], [role6, role8], t19, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 38, 38, [8, 6], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t22-t22], [role6, role8], t2, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 22, 22, [8, 6], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t33-t33], [role6, role8], t39, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 33, 33, [8, 6], [39], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role6, role8], t28, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [8, 6], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t26-t26], [role13], t10, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [25], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t6, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [24], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role14], t27, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [24], [27], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role14], t35, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [24], [35], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role14], t36, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [24], [36], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t7, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [24], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role14], t10, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [24], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t19, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [24], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role14], t5, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [24], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t14, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [24], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role14], t16, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [24], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role14], t20, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [24], [20], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t39, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [24], [39], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role14], t24, role30>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [24], [24], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role14], t2, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [24], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role14], t11, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [24], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t10, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [24], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role14], t6, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [24], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t34, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [24], [34], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role14], t18, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [24], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role14], t36, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [24], [36], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role14], t17, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [24], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role14], t12, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [24], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role14], t22, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [24], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role14], t35, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [24], [35], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role17, role14, role30], t10, role3>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [22, 24, 18], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role14], t8, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [24], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role14], t3, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [24], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role14], t4, role17>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [24], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role17], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [22], [5], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t39, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [24], [39], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role14], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [24], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role32], t16, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [15], [16], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role32], t6, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [15], [6], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role32], t39, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [15], [39], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role32], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [15], [4], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role32], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [15], [7], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role32], t5, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [15], [5], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role32], t40, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [15], [40], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role32], t3, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [15], [3], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role32], t25, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [15], [25], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role32], t19, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [15], [19], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role32], t20, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [15], [20], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role32], t28, role18>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [15], [28], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role29], t38, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [28], [38], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role29], t35, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [28], [35], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role29], t32, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [28], [32], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t29-t29], [role29], t13, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 29, 29, [28], [13], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role29], t34, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [28], [34], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role29], t19, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [28], [19], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role29], t30, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [28], [30], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t20-t20], [role29], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 20, 20, [28], [28], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t24-t24], [role29], t23, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 24, 24, [28], [23], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role29], t37, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [28], [37], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t25-t25], [role29], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 25, 25, [28], [18], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role29], t31, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [28], [31], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t16-t16], [role29], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 16, 16, [28], [20], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role29], t27, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [28], [27], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role29], t21, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [28], [21], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t36-t36], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 36, 36, [28], [22], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t37-t37], [role29], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 37, 37, [28], [25], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t37-t37], [role14], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 37, 37, [24], [6], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role14], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [24], [22], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role14], t31, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [24], [31], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role14], t36, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [24], [36], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role14], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [24], [24], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role27], t10, role3>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [30], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t24-t24], [role14], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 24, 24, [24], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t32-t32], [role14], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 32, 32, [24], [5], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t35-t35], [role14], t23, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 35, 35, [24], [23], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role32], t37, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [15], [37], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t39, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [15], [39], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t23-t23], [role32], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 23, 23, [15], [20], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [15], [28], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role32], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [15], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t11-t11], [role14], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [24], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t8-t8], [role14], t26, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [24], [26], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t19-t19], [role14], t10, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [24], [10], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t7-t7], [role14], t9, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [24], [9], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t28-t28], [role14], t32, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [24], [32], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t5-t5], [role14], t24, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [24], [24], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t32-t32], [role14], t33, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 32, 32, [24], [33], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t36-t36], [role14], t13, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 36, 36, [24], [13], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role14], t14, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [24], [14], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t12-t12], [role14], t25, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 12, 12, [24], [25], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t26-t26], [role14], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 26, 26, [24], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t17-t17], [role14], t2, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [24], [2], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t20-t20], [role14], t20, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [24], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t29-t29], [role14], t8, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 29, 29, [24], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t33-t33], [role14], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 33, 33, [24], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t16-t16], [role14], t34, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [24], [34], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t7-t7], [role32], t40, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [15], [40], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t8-t8], [role32], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [15], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t2-t2], [role32], t2, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [15], [2], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t40-t40], [role32], t24, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 40, 40, [15], [24], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t3-t3], [role32], t34, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [15], [34], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t26-t26], [role32], t36, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 26, 26, [15], [36], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t29-t29], [role32], t14, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 29, 29, [15], [14], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t32-t32], [role32], t35, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 32, 32, [15], [35], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t1-t1], [role32], t3, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [15], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t35-t35], [role32], t12, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 35, 35, [15], [12], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t10-t10], [role32], t25, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [15], [25], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t9-t9], [role32], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [15], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t16-t16], [role32], t11, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [15], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t4-t4], [role32], t18, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [15], [18], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t30-t30], [role32], t19, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 30, 30, [15], [19], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t5-t5], [role32], t37, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [15], [37], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t36-t36], [role32], t15, role20>
  trans = await instance.suAddCARule.sendTransaction(7, 36, 36, [15], [15], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t33-t33], [role14], t40, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 33, 33, [24], [40], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t34-t34], [role14], t28, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 34, 34, [24], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role14], t15, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [24], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role14], t20, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [24], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role14], t13, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [24], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t39-t39], [role14], t21, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 39, 39, [24], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role14], t14, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [24], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t19-t19], [role14], t2, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 19, 19, [24], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role14], t17, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [24], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role14], t29, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [24], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role14], t12, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [24], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role14], t31, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [24], [31], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role14], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [24], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role14], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [24], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t31-t31], [role14], t4, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 31, 31, [24], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t20-t20], [role14], t10, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 20, 20, [24], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t38-t38], [role14], t11, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 38, 38, [24], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role14], t35, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [24], [35], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t32-t32], [role14], t18, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 32, 32, [24], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role14], t1, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [24], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role32], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [15], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t31-t31], [role32], t4, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 31, 31, [15], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t24, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [15], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t33-t33], [role32], t5, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 33, 33, [15], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t40-t40], [role32], t10, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 40, 40, [15], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role32], t35, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [15], [35], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t11, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [15], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role32], t2, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [15], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t12, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [15], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t6, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [15], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role32], t28, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [15], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t19-t19], [role32], t40, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 19, 19, [15], [40], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role32], t7, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [15], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role32], t34, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [15], [34], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t32-t32], [role32], t31, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 32, 32, [15], [31], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t29-t29], [role32], t8, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 29, 29, [15], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t38-t38], [role32], t36, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 38, 38, [15], [36], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [15], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t8-t8], [role32], t13, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 8, 8, [15], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t34-t34], [role32], t20, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 34, 34, [15], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t22-t22], [role32], t17, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 22, 22, [15], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t36-t36], [role2], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 36, 36, [5], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role2], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [5], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t37-t37], [role22], t36, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 37, 37, [2], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t35-t35], [role22], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 35, 35, [2], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t39-t39], [role22], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 39, 39, [2], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t23-t23], [role22], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 23, 23, [2], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t27-t27], [role22], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 27, 27, [2], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role22], t29, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 16, 16, [2], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role22], t24, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 15, 15, [2], [24], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t24-t24], [role22], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 24, 24, [2], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role22], t32, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 1, 1, [2], [32], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t25-t25], [role22], t33, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 25, 25, [2], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t26-t26], [role22], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 26, 26, [2], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role22], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 18, 18, [2], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role24], t39, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [11], [39], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role24], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [11], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role24], t26, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 17, 17, [11], [26], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t35-t35], [role7], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 35, 35, [9], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t12-t12], [role7], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 12, 12, [9], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t29-t29], [role7], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 29, 29, [9], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t26-t26], [role7], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 26, 26, [9], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role7], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 30, 30, [9], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t13-t13], [role7], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 13, 13, [9], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t38-t38], [role7], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 38, 38, [9], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role7], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [9], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t31-t31], [role7], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 31, 31, [9], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t33-t33], [role7], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 33, 33, [9], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role7], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 6, 6, [9], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role7], t28, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [9], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role7], t31, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 15, 15, [9], [31], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t32-t32], [role7], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 32, 32, [9], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role7], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 2, 2, [9], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role7], t36, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 19, 19, [9], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t23-t23], [role28], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 23, 23, [29], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t12-t12], [role28], t39, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 12, 12, [29], [39], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role28], t25, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 8, 8, [29], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t21-t21], [role28], t34, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 21, 21, [29], [34], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t27-t27], [role28], t35, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 27, 27, [29], [35], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role28], t20, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 30, 30, [29], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role28], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [29], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [20], [22], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role3], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [20], [8], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t31, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [20], [31], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role3], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [20], [40], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role3], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [20], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role3], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [20], [25], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role3], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [20], [23], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role3], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [20], [17], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t32, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [20], [32], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role3], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [20], [29], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role3], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [20], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role3], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [20], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [20], [16], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role3], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [20], [37], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role3], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [20], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [20], [10], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role23], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [26], [13], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role23], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [26], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role23], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [26], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role23], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [26], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role23], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [26], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role8], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [6], [33], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role8], t38, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [6], [38], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role8], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [6], [13], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role8], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [6], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role8], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [6], [11], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role8], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [6], [18], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role8], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [6], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role8], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [6], [12], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role8], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [6], [14], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role8], t26, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [6], [26], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role8], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [6], [9], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role12], t35, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [1], [35], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t24, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [1], [24], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role12], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [1], [16], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role12], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [1], [19], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role12], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [1], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role12], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [1], [6], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role12], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [1], [28], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [1], [7], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role3], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [20], [29], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t38, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [20], [38], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role3], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [20], [19], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role3], t20, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [20], [20], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role3], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [20], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [20], [18], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role4], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [17], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role4], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [17], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role4], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [17], [26], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role4], t31, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [17], [31], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role4], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [17], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role4], t22, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [17], [22], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t40, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [17], [40], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role4], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [17], [23], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [17], [9], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role4], t36, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [17], [36], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t11, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [17], [11], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role4], t14, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [17], [14], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role4], t27, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [17], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role4], t28, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [17], [28], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role4], t32, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [17], [32], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role4], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [17], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role22], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [2], [17], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role22], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [2], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role22], t37, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [2], [37], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role22], t13, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [2], [13], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role22], t33, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [2], [33], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role22], t31, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [2], [31], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role22], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [2], [9], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role22], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [2], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role22], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [2], [18], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role22], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [2], [23], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role21], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [4], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role21], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [4], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role21], t33, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [4], [33], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role6], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [8], [7], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [8], [16], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role6], t6, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [8], [6], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role6], t35, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [8], [35], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role6], t34, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [8], [34], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role24], t12, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [11], [12], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role24], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [11], [9], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role24], t35, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [11], [35], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role24], t24, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [11], [24], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role24], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [11], [25], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role24], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [11], [17], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [11], [18], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role24], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [11], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [11], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role24], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [11], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role24], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [11], [7], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role24], t14, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [11], [14], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role24], t30, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [11], [30], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role24], t27, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [11], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role24], t38, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [11], [38], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role24], t31, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [11], [31], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role23], t37, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [26], [37], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role23], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [26], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role23], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [26], [2], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role23], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [26], [25], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [26], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role23], t36, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [26], [36], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role23], t38, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [26], [38], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role23], t31, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [26], [31], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role8], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [6], [1], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role12], t20, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [1], [20], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role12], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [1], [4], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role12], t38, role19>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [1], [38], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role2], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [5], [37], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role2], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [5], [19], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role2], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [5], [9], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role2], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [5], [8], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role2], t40, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [5], [40], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role2], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [5], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role2], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [5], [5], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role2], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [5], [24], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role3], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [20], [4], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role3], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [20], [29], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role3], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [20], [14], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role3], t31, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [20], [31], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [20], [32], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role3], t36, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [20], [36], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role24], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [11], [19], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [11], [20], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role24], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [11], [2], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t35, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [26], [35], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role23], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [26], [24], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [26], [38], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role23], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [26], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role23], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [26], [25], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role23], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [26], [13], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role23], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [26], [26], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role23], t39, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [26], [39], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role23], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [26], [27], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role23], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [26], [20], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role23], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [26], [21], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role23], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [26], [22], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role23], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [26], [28], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role23], t36, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [26], [36], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role23], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [26], [29], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role23], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [26], [17], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role23], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [26], [30], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role28], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [29], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role28], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [29], [20], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role3], t32, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [20], [32], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t25, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [20], [25], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t21, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [20], [21], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role3], t37, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [20], [37], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role3], t39, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [20], [39], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t15, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [20], [15], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role3], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [20], [4], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t40, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [20], [40], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role3], t34, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [20], [34], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role3], t27, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [20], [27], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role3], t26, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [20], [26], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role4], t16, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [17], [16], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t24, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [17], [24], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t19, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [17], [19], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [17], [28], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role4], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [17], [6], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role4], t35, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [17], [35], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role4], t37, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [17], [37], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role4], t27, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [17], [27], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role4], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [17], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role4], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [17], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role4], t31, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [17], [31], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role4], t17, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [17], [17], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role4], t32, role11>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [17], [32], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role24], t26, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [11], [26], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t36, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 4, 4, [11], [36], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role24], t11, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [11], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role23], t40, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [26], [40], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role23], t10, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [26], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role23], t27, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [26], [27], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role23], t28, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [26], [28], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role23], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [26], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role8], t39, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [6], [39], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role8], t24, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [6], [24], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role8], t14, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [6], [14], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role12], t7, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [1], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role12], t16, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [1], [16], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role12], t23, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [1], [23], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role12], t8, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [1], [8], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role12], t21, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [1], [21], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role12], t35, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [1], [35], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t24, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [1], [24], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role12], t29, role25>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [1], [29], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role16], t5, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [23], [5], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role16], t10, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 9, 9, [23], [10], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role16], t34, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [23], [34], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role16], t4, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [23], [4], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role16], t13, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [23], [13], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role16], t29, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [23], [29], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role16], t6, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [23], [6], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role16], t7, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [23], [7], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role16], t18, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [23], [18], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role16], t25, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [23], [25], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role16], t8, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [23], [8], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role16], t14, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [23], [14], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role16], t9, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [23], [9], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role16], t35, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [23], [35], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role16], t15, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [23], [15], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role16], t38, role26>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [23], [38], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role2], t1, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [5], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t8-t8], [role2], t20, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [5], [20], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t9-t9], [role2], t35, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [5], [35], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role3], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [20], [16], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t6-t6], [role3], t32, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [20], [32], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t7-t7], [role3], t4, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [20], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t31-t31], [role4], t31, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 31, 31, [17], [31], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t21-t21], [role4], t21, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [17], [21], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role4], t30, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [17], [30], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t27-t27], [role4], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [17], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role4], t10, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [17], [10], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t28-t28], [role4], t29, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [17], [29], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t18-t18], [role4], t38, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [17], [38], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t10-t10], [role4], t35, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [17], [35], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t34-t34], [role4], t13, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [17], [13], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t38-t38], [role4], t39, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [17], [39], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t22-t22], [role4], t5, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [17], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t33-t33], [role4], t27, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [17], [27], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role6], t16, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [8], [16], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t25-t25], [role6], t13, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [8], [13], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t40-t40], [role7], t32, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 40, 40, [9], [32], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t34-t34], [role7], t33, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [9], [33], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role7], t26, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [9], [26], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t11-t11], [role7], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [9], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t13-t13], [role7], t9, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [9], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t29-t29], [role7], t34, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [9], [34], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t28-t28], [role28], t18, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [29], [18], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role28], t2, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [29], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t33-t33], [role28], t28, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [29], [28], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t34-t34], [role28], t34, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [29], [34], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t6-t6], [role28], t8, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [29], [8], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t23-t23], [role28], t31, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [29], [31], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t17-t17], [role28], t12, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [29], [12], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t16-t16], [role28], t14, role13>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [29], [14], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t26-t26], [role22, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 26, 26, [2, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t14-t14], [role22, NOT role15], t19, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 14, 14, [2, -1 * 10], [19], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t33-t33], [role22, NOT role15], t32, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 33, 33, [2, -1 * 10], [32], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t37-t37], [role22, NOT role15], t27, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 37, 37, [2, -1 * 10], [27], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t31-t31], [role22, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 31, 31, [2, -1 * 10], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t39-t39], [role22, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 39, 39, [2, -1 * 10], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role22, NOT role15], t28, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 7, 7, [2, -1 * 10], [28], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t36-t36], [role22, NOT role15], t29, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 36, 36, [2, -1 * 10], [29], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t12-t12], [role22, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 12, 12, [2, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t27-t27], [role22, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 27, 27, [2, -1 * 10], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t30-t30], [role22, NOT role15], t30, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 30, 30, [2, -1 * 10], [30], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t34-t34], [role22, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 34, 34, [2, -1 * 10], [25], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t13-t13], [role22, NOT role15], t33, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 13, 13, [2, -1 * 10], [33], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t15-t15], [role24, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 15, 15, [11, -1 * 10], [9], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t16-t16], [role24, NOT role15], t12, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 16, 16, [11, -1 * 10], [12], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t18-t18], [role24, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 18, 18, [11, -1 * 10], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role24, NOT role15], t32, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 2, 2, [11, -1 * 10], [32], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role24, NOT role15], t11, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 3, 3, [11, -1 * 10], [11], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t21-t21], [role24, NOT role15], t34, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 21, 21, [11, -1 * 10], [34], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role24, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 10, 10, [11, -1 * 10], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t28-t28], [role24, NOT role15], t24, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 28, 28, [11, -1 * 10], [24], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t39-t39], [role24, NOT role15], t22, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 39, 39, [11, -1 * 10], [22], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t27-t27], [role24, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 27, 27, [11, -1 * 10], [25], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t19-t19], [role24, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 19, 19, [11, -1 * 10], [20], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t26-t26], [role24, NOT role15], t33, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 26, 26, [11, -1 * 10], [33], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t35-t35], [role24, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 35, 35, [11, -1 * 10], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t32-t32], [role24, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 32, 32, [11, -1 * 10], [17], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t23-t23], [role24, NOT role15], t35, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 23, 23, [11, -1 * 10], [35], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t24-t24], [role24, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 24, 24, [11, -1 * 10], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t34-t34], [role24, NOT role15], t26, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 34, 34, [11, -1 * 10], [26], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t29-t29], [role7, NOT role15], t27, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 29, 29, [9, -1 * 10], [27], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t30-t30], [role7, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 30, 30, [9, -1 * 10], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t32-t32], [role28, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 32, 32, [29, -1 * 10], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t35-t35], [role28, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 35, 35, [29, -1 * 10], [25], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t24-t24], [role28, NOT role15], t21, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 24, 24, [29, -1 * 10], [21], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t29-t29], [role28, NOT role15], t36, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 29, 29, [29, -1 * 10], [36], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role28, NOT role15], t37, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 1, 1, [29, -1 * 10], [37], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t36-t36], [role28, NOT role15], t33, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 36, 36, [29, -1 * 10], [33], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t39-t39], [role28, NOT role15], t27, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 39, 39, [29, -1 * 10], [27], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role28, NOT role15], t38, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 5, 5, [29, -1 * 10], [38], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t16-t16], [role28, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 16, 16, [29, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t7-t7], [role28, NOT role15], t31, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 7, 7, [29, -1 * 10], [31], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t25-t25], [role28, NOT role15], t32, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 25, 25, [29, -1 * 10], [32], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role28, NOT role15], t4, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 3, 3, [29, -1 * 10], [4], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t20-t20], [role28, NOT role15], t39, role2>
  trans = await instance.suAddCARule.sendTransaction(9, 20, 20, [29, -1 * 10], [39], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t25-t25], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t36, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [36], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t22-t22], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t34-t34], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t31-t31], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t18, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 31, 31, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t13-t13], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [10], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t16-t16], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [20, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [20], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t13-t13], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t30, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [30], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t38-t38], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t14, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 6, 6, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [14], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t24, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [24], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [25], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [26], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t11-t11], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [15], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [21], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [17, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [29], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t29-t29], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 29, 29, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [13], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t38-t38], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [20], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t13-t13], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [29], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t36-t36], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [4, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t36, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [36], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t37-t37], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [22], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [26], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [29], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t16-t16], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [20], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t22-t22], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [8, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t33, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [33], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [12], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t40-t40], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [27], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t35-t35], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [26, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [25], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [12], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t32, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 23, 23, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [32], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t36-t36], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t34-t34], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t33, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [33], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t38, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [6, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [38], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [21], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 12, 12, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t39-t39], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t25-t25], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [1, -1 * 5, -1 * 9, -1 * 2, -1 * 11], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t16-t16], [role23, NOT role6, NOT role8, NOT role22], t12, role24>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [26, -1 * 8, -1 * 6, -1 * 2], [12], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t29-t29], [role23, NOT role8, NOT role22, NOT role24], t25, role6>
  trans = await instance.suAddCARule.sendTransaction(11, 29, 29, [26, -1 * 6, -1 * 2, -1 * 11], [25], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t33-t33], [role23, NOT role8, NOT role22, NOT role24], t12, role6>
  trans = await instance.suAddCARule.sendTransaction(11, 33, 33, [26, -1 * 6, -1 * 2, -1 * 11], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t11-t11], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [26, -1 * 8, -1 * 2, -1 * 11], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t27-t27], [role23, NOT role6, NOT role22, NOT role24], t12, role8>
  trans = await instance.suAddCARule.sendTransaction(8, 27, 27, [26, -1 * 8, -1 * 2, -1 * 11], [12], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t37-t37], TRUE, t25, role6>
  trans = await instance.suAddCRRule.sendTransaction(0, 37, 37, [], [25], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t31-t31], TRUE, t11, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 31, 31, [], [11], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t29-t29], TRUE, t31, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 29, 29, [], [31], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t1-t1], TRUE, t32, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 1, 1, [], [32], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t22, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [22], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t26-t26], TRUE, t12, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 26, 26, [], [12], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t15-t15], TRUE, t21, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 15, 15, [], [21], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t23-t23], TRUE, t9, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 23, 23, [], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t27-t27], TRUE, t1, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 27, 27, [], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t24-t24], TRUE, t10, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 24, 24, [], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t25-t25], TRUE, t19, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 25, 25, [], [19], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t32, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 4, 4, [], [32], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t18, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 6, 6, [], [18], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t33-t33], TRUE, t33, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 33, 33, [], [33], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t22-t22], TRUE, t20, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 22, 22, [], [20], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t22, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 5, 5, [], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t28-t28], TRUE, t29, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 28, 28, [], [29], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t35-t35], TRUE, t11, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 35, 35, [], [11], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t17-t17], TRUE, t13, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 17, 17, [], [13], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t13-t13], TRUE, t40, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 13, 13, [], [40], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t12-t12], TRUE, t30, role32>
  trans = await instance.suAddCRRule.sendTransaction(8, 12, 12, [], [30], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t5-t5], TRUE, t5, role6>
  trans = await instance.suAddCRRule.sendTransaction(11, 5, 5, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t40-t40], TRUE, t26, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 40, 40, [], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t17-t17], TRUE, t10, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 17, 17, [], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t35-t35], TRUE, t23, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 35, 35, [], [23], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t36-t36], TRUE, t36, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 36, 36, [], [36], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t28-t28], TRUE, t6, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 28, 28, [], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t21-t21], TRUE, t15, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 21, 21, [], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t9-t9], TRUE, t30, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 9, 9, [], [30], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t37-t37], TRUE, t28, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 37, 37, [], [28], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t6-t6], TRUE, t37, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 6, 6, [], [37], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t30-t30], TRUE, t25, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 30, 30, [], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t27-t27], TRUE, t17, role8>
  trans = await instance.suAddCRRule.sendTransaction(8, 27, 27, [], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t29-t29], TRUE, t17, role28>
  trans = await instance.suAddCERule.sendTransaction(0, 29, 29, [], [17], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t28-t28], TRUE, t21, role7>
  trans = await instance.suAddCERule.sendTransaction(0, 28, 28, [], [21], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t12-t12], TRUE, t5, role28>
  trans = await instance.suAddCERule.sendTransaction(0, 12, 12, [], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t9-t9], TRUE, t36, role28>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [], [36], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA2Neg] <TRUE, [t38-t38], [NOT role14], t18, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 38, 38, [-1 * 24], [18], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA2Neg] <TRUE, [t9-t9], [NOT role14], t28, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 9, 9, [-1 * 24], [28], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA2Neg] <TRUE, [t35-t35], [NOT role14], t14, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 35, 35, [-1 * 24], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t23-t23], TRUE, t9, role32>
  trans = await instance.suAddCERule.sendTransaction(8, 23, 23, [], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t24-t24], TRUE, t10, role32>
  trans = await instance.suAddCERule.sendTransaction(8, 24, 24, [], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t4-t4], TRUE, t32, role32>
  trans = await instance.suAddCERule.sendTransaction(8, 4, 4, [], [32], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t22-t22], TRUE, t5, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t37-t37], TRUE, t2, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 37, 37, [], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t21-t21], TRUE, t19, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 21, 21, [], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t32-t32], TRUE, t21, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 32, 32, [], [21], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t13-t13], TRUE, t16, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 13, 13, [], [16], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t19-t19], TRUE, t30, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 19, 19, [], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t4-t4], TRUE, t6, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t22-t22], TRUE, t17, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t20-t20], TRUE, t24, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t22-t22], TRUE, t23, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [], [23], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t20-t20], TRUE, t33, role23>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [], [33], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t28-t28], TRUE, t32, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 28, 28, [], [32], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t14-t14], TRUE, t27, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 14, 14, [], [27], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t17-t17], TRUE, t30, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 17, 17, [], [30], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t2-t2], TRUE, t37, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [], [37], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t14-t14], TRUE, t37, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 14, 14, [], [37], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t9-t9], TRUE, t3, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 9, 9, [], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t2-t2], TRUE, t19, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [], [19], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t35-t35], TRUE, t32, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 35, 35, [], [32], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t17-t17], TRUE, t1, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 17, 17, [], [1], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t25-t25], [role23], t39, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 25, 25, [26], [39], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role23], t30, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [26], [30], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t4-t4], [role28], t29, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 4, 4, [29], [29], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t34-t34], [role28], t34, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 34, 34, [29], [34], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t11-t11], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCERule.sendTransaction(8, 11, 11, [26, -1 * 8, -1 * 2, -1 * 11], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t3-t3], TRUE, t14, role28>
  trans = await instance.suAddCDRule.sendTransaction(0, 3, 3, [], [14], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t38-t38], [role23, NOT role6, NOT role22, NOT role24], t26, role8>
  trans = await instance.suAddCDRule.sendTransaction(0, 38, 38, [26, -1 * 8, -1 * 2, -1 * 11], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t25-t25], TRUE, t19, role32>
  trans = await instance.suAddCDRule.sendTransaction(8, 25, 25, [], [19], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t3-t3], TRUE, t6, role4>
  trans = await instance.suAddCDRule.sendTransaction(2, 3, 3, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t4-t4], TRUE, t18, role4>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [], [18], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t27-t27], TRUE, t12, role23>
  trans = await instance.suAddCDRule.sendTransaction(2, 27, 27, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t24-t24], TRUE, t13, role23>
  trans = await instance.suAddCDRule.sendTransaction(2, 24, 24, [], [13], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t21-t21], TRUE, t4, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 21, 21, [], [4], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t36-t36], TRUE, t24, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 36, 36, [], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t8-t8], TRUE, t6, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 8, 8, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t32-t32], TRUE, t13, role7>
  trans = await instance.suAddCDRule.sendTransaction(2, 32, 32, [], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t8-t8], TRUE, t6, role7>
  trans = await instance.suAddCDRule.sendTransaction(2, 8, 8, [], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t16-t16], TRUE, t28, role21>
  trans = await instance.suAddCDRule.sendTransaction(2, 16, 16, [], [28], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX2Neg] <role2, [t33-t33], [NOT role14], t27, role32>
  trans = await instance.suAddCDRule.sendTransaction(5, 33, 33, [-1 * 24], [27], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t5-t5], [role14], t6, role30>
  trans = await instance.suAddCDRule.sendTransaction(6, 5, 5, [24], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t9-t9], [role23], t5, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 9, 9, [26], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t6-t6], [role23], t27, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 6, 6, [26], [27], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t27-t27], [role28], t38, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 27, 27, [29], [38], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t33-t33], [role23, NOT role8, NOT role22, NOT role24], t12, role6>
  trans = await instance.suAddCDRule.sendTransaction(11, 33, 33, [26, -1 * 6, -1 * 2, -1 * 11], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t27-t27], [role23, NOT role6, NOT role22, NOT role24], t12, role8>
  trans = await instance.suAddCDRule.sendTransaction(8, 27, 27, [26, -1 * 8, -1 * 2, -1 * 11], [12], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};