var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
   console.log('Running D:/Work/Masters_Phd/workspace (GradSchool)/atrbac-policy-to-solidity-smart-contract/data/mohawkT/ranise/testsuitec/univ/AGTUniv10.mohawkT');
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
  trans = await instance.suAddNewRole.sendTransaction('role24', { from: su });
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
  trans = await instance.suAddNewRole.sendTransaction('role15', { from: su });
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
  // CanAssign [TA1Tru] <TRUE, [t12-t12], TRUE, t31, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [], [31], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t31-t31], TRUE, t34, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [], [34], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t20, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [20], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t11-t11], TRUE, t6, role28>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [], [6], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t7-t7], TRUE, t36, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [], [36], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t31-t31], TRUE, t27, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t32-t32], TRUE, t40, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [], [40], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t34, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [34], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t9-t9], TRUE, t22, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [], [22], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t13, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [13], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t29-t29], TRUE, t5, role7>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [], [5], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t22-t22], TRUE, t13, role21>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [], [13], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t22-t22], TRUE, t26, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [], [26], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t14-t14], TRUE, t12, role3>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [], [12], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t3-t3], TRUE, t4, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [], [4], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA1Tru] <TRUE, [t4-t4], TRUE, t38, role23>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [], [38], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [TA2Neg] <TRUE, [t2-t2], [NOT role14], t6, role32>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [-1 * 21], [6], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role14], t4, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [21], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role14], t1, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [21], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role14], t27, role17>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [21], [27], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role17], t31, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [18], [31], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role17], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [18], [21], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role17], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [18], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role17], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [18], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t37-t37], [role14], t27, role18>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [21], [27], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role29], t30, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [26], [30], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role29], t23, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [26], [23], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role29], t24, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [26], [24], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t37-t37], [role29], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [26], [28], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role29], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [26], [20], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t36-t36], [role29], t33, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [26], [33], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role14], t15, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [21], [15], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t36-t36], [role14], t10, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [21], [10], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role14], t6, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [21], [6], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role14], t38, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [21], [38], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role14], t12, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [21], [12], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role14], t35, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [21], [35], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t25-t25], [role32], t13, role27>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [11], [13], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t40-t40], [role14], t6, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [21], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t23-t23], [role32], t36, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 23, 23, [11], [36], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role32], t27, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [11], [27], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t32-t32], [role32], t40, role33>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [11], [40], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role2], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [3], [27], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t35-t35], [role2], t29, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [3], [29], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t32-t32], [role2], t19, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [3], [19], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t28-t28], [role2], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 28, 28, [3], [13], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t39-t39], [role2], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [3], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role22], t2, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [2], [2], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t39-t39], [role22], t35, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [2], [35], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role22], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [2], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role22], t1, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [2], [1], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role22], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [2], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role24], t40, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [8], [40], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role24], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [8], [12], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role24], t33, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [8], [33], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role24], t13, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [8], [13], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role7], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [7], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role28], t15, role5>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [27], [15], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role3], t34, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [16], [34], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role3], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [16], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role3], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [16], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role4], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [13], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role22], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [2], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role21], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [24], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role21], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [24], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t10-t10], [role21], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [24], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role21], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [24], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role21], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [24], [22], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role21], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [24], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t40-t40], [role21], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [24], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role21], t20, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [24], [20], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role6], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [6], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role6], t24, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [6], [24], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t12-t12], [role6], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 12, 12, [6], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t24-t24], [role24], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [8], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role24], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [8], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role23], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [23], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t35-t35], [role8], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [4], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t16-t16], [role8], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [4], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role8], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [4], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role8], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [4], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t32-t32], [role12], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [1], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role12], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [1], [21], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role12], t32, role16>
  trans = await instance.suAddCARule.sendTransaction(0, 3, 3, [1], [32], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t29-t29], [role4], t31, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [13], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t40-t40], [role4], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 40, 40, [13], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role4], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [13], [29], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t37-t37], [role4], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 37, 37, [13], [32], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role6], t39, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [6], [39], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t9-t9], [role8], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 9, 9, [4], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role8], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [4], [32], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t26-t26], [role8], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [4], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t36-t36], [role8], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 36, 36, [4], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t33-t33], [role9], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [31], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role9], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [31], [25], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role9], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [31], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t31-t31], [role9], t40, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 31, 31, [31], [40], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t7-t7], [role9], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [31], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t38-t38], [role9], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 38, 38, [31], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t14-t14], [role12], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [1], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role12], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [1], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role12], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [1], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t35-t35], [role21], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [24], [11], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role21], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [24], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role21], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [24], [15], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role24], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [8], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t34-t34], [role24], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 34, 34, [8], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role23], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [23], [23], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role23], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t17-t17], [role23], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 17, 17, [23], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role23], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [23], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t18-t18], [role23], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 18, 18, [23], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t19-t19], [role23], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [23], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t15-t15], [role23], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 15, 15, [23], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role28], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [27], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t32-t32], [role22], t23, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [2], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t30-t30], [role22], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 30, 30, [2], [30], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t13-t13], [role6], t18, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 13, 13, [6], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t6-t6], [role6], t13, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [6], [13], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t11-t11], [role23], t6, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t8-t8], [role23], t4, role22>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [23], [4], 2,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t22-t22], [role23], t8, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [23], [8], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role23], t2, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 5, 5, [23], [2], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t20-t20], [role12], t16, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [1], [16], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t21-t21], [role12], t3, role11>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [1], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t20-t20], [role22, NOT role15], t13, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 20, 20, [2, -1 * 20], [13], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t21-t21], [role22, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 21, 21, [2, -1 * 20], [20], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t22-t22], [role24, NOT role15], t39, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 22, 22, [8, -1 * 20], [39], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t35-t35], [role24, NOT role15], t22, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [8, -1 * 20], [22], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role24, NOT role15], t26, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [8, -1 * 20], [26], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t24-t24], [role24, NOT role15], t20, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 24, 24, [8, -1 * 20], [20], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role24, NOT role15], t16, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [8, -1 * 20], [16], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t14-t14], [role7, NOT role15], t30, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 14, 14, [7, -1 * 20], [30], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t7-t7], [role7, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(0, 7, 7, [7, -1 * 20], [7], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [28], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t39-t39], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 39, 39, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t38, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [38], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t39, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [39], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t25-t25], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t34, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [34], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t31, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 1, 1, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [31], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t16-t16], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t10, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 16, 16, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [10], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t32-t32], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t40, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 32, 32, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [40], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t8-t8], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t7, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 8, 8, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t32, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [32], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t38-t38], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 38, 38, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [9], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t33-t33], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t15, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 33, 33, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [15], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t10-t10], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 10, 10, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [12], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t21, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [21], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t23, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 2, 2, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [23], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t6-t6], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 6, 6, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [3], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t19-t19], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 19, 19, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t27-t27], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 27, 27, [4, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [12], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t11-t11], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t35, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 11, 11, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [35], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t34, role15>
  trans = await instance.suAddCARule.sendTransaction(0, 4, 4, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [34], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t35-t35], [role23, NOT role8, NOT role22, NOT role24], t7, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 35, 35, [23, -1 * 4, -1 * 2, -1 * 8], [7], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t25-t25], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.suAddCARule.sendTransaction(0, 25, 25, [23, -1 * 4, -1 * 2, -1 * 8], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t26-t26], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 26, 26, [23, -1 * 6, -1 * 2, -1 * 8], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t29-t29], [role23, NOT role6, NOT role22, NOT role24], t7, role8>
  trans = await instance.suAddCARule.sendTransaction(0, 29, 29, [23, -1 * 6, -1 * 2, -1 * 8], [7], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t30, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [30], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t26-t26], TRUE, t32, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 26, 26, [], [32], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t34, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [34], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t32-t32], TRUE, t31, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 32, 32, [], [31], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t9, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [9], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t38, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [38], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t3, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [3], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t33-t33], TRUE, t35, role28>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [], [35], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t10, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 2, 2, [], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t38-t38], TRUE, t32, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [], [32], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t14, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [14], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t40-t40], TRUE, t31, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 40, 40, [], [31], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t38, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [38], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t34-t34], TRUE, t24, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 34, 34, [], [24], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t35-t35], TRUE, t28, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 35, 35, [], [28], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t15, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 1, 1, [], [15], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t39-t39], TRUE, t7, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 39, 39, [], [7], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t36-t36], TRUE, t11, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 36, 36, [], [11], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t12, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [12], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t33, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [33], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t33-t33], TRUE, t30, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [], [30], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t8, role7>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [8], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t18, role21>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [18], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t24-t24], TRUE, t2, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 24, 24, [], [2], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t38, role3>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [38], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t28-t28], TRUE, t22, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 28, 28, [], [22], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t12-t12], TRUE, t20, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 12, 12, [], [20], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t25-t25], TRUE, t27, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 25, 25, [], [27], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t31-t31], TRUE, t33, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 31, 31, [], [33], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t33-t33], TRUE, t32, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 33, 33, [], [32], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t23, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 4, 4, [], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t13-t13], TRUE, t1, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 13, 13, [], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t22-t22], TRUE, t40, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 22, 22, [], [40], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t10-t10], TRUE, t24, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 10, 10, [], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t28, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 5, 5, [], [28], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t35-t35], TRUE, t11, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 35, 35, [], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t38-t38], TRUE, t12, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 38, 38, [], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t20-t20], TRUE, t35, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 20, 20, [], [35], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role2, [t9-t9], TRUE, t23, role4>
  trans = await instance.suAddCARule.sendTransaction(3, 9, 9, [], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t17-t17], TRUE, t3, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 17, 17, [], [3], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t40-t40], TRUE, t4, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 40, 40, [], [4], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t18-t18], TRUE, t13, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 18, 18, [], [13], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t6-t6], TRUE, t19, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 6, 6, [], [19], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t15-t15], TRUE, t14, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 15, 15, [], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t7-t7], TRUE, t6, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 7, 7, [], [6], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t23-t23], TRUE, t15, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 23, 23, [], [15], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t19-t19], TRUE, t2, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 19, 19, [], [2], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t21-t21], TRUE, t26, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 21, 21, [], [26], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t14-t14], TRUE, t21, role4>
  trans = await instance.suAddCARule.sendTransaction(2, 14, 14, [], [21], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t29-t29], [NOT role14], t16, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 29, 29, [-1 * 21], [16], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t6-t6], [NOT role14], t27, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 6, 6, [-1 * 21], [27], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t4-t4], [NOT role14], t10, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 4, 4, [-1 * 21], [10], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t22-t22], [NOT role14], t15, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 22, 22, [-1 * 21], [15], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t40-t40], [NOT role14], t13, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 40, 40, [-1 * 21], [13], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX2Neg] <role2, [t18-t18], [NOT role14], t7, role32>
  trans = await instance.suAddCARule.sendTransaction(3, 18, 18, [-1 * 21], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role14], t33, role30>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [21], [33], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role14], t25, role30>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [21], [25], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role14], t10, role30>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [21], [10], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role14], t38, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [21], [38], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role14], t18, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [21], [18], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t13, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [21], [13], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t21, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [21], [21], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role14], t20, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [21], [20], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t5, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [21], [5], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role14], t14, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [21], [14], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t6, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [21], [6], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role14], t16, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [21], [16], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role14], t19, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [21], [19], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role14], t30, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [21], [30], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role14], t22, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [21], [22], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role14], t23, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [21], [23], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role14], t15, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [21], [15], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role14], t39, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [21], [39], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role14], t26, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [21], [26], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role14], t29, role17>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [21], [29], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role17], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [18], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role17], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [18], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role17], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [18], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role17], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [18], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role17], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [18], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role17], t25, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [18], [25], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role17], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [18], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role17], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [18], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role17], t32, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [18], [32], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role17], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [18], [22], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role17], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [18], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role17], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [18], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role17], t38, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [18], [38], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role17], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [18], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role17], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [18], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role17], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 32, 32, [18], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role17], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [18], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role17], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [18], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role17], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [18], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role7, [t4-t4], [role9], t23, role4>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [31], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role14], t29, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [21], [29], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role14], t23, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [21], [23], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role14], t24, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [21], [24], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role14], t9, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 32, 32, [21], [9], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t4, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [21], [4], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role14], t25, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [21], [25], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role14], t34, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [21], [34], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role14], t22, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [21], [22], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role14], t20, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [21], [20], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role14], t11, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [21], [11], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role14], t26, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [21], [26], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role14], t40, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [21], [40], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role14], t31, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [21], [31], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role32], t39, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [11], [39], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role32], t1, role18>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [11], [1], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role29], t32, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [26], [32], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role29], t22, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [26], [22], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t6-t6], [role29], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 6, 6, [26], [25], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t33-t33], [role29], t26, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 33, 33, [26], [26], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role29], t36, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [26], [36], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t32-t32], [role29], t40, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 32, 32, [26], [40], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t38-t38], [role29], t3, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 38, 38, [26], [3], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t30-t30], [role29], t27, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 30, 30, [26], [27], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role29], t9, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [26], [9], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role29], t31, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [26], [31], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t34-t34], [role29], t4, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 34, 34, [26], [4], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t19-t19], [role29], t35, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 19, 19, [26], [35], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role29], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [26], [18], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t39-t39], [role29], t21, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 39, 39, [26], [21], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t35-t35], [role29], t34, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 35, 35, [26], [34], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role29], t29, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [26], [29], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role14], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [21], [25], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role14], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [21], [20], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role14], t2, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [21], [2], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t34-t34], [role14], t39, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 34, 34, [21], [39], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t19-t19], [role14], t8, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 19, 19, [21], [8], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t25-t25], [role14], t34, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 25, 25, [21], [34], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role14], t5, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [21], [5], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role14], t30, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [21], [30], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role14], t31, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [21], [31], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role14], t33, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [21], [33], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t35-t35], [role14], t37, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 35, 35, [21], [37], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role14], t18, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [21], [18], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t38-t38], [role32], t20, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 38, 38, [11], [20], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role32], t25, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [11], [25], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t19-t19], [role32], t28, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 19, 19, [11], [28], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t20-t20], [role32], t33, role27>
  trans = await instance.suAddCARule.sendTransaction(1, 20, 20, [11], [33], 28,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role14], t23, role4>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [21], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t27-t27], [role14], t29, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 27, 27, [21], [29], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t18-t18], [role14], t7, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 18, 18, [21], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t40-t40], [role32], t23, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 40, 40, [11], [23], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t36-t36], [role32], t15, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 36, 36, [11], [15], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t33-t33], [role32], t20, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 33, 33, [11], [20], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t17-t17], [role32], t16, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 17, 17, [11], [16], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t26-t26], [role32], t33, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 26, 26, [11], [33], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t21-t21], [role32], t24, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 21, 21, [11], [24], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t28-t28], [role32], t17, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 28, 28, [11], [17], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t11-t11], [role32], t14, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 11, 11, [11], [14], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t1-t1], [role32], t39, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 1, 1, [11], [39], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t2-t2], [role32], t18, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 2, 2, [11], [18], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t37-t37], [role32], t28, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 37, 37, [11], [28], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role32], t34, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [11], [34], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t14-t14], [role32], t23, role4>
  trans = await instance.suAddCARule.sendTransaction(1, 14, 14, [11], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t12-t12], [role32], t8, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 12, 12, [11], [8], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t31-t31], [role32], t6, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 31, 31, [11], [6], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t29-t29], [role32], t3, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 29, 29, [11], [3], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t13-t13], [role32], t25, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 13, 13, [11], [25], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t15-t15], [role32], t29, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 15, 15, [11], [29], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t22-t22], [role32], t13, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 22, 22, [11], [13], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t3-t3], [role32], t19, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 3, 3, [11], [19], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t10-t10], [role32], t4, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 10, 10, [11], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t4-t4], [role32], t7, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 4, 4, [11], [7], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role12, [t24-t24], [role32], t9, role33>
  trans = await instance.suAddCARule.sendTransaction(1, 24, 24, [11], [9], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t13-t13], [role2], t18, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [3], [18], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t7-t7], [role2], t34, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 7, 7, [3], [34], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t33-t33], [role2], t36, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [3], [36], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role2], t39, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [3], [39], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role2], t35, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [3], [35], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t14-t14], [role2], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [3], [11], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role2], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [3], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role2], t33, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [3], [33], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t36-t36], [role2], t20, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 36, 36, [3], [20], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t8-t8], [role2], t12, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 8, 8, [3], [12], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t18-t18], [role2], t37, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 18, 18, [3], [37], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role2], t38, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [3], [38], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t34-t34], [role2], t21, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [3], [21], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t37-t37], [role2], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 37, 37, [3], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role2], t5, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [3], [5], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t21-t21], [role2], t8, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [3], [8], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t22-t22], [role2], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 22, 22, [3], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t38-t38], [role2], t16, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [3], [16], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role2], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [3], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t40-t40], [role2], t6, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [3], [6], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t16-t16], [role22], t30, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 16, 16, [2], [30], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role22], t29, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [2], [29], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t40-t40], [role22], t38, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [2], [38], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t32-t32], [role22], t17, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [2], [17], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t1-t1], [role22], t24, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 1, 1, [2], [24], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t10-t10], [role24], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 10, 10, [8], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t17-t17], [role24], t11, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 17, 17, [8], [11], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t3-t3], [role24], t28, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 3, 3, [8], [28], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role24], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [8], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t2-t2], [role24], t31, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 2, 2, [8], [31], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t15-t15], [role24], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 15, 15, [8], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t32-t32], [role24], t34, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 32, 32, [8], [34], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role24], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [8], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t24-t24], [role7], t10, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 24, 24, [7], [10], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t40-t40], [role7], t9, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 40, 40, [7], [9], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t19-t19], [role28], t14, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [27], [14], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t38-t38], [role28], t23, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 38, 38, [27], [23], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t39-t39], [role28], t22, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 39, 39, [27], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t20-t20], [role28], t37, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 20, 20, [27], [37], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t5-t5], [role28], t34, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 5, 5, [27], [34], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t34-t34], [role28], t3, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [27], [3], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t21-t21], [role28], t33, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [27], [33], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t25-t25], [role28], t27, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 25, 25, [27], [27], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t35-t35], [role28], t30, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [27], [30], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role6, [t30-t30], [role28], t35, role5>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [27], [35], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role3], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [16], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role3], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [16], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role3], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [16], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role3], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [16], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [16], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role3], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [16], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role3], t12, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [16], [12], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role3], t38, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [16], [38], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role3], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [16], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role3], t35, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [16], [35], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role3], t39, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [16], [39], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role3], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [16], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role4], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [13], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role4], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [13], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role4], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [13], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role4], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [13], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role4], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [13], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role4], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [13], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role4], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [13], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role4], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [13], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t22, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [13], [22], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role4], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [13], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [13], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role4], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [13], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role4], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [13], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role22], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [2], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role22], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [2], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role22], t24, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [2], [24], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role21], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [24], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role21], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [24], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role21], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [24], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role21], t3, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [24], [3], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role21], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [24], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [24], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [24], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role21], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [24], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role21], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [24], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role21], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [24], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [24], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role21], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [24], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role21], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [24], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role6], t32, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [6], [32], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role6], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [6], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role6], t31, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [6], [31], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role6], t8, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [6], [8], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role6], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [6], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role6], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [6], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role6], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [6], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role6], t35, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [6], [35], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role6], t9, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [6], [9], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role6], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [6], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role6], t16, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [6], [16], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role6], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [6], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role6], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [6], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role6], t21, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [6], [21], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role6], t34, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [6], [34], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role6], t11, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [6], [11], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role6], t26, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [6], [26], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role6], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [6], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [6], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [6], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role6], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 10, 10, [6], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role6], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [6], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role24], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [8], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role24], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [8], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role24], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [8], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role24], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [8], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role24], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [8], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role24], t39, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [8], [39], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role24], t31, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [8], [31], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role24], t15, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [8], [15], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role24], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [8], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role23], t14, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [23], [14], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role23], t38, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [23], [38], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role23], t17, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [23], [17], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role23], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [23], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role23], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [23], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role23], t39, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [23], [39], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role23], t29, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [23], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role23], t1, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [23], [1], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role23], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [23], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role23], t13, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [23], [13], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role23], t18, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [23], [18], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [23], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role23], t4, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [23], [4], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role23], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [23], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role23], t34, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [23], [34], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role8], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [4], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role8], t30, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [4], [30], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role8], t33, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [4], [33], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role8], t5, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [4], [5], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role8], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [4], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role8], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [4], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role8], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [4], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role8], t2, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [4], [2], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role12], t37, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [1], [37], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t23, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [1], [23], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role12], t27, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [1], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role12], t35, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 10, 10, [1], [35], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role12], t10, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [1], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role12], t6, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [1], [6], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role12], t28, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [1], [28], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role12], t36, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [1], [36], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t19, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [1], [19], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role12], t40, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [1], [40], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role12], t7, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [1], [7], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role12], t38, role16>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [1], [38], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role4], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [13], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role4], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [13], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role4], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [13], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role4], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [13], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role4], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [13], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role4], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [13], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role4], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [13], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role4], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [13], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role4], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [13], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role4], t23, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [13], [23], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role6], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [6], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role6], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [6], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role6], t40, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [6], [40], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role6], t22, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [6], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role6], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [6], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role6], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [6], [20], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role6], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [6], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role6], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [6], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role6], t6, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [6], [6], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [6], [37], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role7], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [7], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role7], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [7], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role8], t34, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [4], [34], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role8], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [4], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role8], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [4], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role8], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [4], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role8], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [4], [13], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t23-t23], [role8], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [4], [20], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role8], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [4], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role8], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [4], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role8], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [4], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role8], t35, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [4], [35], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role8], t15, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [4], [15], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role8], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [4], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role8], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [4], [16], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role8], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [4], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role8], t36, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [4], [36], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role8], t11, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [4], [11], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role8], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [4], [37], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role8], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [4], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role9], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [31], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role9], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [31], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t30-t30], [role9], t13, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [31], [13], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role9], t39, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [31], [39], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role9], t31, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [31], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t32-t32], [role9], t20, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 32, 32, [31], [20], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role9], t2, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [31], [2], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role9], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [31], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role9], t34, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [31], [34], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role9], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [31], [32], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role9], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [31], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role9], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [31], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role9], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [31], [37], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role9], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [31], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role9], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [31], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t11-t11], [role9], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 11, 11, [31], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role9], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [31], [29], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role9], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [31], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role12], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [1], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role12], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [1], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role22], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [2], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role22], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [2], [32], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role22], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [2], [29], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role22], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [2], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role22], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [2], [25], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role22], t24, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [2], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t29-t29], [role21], t19, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 29, 29, [24], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role21], t9, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [24], [9], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role21], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [24], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role21], t36, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [24], [36], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t39-t39], [role21], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [24], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role21], t14, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [24], [14], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role21], t7, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [24], [7], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role21], t8, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [24], [8], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t9-t9], [role21], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [24], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [24], [37], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role21], t10, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [24], [10], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role21], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [24], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role21], t12, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [24], [12], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role24], t16, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [8], [16], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role24], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [8], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role24], t29, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [8], [29], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role24], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [8], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role24], t39, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [8], [39], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t15-t15], [role24], t33, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 15, 15, [8], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role24], t37, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [8], [37], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role24], t35, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [8], [35], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t6-t6], [role24], t4, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 6, 6, [8], [4], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role23], t3, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [23], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role23], t25, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [23], [25], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t22-t22], [role23], t17, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [23], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t27-t27], [role23], t32, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [23], [32], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role23], t21, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [23], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role23], t26, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [23], [26], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role23], t5, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [23], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role23], t40, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [23], [40], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t36-t36], [role23], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 36, 36, [23], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role23], t31, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [23], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role23], t1, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [23], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t10-t10], [role23], t30, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 10, 10, [23], [30], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t25-t25], [role23], t27, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [23], [27], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role28], t38, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [27], [38], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role28], t31, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [27], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t37-t37], [role28], t35, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [27], [35], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role28], t18, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [27], [18], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t7-t7], [role28], t28, role10>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [27], [28], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t8-t8], [role22], t38, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 8, 8, [2], [38], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role22], t36, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 4, 4, [2], [36], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [2], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t17-t17], [role21], t23, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [24], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role21], t31, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [24], [31], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t38-t38], [role6], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [6], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t40-t40], [role6], t22, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [6], [22], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role6], t33, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [6], [33], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t18-t18], [role6], t7, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [6], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role6], t31, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [6], [31], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t14-t14], [role6], t5, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [6], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t16-t16], [role6], t34, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 16, 16, [6], [34], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t11, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [6], [11], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t20-t20], [role24], t25, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [8], [25], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t21-t21], [role23], t29, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [23], [29], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t24-t24], [role23], t11, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [23], [11], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t12-t12], [role23], t28, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [23], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t31-t31], [role23], t19, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [23], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role23], t32, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [23], [32], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t34-t34], [role23], t40, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [23], [40], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t13-t13], [role23], t30, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [23], [30], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t28-t28], [role23], t34, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [23], [34], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role23], t13, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [23], [13], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t19-t19], [role23], t1, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [23], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role12], t14, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 5, 5, [1], [14], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t24, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 1, 1, [1], [24], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t33-t33], [role12], t33, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 33, 33, [1], [33], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t17, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 2, 2, [1], [17], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t26-t26], [role12], t39, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [1], [39], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t35-t35], [role12], t4, role11>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [1], [4], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t37-t37], [role22, NOT role15], t24, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 37, 37, [2, -1 * 20], [24], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t38-t38], [role22, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 38, 38, [2, -1 * 20], [25], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t15-t15], [role22, NOT role15], t5, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 15, 15, [2, -1 * 20], [5], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t29-t29], [role22, NOT role15], t12, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 29, 29, [2, -1 * 20], [12], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t40-t40], [role22, NOT role15], t31, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 40, 40, [2, -1 * 20], [31], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t23-t23], [role22, NOT role15], t7, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 23, 23, [2, -1 * 20], [7], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t31-t31], [role22, NOT role15], t27, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 31, 31, [2, -1 * 20], [27], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t33-t33], [role24, NOT role15], t13, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 33, 33, [8, -1 * 20], [13], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t38-t38], [role24, NOT role15], t30, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 38, 38, [8, -1 * 20], [30], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t10-t10], [role24, NOT role15], t40, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 10, 10, [8, -1 * 20], [40], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t37-t37], [role24, NOT role15], t2, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 37, 37, [8, -1 * 20], [2], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t28-t28], [role24, NOT role15], t38, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [8, -1 * 20], [38], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role24, NOT role15], t1, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [8, -1 * 20], [1], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t25-t25], [role24, NOT role15], t14, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 25, 25, [8, -1 * 20], [14], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t32-t32], [role24, NOT role15], t34, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 32, 32, [8, -1 * 20], [34], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t14-t14], [role24, NOT role15], t9, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 14, 14, [8, -1 * 20], [9], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t18-t18], [role24, NOT role15], t25, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 18, 18, [8, -1 * 20], [25], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t27-t27], [role24, NOT role15], t8, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 27, 27, [8, -1 * 20], [8], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t34-t34], [role24, NOT role15], t6, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 34, 34, [8, -1 * 20], [6], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role24, NOT role15], t31, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [8, -1 * 20], [31], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t26-t26], [role24, NOT role15], t32, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 26, 26, [8, -1 * 20], [32], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t19-t19], [role24, NOT role15], t15, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 19, 19, [8, -1 * 20], [15], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t20-t20], [role24, NOT role15], t3, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 20, 20, [8, -1 * 20], [3], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t39-t39], [role24, NOT role15], t27, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 39, 39, [8, -1 * 20], [27], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role24, NOT role15], t10, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 3, 3, [8, -1 * 20], [10], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t29-t29], [role24, NOT role15], t17, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 29, 29, [8, -1 * 20], [17], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t28-t28], [role7, NOT role15], t40, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 28, 28, [7, -1 * 20], [40], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t36-t36], [role7, NOT role15], t13, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 36, 36, [7, -1 * 20], [13], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role7, NOT role15], t22, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 4, 4, [7, -1 * 20], [22], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t9-t9], [role28, NOT role15], t28, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 9, 9, [27, -1 * 20], [28], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t8-t8], [role28, NOT role15], t22, role2>
  trans = await instance.suAddCARule.sendTransaction(7, 8, 8, [27, -1 * 20], [22], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t24-t24], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t40-t40], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t11, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [11], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t34-t34], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t37, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 34, 34, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [37], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t35-t35], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t32, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 35, 35, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [32], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t38-t38], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t33, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [16, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [33], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t31-t31], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t37, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [13, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [37], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t30, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [24, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [1], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t40-t40], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t39-t39], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t17, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t13-t13], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t8, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 13, 13, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [8], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t10-t10], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t13, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 10, 10, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [13], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t37-t37], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 37, 37, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t19-t19], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 19, 19, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t24-t24], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t30, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [30], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t17-t17], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t36, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 17, 17, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [36], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t31-t31], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t39, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 31, 31, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [39], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t12, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [6, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [12], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t34, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [34], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t33, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [33], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t25-t25], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 25, 25, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t27-t27], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t19, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 27, 27, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [19], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t20-t20], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t28, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 20, 20, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [28], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t9-t9], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t20, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 9, 9, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [20], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t38-t38], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t35, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 38, 38, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [35], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t39-t39], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t9, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 39, 39, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [9], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t22-t22], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 22, 22, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [4], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t18-t18], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 18, 18, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t26-t26], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t27, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 26, 26, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [27], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t28-t28], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t36, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 28, 28, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [36], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t32, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [32], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t24-t24], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t37, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 24, 24, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [37], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t21-t21], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t38, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 21, 21, [23, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [38], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t6, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [4, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [6], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 3, 3, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t7-t7], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t22, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 7, 7, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [22], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t14-t14], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 14, 14, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [2], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t12-t12], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t29, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 12, 12, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [29], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t40-t40], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t25, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 40, 40, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [25], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t23-t23], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t39, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 23, 23, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [39], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t30-t30], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t40, role15>
  trans = await instance.suAddCARule.sendTransaction(4, 30, 30, [1, -1 * 3, -1 * 7, -1 * 2, -1 * 8], [40], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t4-t4], [role23, NOT role8, NOT role22, NOT role24], t17, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 4, 4, [23, -1 * 4, -1 * 2, -1 * 8], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t26-t26], [role23, NOT role8, NOT role22, NOT role24], t20, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 26, 26, [23, -1 * 4, -1 * 2, -1 * 8], [20], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t17-t17], [role23, NOT role8, NOT role22, NOT role24], t25, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 17, 17, [23, -1 * 4, -1 * 2, -1 * 8], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t15-t15], [role23, NOT role8, NOT role22, NOT role24], t23, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 15, 15, [23, -1 * 4, -1 * 2, -1 * 8], [23], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t27-t27], [role23, NOT role8, NOT role22, NOT role24], t22, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 27, 27, [23, -1 * 4, -1 * 2, -1 * 8], [22], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t31-t31], [role23, NOT role8, NOT role22, NOT role24], t8, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 31, 31, [23, -1 * 4, -1 * 2, -1 * 8], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t32-t32], [role23, NOT role8, NOT role22, NOT role24], t15, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 32, 32, [23, -1 * 4, -1 * 2, -1 * 8], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t28-t28], [role23, NOT role8, NOT role22, NOT role24], t24, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 28, 28, [23, -1 * 4, -1 * 2, -1 * 8], [24], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t34-t34], [role23, NOT role8, NOT role22, NOT role24], t26, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 34, 34, [23, -1 * 4, -1 * 2, -1 * 8], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t14-t14], [role23, NOT role8, NOT role22, NOT role24], t27, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 14, 14, [23, -1 * 4, -1 * 2, -1 * 8], [27], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t18-t18], [role23, NOT role8, NOT role22, NOT role24], t29, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 18, 18, [23, -1 * 4, -1 * 2, -1 * 8], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t11-t11], [role23, NOT role8, NOT role22, NOT role24], t31, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 11, 11, [23, -1 * 4, -1 * 2, -1 * 8], [31], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t10-t10], [role23, NOT role8, NOT role22, NOT role24], t32, role6>
  trans = await instance.suAddCARule.sendTransaction(8, 10, 10, [23, -1 * 4, -1 * 2, -1 * 8], [32], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t28-t28], [role23, NOT role6, NOT role22, NOT role24], t31, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 28, 28, [23, -1 * 6, -1 * 2, -1 * 8], [31], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t13-t13], [role23, NOT role6, NOT role22, NOT role24], t24, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 13, 13, [23, -1 * 6, -1 * 2, -1 * 8], [24], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t14-t14], [role23, NOT role6, NOT role22, NOT role24], t40, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 14, 14, [23, -1 * 6, -1 * 2, -1 * 8], [40], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t33-t33], [role23, NOT role6, NOT role22, NOT role24], t30, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 33, 33, [23, -1 * 6, -1 * 2, -1 * 8], [30], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t11-t11], [role23, NOT role6, NOT role22, NOT role24], t22, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 11, 11, [23, -1 * 6, -1 * 2, -1 * 8], [22], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t27-t27], [role23, NOT role6, NOT role22, NOT role24], t11, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 27, 27, [23, -1 * 6, -1 * 2, -1 * 8], [11], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t30-t30], [role23, NOT role6, NOT role22, NOT role24], t29, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 30, 30, [23, -1 * 6, -1 * 2, -1 * 8], [29], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t34-t34], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 34, 34, [23, -1 * 6, -1 * 2, -1 * 8], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t21-t21], [role23, NOT role6, NOT role22, NOT role24], t25, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 21, 21, [23, -1 * 6, -1 * 2, -1 * 8], [25], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t19-t19], [role23, NOT role6, NOT role22, NOT role24], t33, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 19, 19, [23, -1 * 6, -1 * 2, -1 * 8], [33], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t35-t35], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.suAddCARule.sendTransaction(6, 35, 35, [23, -1 * 6, -1 * 2, -1 * 8], [5], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t16-t16], TRUE, t33, role30>
  trans = await instance.suAddCRRule.sendTransaction(0, 16, 16, [], [33], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t12-t12], TRUE, t7, role3>
  trans = await instance.suAddCRRule.sendTransaction(0, 12, 12, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t17-t17], TRUE, t7, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 17, 17, [], [7], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t37-t37], TRUE, t37, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 37, 37, [], [37], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t34-t34], TRUE, t31, role32>
  trans = await instance.suAddCRRule.sendTransaction(6, 34, 34, [], [31], 11,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t18, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 3, 3, [], [18], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t14, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 5, 5, [], [14], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t36-t36], TRUE, t17, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 36, 36, [], [17], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t18-t18], TRUE, t20, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 18, 18, [], [20], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t15-t15], TRUE, t3, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 15, 15, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t12-t12], TRUE, t39, role30>
  trans = await instance.suAddCRRule.sendTransaction(4, 12, 12, [], [39], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t40-t40], TRUE, t38, role21>
  trans = await instance.suAddCRRule.sendTransaction(2, 40, 40, [], [38], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t24-t24], TRUE, t34, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 24, 24, [], [34], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t10-t10], TRUE, t18, role3>
  trans = await instance.suAddCRRule.sendTransaction(2, 10, 10, [], [18], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t18-t18], TRUE, t4, role17>
  trans = await instance.suAddCERule.sendTransaction(0, 18, 18, [], [4], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t26-t26], TRUE, t34, role18>
  trans = await instance.suAddCERule.sendTransaction(0, 26, 26, [], [34], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t21-t21], TRUE, t8, role18>
  trans = await instance.suAddCERule.sendTransaction(0, 21, 21, [], [8], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t34-t34], TRUE, t19, role33>
  trans = await instance.suAddCERule.sendTransaction(0, 34, 34, [], [19], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t4-t4], TRUE, t4, role22>
  trans = await instance.suAddCERule.sendTransaction(0, 4, 4, [], [4], 2,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t21-t21], TRUE, t27, role16>
  trans = await instance.suAddCERule.sendTransaction(0, 21, 21, [], [27], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t15-t15], TRUE, t33, role25>
  trans = await instance.suAddCERule.sendTransaction(0, 15, 15, [], [33], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t19-t19], TRUE, t27, role7>
  trans = await instance.suAddCERule.sendTransaction(0, 19, 19, [], [27], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t23-t23], TRUE, t18, role23>
  trans = await instance.suAddCERule.sendTransaction(0, 23, 23, [], [18], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t37-t37], TRUE, t1, role23>
  trans = await instance.suAddCERule.sendTransaction(0, 37, 37, [], [1], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t27-t27], TRUE, t35, role23>
  trans = await instance.suAddCERule.sendTransaction(0, 27, 27, [], [35], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t12-t12], TRUE, t31, role3>
  trans = await instance.suAddCERule.sendTransaction(0, 12, 12, [], [31], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [TA1Tru] <TRUE, [t30-t30], TRUE, t40, role23>
  trans = await instance.suAddCERule.sendTransaction(0, 30, 30, [], [40], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t18-t18], [role23], t24, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 18, 18, [23], [24], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t20-t20], [role28], t22, role10>
  trans = await instance.suAddCERule.sendTransaction(0, 20, 20, [27], [22], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t11-t11], [role23], t6, role11>
  trans = await instance.suAddCERule.sendTransaction(0, 11, 11, [23], [6], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t12-t12], [role22], t23, role25>
  trans = await instance.suAddCERule.sendTransaction(0, 12, 12, [2], [23], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t2-t2], [role22], t22, role25>
  trans = await instance.suAddCERule.sendTransaction(0, 2, 2, [2], [22], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t27-t27], [role16], t9, role26>
  trans = await instance.suAddCERule.sendTransaction(0, 27, 27, [19], [9], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t23-t23], [role16], t30, role26>
  trans = await instance.suAddCERule.sendTransaction(0, 23, 23, [19], [30], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t3-t3], [role3], t11, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 3, 3, [16], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t18-t18], [role4], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 18, 18, [13], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t5-t5], [role6], t37, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 5, 5, [6], [37], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t13-t13], [role7], t25, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 13, 13, [7], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t8-t8], [role9], t15, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 8, 8, [31], [15], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t19-t19], [role9], t39, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 19, 19, [31], [39], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t29-t29], [role24], t25, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 29, 29, [8], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA3Pos] <TRUE, [t27-t27], [role28], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(0, 27, 27, [27], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t25-t25], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.suAddCERule.sendTransaction(0, 25, 25, [23, -1 * 4, -1 * 2, -1 * 8], [4], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t15-t15], TRUE, t3, role30>
  trans = await instance.suAddCERule.sendTransaction(4, 15, 15, [], [3], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t19-t19], TRUE, t7, role30>
  trans = await instance.suAddCERule.sendTransaction(4, 19, 19, [], [7], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t24-t24], TRUE, t1, role17>
  trans = await instance.suAddCERule.sendTransaction(4, 24, 24, [], [1], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t6-t6], TRUE, t10, role16>
  trans = await instance.suAddCERule.sendTransaction(4, 6, 6, [], [10], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t27-t27], TRUE, t31, role18>
  trans = await instance.suAddCERule.sendTransaction(4, 27, 27, [], [31], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t40-t40], TRUE, t27, role18>
  trans = await instance.suAddCERule.sendTransaction(4, 40, 40, [], [27], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t11-t11], TRUE, t16, role20>
  trans = await instance.suAddCERule.sendTransaction(5, 11, 11, [], [16], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t18-t18], TRUE, t4, role20>
  trans = await instance.suAddCERule.sendTransaction(5, 18, 18, [], [4], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t9-t9], TRUE, t22, role20>
  trans = await instance.suAddCERule.sendTransaction(5, 9, 9, [], [22], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role19, [t28-t28], TRUE, t6, role20>
  trans = await instance.suAddCERule.sendTransaction(5, 28, 28, [], [6], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t6-t6], TRUE, t22, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 6, 6, [], [22], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t8-t8], TRUE, t4, role33>
  trans = await instance.suAddCERule.sendTransaction(1, 8, 8, [], [4], 9,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role7, [t30-t30], TRUE, t10, role2>
  trans = await instance.suAddCERule.sendTransaction(7, 30, 30, [], [10], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role7, [t17-t17], TRUE, t34, role2>
  trans = await instance.suAddCERule.sendTransaction(7, 17, 17, [], [34], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role7, [t36-t36], TRUE, t35, role2>
  trans = await instance.suAddCERule.sendTransaction(7, 36, 36, [], [35], 3,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t13-t13], TRUE, t7, role15>
  trans = await instance.suAddCERule.sendTransaction(4, 13, 13, [], [7], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t24-t24], TRUE, t39, role19>
  trans = await instance.suAddCERule.sendTransaction(4, 24, 24, [], [39], 5,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t28-t28], TRUE, t1, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 28, 28, [], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t2, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 5, 5, [], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t40-t40], TRUE, t1, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 40, 40, [], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t15, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 1, 1, [], [15], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t4-t4], TRUE, t7, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 4, 4, [], [7], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t12-t12], TRUE, t16, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 12, 12, [], [16], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t14-t14], TRUE, t2, role26>
  trans = await instance.suAddCERule.sendTransaction(4, 14, 14, [], [2], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t20-t20], TRUE, t19, role26>
  trans = await instance.suAddCERule.sendTransaction(4, 20, 20, [], [19], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t28-t28], TRUE, t28, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 28, 28, [], [28], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t40-t40], TRUE, t33, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [], [33], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t35-t35], TRUE, t38, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 35, 35, [], [38], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t16-t16], TRUE, t21, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 16, 16, [], [21], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t10-t10], TRUE, t18, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 10, 10, [], [18], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t9-t9], TRUE, t21, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 9, 9, [], [21], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t13-t13], TRUE, t15, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 13, 13, [], [15], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t8-t8], TRUE, t6, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 8, 8, [], [6], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t30-t30], TRUE, t17, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 30, 30, [], [17], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t19-t19], TRUE, t16, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 19, 19, [], [16], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t5-t5], TRUE, t1, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 5, 5, [], [1], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t5-t5], TRUE, t30, role23>
  trans = await instance.suAddCERule.sendTransaction(2, 5, 5, [], [30], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t40-t40], TRUE, t20, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t24-t24], TRUE, t26, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [], [26], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t29-t29], TRUE, t27, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 29, 29, [], [27], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t19-t19], TRUE, t2, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 19, 19, [], [2], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t15-t15], TRUE, t17, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 15, 15, [], [17], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t18-t18], TRUE, t10, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 18, 18, [], [10], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t34-t34], TRUE, t19, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 34, 34, [], [19], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t10-t10], TRUE, t12, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 10, 10, [], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t7-t7], TRUE, t33, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 7, 7, [], [33], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t6-t6], TRUE, t21, role23>
  trans = await instance.suAddCERule.sendTransaction(2, 6, 6, [], [21], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t5-t5], TRUE, t8, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 5, 5, [], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t16-t16], TRUE, t7, role21>
  trans = await instance.suAddCERule.sendTransaction(2, 16, 16, [], [7], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t39-t39], TRUE, t7, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 39, 39, [], [7], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t22-t22], TRUE, t2, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 22, 22, [], [2], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t28-t28], TRUE, t30, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 28, 28, [], [30], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t26-t26], TRUE, t32, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 26, 26, [], [32], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t27-t27], TRUE, t10, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 27, 27, [], [10], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t13-t13], TRUE, t25, role3>
  trans = await instance.suAddCERule.sendTransaction(2, 13, 13, [], [25], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t40-t40], TRUE, t11, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [], [11], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t11-t11], TRUE, t24, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 11, 11, [], [24], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t34-t34], TRUE, t29, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 34, 34, [], [29], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t30-t30], TRUE, t36, role4>
  trans = await instance.suAddCERule.sendTransaction(2, 30, 30, [], [36], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t14-t14], TRUE, t34, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 14, 14, [], [34], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t32-t32], TRUE, t31, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 32, 32, [], [31], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t33-t33], TRUE, t35, role28>
  trans = await instance.suAddCERule.sendTransaction(2, 33, 33, [], [35], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t2-t2], TRUE, t10, role7>
  trans = await instance.suAddCERule.sendTransaction(2, 2, 2, [], [10], 7,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t37-t37], [role23], t3, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 37, 37, [23], [3], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t22-t22], [role23], t17, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 22, 22, [23], [17], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t7-t7], [role23], t21, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 7, 7, [23], [21], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role23], t5, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 1, 1, [23], [5], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role23], t1, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 8, 8, [23], [1], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t4-t4], [role28], t39, role10>
  trans = await instance.suAddCERule.sendTransaction(4, 4, 4, [27], [39], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t27-t27], [role3], t12, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 27, 27, [16], [12], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t36-t36], [role4], t19, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 36, 36, [13], [19], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t38-t38], [role6], t28, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 38, 38, [6], [28], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t18-t18], [role6], t7, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 18, 18, [6], [7], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t14-t14], [role6], t5, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 14, 14, [6], [5], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t5-t5], [role6], t11, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 5, 5, [6], [11], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t24-t24], [role23], t11, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 24, 24, [23], [11], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t25-t25], [role23], t3, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 25, 25, [23], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t13-t13], [role8], t3, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 13, 13, [4], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t31-t31], [role8], t34, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 31, 31, [4], [34], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t38-t38], [role12], t36, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 38, 38, [1], [36], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t34-t34], [role12], t25, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 34, 34, [1], [25], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t18-t18], [role12], t9, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 18, 18, [1], [9], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t40-t40], [role12], t38, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 40, 40, [1], [38], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t16-t16], [role12], t26, role11>
  trans = await instance.suAddCERule.sendTransaction(4, 16, 16, [1], [26], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t17-t17], [role3], t39, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 17, 17, [16], [39], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t27-t27], [role3], t1, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 27, 27, [16], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t21-t21], [role22], t31, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 21, 21, [2], [31], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t33-t33], [role22], t32, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 33, 33, [2], [32], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role22], t26, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 10, 10, [2], [26], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t37-t37], [role21], t18, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 37, 37, [24], [18], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t21-t21], [role24], t18, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 21, 21, [8], [18], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t29-t29], [role24], t8, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 29, 29, [8], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t8-t8], [role24], t2, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 8, 8, [8], [2], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t10-t10], [role23], t7, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 10, 10, [23], [7], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role23], t8, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 1, 1, [23], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t13-t13], [role8], t38, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 13, 13, [4], [38], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t28-t28], [role8], t28, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 28, 28, [4], [28], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t23-t23], [role8], t40, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 23, 23, [4], [40], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t1-t1], [role12], t20, role25>
  trans = await instance.suAddCERule.sendTransaction(4, 1, 1, [1], [20], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t33-t33], [role16], t23, role26>
  trans = await instance.suAddCERule.sendTransaction(4, 33, 33, [19], [23], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role8, [t16-t16], [role16], t40, role26>
  trans = await instance.suAddCERule.sendTransaction(4, 16, 16, [19], [40], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t28-t28], [role2], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 28, 28, [3], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t31-t31], [role2], t3, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 31, 31, [3], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t40-t40], [role2], t18, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [3], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t12-t12], [role4], t33, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 12, 12, [13], [33], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t19-t19], [role4], t9, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 19, 19, [13], [9], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t7-t7], [role6], t33, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 7, 7, [6], [33], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t38-t38], [role7], t4, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 38, 38, [7], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t34-t34], [role7], t38, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 34, 34, [7], [38], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t30-t30], [role7], t26, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 30, 30, [7], [26], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t24-t24], [role7], t6, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [7], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t20-t20], [role7], t2, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [7], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t12-t12], [role7], t1, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 12, 12, [7], [1], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t40-t40], [role7], t37, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [7], [37], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t34-t34], [role8], t31, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 34, 34, [4], [31], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t33-t33], [role9], t25, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 33, 33, [31], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t27-t27], [role9], t7, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 27, 27, [31], [7], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t29-t29], [role9], t30, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 29, 29, [31], [30], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t35-t35], [role9], t6, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 35, 35, [31], [6], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t30-t30], [role9], t24, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 30, 30, [31], [24], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t6-t6], [role12], t27, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 6, 6, [1], [27], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t36-t36], [role22], t13, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 36, 36, [2], [13], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t24-t24], [role22], t33, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 24, 24, [2], [33], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t25-t25], [role22], t39, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 25, 25, [2], [39], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t27-t27], [role21], t11, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 27, 27, [24], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t20-t20], [role24], t17, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [8], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t40-t40], [role24], t5, role13>
  trans = await instance.suAddCERule.sendTransaction(2, 40, 40, [8], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role22, [t20-t20], [role23, NOT role6, NOT role8, NOT role22], t13, role24>
  trans = await instance.suAddCERule.sendTransaction(2, 20, 20, [23, -1 * 6, -1 * 4, -1 * 2], [13], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t24-t24], [role23, NOT role8, NOT role22, NOT role24], t3, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 24, 24, [23, -1 * 4, -1 * 2, -1 * 8], [3], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t4-t4], [role23, NOT role8, NOT role22, NOT role24], t17, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 4, 4, [23, -1 * 4, -1 * 2, -1 * 8], [17], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t26-t26], [role23, NOT role8, NOT role22, NOT role24], t20, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 26, 26, [23, -1 * 4, -1 * 2, -1 * 8], [20], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t15-t15], [role23, NOT role8, NOT role22, NOT role24], t23, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 15, 15, [23, -1 * 4, -1 * 2, -1 * 8], [23], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t31-t31], [role23, NOT role8, NOT role22, NOT role24], t8, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 31, 31, [23, -1 * 4, -1 * 2, -1 * 8], [8], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t32-t32], [role23, NOT role8, NOT role22, NOT role24], t15, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 32, 32, [23, -1 * 4, -1 * 2, -1 * 8], [15], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t28-t28], [role23, NOT role8, NOT role22, NOT role24], t24, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 28, 28, [23, -1 * 4, -1 * 2, -1 * 8], [24], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t10-t10], [role23, NOT role8, NOT role22, NOT role24], t32, role6>
  trans = await instance.suAddCERule.sendTransaction(8, 10, 10, [23, -1 * 4, -1 * 2, -1 * 8], [32], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t14-t14], [role23, NOT role6, NOT role22, NOT role24], t40, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 14, 14, [23, -1 * 6, -1 * 2, -1 * 8], [40], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t21-t21], [role23, NOT role6, NOT role22, NOT role24], t25, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 21, 21, [23, -1 * 6, -1 * 2, -1 * 8], [25], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t19-t19], [role23, NOT role6, NOT role22, NOT role24], t33, role8>
  trans = await instance.suAddCERule.sendTransaction(6, 19, 19, [23, -1 * 6, -1 * 2, -1 * 8], [33], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t23-t23], TRUE, t38, role17>
  trans = await instance.suAddCDRule.sendTransaction(0, 23, 23, [], [38], 18,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t32-t32], TRUE, t1, role20>
  trans = await instance.suAddCDRule.sendTransaction(0, 32, 32, [], [1], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t1-t1], TRUE, t5, role20>
  trans = await instance.suAddCDRule.sendTransaction(0, 1, 1, [], [5], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t28-t28], TRUE, t22, role5>
  trans = await instance.suAddCDRule.sendTransaction(0, 28, 28, [], [22], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t40-t40], TRUE, t34, role11>
  trans = await instance.suAddCDRule.sendTransaction(0, 40, 40, [], [34], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t31-t31], TRUE, t31, role26>
  trans = await instance.suAddCDRule.sendTransaction(0, 31, 31, [], [31], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t25-t25], TRUE, t34, role21>
  trans = await instance.suAddCDRule.sendTransaction(0, 25, 25, [], [34], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t16-t16], TRUE, t24, role3>
  trans = await instance.suAddCDRule.sendTransaction(0, 16, 16, [], [24], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t13-t13], TRUE, t35, role8>
  trans = await instance.suAddCDRule.sendTransaction(0, 13, 13, [], [35], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t36-t36], TRUE, t33, role23>
  trans = await instance.suAddCDRule.sendTransaction(0, 36, 36, [], [33], 23,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t4-t4], TRUE, t16, role3>
  trans = await instance.suAddCDRule.sendTransaction(0, 4, 4, [], [16], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t36-t36], TRUE, t11, role3>
  trans = await instance.suAddCDRule.sendTransaction(0, 36, 36, [], [11], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [TA1Tru] <TRUE, [t2-t2], TRUE, t12, role4>
  trans = await instance.suAddCDRule.sendTransaction(0, 2, 2, [], [12], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t11-t11], [role23], t33, role10>
  trans = await instance.suAddCDRule.sendTransaction(0, 11, 11, [23], [33], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t17-t17], [role23], t19, role10>
  trans = await instance.suAddCDRule.sendTransaction(0, 17, 17, [23], [19], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t30-t30], [role22], t30, role11>
  trans = await instance.suAddCDRule.sendTransaction(0, 30, 30, [2], [30], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t6-t6], [role6], t13, role11>
  trans = await instance.suAddCDRule.sendTransaction(0, 6, 6, [6], [13], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t26-t26], [role22], t8, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 26, 26, [2], [8], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t3-t3], [role23], t23, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 3, 3, [23], [23], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t17-t17], [role12], t1, role25>
  trans = await instance.suAddCDRule.sendTransaction(0, 17, 17, [1], [1], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t39-t39], [role2], t24, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 39, 39, [3], [24], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t36-t36], [role7], t36, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 36, 36, [7], [36], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t26-t26], [role7], t3, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 26, 26, [7], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t11-t11], [role8], t17, role13>
  trans = await instance.suAddCDRule.sendTransaction(0, 11, 11, [4], [17], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t30-t30], [role23, NOT role8, NOT role22, NOT role24], t21, role6>
  trans = await instance.suAddCDRule.sendTransaction(0, 30, 30, [23, -1 * 4, -1 * 2, -1 * 8], [21], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XA4Mix] <TRUE, [t26-t26], [role23, NOT role6, NOT role22, NOT role24], t10, role8>
  trans = await instance.suAddCDRule.sendTransaction(0, 26, 26, [23, -1 * 6, -1 * 2, -1 * 8], [10], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t24-t24], TRUE, t21, role30>
  trans = await instance.suAddCDRule.sendTransaction(4, 24, 24, [], [21], 14,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t16-t16], TRUE, t34, role16>
  trans = await instance.suAddCDRule.sendTransaction(4, 16, 16, [], [34], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t13-t13], TRUE, t12, role18>
  trans = await instance.suAddCDRule.sendTransaction(4, 13, 13, [], [12], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t23-t23], TRUE, t6, role18>
  trans = await instance.suAddCDRule.sendTransaction(4, 23, 23, [], [6], 17,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role19, [t4-t4], TRUE, t2, role20>
  trans = await instance.suAddCDRule.sendTransaction(5, 4, 4, [], [2], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role19, [t37-t37], TRUE, t39, role20>
  trans = await instance.suAddCDRule.sendTransaction(5, 37, 37, [], [39], 25,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role6, [t40-t40], TRUE, t21, role5>
  trans = await instance.suAddCDRule.sendTransaction(6, 40, 40, [], [21], 15,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t17-t17], TRUE, t17, role15>
  trans = await instance.suAddCDRule.sendTransaction(4, 17, 17, [], [17], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t24-t24], TRUE, t5, role15>
  trans = await instance.suAddCDRule.sendTransaction(4, 24, 24, [], [5], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t18-t18], TRUE, t32, role15>
  trans = await instance.suAddCDRule.sendTransaction(4, 18, 18, [], [32], 20,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t27-t27], TRUE, t29, role16>
  trans = await instance.suAddCDRule.sendTransaction(4, 27, 27, [], [29], 19,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t3-t3], TRUE, t36, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 3, 3, [], [36], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t13-t13], TRUE, t21, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 13, 13, [], [21], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t21-t21], TRUE, t20, role26>
  trans = await instance.suAddCDRule.sendTransaction(4, 21, 21, [], [20], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t23-t23], TRUE, t15, role26>
  trans = await instance.suAddCDRule.sendTransaction(4, 23, 23, [], [15], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t26-t26], TRUE, t5, role26>
  trans = await instance.suAddCDRule.sendTransaction(4, 26, 26, [], [5], 29,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t14-t14], TRUE, t11, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 14, 14, [], [11], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t26-t26], TRUE, t15, role21>
  trans = await instance.suAddCDRule.sendTransaction(2, 26, 26, [], [15], 24,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t29-t29], TRUE, t1, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 29, 29, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t23-t23], TRUE, t14, role4>
  trans = await instance.suAddCDRule.sendTransaction(2, 23, 23, [], [14], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t26-t26], TRUE, t35, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 26, 26, [], [35], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t14-t14], TRUE, t3, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 14, 14, [], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t2-t2], TRUE, t13, role24>
  trans = await instance.suAddCDRule.sendTransaction(2, 2, 2, [], [13], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role24, [t13-t13], TRUE, t25, role6>
  trans = await instance.suAddCDRule.sendTransaction(8, 13, 13, [], [25], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role24, [t4-t4], TRUE, t26, role6>
  trans = await instance.suAddCDRule.sendTransaction(8, 4, 4, [], [26], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t35-t35], TRUE, t1, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 35, 35, [], [1], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t29-t29], TRUE, t8, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 29, 29, [], [8], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t30-t30], TRUE, t24, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 30, 30, [], [24], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t23-t23], TRUE, t28, role3>
  trans = await instance.suAddCDRule.sendTransaction(2, 23, 23, [], [28], 16,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t32-t32], TRUE, t23, role4>
  trans = await instance.suAddCDRule.sendTransaction(2, 32, 32, [], [23], 13,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t21-t21], TRUE, t8, role28>
  trans = await instance.suAddCDRule.sendTransaction(2, 21, 21, [], [8], 27,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t10-t10], [role23], t30, role10>
  trans = await instance.suAddCDRule.sendTransaction(4, 10, 10, [23], [30], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t18-t18], [role28], t31, role10>
  trans = await instance.suAddCDRule.sendTransaction(4, 18, 18, [27], [31], 12,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t12-t12], [role3], t23, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 12, 12, [16], [23], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t17-t17], [role4], t3, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 17, 17, [13], [3], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t33-t33], [role6], t31, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 33, 33, [6], [31], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t34-t34], [role23], t40, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 34, 34, [23], [40], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t4-t4], [role23], t37, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 4, 4, [23], [37], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t39-t39], [role12], t1, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 39, 39, [1], [1], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t32-t32], [role12], t18, role11>
  trans = await instance.suAddCDRule.sendTransaction(4, 32, 32, [1], [18], 10,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t27-t27], [role22], t29, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 27, 27, [2], [29], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t11-t11], [role22], t36, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 11, 11, [2], [36], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t22-t22], [role24], t3, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 22, 22, [8], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t11-t11], [role24], t26, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 11, 11, [8], [26], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t20-t20], [role8], t37, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 20, 20, [4], [37], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t14-t14], [role8], t39, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 14, 14, [4], [39], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role8, [t20-t20], [role12], t3, role25>
  trans = await instance.suAddCDRule.sendTransaction(4, 20, 20, [1], [3], 30,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t12-t12], [role3], t5, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 12, 12, [16], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t20-t20], [role4], t11, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 20, 20, [13], [11], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t21-t21], [role4], t31, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 21, 21, [13], [31], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t3-t3], [role6], t20, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 3, 3, [6], [20], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t34-t34], [role6], t25, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 34, 34, [6], [25], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t4-t4], [role6], t36, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [6], [36], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t8-t8], [role6], t2, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 8, 8, [6], [2], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t25-t25], [role6], t39, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 25, 25, [6], [39], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t37-t37], [role6], t19, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 37, 37, [6], [19], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t33-t33], [role7], t29, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 33, 33, [7], [29], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t7-t7], [role8], t26, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 7, 7, [4], [26], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t23-t23], [role8], t35, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 23, 23, [4], [35], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t10-t10], [role9], t4, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 10, 10, [31], [4], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t4-t4], [role12], t34, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 4, 4, [1], [34], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t19-t19], [role22], t5, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 19, 19, [2], [5], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t16-t16], [role22], t14, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 16, 16, [2], [14], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t26-t26], [role22], t3, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 26, 26, [2], [3], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t11-t11], [role21], t10, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 11, 11, [24], [10], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t5-t5], [role23], t18, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 5, 5, [23], [18], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t6-t6], [role28], t16, role13>
  trans = await instance.suAddCDRule.sendTransaction(2, 6, 6, [27], [16], 22,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role22, [t23-t23], [role23, NOT role6, NOT role8, NOT role22], t12, role24>
  trans = await instance.suAddCDRule.sendTransaction(2, 23, 23, [23, -1 * 6, -1 * 4, -1 * 2], [12], 8,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t16-t16], [role23, NOT role8, NOT role22, NOT role24], t30, role6>
  trans = await instance.suAddCDRule.sendTransaction(8, 16, 16, [23, -1 * 4, -1 * 2, -1 * 8], [30], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t14-t14], [role23, NOT role8, NOT role22, NOT role24], t27, role6>
  trans = await instance.suAddCDRule.sendTransaction(8, 14, 14, [23, -1 * 4, -1 * 2, -1 * 8], [27], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role24, [t18-t18], [role23, NOT role8, NOT role22, NOT role24], t29, role6>
  trans = await instance.suAddCDRule.sendTransaction(8, 18, 18, [23, -1 * 4, -1 * 2, -1 * 8], [29], 6,  { from: su });
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t34-t34], [role23, NOT role6, NOT role22, NOT role24], t8, role8>
  trans = await instance.suAddCDRule.sendTransaction(6, 34, 34, [23, -1 * 6, -1 * 2, -1 * 8], [8], 4,  { from: su });
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};