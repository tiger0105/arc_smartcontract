var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv07.mohawkT');
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
  // CanAssign [TA1Tru] <TRUE, [t25-t25], TRUE, t9, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [], [9], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t14-t14], TRUE, t27, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [], [27], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t14-t14], TRUE, t20, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [], [20], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t28-t28], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t16-t16], TRUE, t26, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [], [26], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t20, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t1, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t27, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [27], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t1-t1], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t18-t18], TRUE, t16, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [], [16], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t11, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [11], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t5-t5], TRUE, t19, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [], [19], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t2-t2], TRUE, t1, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t15-t15], TRUE, t30, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [], [30], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t18, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t23-t23], TRUE, t20, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t21, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [21], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t6-t6], TRUE, t11, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [], [11], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t15-t15], TRUE, t18, role4>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [], [18], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t21-t21], [NOT role14], t29, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [-1 * 23], [29], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t12-t12], [NOT role14], t1, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [-1 * 23], [1], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t2-t2], [NOT role32], t29, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [-1 * 14], [29], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t27-t27], [NOT role32], t18, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [-1 * 14], [18], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t17-t17], [NOT role32], t2, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [-1 * 14], [2], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t10-t10], [NOT role32], t30, role14>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [-1 * 14], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role6, role8], t4, role34>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [7, 5], [4], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role7], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [8], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role14], t18, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [23], [18], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role14], t16, role30>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [23], [16], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role14], t11, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [23], [11], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role14], t8, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [23], [8], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role14], t30, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [23], [30], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role14], t20, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [23], [20], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role14], t21, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [23], [21], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role17], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [21], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role14], t30, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [23], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role32], t28, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [14], [28], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role32], t19, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [14], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role32], t29, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [14], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role32], t2, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [14], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [28], [22], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role32], t17, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [14], [17], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role32], t14, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [14], [14], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role14], t1, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [23], [1], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role14], t30, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [23], [30], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role14], t4, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [23], [4], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role14], t28, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [23], [28], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role32], t24, role20>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [14], [24], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role14], t21, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [23], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role2], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [4], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role22], t28, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [2], [28], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role22], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [2], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role22], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [2], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role22], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [2], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role22], t24, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [2], [24], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role24], t25, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [10], [25], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role24], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [10], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role24], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [10], [22], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role24], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [10], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role7], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [8], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role7], t21, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [8], [21], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role7], t30, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [8], [30], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role28], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [29], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t27-t27], [role28], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [29], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role3], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [19], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role3], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [19], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role4], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [16], [30], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role22], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [2], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role6], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [7], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role6], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [7], [29], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role6], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [7], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role6], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [7], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role6], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [7], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role24], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [10], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role24], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [10], [23], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role23], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [25], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role8], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [5], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role12], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [1], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role12], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [1], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role3], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [19], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role3], t21, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [19], [21], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role22], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [2], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role22], t21, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [2], [21], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role22], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [2], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role22], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [2], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role21], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [26], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role21], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [26], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role6], t12, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [7], [12], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role6], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [7], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [7], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role6], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [7], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role23], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [25], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t12-t12], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t14-t14], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [25], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t29-t29], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [23], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t18, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [18], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t12-t12], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t11, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [11], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [19], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t26-t26], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t15-t15], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t16, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [16], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t16-t16], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [28], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t17-t17], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t30, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [30], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t18-t18], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role23, NOT role6, NOT role22, NOT role24], t17, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [25, -1 * 7, -1 * 2, -1 * 10], [17], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [25, -1 * 7, -1 * 2, -1 * 10], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t17, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [17], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t12, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [12], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t25, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [25], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t18, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [18], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t15, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [15], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t19, role23>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [19], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t26, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [26], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t5, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t8, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [8], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t9, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t10, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [10], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t28, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [28], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [6], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t22, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [22], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t23, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [23], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t24, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [24], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t29, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [29], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t11, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [11], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t25, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [25], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t30, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [30], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t7, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [7], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t12, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [12], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t13, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [13], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t4, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [4], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t6, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [6], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t16, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t25, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [25], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t26, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [26], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [8], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t29, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [29], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [7], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role2, [t2-t2], TRUE, t12, role7>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t9, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [9], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t12, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t13, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [13], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t10, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [10], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t14, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [14], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t19, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [19], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t28, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [28], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t5, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [5], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t27, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [27], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t23, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [23], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t30, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [30], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t8, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t15, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t23, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t12, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t3, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t24, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [24], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t25, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t8, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t9, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t18, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t10, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t27, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t13, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t28, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t27, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [27], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t12, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [12], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t17, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [17], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t23, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [23], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t18, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [18], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t13, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [13], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t18, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [18], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t15, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [15], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t30-t30], TRUE, t22, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 30, 30, [], [22], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [5], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t12, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t14, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [14], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t19, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [19], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t16, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [16], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t9, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [9], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t3, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [3], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t1, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [1], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t17, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [17], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t23, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [23], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t28, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [28], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t17, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [17], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t18, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [18], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t7, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [7], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t20, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [20], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t24, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [24], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t12, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [12], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t13, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [13], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t29-t29], TRUE, t25, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 29, 29, [], [25], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t29, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [29], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t9-t9], TRUE, t14, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 9, 9, [], [14], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t26, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [26], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t8-t8], TRUE, t8, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 8, 8, [], [8], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t21, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [21], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t22, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [22], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t15, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t30, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t7, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t1, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t11-t11], TRUE, t19, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 11, 11, [], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t27-t27], TRUE, t24, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 27, 27, [], [24], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t16, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t16-t16], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 16, 16, [], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t5, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t11, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t9, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 3, 3, [], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t17, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t22, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [22], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t23, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t25, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t6, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t7, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t29, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [29], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t8-t8], [NOT role14], t20, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [-1 * 23], [20], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t29-t29], [NOT role14], t5, role32>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [-1 * 23], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t9-t9], [NOT role32], t22, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 9, 9, [-1 * 14], [22], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t23-t23], [NOT role32], t12, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 23, 23, [-1 * 14], [12], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t30-t30], [NOT role32], t24, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 30, 30, [-1 * 14], [24], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t25-t25], [NOT role32], t23, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 25, 25, [-1 * 14], [23], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t18-t18], [NOT role32], t13, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 18, 18, [-1 * 14], [13], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t11-t11], [NOT role32], t14, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 11, 11, [-1 * 14], [14], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t21-t21], [NOT role32], t3, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 21, 21, [-1 * 14], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t13-t13], [NOT role32], t25, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 13, 13, [-1 * 14], [25], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t14-t14], [NOT role32], t15, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 14, 14, [-1 * 14], [15], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t8-t8], [NOT role32], t16, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 8, 8, [-1 * 14], [16], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t1-t1], [NOT role32], t17, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 1, 1, [-1 * 14], [17], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t28-t28], [NOT role32], t19, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 28, 28, [-1 * 14], [19], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role15, [t12-t12], [NOT role32], t20, role14>
  trans = await instance.suAddCARule.sendTransaction(9, 12, 12, [-1 * 14], [20], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role6, role8], t24, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 1, 1, [7, 5], [24], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t3-t3], [role6, role8], t5, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 3, 3, [7, 5], [5], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t13-t13], [role6, role8], t6, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 13, 13, [7, 5], [6], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t18-t18], [role6, role8], t26, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 18, 18, [7, 5], [26], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t9-t9], [role6, role8], t17, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 9, 9, [7, 5], [17], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t19-t19], [role6, role8], t11, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 19, 19, [7, 5], [11], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t2-t2], [role6, role8], t25, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 2, 2, [7, 5], [25], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t6-t6], [role6, role8], t9, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 6, 6, [7, 5], [9], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t21-t21], [role6, role8], t2, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 21, 21, [7, 5], [2], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t20-t20], [role6, role8], t21, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 20, 20, [7, 5], [21], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t12-t12], [role6, role8], t8, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 12, 12, [7, 5], [8], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t7-t7], [role6, role8], t3, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 7, 7, [7, 5], [3], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t4-t4], [role6, role8], t27, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 4, 4, [7, 5], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t5-t5], [role6, role8], t18, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 5, 5, [7, 5], [18], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t17-t17], [role6, role8], t28, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 17, 17, [7, 5], [28], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t10-t10], [role6, role8], t29, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 10, 10, [7, 5], [29], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t22-t22], [role6, role8], t30, role34>
  trans = await instance.suAddCARule.sendTransaction(3, 22, 22, [7, 5], [30], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t24, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [23], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role14], t4, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [23], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role14], t21, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [23], [21], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role14], t19, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [23], [19], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role14], t6, role30>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [23], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role14], t22, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [23], [22], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role14], t12, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [12], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t18, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [23], [18], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role14], t19, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [23], [19], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role14], t9, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [23], [9], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role14], t17, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [23], [17], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role14], t15, role17>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [23], [15], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role17], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [21], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t15, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [23], [15], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role14], t13, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [23], [13], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t29, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [23], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role14], t12, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [23], [12], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role14], t17, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [23], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role14], t14, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [23], [14], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role14], t25, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [23], [25], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role14], t2, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [23], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role14], t3, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [23], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role14], t16, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [23], [16], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role14], t11, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [23], [11], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role32], t27, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [14], [27], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role32], t23, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [14], [23], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role32], t7, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [14], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role32], t9, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [14], [9], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role32], t11, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [14], [11], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role32], t15, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [14], [15], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role32], t26, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [14], [26], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role32], t13, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [14], [13], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role32], t8, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [14], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role32], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [14], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t7-t7], [role29], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 7, 7, [28], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t9-t9], [role29], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 9, 9, [28], [6], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role29], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [28], [24], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role29], t11, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [28], [11], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t29-t29], [role14], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 29, 29, [23], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role14], t27, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [23], [27], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role14], t16, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [23], [16], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t16-t16], [role14], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 16, 16, [23], [25], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t23-t23], [role14], t30, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 23, 23, [23], [30], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role32], t12, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [14], [12], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role32], t1, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [14], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role32], t23, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [14], [23], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [14], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role32], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [14], [22], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [14], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t14-t14], [role14], t19, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [23], [19], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t3-t3], [role14], t29, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [23], [29], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t10-t10], [role14], t27, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [23], [27], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t26-t26], [role14], t9, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 26, 26, [23], [9], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t20-t20], [role14], t5, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [23], [5], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t24-t24], [role32], t30, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [14], [30], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role19, [t21-t21], [role32], t11, role20>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [14], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role14], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [23], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t29-t29], [role14], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 29, 29, [23], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role14], t24, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [23], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [14], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t25-t25], [role32], t10, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 25, 25, [14], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [14], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t16-t16], [role32], t17, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 16, 16, [14], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t27, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [14], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role2], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [4], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role2], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [4], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t23-t23], [role2], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 23, 23, [4], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t25-t25], [role2], t30, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 25, 25, [4], [30], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role22], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [2], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t23-t23], [role22], t7, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 23, 23, [2], [7], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role22], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [2], [22], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role22], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [2], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t6-t6], [role22], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [2], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role22], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [2], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role22], t25, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [2], [25], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role22], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [2], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role22], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [2], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t22-t22], [role22], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 22, 22, [2], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t21-t21], [role22], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 21, 21, [2], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role22], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [2], [27], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role22], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [2], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t25-t25], [role22], t20, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 25, 25, [2], [20], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t27-t27], [role22], t29, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 27, 27, [2], [29], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t9-t9], [role24], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [10], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role24], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [10], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role24], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 1, 1, [10], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role24], t4, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 7, 7, [10], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role24], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 17, 17, [10], [12], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t24-t24], [role24], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 24, 24, [10], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role24], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 30, 30, [10], [10], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role24], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [10], [11], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t28-t28], [role24], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [10], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t22-t22], [role24], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 22, 22, [10], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role24], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 16, 16, [10], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role24], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [10], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role24], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [10], [3], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role7], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 15, 15, [8], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role7], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [8], [2], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role7], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 2, 2, [8], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role7], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 30, 30, [8], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role7], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [8], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role7], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [8], [27], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t11-t11], [role7], t24, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 11, 11, [8], [24], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t13-t13], [role7], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 13, 13, [8], [17], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t27-t27], [role7], t29, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 27, 27, [8], [29], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t24-t24], [role7], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 24, 24, [8], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role7], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [8], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role3], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [19], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role3], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [19], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role3], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [19], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role3], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [19], [30], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role3], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [19], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [19], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role3], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [19], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role3], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role3], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [19], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [19], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role3], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [19], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role3], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [19], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role4], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [16], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role4], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [16], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role4], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [16], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role4], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [16], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [16], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role4], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [16], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role4], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role4], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [16], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [16], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role4], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [16], [29], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role4], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [16], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role4], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [16], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role4], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [16], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [16], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role4], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [16], [23], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role4], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [16], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role22], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [2], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role22], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [2], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role22], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [2], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [26], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [26], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role21], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [26], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role21], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 22, 22, [26], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role6], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [7], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role6], t24, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [7], [24], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role6], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [7], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [7], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role6], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [7], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [7], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role6], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [7], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role6], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [7], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role6], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [7], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role6], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [7], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role6], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 23, 23, [7], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role24], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [10], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role24], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [10], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role24], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [10], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role24], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [10], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role24], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [10], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role24], t24, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [10], [24], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [10], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role24], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [10], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role24], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [10], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role24], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [10], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role24], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [10], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role24], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [10], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role24], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [10], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role23], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [25], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role8], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [5], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role8], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [5], [8], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role8], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [5], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role8], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [5], [28], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role8], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [5], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role8], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [5], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role8], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [5], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role12], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [1], [30], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role12], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [1], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role3], t28, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19], [28], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [19], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role3], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [19], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role3], t2, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [19], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [19], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [19], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role3], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [19], [19], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role3], t27, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [19], [27], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role3], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [19], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t11, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [19], [11], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role3], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [19], [16], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role3], t3, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [19], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role3], t24, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [19], [24], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role3], t22, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [19], [22], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t5, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [19], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role3], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [19], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role4], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role22], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [2], [23], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role22], t28, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [2], [28], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role22], t22, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [2], [22], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t24, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [2], [24], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role22], t11, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [2], [11], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role22], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [2], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role22], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [2], [19], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [2], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role22], t15, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [2], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role22], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [2], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role22], t12, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [2], [12], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role22], t8, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [2], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [26], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role21], t20, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [26], [20], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role21], t27, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 10, 10, [26], [27], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role21], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [26], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role21], t17, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [26], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t30, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [7], [30], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role6], t10, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [7], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role6], t16, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [7], [16], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role6], t1, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [7], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role6], t29, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [7], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t7, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [7], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role6], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [7], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t19, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 3, 3, [7], [19], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [7], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role6], t9, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [7], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role24], t18, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [10], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role24], t28, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 11, 11, [10], [28], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role24], t13, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [10], [13], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role24], t25, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 12, 12, [10], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role24], t26, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 13, 13, [10], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t30, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25], [30], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role23], t4, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [25], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role23], t14, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 5, 5, [25], [14], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role23], t23, role19>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [25], [23], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [25], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t16-t16], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t14, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 16, 16, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [14], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [15], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t16, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [16], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [19, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t18, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [18], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [23], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t24, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [24], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t15-t15], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 15, 15, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [26], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 9, 9, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t6-t6], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 6, 6, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [22], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t25-t25], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [27], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t19-t19], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 19, 19, [16, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [28], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [26, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t30-t30], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [21], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 17, 17, [7, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t29-t29], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [29], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t14, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [14], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t30, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 26, 26, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [30], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 2, 2, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t8-t8], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 8, 8, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [15], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [23], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t24, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 18, 18, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [24], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t25-t25], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 25, 25, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [22], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [27], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t24-t24], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 24, 24, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [25, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [20], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [22], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [5, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [5], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 28, 28, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [22], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 7, 7, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 21, 21, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [20], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 1, 1, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [1], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t26, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 27, 27, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [26], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t4-t4], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 4, 4, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [2], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 14, 14, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t29-t29], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 29, 29, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [25], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t30-t30], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 30, 30, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [21], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(5, 20, 20, [1, -1 * 4, -1 * 8, -1 * 2, -1 * 10], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t20-t20], [role23, NOT role6, NOT role22, NOT role24], t30, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [25, -1 * 7, -1 * 2, -1 * 10], [30], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t11, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 5, 5, [25, -1 * 7, -1 * 2, -1 * 10], [11], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t19-t19], [role23, NOT role6, NOT role22, NOT role24], t6, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [25, -1 * 7, -1 * 2, -1 * 10], [6], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t18-t18], [role23, NOT role6, NOT role22, NOT role24], t12, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [25, -1 * 7, -1 * 2, -1 * 10], [12], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t27-t27], [role23, NOT role6, NOT role22, NOT role24], t13, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 27, 27, [25, -1 * 7, -1 * 2, -1 * 10], [13], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t1, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [25, -1 * 7, -1 * 2, -1 * 10], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t24-t24], [role23, NOT role6, NOT role22, NOT role24], t14, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 24, 24, [25, -1 * 7, -1 * 2, -1 * 10], [14], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t6-t6], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 6, 6, [25, -1 * 7, -1 * 2, -1 * 10], [5], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t15-t15], [role23, NOT role6, NOT role22, NOT role24], t16, role8>
  trans = await instance.suAddCARule.sendTransaction(7, 15, 15, [25, -1 * 7, -1 * 2, -1 * 10], [16], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t8, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t6-t6], TRUE, t9, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 6, 6, [], [9], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t30-t30], TRUE, t10, role32>
  trans = await instance.suAddCRRule.sendTransaction(0, 30, 30, [], [10], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t16-t16], TRUE, t11, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 16, 16, [], [11], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t21-t21], TRUE, t30, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 21, 21, [], [30], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t26-t26], TRUE, t2, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 26, 26, [], [2], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t2-t2], TRUE, t10, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 2, 2, [], [10], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t26-t26], TRUE, t28, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 26, 26, [], [28], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t28-t28], TRUE, t18, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 28, 28, [], [18], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t16-t16], TRUE, t14, role17>
  trans = await instance.suAddCRRule.sendTransaction(0, 16, 16, [], [14], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t6-t6], TRUE, t18, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 6, 6, [], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t11-t11], TRUE, t12, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 11, 11, [], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t12-t12], TRUE, t30, role18>
  trans = await instance.suAddCRRule.sendTransaction(0, 12, 12, [], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t6, role33>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t13-t13], TRUE, t8, role2>
  trans = await instance.suAddCRRule.sendTransaction(0, 13, 13, [], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t19-t19], TRUE, t24, role15>
  trans = await instance.suAddCRRule.sendTransaction(0, 19, 19, [], [24], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t29, role15>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [29], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t8-t8], TRUE, t26, role16>
  trans = await instance.suAddCRRule.sendTransaction(0, 8, 8, [], [26], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t29, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 4, 4, [], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t26, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 5, 5, [], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t6-t6], TRUE, t27, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 6, 6, [], [27], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t15-t15], TRUE, t4, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 15, 15, [], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t19-t19], TRUE, t6, role19>
  trans = await instance.suAddCRRule.sendTransaction(0, 19, 19, [], [6], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t25-t25], TRUE, t14, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 25, 25, [], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t28-t28], TRUE, t25, role10>
  trans = await instance.suAddCRRule.sendTransaction(0, 28, 28, [], [25], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t12-t12], TRUE, t29, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 12, 12, [], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t20-t20], TRUE, t23, role11>
  trans = await instance.suAddCRRule.sendTransaction(0, 20, 20, [], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t13-t13], TRUE, t18, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 13, 13, [], [18], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t11-t11], TRUE, t17, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 11, 11, [], [17], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t16-t16], TRUE, t12, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 16, 16, [], [12], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t18-t18], TRUE, t1, role25>
  trans = await instance.suAddCRRule.sendTransaction(0, 18, 18, [], [1], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t23-t23], TRUE, t25, role13>
  trans = await instance.suAddCRRule.sendTransaction(0, 23, 23, [], [25], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t7-t7], TRUE, t22, role13>
  trans = await instance.suAddCRRule.sendTransaction(0, 7, 7, [], [22], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t17-t17], TRUE, t14, role6>
  trans = await instance.suAddCRRule.sendTransaction(0, 17, 17, [], [14], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t9-t9], TRUE, t8, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 9, 9, [], [8], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t28-t28], TRUE, t24, role8>
  trans = await instance.suAddCRRule.sendTransaction(0, 28, 28, [], [24], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t25-t25], TRUE, t6, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 25, 25, [], [6], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t16-t16], TRUE, t5, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 16, 16, [], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t24-t24], TRUE, t11, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 24, 24, [], [11], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t15, role32>
  trans = await instance.suAddCRRule.sendTransaction(7, 1, 1, [], [15], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t29, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [29], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t1, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t8, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t9, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t7, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t22, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [22], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t24, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t23, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [23], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t6, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t22-t22], TRUE, t3, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 22, 22, [], [3], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t12, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t26, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [26], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t25, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [25], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t27, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [27], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t4, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t28, role30>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [28], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t23, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [23], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t10, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [10], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t19-t19], TRUE, t21, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 19, 19, [], [21], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t5, role17>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [5], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t13, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t16-t16], TRUE, t27, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 16, 16, [], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t17, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t11, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t19, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t14, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t26-t26], TRUE, t22, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 26, 26, [], [22], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t21, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t23, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [23], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t21-t21], TRUE, t15, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 21, 21, [], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t20, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t29, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [29], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t19-t19], TRUE, t17, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 19, 19, [], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t22, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t24, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [24], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t1, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t2, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t20, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [20], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t27, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [27], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t21, role18>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [21], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t16-t16], TRUE, t30, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 16, 16, [], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t3, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t7-t7], TRUE, t1, role14>
  trans = await instance.suAddCRRule.sendTransaction(7, 7, 7, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t16-t16], TRUE, t25, role20>
  trans = await instance.suAddCRRule.sendTransaction(6, 16, 16, [], [25], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t21-t21], TRUE, t13, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 21, 21, [], [13], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t29-t29], TRUE, t24, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 29, 29, [], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t22-t22], TRUE, t21, role33>
  trans = await instance.suAddCRRule.sendTransaction(1, 22, 22, [], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t22-t22], TRUE, t4, role5>
  trans = await instance.suAddCRRule.sendTransaction(7, 22, 22, [], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t3-t3], TRUE, t18, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 3, 3, [], [18], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t11-t11], TRUE, t4, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 11, 11, [], [4], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t16-t16], TRUE, t7, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 16, 16, [], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t14-t14], TRUE, t11, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 14, 14, [], [11], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t15-t15], TRUE, t30, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 15, 15, [], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t5-t5], TRUE, t3, role2>
  trans = await instance.suAddCRRule.sendTransaction(8, 5, 5, [], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t7, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t10, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [10], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t20, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [20], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t27, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [27], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t12, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [12], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t11, role15>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [11], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t20-t20], TRUE, t12, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 20, 20, [], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t19, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t10, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t14, role16>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t24-t24], TRUE, t25, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 24, 24, [], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t28-t28], TRUE, t10, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 28, 28, [], [10], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t18, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [18], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t5, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [5], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t17, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t21, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [21], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t28, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [28], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t14, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [14], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t22-t22], TRUE, t30, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 22, 22, [], [30], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t3, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t13, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [13], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t1, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [1], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t23-t23], TRUE, t2, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 23, 23, [], [2], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t9, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [9], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t8, role19>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t24, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [24], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t22, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t2, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t19, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [19], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t15, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [15], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t16, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [16], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t20, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [20], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t26, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [26], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t21, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [21], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t17, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [17], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t9-t9], TRUE, t18, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 9, 9, [], [18], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t29-t29], TRUE, t27, role10>
  trans = await instance.suAddCRRule.sendTransaction(5, 29, 29, [], [27], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t1, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 5, 5, [], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t8, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [8], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t13-t13], TRUE, t17, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 13, 13, [], [17], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t21-t21], TRUE, t5, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 21, 21, [], [5], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t11-t11], TRUE, t3, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 11, 11, [], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t28, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t18, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [18], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t22-t22], TRUE, t11, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 22, 22, [], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t16-t16], TRUE, t6, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 16, 16, [], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t20, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t9, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 18, 18, [], [9], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t7, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [7], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t12, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t19-t19], TRUE, t10, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 19, 19, [], [10], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t6-t6], TRUE, t30, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 6, 6, [], [30], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t4, role11>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t7, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 12, 12, [], [7], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t9, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 2, 2, [], [9], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t10, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 1, 1, [], [10], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t25-t25], TRUE, t15, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 25, 25, [], [15], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t11, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [11], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t7-t7], TRUE, t3, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 7, 7, [], [3], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t10-t10], TRUE, t4, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 10, 10, [], [4], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t19-t19], TRUE, t29, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 19, 19, [], [29], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t25, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [25], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t21, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [21], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t30-t30], TRUE, t30, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 30, 30, [], [30], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t23, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 3, 3, [], [23], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t19, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 4, 4, [], [19], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t20-t20], TRUE, t28, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 20, 20, [], [28], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t21-t21], TRUE, t2, role25>
  trans = await instance.suAddCRRule.sendTransaction(5, 21, 21, [], [2], 32,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t14-t14], TRUE, t26, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 14, 14, [], [26], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t27-t27], TRUE, t3, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 27, 27, [], [3], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t19, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 15, 15, [], [19], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t17-t17], TRUE, t4, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 17, 17, [], [4], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t8-t8], TRUE, t20, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 8, 8, [], [20], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t22-t22], TRUE, t21, role26>
  trans = await instance.suAddCRRule.sendTransaction(5, 22, 22, [], [21], 31,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t14-t14], TRUE, t2, role23>
  trans = await instance.suAddCRRule.sendTransaction(2, 14, 14, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t22-t22], TRUE, t21, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 22, 22, [], [21], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t21-t21], TRUE, t16, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 21, 21, [], [16], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t6-t6], TRUE, t7, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 6, 6, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t9-t9], TRUE, t10, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 9, 9, [], [10], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t8-t8], TRUE, t23, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 8, 8, [], [23], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t26, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 3, 3, [], [26], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t27-t27], TRUE, t27, role13>
  trans = await instance.suAddCRRule.sendTransaction(2, 27, 27, [], [27], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t23-t23], TRUE, t21, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 23, 23, [], [21], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t26-t26], TRUE, t15, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 26, 26, [], [15], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t24-t24], TRUE, t19, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 24, 24, [], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t12-t12], TRUE, t12, role24>
  trans = await instance.suAddCRRule.sendTransaction(2, 12, 12, [], [12], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t4-t4], TRUE, t3, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 4, 4, [], [3], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t3-t3], TRUE, t29, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 3, 3, [], [29], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t6-t6], TRUE, t8, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 6, 6, [], [8], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t1-t1], TRUE, t19, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 1, 1, [], [19], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t16-t16], TRUE, t24, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 16, 16, [], [24], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t18-t18], TRUE, t15, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 18, 18, [], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t21-t21], TRUE, t21, role6>
  trans = await instance.suAddCRRule.sendTransaction(10, 21, 21, [], [21], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t11-t11], TRUE, t7, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 11, 11, [], [7], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t13-t13], TRUE, t19, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 13, 13, [], [19], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t8-t8], TRUE, t10, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 8, 8, [], [10], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t10-t10], TRUE, t13, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 10, 10, [], [13], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t12-t12], TRUE, t23, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 12, 12, [], [23], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t14-t14], TRUE, t29, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 14, 14, [], [29], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t1, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 4, 4, [], [1], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t3, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 5, 5, [], [3], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t30, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 3, 3, [], [30], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t17-t17], TRUE, t12, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 17, 17, [], [12], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t18-t18], TRUE, t2, role8>
  trans = await instance.suAddCRRule.sendTransaction(7, 18, 18, [], [2], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t7-t7], TRUE, t8, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 7, 7, [], [8], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t6-t6], TRUE, t9, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 6, 6, [], [9], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t30-t30], TRUE, t10, role32>
  trans = await instance.suAddCERule.sendTransaction(0, 30, 30, [], [10], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t1-t1], TRUE, t2, role2>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [], [2], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t26-t26], TRUE, t28, role17>
  trans = await instance.suAddCERule.sendTransaction(0, 26, 26, [], [28], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t28-t28], TRUE, t18, role17>
  trans = await instance.suAddCERule.sendTransaction(0, 28, 28, [], [18], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t1-t1], TRUE, t1, role21>
  trans = await instance.suAddCERule.sendTransaction(0, 1, 1, [], [1], 26,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t11-t11], TRUE, t12, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 11, 11, [], [12], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t13-t13], TRUE, t20, role22>
  trans = await instance.suAddCERule.sendTransaction(0, 13, 13, [], [20], 2,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t28-t28], TRUE, t9, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 28, 28, [], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t6-t6], TRUE, t7, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 6, 6, [], [7], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t22, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 1, 1, [], [22], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t7-t7], TRUE, t24, role30>
  trans = await instance.suAddCERule.sendTransaction(5, 7, 7, [], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t10-t10], TRUE, t21, role16>
  trans = await instance.suAddCERule.sendTransaction(5, 10, 10, [], [21], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t29-t29], TRUE, t2, role18>
  trans = await instance.suAddCERule.sendTransaction(5, 29, 29, [], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t21-t21], TRUE, t13, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 21, 21, [], [13], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t2-t2], [role28], t13, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [29], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t24-t24], [role28], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [29], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t27-t27], [role28], t28, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 27, 27, [29], [28], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role7, [t3-t3], [role28, NOT role15], t21, role2>
  trans = await instance.suAddCERule.sendTransaction(8, 3, 3, [29, -1 * 9], [21], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role7, [t5-t5], [role28, NOT role15], t30, role2>
  trans = await instance.suAddCERule.sendTransaction(8, 5, 5, [29, -1 * 9], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role7, [t18-t18], [role28, NOT role15], t27, role2>
  trans = await instance.suAddCERule.sendTransaction(8, 18, 18, [29, -1 * 9], [27], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role7, [t19-t19], [role28, NOT role15], t12, role2>
  trans = await instance.suAddCERule.sendTransaction(8, 19, 19, [29, -1 * 9], [12], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t22-t22], [role23, NOT role6, NOT role8, NOT role22], t28, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [25, -1 * 7, -1 * 5, -1 * 2], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t30-t30], [role23, NOT role6, NOT role8, NOT role22], t14, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 30, 30, [25, -1 * 7, -1 * 5, -1 * 2], [14], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t24-t24], [role23, NOT role6, NOT role8, NOT role22], t1, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [25, -1 * 7, -1 * 5, -1 * 2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t7-t7], [role23, NOT role6, NOT role8, NOT role22], t29, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 7, 7, [25, -1 * 7, -1 * 5, -1 * 2], [29], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t19-t19], [role23, NOT role8, NOT role22, NOT role24], t19, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 19, 19, [25, -1 * 5, -1 * 2, -1 * 10], [19], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t14-t14], [role23, NOT role8, NOT role22, NOT role24], t28, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 14, 14, [25, -1 * 5, -1 * 2, -1 * 10], [28], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t2-t2], [role23, NOT role8, NOT role22, NOT role24], t15, role6>
  trans = await instance.suAddCERule.sendTransaction(10, 2, 2, [25, -1 * 5, -1 * 2, -1 * 10], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t20-t20], [role23, NOT role6, NOT role22, NOT role24], t30, role8>
  trans = await instance.suAddCERule.sendTransaction(7, 20, 20, [25, -1 * 7, -1 * 2, -1 * 10], [30], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t7-t7], TRUE, t6, role33>
  trans = await instance.suAddCDRule.sendTransaction(0, 7, 7, [], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t20-t20], [role7, NOT role15], t20, role2>
  trans = await instance.suAddCDRule.sendTransaction(0, 20, 20, [8, -1 * 9], [20], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t15-t15], [role23, NOT role6, NOT role8, NOT role22], t24, role24>
  trans = await instance.suAddCDRule.sendTransaction(0, 15, 15, [25, -1 * 7, -1 * 5, -1 * 2], [24], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t16-t16], TRUE, t5, role32>
  trans = await instance.suAddCDRule.sendTransaction(7, 16, 16, [], [5], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t29-t29], TRUE, t26, role30>
  trans = await instance.suAddCDRule.sendTransaction(5, 29, 29, [], [26], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t13-t13], TRUE, t25, role30>
  trans = await instance.suAddCDRule.sendTransaction(5, 13, 13, [], [25], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t23-t23], TRUE, t27, role30>
  trans = await instance.suAddCDRule.sendTransaction(5, 23, 23, [], [27], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t24-t24], TRUE, t10, role17>
  trans = await instance.suAddCDRule.sendTransaction(5, 24, 24, [], [10], 21,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t23-t23], TRUE, t13, role16>
  trans = await instance.suAddCDRule.sendTransaction(5, 23, 23, [], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t27-t27], TRUE, t22, role18>
  trans = await instance.suAddCDRule.sendTransaction(5, 27, 27, [], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t3-t3], TRUE, t3, role14>
  trans = await instance.suAddCDRule.sendTransaction(7, 3, 3, [], [3], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role7, [t15-t15], TRUE, t30, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 15, 15, [], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role7, [t15-t15], [role7, NOT role15], t13, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 15, 15, [8, -1 * 9], [13], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role7, [t19-t19], [role7, NOT role15], t14, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 19, 19, [8, -1 * 9], [14], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role7, [t10-t10], [role7, NOT role15], t16, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 10, 10, [8, -1 * 9], [16], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role7, [t21-t21], [role7, NOT role15], t3, role2>
  trans = await instance.suAddCDRule.sendTransaction(8, 21, 21, [8, -1 * 9], [3], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role22, [t26-t26], [role23, NOT role6, NOT role8, NOT role22], t2, role24>
  trans = await instance.suAddCDRule.sendTransaction(2, 26, 26, [25, -1 * 7, -1 * 5, -1 * 2], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};