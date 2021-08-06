var atrbac = artifacts.require('ATRBAC');

const truffleAssert = require('truffle-assertions');

var i = 0;
var rid = {
  TRUE: i++,
  Dean: i++,
  Professor: i++,
  Student: i++,
  TA: i++,
  ECE606_Professor: i++,
  ECE606_TA: i++,
  ECE606_Student: i++,
  ECE602_Professor: i++,
  ECE602_TA: i++,
  ECE602_Student: i++
};

contract('ATRBAC', function(accounts) {
  var superUser = accounts[0];
  var dean = accounts[0];
  var prof1 = accounts[1];
  var prof2 = accounts[2];
  var ta1 = accounts[3];
  var ta2 = accounts[4];
  var student1 = accounts[5];
  let instance;

  before(async () => {
    instance = await atrbac.deployed();
  });
  it('Should create new roles', async () => {
    let bb = await instance.suAddNewRole.sendTransaction('Dean', { from: superUser });
    let message = await instance.getLastRoleId.call({ from: superUser });
    assert.equal(message.toNumber(), rid['Dean'], 'Incorrect Role ID.');

    await instance.suAddNewRole.sendTransaction('Professor', { from: superUser });
    message = await instance.getLastRoleId.call({ from: superUser });
    assert.equal(message.toNumber(), rid['Professor'], 'Incorrect Role ID.');

    await instance.suAddNewRole.sendTransaction('Student', { from: superUser });
    message = await instance.getLastRoleId.call({ from: superUser });
    assert.equal(message.toNumber(), rid['Student'], 'Incorrect Role ID.');

    await instance.suAddNewRole.sendTransaction('TA', { from: superUser });
    message = await instance.getLastRoleId.call({ from: superUser });
    assert.equal(message.toNumber(), rid['TA'], 'Incorrect Role ID.');
  });
  it('Should create the TRUE role at index 0', async () => {
    let message = await instance.getRoleName(0, { from: superUser });
    assert.equal(message, 'TRUE', 'Incorrect Role Name for ID 0.');
  });
  it('Should setup timeslots for the university example', async () => {
    // Timeslot 0: 12am to and including 7am [0,8)
    await instance.suAddTimeSlot.sendTransaction(0, 7, { from: superUser });
    let message = await instance.getLastTimeslotId.call({ from: superUser });
    assert.equal(message.toNumber(), 0, 'Incorrect Timeslot ID.');

    // Timeslot 1: 8am to and including 4pm [8,16)
    await instance.suAddTimeSlot.sendTransaction(8, 15, { from: superUser });
    message = await instance.getLastTimeslotId.call({ from: superUser });
    assert.equal(message.toNumber(), 1, 'Incorrect Timeslot ID.');

    // Timeslot 2: 5pm to and including 11pm [17,23)
    await instance.suAddTimeSlot.sendTransaction(16, 23, { from: superUser });
    message = await instance.getLastTimeslotId.call({ from: superUser });
    assert.equal(message.toNumber(), 2, 'Incorrect Timeslot ID.');
  });
  it('Should setup roles for the university example', async () => {
    await instance.suAddNewRole.sendTransaction('ECE606_Professor', { from: superUser });
    await instance.suAddNewRole.sendTransaction('ECE606_TA', { from: superUser });
    await instance.suAddNewRole.sendTransaction('ECE606_Student', { from: superUser });

    await instance.suAddNewRole.sendTransaction('ECE602_Professor', { from: superUser });
    await instance.suAddNewRole.sendTransaction('ECE602_TA', { from: superUser });
    await instance.suAddNewRole.sendTransaction('ECE602_Student', { from: superUser });

    let message = await instance.getRoleName(rid['ECE602_Student'], { from: superUser });
    assert.equal(message, 'ECE602_Student', 'Incorrect Role Name.');
  });
  it('Should setup users for the university example', async () => {
    // Dean = {Dean} - timeslots 0,1,2
    await instance.suAddRoleTimeslotToUser.sendTransaction(dean, rid['Dean'], 0, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(dean, rid['Dean'], 1, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(dean, rid['Dean'], 2, { from: superUser });

    // Prof 1 = {Professor, ECE606_Professor} - Timeslot 1
    await instance.suAddRoleTimeslotToUser.sendTransaction(prof1, rid['Professor'], 1, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(prof1, rid['ECE606_Professor'], 1, {
      from: superUser
    });
    message = await instance.hasAccess.call(prof1, rid['Professor'], 1, { from: prof1 });
    assert.isTrue(message, "User doesn't have access to role.");
    // Prof 2 = {Professor, ECE602_Professor} - Timeslot 0
    await instance.suAddRoleTimeslotToUser.sendTransaction(prof2, rid['Professor'], 0, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(prof2, rid['ECE602_Professor'], 0, {
      from: superUser
    });
    // TA 1 = {TA(1), ECE606_TA(1), Student(0), ECE602_Student(0)} - Timeslot 0 and 1
    await instance.suAddRoleTimeslotToUser.sendTransaction(ta1, rid['TA'], 1, { from: superUser });
    // await instance.suAddRoleTimeslotToUser.sendTransaction(ta1, rid['ECE606_TA'], 1, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(ta1, rid['Student'], 0, { from: superUser });
    // await instance.suAddRoleTimeslotToUser.sendTransaction(ta1, rid['ECE602_Student'], 1, { from: superUser });
    // TA 2 = {TA, ECE606_TA, Student} - Timeslot 1
    await instance.suAddRoleTimeslotToUser.sendTransaction(ta2, rid['TA'], 1, { from: superUser });
    // await instance.suAddRoleTimeslotToUser.sendTransaction(ta2, rid['ECE606_TA'], 1, { from: superUser });
    await instance.suAddRoleTimeslotToUser.sendTransaction(ta2, rid['Student'], 1, { from: superUser });
    // Student 1 = {Student, ECE602_Student} - Timeslot 0
    await instance.suAddRoleTimeslotToUser.sendTransaction(student1, rid['Student'], 0, { from: superUser });
    // await instance.suAddRoleTimeslotToUser.sendTransaction(student1, rid['ECE602_Student'], 0, { from: superUser });
  });
  it('Should setup rules for the university example', async () => {
    // CA0 <ECE602_Professor, t0-t0, NOT ECE602_TA & Student, [t0], ECE602_Student>
    await instance.suAddCARule.sendTransaction(
      rid['ECE602_Professor'],
      0,
      0,
      [-1 * rid['ECE602_TA'], rid['Student']],
      [0],
      rid['ECE602_Student'],
      { from: superUser }
    );
    // CA1 <ECE602_Professor, t0-t2, NOT ECE602_Student & TA, [t0], ECE602_TA>
    await instance.suAddCARule.sendTransaction(
      rid['ECE602_Professor'],
      0,
      2,
      [-1 * rid['ECE602_Student'], rid['TA']],
      [0],
      rid['ECE602_TA'],
      { from: superUser }
    );
    // CR0 <ECE602_Professor, t0-t2, ECE602_Student, [t0], ECE602_Student>
    await instance.suAddCRRule.sendTransaction(
      rid['ECE602_Professor'],
      0,
      2,
      [rid['ECE602_Student']],
      [0],
      rid['ECE602_Student'],
      { from: superUser }
    );
    // CR1 <ECE602_Professor, t1-t1, ECE602_TA, [t0], ECE602_TA>
    await instance.suAddCRRule.sendTransaction(
      rid['ECE602_Professor'],
      1,
      1,
      [rid['ECE602_TA']],
      [0],
      rid['ECE602_TA'],
      { from: superUser }
    );

    // CA2 <ECE606_Professor, t1-t1, NOT ECE606_TA & Student, [t1], ECE606_Student>
    await instance.suAddCARule.sendTransaction(
      rid['ECE606_Professor'],
      1,
      1,
      [-1 * rid['ECE606_TA'], rid['Student']],
      [1],
      rid['ECE606_Student'],
      { from: superUser }
    );
    // CA3 <ECE606_Professor, t1-t1, NOT ECE606_Student & TA, [t1], ECE606_TA>
    await instance.suAddCARule.sendTransaction(
      rid['ECE606_Professor'],
      1,
      1,
      [-1 * rid['ECE606_Student'], rid['TA']],
      [1],
      rid['ECE606_TA'],
      { from: superUser }
    );
    // CR2 <ECE606_Professor, t1-t1, ECE606_Student, [t1], ECE606_Student>
    await instance.suAddCRRule.sendTransaction(
      rid['ECE606_Professor'],
      1,
      1,
      [rid['ECE606_Student']],
      [1],
      rid['ECE606_Student'],
      { from: superUser }
    );
    // CR3 <ECE606_Professor, t1-t1, ECE606_TA, [t1], ECE606_TA>
    await instance.suAddCRRule.sendTransaction(
      rid['ECE606_Professor'],
      1,
      1,
      [rid['ECE606_TA']],
      [1],
      rid['ECE606_TA'],
      { from: superUser }
    );

    // CE0 <Dean, t0-t2, TRUE, [t0,t1,t2], ECE602_Professor>
    await instance.suAddCERule.sendTransaction(rid['Dean'], 0, 2, [], [0, 1, 2], rid['ECE602_Professor'], {
      from: superUser
    });
    // CE1 <Dean, t0-t2, TRUE, [t0,t1,t2], ECE606_Professor>
    await instance.suAddCERule.sendTransaction(rid['Dean'], 0, 2, [], [0, 1, 2], rid['ECE606_Professor'], {
      from: superUser
    });
  });
  it('Should fail setting up badly formatted rules', async () => {
    // INCORRECT Adim Time Interval
    // CA <ECE602_Professor, t1-t0, NOT ECE602_TA & Student, [t1], ECE602_Student>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        rid['ECE602_Professor'],
        1,
        0,
        [-1 * rid['ECE602_TA'], rid['Student']],
        [1],
        rid['ECE602_Student'],
        { from: superUser }
      ),
      'The Admin Time Interval Start index must be <= to the End index'
    );
    // CA <ECE602_Professor, t1-t0, NOT ECE602_TA & I_DONT_EXISTS & Student, [t1], ECE602_Student>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        rid['ECE602_Professor'],
        1,
        1,
        [-1 * rid['ECE602_TA'], 17, rid['Student']],
        [1],
        rid['ECE602_Student'],
        { from: superUser }
      ),
      'Role does not exists.'
    );
    // CA <ECE602_Professor, t1-t1, NOT ECE602_TA & Student, [t1], I_DONT_EXISTS>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        rid['ECE602_Professor'],
        1,
        1,
        [-1 * rid['ECE602_TA'], rid['Student']],
        [1],
        17,
        { from: superUser }
      ),
      'Role does not exists.'
    );
    // CA <I_DONT_EXISTS, t1-t1, NOT ECE602_TA & Student, [t1], ECE602_Student>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        17,
        1,
        1,
        [-1 * rid['ECE602_TA'], rid['Student']],
        [1],
        rid['ECE602_Student'],
        { from: superUser }
      ),
      'Role does not exists.'
    );
    // CA <ECE602_Professor, t1-tXX, NOT ECE602_TA & Student, [t1], ECE602_Student>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        rid['ECE602_Professor'],
        1,
        100,
        [-1 * rid['ECE602_TA'], rid['Student']],
        [1],
        rid['ECE602_Student'],
        { from: superUser }
      ),
      'Timeslot does not exists.'
    );
    // CA <ECE602_Professor, t1-t1, NOT ECE602_TA & Student, [tXX], ECE602_Student>
    await truffleAssert.reverts(
      instance.suAddCARule.sendTransaction(
        rid['ECE602_Professor'],
        1,
        1,
        [-1 * rid['ECE602_TA'], rid['Student']],
        [100],
        rid['ECE602_Student'],
        { from: superUser }
      ),
      'Timeslot does not exists.'
    );
    // console.log(instance);
  });

  it('Should enable the Dean role using the Super User', async () => {
    await instance.suEnableRole.sendTransaction(rid['Dean'], 0, { from: superUser });
    await instance.suEnableRole.sendTransaction(rid['Dean'], 1, { from: superUser });
    assert.isFalse(
      await instance.roleEnabled.call(rid['Dean'], 2, { from: superUser }),
      'Dean role is Enabled by default.'
    );
    await instance.suEnableRole.sendTransaction(rid['Dean'], 2, { from: superUser });
    assert.isTrue(await instance.roleEnabled.call(rid['Dean'], 2, { from: superUser }), 'Dean role is not Enabled.');
  });

  it('Should show the dean and professors adding TAs to their courses', async () => {
    // console.log(0, await instance.nowInTimeslot.call(0, { from: superUser }));
    // console.log(1, await instance.nowInTimeslot.call(1, { from: superUser }));
    // console.log(2, await instance.nowInTimeslot.call(2, { from: superUser }));

    await instance.fireCanEnableRule.sendTransaction(0, { from: dean });
    await instance.fireCanEnableRule.sendTransaction(1, { from: dean });

    // console.log(
    //   'hasAccess(prof1, ECE606_Professor, 1)',
    //   await instance.hasAccess.call(prof1, rid['ECE606_Professor'], 1, { from: prof1 })
    // );
    await instance.fireCanAssignRule.sendTransaction(3, ta1, { from: prof1 });
    await assert.isTrue(
      await instance.hasAccess.call(ta1, rid['ECE606_TA'], 1, { from: superUser }),
      "User doesn't have access to role. ta1, rid['ECE606_TA']"
    );
    await instance.fireCanAssignRule.sendTransaction(3, ta2, { from: prof1 });
    await assert.isTrue(
      await instance.hasAccess.call(ta2, rid['ECE606_TA'], 1, { from: superUser }),
      "User doesn't have access to role. ta2, rid['ECE606_TA']"
    );

    await instance.fireCanAssignRule.sendTransaction(0, ta1, { from: prof2 });
    await assert.isTrue(
      await instance.hasAccess.call(ta1, rid['ECE602_Student'], 0, { from: superUser }),
      "User doesn't have access to role. ta1, rid['ECE602_Student']"
    );
    await instance.fireCanAssignRule.sendTransaction(0, student1, { from: prof2 });
    await assert.isTrue(
      await instance.hasAccess.call(student1, rid['ECE602_Student'], 0, { from: superUser }),
      "User doesn't have access to role. student1, rid['ECE602_Student']"
    );
  });
  it('Should show professors cannot add a TA if they are a student in the course or vice versa', async () => {
    await truffleAssert.reverts(
      instance.fireCanAssignRule.sendTransaction(2, ta1, { from: prof1 }),
      'Target User does not satisfy the preconditions for the rule.'
    );
    await truffleAssert.reverts(
      instance.fireCanAssignRule.sendTransaction(3, student1, { from: prof1 }),
      'Target User does not satisfy the preconditions for the rule.'
    );
    await truffleAssert.reverts(
      instance.fireCanAssignRule.sendTransaction(3, student1, { from: prof2 }),
      'Sender is not authorized to fire this rule at this time.'
    );
  });
});
