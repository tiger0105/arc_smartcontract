var atrbac = artifacts.require('ATRBAC');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
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
  trans = instance.methods.suAddNewRole('role12').estimateGas();
  console.log('trans',trans);
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role22').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role1').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role8').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role19').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role6').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role7').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role24').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role34').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role33').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role11').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role32').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role10').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role4').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role30').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role5').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role2').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role3').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role18').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role17').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role16').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role15').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role14').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role13').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role23').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role21').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role20').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role28').estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddNewRole('role25').estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createRoles] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create Timeslots
  trans = await instance.methods.suAddTimeSlot(0, 1).estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddTimeSlot(1, 2).estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddTimeSlot(2, 3).estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddTimeSlot(3, 4).estimateGas();
  gas += trans.receipt.gasUsed;
  trans = await instance.methods.suAddTimeSlot(4, 5).estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createTimeslots] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CA Rules
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role14], t4, role18>
  trans = await instance.methods.suAddCARule(0, 5, 5, [23], [4], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role32], t3, role18>
  trans = await instance.methods.suAddCARule(0, 2, 2, [12], [3], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role3], t4, role16>
  trans = await instance.methods.suAddCARule(0, 3, 3, [18], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role4], t3, role16>
  trans = await instance.methods.suAddCARule(0, 2, 2, [14], [3], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role4], t4, role16>
  trans = await instance.methods.suAddCARule(0, 4, 4, [14], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role21], t3, role16>
  trans = await instance.methods.suAddCARule(0, 2, 2, [26], [3], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role21], t5, role16>
  trans = await instance.methods.suAddCARule(0, 1, 1, [26], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t4-t4], [role6], t1, role16>
  trans = await instance.methods.suAddCARule(0, 4, 4, [6], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role12], t1, role16>
  trans = await instance.methods.suAddCARule(0, 3, 3, [1], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role4], t1, role19>
  trans = await instance.methods.suAddCARule(0, 2, 2, [14], [1], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t5-t5], [role6], t2, role19>
  trans = await instance.methods.suAddCARule(0, 5, 5, [6], [2], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t1-t1], [role6], t4, role19>
  trans = await instance.methods.suAddCARule(0, 1, 1, [6], [4], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t2-t2], [role28], t3, role13>
  trans = await instance.methods.suAddCARule(0, 2, 2, [28], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA3Pos] <TRUE, [t3-t3], [role28], t5, role13>
  trans = await instance.methods.suAddCARule(0, 3, 3, [28], [5], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role24, NOT role15], t1, role2>
  trans = await instance.methods.suAddCARule(0, 4, 4, [8, -1 * 22], [1], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t1-t1], [role28, NOT role15], t3, role2>
  trans = await instance.methods.suAddCARule(0, 1, 1, [28, -1 * 22], [3], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role4, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.methods.suAddCARule(0, 3, 3, [14, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [4], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t4-t4], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t2, role15>
  trans = await instance.methods.suAddCARule(0, 4, 4, [26, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [2], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t5-t5], [role6, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.methods.suAddCARule(0, 5, 5, [6, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [4], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t2-t2], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.methods.suAddCARule(0, 2, 2, [1, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [1], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XA4Mix] <TRUE, [t3-t3], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.methods.suAddCARule(0, 3, 3, [25, -1 * 6, -1 * 2, -1 * 8], [5], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t2, role23>
  trans = await instance.methods.suAddCARule(2, 2, 2, [], [2], 25,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t4, role23>
  trans = await instance.methods.suAddCARule(2, 1, 1, [], [4], 25,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t3, role23>
  trans = await instance.methods.suAddCARule(2, 3, 3, [], [3], 25,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t2, role28>
  trans = await instance.methods.suAddCARule(2, 1, 1, [], [2], 28,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role28>
  trans = await instance.methods.suAddCARule(2, 4, 4, [], [5], 28,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t2, role7>
  trans = await instance.methods.suAddCARule(2, 5, 5, [], [2], 7,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t5, role7>
  trans = await instance.methods.suAddCARule(2, 1, 1, [], [5], 7,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t4, role7>
  trans = await instance.methods.suAddCARule(2, 3, 3, [], [4], 7,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t5-t5], TRUE, t2, role21>
  trans = await instance.methods.suAddCARule(2, 5, 5, [], [2], 26,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t1-t1], TRUE, t4, role21>
  trans = await instance.methods.suAddCARule(2, 1, 1, [], [4], 26,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t3-t3], TRUE, t1, role21>
  trans = await instance.methods.suAddCARule(2, 3, 3, [], [1], 26,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t2-t2], TRUE, t3, role21>
  trans = await instance.methods.suAddCARule(2, 2, 2, [], [3], 26,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t5, role21>
  trans = await instance.methods.suAddCARule(2, 4, 4, [], [5], 26,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX1Tru] <role22, [t4-t4], TRUE, t3, role3>
  trans = await instance.methods.suAddCARule(2, 4, 4, [], [3], 18,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role1, [t1-t1], [role6, role8], t2, role34>
  trans = await instance.methods.suAddCARule(3, 1, 1, [6, 4], [2], 9,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role17], t5, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [20], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role14], t1, role18>
  trans = await instance.methods.suAddCARule(4, 4, 4, [23], [1], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role14], t3, role18>
  trans = await instance.methods.suAddCARule(4, 3, 3, [23], [3], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role14], t5, role18>
  trans = await instance.methods.suAddCARule(4, 1, 1, [23], [5], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role14], t2, role18>
  trans = await instance.methods.suAddCARule(4, 2, 2, [23], [2], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role32], t4, role18>
  trans = await instance.methods.suAddCARule(4, 1, 1, [12], [4], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role32], t5, role18>
  trans = await instance.methods.suAddCARule(4, 5, 5, [12], [5], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role32], t2, role18>
  trans = await instance.methods.suAddCARule(4, 3, 3, [12], [2], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t5, role16>
  trans = await instance.methods.suAddCARule(4, 4, 4, [18], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t3, role16>
  trans = await instance.methods.suAddCARule(4, 1, 1, [18], [3], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t1, role16>
  trans = await instance.methods.suAddCARule(4, 2, 2, [18], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t5, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [14], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role4], t1, role16>
  trans = await instance.methods.suAddCARule(4, 1, 1, [14], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role22], t4, role16>
  trans = await instance.methods.suAddCARule(4, 2, 2, [2], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t3, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [2], [3], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role22], t5, role16>
  trans = await instance.methods.suAddCARule(4, 1, 1, [2], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role22], t1, role16>
  trans = await instance.methods.suAddCARule(4, 3, 3, [2], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role21], t2, role16>
  trans = await instance.methods.suAddCARule(4, 4, 4, [26], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t1, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [26], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t2, role16>
  trans = await instance.methods.suAddCARule(4, 3, 3, [6], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role24], t1, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [8], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t5, role16>
  trans = await instance.methods.suAddCARule(4, 1, 1, [8], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role24], t2, role16>
  trans = await instance.methods.suAddCARule(4, 3, 3, [8], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role24], t3, role16>
  trans = await instance.methods.suAddCARule(4, 2, 2, [8], [3], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role23], t4, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [25], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t2, role16>
  trans = await instance.methods.suAddCARule(4, 4, 4, [25], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role8], t4, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [4], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role12], t2, role16>
  trans = await instance.methods.suAddCARule(4, 5, 5, [1], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role12], t4, role16>
  trans = await instance.methods.suAddCARule(4, 4, 4, [1], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role12], t3, role12>
  trans = await instance.methods.suAddCARule(4, 1, 1, [1], [3], 1,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role12], t5, role16>
  trans = await instance.methods.suAddCARule(4, 2, 2, [1], [5], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t3, role19>
  trans = await instance.methods.suAddCARule(4, 2, 2, [18], [3], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role3], t1, role19>
  trans = await instance.methods.suAddCARule(4, 4, 4, [18], [1], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t5, role19>
  trans = await instance.methods.suAddCARule(4, 3, 3, [14], [5], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t2, role19>
  trans = await instance.methods.suAddCARule(4, 5, 5, [14], [2], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t3, role19>
  trans = await instance.methods.suAddCARule(4, 4, 4, [14], [3], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role22], t5, role19>
  trans = await instance.methods.suAddCARule(4, 5, 5, [2], [5], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role21], t2, role19>
  trans = await instance.methods.suAddCARule(4, 2, 2, [26], [2], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role21], t3, role19>
  trans = await instance.methods.suAddCARule(4, 3, 3, [26], [3], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role21], t4, role19>
  trans = await instance.methods.suAddCARule(4, 5, 5, [26], [4], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role6], t3, role12>
  trans = await instance.methods.suAddCARule(4, 3, 3, [6], [3], 1,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role6], t5, role19>
  trans = await instance.methods.suAddCARule(4, 2, 2, [6], [5], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role6], t1, role19>
  trans = await instance.methods.suAddCARule(4, 4, 4, [6], [1], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role24], t2, role19>
  trans = await instance.methods.suAddCARule(4, 1, 1, [8], [2], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role24], t5, role19>
  trans = await instance.methods.suAddCARule(4, 5, 5, [8], [5], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role23], t4, role19>
  trans = await instance.methods.suAddCARule(4, 4, 4, [25], [4], 5,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role3], t3, role10>
  trans = await instance.methods.suAddCARule(4, 5, 5, [18], [3], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role3], t1, role10>
  trans = await instance.methods.suAddCARule(4, 3, 3, [18], [1], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role3], t2, role10>
  trans = await instance.methods.suAddCARule(4, 2, 2, [18], [2], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role3], t4, role10>
  trans = await instance.methods.suAddCARule(4, 1, 1, [18], [4], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role4], t4, role10>
  trans = await instance.methods.suAddCARule(4, 2, 2, [14], [4], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t3-t3], [role4], t3, role10>
  trans = await instance.methods.suAddCARule(4, 3, 3, [14], [3], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t1-t1], [role4], t2, role10>
  trans = await instance.methods.suAddCARule(4, 1, 1, [14], [2], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role4], t5, role10>
  trans = await instance.methods.suAddCARule(4, 5, 5, [14], [5], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role4], t1, role10>
  trans = await instance.methods.suAddCARule(4, 4, 4, [14], [1], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t5-t5], [role6], t1, role10>
  trans = await instance.methods.suAddCARule(4, 5, 5, [6], [1], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t4-t4], [role7], t4, role10>
  trans = await instance.methods.suAddCARule(4, 4, 4, [7], [4], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role8, [t2-t2], [role7], t3, role10>
  trans = await instance.methods.suAddCARule(4, 2, 2, [7], [3], 13,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role6], t3, role13>
  trans = await instance.methods.suAddCARule(2, 4, 4, [6], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role6], t5, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [6], [5], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role7], t2, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [7], [2], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role8], t3, role13>
  trans = await instance.methods.suAddCARule(2, 3, 3, [4], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role8], t1, role13>
  trans = await instance.methods.suAddCARule(2, 4, 4, [4], [1], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role9], t2, role13>
  trans = await instance.methods.suAddCARule(2, 3, 3, [30], [2], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role9], t4, role13>
  trans = await instance.methods.suAddCARule(2, 4, 4, [30], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role9], t3, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [30], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role12], t1, role13>
  trans = await instance.methods.suAddCARule(2, 1, 1, [1], [1], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role12], t3, role13>
  trans = await instance.methods.suAddCARule(2, 3, 3, [1], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role22], t5, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [2], [5], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role21], t4, role13>
  trans = await instance.methods.suAddCARule(2, 1, 1, [26], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role24], t5, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [8], [5], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t4-t4], [role24], t3, role13>
  trans = await instance.methods.suAddCARule(2, 4, 4, [8], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role23], t2, role13>
  trans = await instance.methods.suAddCARule(2, 5, 5, [25], [2], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t3-t3], [role23], t1, role13>
  trans = await instance.methods.suAddCARule(2, 3, 3, [25], [1], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t2-t2], [role23], t3, role13>
  trans = await instance.methods.suAddCARule(2, 2, 2, [25], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t1-t1], [role28], t2, role13>
  trans = await instance.methods.suAddCARule(2, 1, 1, [28], [2], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX3Pos] <role22, [t5-t5], [role28], t4, role13>
  trans = await instance.methods.suAddCARule(2, 5, 5, [28], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t1-t1], [role7, NOT role15], t2, role2>
  trans = await instance.methods.suAddCARule(7, 1, 1, [7, -1 * 22], [2], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t2-t2], [role7, NOT role15], t4, role2>
  trans = await instance.methods.suAddCARule(7, 2, 2, [7, -1 * 22], [4], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role7, NOT role15], t3, role2>
  trans = await instance.methods.suAddCARule(7, 5, 5, [7, -1 * 22], [3], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t4-t4], [role28, NOT role15], t2, role2>
  trans = await instance.methods.suAddCARule(7, 4, 4, [28, -1 * 22], [2], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t3-t3], [role28, NOT role15], t4, role2>
  trans = await instance.methods.suAddCARule(7, 3, 3, [28, -1 * 22], [4], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role7, [t5-t5], [role28, NOT role15], t1, role2>
  trans = await instance.methods.suAddCARule(7, 5, 5, [28, -1 * 22], [1], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.methods.suAddCARule(4, 5, 5, [18, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [3], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role3, NOT role2, NOT role7, NOT role22, NOT role24], t4, role15>
  trans = await instance.methods.suAddCARule(4, 2, 2, [18, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [4], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t3-t3], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t1, role15>
  trans = await instance.methods.suAddCARule(4, 3, 3, [26, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [1], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role21, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.methods.suAddCARule(4, 5, 5, [26, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [5], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t2-t2], [role23, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.methods.suAddCARule(4, 2, 2, [25, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [3], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role8, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.methods.suAddCARule(4, 5, 5, [4, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [5], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t1-t1], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t5, role15>
  trans = await instance.methods.suAddCARule(4, 1, 1, [1, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [5], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role8, [t5-t5], [role12, NOT role2, NOT role7, NOT role22, NOT role24], t3, role15>
  trans = await instance.methods.suAddCARule(4, 5, 5, [1, -1 * 17, -1 * 7, -1 * 2, -1 * 8], [3], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t3-t3], [role23, NOT role6, NOT role8, NOT role22], t5, role24>
  trans = await instance.methods.suAddCARule(2, 3, 3, [25, -1 * 6, -1 * 4, -1 * 2], [5], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role22, [t4-t4], [role23, NOT role6, NOT role8, NOT role22], t4, role24>
  trans = await instance.methods.suAddCARule(2, 4, 4, [25, -1 * 6, -1 * 4, -1 * 2], [4], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.methods.suAddCARule(8, 3, 3, [25, -1 * 4, -1 * 2, -1 * 8], [4], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role24, [t4-t4], [role23, NOT role8, NOT role22, NOT role24], t5, role6>
  trans = await instance.methods.suAddCARule(8, 4, 4, [25, -1 * 4, -1 * 2, -1 * 8], [5], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t2-t2], [role23, NOT role6, NOT role22, NOT role24], t4, role8>
  trans = await instance.methods.suAddCARule(6, 2, 2, [25, -1 * 6, -1 * 2, -1 * 8], [4], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t1, role8>
  trans = await instance.methods.suAddCARule(6, 4, 4, [25, -1 * 6, -1 * 2, -1 * 8], [1], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.methods.suAddCARule(6, 5, 5, [25, -1 * 6, -1 * 2, -1 * 8], [2], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanAssign [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.methods.suAddCARule(6, 1, 1, [25, -1 * 6, -1 * 2, -1 * 8], [3], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createCARules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CR Rules
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t3, role20>
  trans = await instance.methods.suAddCRRule(0, 3, 3, [], [3], 27,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t5-t5], TRUE, t4, role5>
  trans = await instance.methods.suAddCRRule(0, 5, 5, [], [4], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t3-t3], TRUE, t1, role5>
  trans = await instance.methods.suAddCRRule(0, 3, 3, [], [1], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t1, role15>
  trans = await instance.methods.suAddCRRule(0, 4, 4, [], [1], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [TA1Tru] <TRUE, [t4-t4], TRUE, t1, role13>
  trans = await instance.methods.suAddCRRule(0, 4, 4, [], [1], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t1, role32>
  trans = await instance.methods.suAddCRRule(6, 3, 3, [], [1], 12,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t2, role32>
  trans = await instance.methods.suAddCRRule(6, 5, 5, [], [2], 12,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t3, role32>
  trans = await instance.methods.suAddCRRule(6, 1, 1, [], [3], 12,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t2, role30>
  trans = await instance.methods.suAddCRRule(4, 4, 4, [], [2], 15,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t5, role17>
  trans = await instance.methods.suAddCRRule(4, 3, 3, [], [5], 20,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t3, role17>
  trans = await instance.methods.suAddCRRule(4, 4, 4, [], [3], 20,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t1, role17>
  trans = await instance.methods.suAddCRRule(4, 1, 1, [], [1], 20,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t2, role17>
  trans = await instance.methods.suAddCRRule(4, 5, 5, [], [2], 20,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t4-t4], TRUE, t2, role16>
  trans = await instance.methods.suAddCRRule(4, 4, 4, [], [2], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t1, role16>
  trans = await instance.methods.suAddCRRule(4, 5, 5, [], [1], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t2-t2], TRUE, t1, role18>
  trans = await instance.methods.suAddCRRule(4, 2, 2, [], [1], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t4, role18>
  trans = await instance.methods.suAddCRRule(4, 1, 1, [], [4], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t5-t5], TRUE, t2, role18>
  trans = await instance.methods.suAddCRRule(4, 5, 5, [], [2], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t5, role18>
  trans = await instance.methods.suAddCRRule(4, 3, 3, [], [5], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t2, role14>
  trans = await instance.methods.suAddCRRule(6, 5, 5, [], [2], 23,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t5, role14>
  trans = await instance.methods.suAddCRRule(6, 4, 4, [], [5], 23,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t3-t3], TRUE, t3, role12>
  trans = await instance.methods.suAddCRRule(6, 3, 3, [], [3], 1,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role19, [t1-t1], TRUE, t5, role20>
  trans = await instance.methods.suAddCRRule(5, 1, 1, [], [5], 27,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t5-t5], TRUE, t4, role33>
  trans = await instance.methods.suAddCRRule(1, 5, 5, [], [4], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t2-t2], TRUE, t2, role33>
  trans = await instance.methods.suAddCRRule(1, 2, 2, [], [2], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t1-t1], TRUE, t5, role33>
  trans = await instance.methods.suAddCRRule(1, 1, 1, [], [5], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role12, [t3-t3], TRUE, t3, role33>
  trans = await instance.methods.suAddCRRule(1, 3, 3, [], [3], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t2-t2], TRUE, t3, role5>
  trans = await instance.methods.suAddCRRule(6, 2, 2, [], [3], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t2, role5>
  trans = await instance.methods.suAddCRRule(6, 4, 4, [], [2], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t1-t1], TRUE, t5, role5>
  trans = await instance.methods.suAddCRRule(6, 1, 1, [], [5], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role7, [t4-t4], TRUE, t4, role2>
  trans = await instance.methods.suAddCRRule(7, 4, 4, [], [4], 17,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t3-t3], TRUE, t2, role15>
  trans = await instance.methods.suAddCRRule(4, 3, 3, [], [2], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role8, [t1-t1], TRUE, t4, role15>
  trans = await instance.methods.suAddCRRule(4, 1, 1, [], [4], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t4, role3>
  trans = await instance.methods.suAddCRRule(2, 1, 1, [], [4], 18,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t1, role3>
  trans = await instance.methods.suAddCRRule(2, 2, 2, [], [1], 18,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t1, role4>
  trans = await instance.methods.suAddCRRule(2, 2, 2, [], [1], 14,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t2, role4>
  trans = await instance.methods.suAddCRRule(2, 1, 1, [], [2], 14,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t3, role12>
  trans = await instance.methods.suAddCRRule(2, 3, 3, [], [3], 1,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t4, role4>
  trans = await instance.methods.suAddCRRule(2, 4, 4, [], [4], 14,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t5, role23>
  trans = await instance.methods.suAddCRRule(2, 4, 4, [], [5], 25,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t4, role13>
  trans = await instance.methods.suAddCRRule(2, 1, 1, [], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t5-t5], TRUE, t3, role12>
  trans = await instance.methods.suAddCRRule(2, 5, 5, [], [3], 1,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t1-t1], TRUE, t2, role24>
  trans = await instance.methods.suAddCRRule(2, 1, 1, [], [2], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t2-t2], TRUE, t4, role24>
  trans = await instance.methods.suAddCRRule(2, 2, 2, [], [4], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t4-t4], TRUE, t5, role24>
  trans = await instance.methods.suAddCRRule(2, 4, 4, [], [5], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role22, [t3-t3], TRUE, t1, role24>
  trans = await instance.methods.suAddCRRule(2, 3, 3, [], [1], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t2-t2], TRUE, t4, role6>
  trans = await instance.methods.suAddCRRule(8, 2, 2, [], [4], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role24, [t3-t3], TRUE, t1, role6>
  trans = await instance.methods.suAddCRRule(8, 3, 3, [], [1], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t4-t4], TRUE, t4, role8>
  trans = await instance.methods.suAddCRRule(6, 4, 4, [], [4], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanRevoke [XX1Tru] <role6, [t5-t5], TRUE, t5, role8>
  trans = await instance.methods.suAddCRRule(6, 5, 5, [], [5], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createCRRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CE Rules
  // CanEnable [TA1Tru] <TRUE, [t3-t3], TRUE, t3, role20>
  trans = await instance.methods.suAddCERule(0, 3, 3, [], [3], 27,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XA4Mix] <TRUE, [t3-t3], [role23, NOT role6, NOT role22, NOT role24], t5, role8>
  trans = await instance.methods.suAddCERule(0, 3, 3, [25, -1 * 6, -1 * 2, -1 * 8], [5], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t2, role17>
  trans = await instance.methods.suAddCERule(4, 5, 5, [], [2], 20,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role12, [t5-t5], TRUE, t4, role33>
  trans = await instance.methods.suAddCERule(1, 5, 5, [], [4], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role6, [t1-t1], TRUE, t5, role5>
  trans = await instance.methods.suAddCERule(6, 1, 1, [], [5], 16,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t3-t3], TRUE, t2, role15>
  trans = await instance.methods.suAddCERule(4, 3, 3, [], [2], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t5-t5], TRUE, t5, role15>
  trans = await instance.methods.suAddCERule(4, 5, 5, [], [5], 22,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t2-t2], TRUE, t4, role16>
  trans = await instance.methods.suAddCERule(4, 2, 2, [], [4], 21,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t1-t1], TRUE, t5, role11>
  trans = await instance.methods.suAddCERule(4, 1, 1, [], [5], 11,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role8, [t2-t2], TRUE, t2, role25>
  trans = await instance.methods.suAddCERule(4, 2, 2, [], [2], 29,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t1-t1], TRUE, t4, role28>
  trans = await instance.methods.suAddCERule(2, 1, 1, [], [4], 28,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t4-t4], TRUE, t4, role4>
  trans = await instance.methods.suAddCERule(2, 4, 4, [], [4], 14,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t1-t1], TRUE, t4, role13>
  trans = await instance.methods.suAddCERule(2, 1, 1, [], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t1-t1], TRUE, t2, role24>
  trans = await instance.methods.suAddCERule(2, 1, 1, [], [2], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role22, [t2-t2], TRUE, t4, role24>
  trans = await instance.methods.suAddCERule(2, 2, 2, [], [4], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX1Tru] <role24, [t2-t2], TRUE, t4, role6>
  trans = await instance.methods.suAddCERule(8, 2, 2, [], [4], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t3-t3], [role8], t3, role13>
  trans = await instance.methods.suAddCERule(2, 3, 3, [4], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t1-t1], [role12], t1, role13>
  trans = await instance.methods.suAddCERule(2, 1, 1, [1], [1], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t3-t3], [role12], t3, role13>
  trans = await instance.methods.suAddCERule(2, 3, 3, [1], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX3Pos] <role22, [t5-t5], [role28], t4, role13>
  trans = await instance.methods.suAddCERule(2, 5, 5, [28], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role24, [t3-t3], [role23, NOT role8, NOT role22, NOT role24], t4, role6>
  trans = await instance.methods.suAddCERule(8, 3, 3, [25, -1 * 4, -1 * 2, -1 * 8], [4], 6,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t4-t4], [role23, NOT role6, NOT role22, NOT role24], t1, role8>
  trans = await instance.methods.suAddCERule(6, 4, 4, [25, -1 * 6, -1 * 2, -1 * 8], [1], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t5-t5], [role23, NOT role6, NOT role22, NOT role24], t2, role8>
  trans = await instance.methods.suAddCERule(6, 5, 5, [25, -1 * 6, -1 * 2, -1 * 8], [2], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanEnable [XX4Mix] <role6, [t1-t1], [role23, NOT role6, NOT role22, NOT role24], t3, role8>
  trans = await instance.methods.suAddCERule(6, 1, 1, [25, -1 * 6, -1 * 2, -1 * 8], [3], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createCERules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // Create CD Rules
  // CanDisable [TA1Tru] <TRUE, [t2-t2], TRUE, t2, role28>
  trans = await instance.methods.suAddCDRule(0, 2, 2, [], [2], 28,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XA3Pos] <TRUE, [t3-t3], [role4], t4, role13>
  trans = await instance.methods.suAddCDRule(0, 3, 3, [14], [4], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role8, [t1-t1], TRUE, t4, role18>
  trans = await instance.methods.suAddCDRule(4, 1, 1, [], [4], 19,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role12, [t1-t1], TRUE, t5, role33>
  trans = await instance.methods.suAddCDRule(1, 1, 1, [], [5], 10,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t5-t5], TRUE, t3, role28>
  trans = await instance.methods.suAddCDRule(2, 5, 5, [], [3], 28,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t1-t1], TRUE, t4, role3>
  trans = await instance.methods.suAddCDRule(2, 1, 1, [], [4], 18,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX1Tru] <role22, [t2-t2], TRUE, t1, role3>
  trans = await instance.methods.suAddCDRule(2, 2, 2, [], [1], 18,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t4-t4], [role6], t3, role13>
  trans = await instance.methods.suAddCDRule(2, 4, 4, [6], [3], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX3Pos] <role22, [t1-t1], [role28], t2, role13>
  trans = await instance.methods.suAddCDRule(2, 1, 1, [28], [2], 24,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role22, [t3-t3], [role23, NOT role6, NOT role8, NOT role22], t5, role24>
  trans = await instance.methods.suAddCDRule(2, 3, 3, [25, -1 * 6, -1 * 4, -1 * 2], [5], 8,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  // CanDisable [XX4Mix] <role6, [t2-t2], [role23, NOT role6, NOT role22, NOT role24], t4, role8>
  trans = await instance.methods.suAddCDRule(6, 2, 2, [25, -1 * 6, -1 * 2, -1 * 8], [4], 4,  { from: su }).estimateGas();
  gas += trans.receipt.gasUsed;
  console.log('[createCDRules] Total Gas used:', gas);
  totalGas+=gas; allGas.push(gas); gas = 0;

  //////////////////////////////////////////////////////////
  console.log('Total Gas:', totalGas);
  console.log('All Gas:', allGas);
  callback();
};