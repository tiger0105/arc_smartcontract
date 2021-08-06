pragma solidity ^0.4.0;

contract AGTUniv07 {
	mapping(uint => mapping(uint => bool)) public role_enablement;
	mapping (address => mapping (uint => mapping (uint => bool))) trbac_state;

	modifier noZeroAddress(address account) {
		require(account != address(0), "Address cannot be the zero address");
		_;
	}

	//////////////////////////////////////////////////////////
	// Safety Query
	address public owner;
	constructor() public { owner = msg.sender; }
	function deposit(uint256 amount) public payable {
		require(msg.value == amount, "Incorrect amount sent");
	}

	function withdraw(uint256 amount) public {
		require(amount <= address(this).balance, "Not Enough Funds");
		require(trbac_state[msg.sender][7][0] == true, "User does not satisfy the Safety Query");
		msg.sender.transfer(amount);
	}

	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanAssign Rules
	function fireCA1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-1 TA1Tru */  <TRUE, t25, TRUE, t9, role23>
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-2 TA1Tru */  <TRUE, t14, TRUE, t27, role28>
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-3 TA1Tru */  <TRUE, t14, TRUE, t20, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-4 TA1Tru */  <TRUE, t28, TRUE, t2, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-5 TA1Tru */  <TRUE, t16, TRUE, t26, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-6 TA1Tru */  <TRUE, t29, TRUE, t20, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-7 TA1Tru */  <TRUE, t11, TRUE, t1, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-8 TA1Tru */  <TRUE, t9, TRUE, t27, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-9 TA1Tru */  <TRUE, t1, TRUE, t2, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-10 TA1Tru */  <TRUE, t18, TRUE, t16, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-11 TA1Tru */  <TRUE, t4, TRUE, t11, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-12 TA1Tru */  <TRUE, t5, TRUE, t19, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-13 TA1Tru */  <TRUE, t2, TRUE, t1, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-14 TA1Tru */  <TRUE, t15, TRUE, t30, role21>
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-15 TA1Tru */  <TRUE, t9, TRUE, t18, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-16 TA1Tru */  <TRUE, t23, TRUE, t20, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-17 TA1Tru */  <TRUE, t4, TRUE, t21, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-18 TA1Tru */  <TRUE, t6, TRUE, t11, role4>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-19 TA1Tru */  <TRUE, t15, TRUE, t18, role4>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-20 TA2Neg */  <TRUE, t21, NOT ~ role14, t29, role32>
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-21 TA2Neg */  <TRUE, t12, NOT ~ role14, t1, role32>
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-22 TA2Neg */  <TRUE, t2, NOT ~ role32, t29, role14>
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-23 TA2Neg */  <TRUE, t27, NOT ~ role32, t18, role14>
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-24 TA2Neg */  <TRUE, t17, NOT ~ role32, t2, role14>
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-25 TA2Neg */  <TRUE, t10, NOT ~ role32, t30, role14>
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-26 XA3Pos */  <TRUE, t8, role6 & role8, t4, role34>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-27 XA3Pos */  <TRUE, t1, role7, t2, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-28 XA3Pos */  <TRUE, t24, role14, t18, role30>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-29 XA3Pos */  <TRUE, t28, role14, t16, role30>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-30 XA3Pos */  <TRUE, t20, role14, t11, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-31 XA3Pos */  <TRUE, t4, role14, t8, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-32 XA3Pos */  <TRUE, t27, role14, t30, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-33 XA3Pos */  <TRUE, t18, role14, t20, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-34 XA3Pos */  <TRUE, t17, role14, t21, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-35 XA3Pos */  <TRUE, t7, role17, t19, role16>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-36 XA3Pos */  <TRUE, t8, role14, t30, role18>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-37 XA3Pos */  <TRUE, t17, role32, t28, role18>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-38 XA3Pos */  <TRUE, t20, role32, t19, role18>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-39 XA3Pos */  <TRUE, t30, role32, t29, role18>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-40 XA3Pos */  <TRUE, t16, role32, t2, role18>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-41 XA3Pos */  <TRUE, t29, role29, t22, role27>
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-42 XA3Pos */  <TRUE, t28, role32, t17, role27>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-43 XA3Pos */  <TRUE, t12, role32, t14, role27>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-44 XA3Pos */  <TRUE, t27, role14, t1, role20>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-45 XA3Pos */  <TRUE, t4, role14, t30, role20>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-46 XA3Pos */  <TRUE, t24, role14, t4, role20>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-47 XA3Pos */  <TRUE, t22, role14, t28, role20>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-48 XA3Pos */  <TRUE, t20, role32, t24, role20>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-49 XA3Pos */  <TRUE, t12, role14, t21, role33>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-50 XA3Pos */  <TRUE, t10, role2, t12, role5>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-51 XA3Pos */  <TRUE, t26, role22, t28, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-52 XA3Pos */  <TRUE, t19, role22, t13, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-53 XA3Pos */  <TRUE, t24, role22, t14, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-54 XA3Pos */  <TRUE, t13, role22, t16, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-55 XA3Pos */  <TRUE, t15, role22, t24, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-56 XA3Pos */  <TRUE, t13, role24, t25, role5>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-57 XA3Pos */  <TRUE, t15, role24, t13, role5>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-58 XA3Pos */  <TRUE, t23, role24, t22, role5>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-59 XA3Pos */  <TRUE, t25, role24, t6, role5>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-60 XA3Pos */  <TRUE, t6, role7, t5, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-61 XA3Pos */  <TRUE, t12, role7, t21, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-62 XA3Pos */  <TRUE, t29, role7, t30, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-63 XA3Pos */  <TRUE, t3, role28, t3, role5>
		require(trbac_state[_targetUser][28][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-64 XA3Pos */  <TRUE, t27, role28, t1, role5>
		require(trbac_state[_targetUser][28][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-65 XA3Pos */  <TRUE, t15, role3, t5, role16>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-66 XA3Pos */  <TRUE, t10, role3, t19, role16>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-67 XA3Pos */  <TRUE, t4, role4, t30, role16>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-68 XA3Pos */  <TRUE, t5, role22, t9, role16>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-69 XA3Pos */  <TRUE, t22, role6, t16, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-70 XA3Pos */  <TRUE, t2, role6, t29, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-71 XA3Pos */  <TRUE, t28, role6, t20, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-72 XA3Pos */  <TRUE, t13, role6, t4, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-73 XA3Pos */  <TRUE, t14, role6, t14, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-74 XA3Pos */  <TRUE, t6, role24, t14, role16>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-75 XA3Pos */  <TRUE, t11, role24, t23, role16>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-76 XA3Pos */  <TRUE, t24, role23, t25, role16>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-77 XA3Pos */  <TRUE, t16, role8, t25, role16>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-78 XA3Pos */  <TRUE, t13, role12, t25, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-79 XA3Pos */  <TRUE, t6, role12, t10, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-80 XA3Pos */  <TRUE, t1, role3, t1, role19>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-81 XA3Pos */  <TRUE, t24, role3, t21, role19>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-82 XA3Pos */  <TRUE, t13, role22, t10, role19>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-83 XA3Pos */  <TRUE, t19, role22, t21, role19>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-84 XA3Pos */  <TRUE, t10, role22, t4, role19>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-85 XA3Pos */  <TRUE, t4, role22, t26, role19>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-86 XA3Pos */  <TRUE, t1, role21, t1, role19>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-87 XA3Pos */  <TRUE, t19, role21, t9, role19>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-88 XA3Pos */  <TRUE, t2, role6, t12, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-89 XA3Pos */  <TRUE, t29, role6, t25, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-90 XA3Pos */  <TRUE, t6, role6, t17, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-91 XA3Pos */  <TRUE, t1, role6, t2, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-92 XA3Pos */  <TRUE, t1, role23, t29, role19>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-93 XA4Mix */  <TRUE, t12, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-94 XA4Mix */  <TRUE, t7, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-95 XA4Mix */  <TRUE, t14, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t25, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-96 XA4Mix */  <TRUE, t29, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t23, role15>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-97 XA4Mix */  <TRUE, t3, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-98 XA4Mix */  <TRUE, t11, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-99 XA4Mix */  <TRUE, t6, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t18, role15>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-100 XA4Mix */  <TRUE, t12, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t11, role15>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-101 XA4Mix */  <TRUE, t1, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t19, role15>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-102 XA4Mix */  <TRUE, t26, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-103 XA4Mix */  <TRUE, t2, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t13, role15>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-104 XA4Mix */  <TRUE, t15, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t16, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-105 XA4Mix */  <TRUE, t16, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t28, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-106 XA4Mix */  <TRUE, t17, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t30, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-107 XA4Mix */  <TRUE, t18, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-108 XA4Mix */  <TRUE, t3, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t17, role8>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-109 XA4Mix */  <TRUE, t7, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t2, role8>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-110 XX1Tru */  <role22, t17, TRUE, t17, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-111 XX1Tru */  <role22, t4, TRUE, t12, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-112 XX1Tru */  <role22, t13, TRUE, t25, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-113 XX1Tru */  <role22, t14, TRUE, t18, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-114 XX1Tru */  <role22, t15, TRUE, t15, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-115 XX1Tru */  <role22, t22, TRUE, t19, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-116 XX1Tru */  <role22, t28, TRUE, t26, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-117 XX1Tru */  <role22, t3, TRUE, t5, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-118 XX1Tru */  <role22, t5, TRUE, t8, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-119 XX1Tru */  <role22, t18, TRUE, t9, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-120 XX1Tru */  <role22, t9, TRUE, t10, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-121 XX1Tru */  <role22, t7, TRUE, t28, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-122 XX1Tru */  <role22, t8, TRUE, t6, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-123 XX1Tru */  <role22, t10, TRUE, t22, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-124 XX1Tru */  <role22, t19, TRUE, t23, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-125 XX1Tru */  <role22, t24, TRUE, t24, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-126 XX1Tru */  <role22, t20, TRUE, t29, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-127 XX1Tru */  <role22, t6, TRUE, t11, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-128 XX1Tru */  <role22, t11, TRUE, t25, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-129 XX1Tru */  <role22, t12, TRUE, t30, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-130 XX1Tru */  <role22, t13, TRUE, t7, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-131 XX1Tru */  <role22, t26, TRUE, t12, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-132 XX1Tru */  <role22, t15, TRUE, t13, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-133 XX1Tru */  <role22, t1, TRUE, t10, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-134 XX1Tru */  <role22, t12, TRUE, t4, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-135 XX1Tru */  <role22, t13, TRUE, t6, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA136Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-136 XX1Tru */  <role22, t21, TRUE, t16, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA137Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-137 XX1Tru */  <role22, t19, TRUE, t25, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA138Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-138 XX1Tru */  <role22, t3, TRUE, t26, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA139Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-139 XX1Tru */  <role22, t22, TRUE, t1, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA140Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-140 XX1Tru */  <role22, t16, TRUE, t8, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA141Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-141 XX1Tru */  <role22, t5, TRUE, t5, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA142Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-142 XX1Tru */  <role22, t11, TRUE, t2, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA143Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-143 XX1Tru */  <role22, t14, TRUE, t29, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA144Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-144 XX1Tru */  <role22, t2, TRUE, t7, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA145Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-145 XX1Tru */  <role2, t2, TRUE, t12, role7>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA146Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-146 XX1Tru */  <role22, t25, TRUE, t9, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA147Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-147 XX1Tru */  <role22, t2, TRUE, t12, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA148Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-148 XX1Tru */  <role22, t6, TRUE, t13, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA149Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-149 XX1Tru */  <role22, t26, TRUE, t10, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA150Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-150 XX1Tru */  <role22, t3, TRUE, t14, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA151Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-151 XX1Tru */  <role22, t27, TRUE, t19, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA152Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-152 XX1Tru */  <role22, t12, TRUE, t28, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA153Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-153 XX1Tru */  <role22, t18, TRUE, t5, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA154Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-154 XX1Tru */  <role22, t15, TRUE, t27, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA155Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-155 XX1Tru */  <role22, t4, TRUE, t23, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA156Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-156 XX1Tru */  <role22, t16, TRUE, t30, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA157Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-157 XX1Tru */  <role22, t13, TRUE, t8, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA158Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-158 XX1Tru */  <role22, t7, TRUE, t15, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA159Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-159 XX1Tru */  <role22, t26, TRUE, t23, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA160Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-160 XX1Tru */  <role22, t5, TRUE, t12, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA161Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-161 XX1Tru */  <role22, t27, TRUE, t7, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA162Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-162 XX1Tru */  <role22, t10, TRUE, t3, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA163Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-163 XX1Tru */  <role22, t2, TRUE, t24, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA164Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-164 XX1Tru */  <role22, t1, TRUE, t25, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA165Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-165 XX1Tru */  <role22, t20, TRUE, t8, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA166Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-166 XX1Tru */  <role22, t15, TRUE, t9, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA167Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-167 XX1Tru */  <role22, t22, TRUE, t18, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA168Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-168 XX1Tru */  <role22, t30, TRUE, t10, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA169Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-169 XX1Tru */  <role22, t17, TRUE, t27, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA170Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-170 XX1Tru */  <role22, t23, TRUE, t13, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA171Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-171 XX1Tru */  <role22, t14, TRUE, t28, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA172Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-172 XX1Tru */  <role22, t30, TRUE, t27, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA173Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-173 XX1Tru */  <role22, t26, TRUE, t12, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA174Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-174 XX1Tru */  <role22, t7, TRUE, t17, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA175Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-175 XX1Tru */  <role22, t29, TRUE, t23, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA176Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-176 XX1Tru */  <role22, t8, TRUE, t18, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA177Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-177 XX1Tru */  <role22, t29, TRUE, t13, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA178Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-178 XX1Tru */  <role22, t4, TRUE, t18, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA179Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-179 XX1Tru */  <role22, t18, TRUE, t15, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA180Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-180 XX1Tru */  <role22, t30, TRUE, t22, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA181Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-181 XX1Tru */  <role22, t21, TRUE, t5, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA182Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-182 XX1Tru */  <role22, t20, TRUE, t12, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA183Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-183 XX1Tru */  <role22, t27, TRUE, t14, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA184Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-184 XX1Tru */  <role22, t28, TRUE, t19, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA185Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-185 XX1Tru */  <role22, t11, TRUE, t16, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA186Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-186 XX1Tru */  <role22, t2, TRUE, t2, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA187Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-187 XX1Tru */  <role22, t26, TRUE, t9, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA188Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-188 XX1Tru */  <role22, t3, TRUE, t3, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA189Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-189 XX1Tru */  <role22, t19, TRUE, t1, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA190Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-190 XX1Tru */  <role22, t6, TRUE, t17, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA191Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-191 XX1Tru */  <role22, t22, TRUE, t23, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA192Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-192 XX1Tru */  <role22, t3, TRUE, t28, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA193Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-193 XX1Tru */  <role22, t7, TRUE, t17, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA194Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-194 XX1Tru */  <role22, t25, TRUE, t18, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA195Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-195 XX1Tru */  <role22, t11, TRUE, t7, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA196Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-196 XX1Tru */  <role22, t12, TRUE, t20, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA197Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-197 XX1Tru */  <role22, t10, TRUE, t24, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA198Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-198 XX1Tru */  <role22, t2, TRUE, t12, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA199Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-199 XX1Tru */  <role22, t1, TRUE, t13, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA200Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-200 XX1Tru */  <role22, t29, TRUE, t25, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA201Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-201 XX1Tru */  <role22, t6, TRUE, t29, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA202Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-202 XX1Tru */  <role22, t9, TRUE, t14, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA203Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-203 XX1Tru */  <role22, t13, TRUE, t26, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA204Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-204 XX1Tru */  <role22, t8, TRUE, t8, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA205Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-205 XX1Tru */  <role22, t14, TRUE, t21, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA206Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-206 XX1Tru */  <role22, t26, TRUE, t22, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA207Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-207 XX1Tru */  <role22, t15, TRUE, t15, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA208Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-208 XX1Tru */  <role22, t24, TRUE, t30, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA209Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-209 XX1Tru */  <role22, t10, TRUE, t7, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA210Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-210 XX1Tru */  <role22, t2, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA211Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-211 XX1Tru */  <role22, t11, TRUE, t19, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA212Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-212 XX1Tru */  <role22, t27, TRUE, t24, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA213Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-213 XX1Tru */  <role22, t12, TRUE, t16, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA214Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-214 XX1Tru */  <role22, t16, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA215Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-215 XX1Tru */  <role22, t17, TRUE, t5, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA216Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-216 XX1Tru */  <role22, t18, TRUE, t11, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA217Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-217 XX1Tru */  <role22, t3, TRUE, t9, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA218Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-218 XX1Tru */  <role22, t19, TRUE, t17, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA219Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-219 XX1Tru */  <role22, t20, TRUE, t22, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA220Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-220 XX1Tru */  <role22, t21, TRUE, t23, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA221Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-221 XX1Tru */  <role22, t13, TRUE, t25, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA222Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-222 XX1Tru */  <role22, t22, TRUE, t6, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA223Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-223 XX1Tru */  <role22, t25, TRUE, t7, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA224Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-224 XX1Tru */  <role22, t18, TRUE, t29, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA225Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-225 XX2Neg */  <role2, t8, NOT ~ role14, t20, role32>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA226Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-226 XX2Neg */  <role2, t29, NOT ~ role14, t5, role32>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA227Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-227 XX2Neg */  <role15, t9, NOT ~ role32, t22, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA228Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-228 XX2Neg */  <role15, t23, NOT ~ role32, t12, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA229Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-229 XX2Neg */  <role15, t30, NOT ~ role32, t24, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA230Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-230 XX2Neg */  <role15, t25, NOT ~ role32, t23, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA231Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-231 XX2Neg */  <role15, t18, NOT ~ role32, t13, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA232Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-232 XX2Neg */  <role15, t11, NOT ~ role32, t14, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA233Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-233 XX2Neg */  <role15, t21, NOT ~ role32, t3, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA234Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-234 XX2Neg */  <role15, t13, NOT ~ role32, t25, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA235Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-235 XX2Neg */  <role15, t14, NOT ~ role32, t15, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA236Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-236 XX2Neg */  <role15, t8, NOT ~ role32, t16, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA237Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-237 XX2Neg */  <role15, t1, NOT ~ role32, t17, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA238Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-238 XX2Neg */  <role15, t28, NOT ~ role32, t19, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA239Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-239 XX2Neg */  <role15, t12, NOT ~ role32, t20, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA240Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-240 XX3Pos */  <role1, t1, role6 & role8, t24, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA241Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-241 XX3Pos */  <role1, t3, role6 & role8, t5, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA242Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-242 XX3Pos */  <role1, t13, role6 & role8, t6, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA243Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-243 XX3Pos */  <role1, t18, role6 & role8, t26, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA244Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-244 XX3Pos */  <role1, t9, role6 & role8, t17, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA245Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-245 XX3Pos */  <role1, t19, role6 & role8, t11, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA246Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-246 XX3Pos */  <role1, t2, role6 & role8, t25, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA247Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-247 XX3Pos */  <role1, t6, role6 & role8, t9, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA248Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-248 XX3Pos */  <role1, t21, role6 & role8, t2, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA249Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-249 XX3Pos */  <role1, t20, role6 & role8, t21, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA250Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-250 XX3Pos */  <role1, t12, role6 & role8, t8, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA251Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-251 XX3Pos */  <role1, t7, role6 & role8, t3, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA252Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-252 XX3Pos */  <role1, t4, role6 & role8, t27, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA253Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-253 XX3Pos */  <role1, t5, role6 & role8, t18, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA254Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-254 XX3Pos */  <role1, t17, role6 & role8, t28, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA255Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-255 XX3Pos */  <role1, t10, role6 & role8, t29, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA256Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-256 XX3Pos */  <role1, t22, role6 & role8, t30, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA257Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-257 XX3Pos */  <role8, t1, role14, t24, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA258Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-258 XX3Pos */  <role8, t30, role14, t4, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA259Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-259 XX3Pos */  <role8, t22, role14, t21, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA260Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-260 XX3Pos */  <role8, t23, role14, t19, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA261Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-261 XX3Pos */  <role8, t20, role14, t6, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA262Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-262 XX3Pos */  <role8, t15, role14, t22, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA263Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-263 XX3Pos */  <role8, t10, role14, t12, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA264Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-264 XX3Pos */  <role8, t2, role14, t18, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA265Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-265 XX3Pos */  <role8, t28, role14, t19, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA266Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-266 XX3Pos */  <role8, t11, role14, t9, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA267Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-267 XX3Pos */  <role8, t19, role14, t17, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA268Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-268 XX3Pos */  <role8, t7, role14, t15, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA269Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-269 XX3Pos */  <role8, t29, role17, t25, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA270Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-270 XX3Pos */  <role8, t4, role14, t15, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA271Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-271 XX3Pos */  <role8, t14, role14, t13, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA272Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-272 XX3Pos */  <role8, t5, role14, t29, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA273Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-273 XX3Pos */  <role8, t12, role14, t12, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA274Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-274 XX3Pos */  <role8, t23, role14, t17, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA275Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-275 XX3Pos */  <role8, t18, role14, t14, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA276Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-276 XX3Pos */  <role8, t9, role14, t25, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA277Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-277 XX3Pos */  <role8, t10, role14, t2, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA278Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-278 XX3Pos */  <role8, t6, role14, t3, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA279Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-279 XX3Pos */  <role8, t29, role14, t16, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA280Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-280 XX3Pos */  <role8, t21, role14, t11, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA281Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-281 XX3Pos */  <role8, t24, role32, t27, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA282Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-282 XX3Pos */  <role8, t22, role32, t23, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA283Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-283 XX3Pos */  <role8, t23, role32, t7, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA284Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-284 XX3Pos */  <role8, t1, role32, t9, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA285Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-285 XX3Pos */  <role8, t4, role32, t11, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA286Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-286 XX3Pos */  <role8, t29, role32, t15, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA287Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-287 XX3Pos */  <role8, t11, role32, t26, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA288Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-288 XX3Pos */  <role8, t25, role32, t13, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA289Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-289 XX3Pos */  <role8, t26, role32, t8, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA290Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-290 XX3Pos */  <role8, t7, role32, t1, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA291Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-291 XX3Pos */  <role12, t7, role29, t1, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA292Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-292 XX3Pos */  <role12, t9, role29, t6, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA293Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-293 XX3Pos */  <role12, t30, role29, t24, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA294Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-294 XX3Pos */  <role12, t26, role29, t11, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA295Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-295 XX3Pos */  <role12, t29, role14, t8, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA296Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-296 XX3Pos */  <role12, t30, role14, t27, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA297Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-297 XX3Pos */  <role12, t15, role14, t16, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA298Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-298 XX3Pos */  <role12, t16, role14, t25, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA299Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-299 XX3Pos */  <role12, t23, role14, t30, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA300Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-300 XX3Pos */  <role12, t30, role32, t12, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA301Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-301 XX3Pos */  <role12, t26, role32, t1, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA302Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-302 XX3Pos */  <role12, t13, role32, t23, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA303Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-303 XX3Pos */  <role12, t3, role32, t2, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA304Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-304 XX3Pos */  <role12, t18, role32, t22, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA305Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-305 XX3Pos */  <role12, t17, role32, t3, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA306Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-306 XX3Pos */  <role19, t14, role14, t19, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA307Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-307 XX3Pos */  <role19, t3, role14, t29, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA308Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-308 XX3Pos */  <role19, t10, role14, t27, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA309Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-309 XX3Pos */  <role19, t26, role14, t9, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA310Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-310 XX3Pos */  <role19, t20, role14, t5, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA311Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-311 XX3Pos */  <role19, t24, role32, t30, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA312Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-312 XX3Pos */  <role19, t21, role32, t11, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA313Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-313 XX3Pos */  <role12, t21, role14, t19, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA314Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-314 XX3Pos */  <role12, t29, role14, t9, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA315Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-315 XX3Pos */  <role12, t28, role14, t24, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA316Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-316 XX3Pos */  <role12, t2, role32, t19, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA317Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-317 XX3Pos */  <role12, t25, role32, t10, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA318Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-318 XX3Pos */  <role12, t1, role32, t3, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA319Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-319 XX3Pos */  <role12, t16, role32, t17, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA320Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-320 XX3Pos */  <role12, t3, role32, t27, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA321Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-321 XX3Pos */  <role6, t14, role2, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA322Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-322 XX3Pos */  <role6, t18, role2, t23, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA323Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-323 XX3Pos */  <role6, t23, role2, t6, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA324Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-324 XX3Pos */  <role6, t25, role2, t30, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA325Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-325 XX3Pos */  <role6, t16, role22, t18, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA326Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-326 XX3Pos */  <role6, t23, role22, t7, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA327Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-327 XX3Pos */  <role6, t5, role22, t22, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA328Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-328 XX3Pos */  <role6, t11, role22, t15, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA329Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-329 XX3Pos */  <role6, t6, role22, t23, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA330Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-330 XX3Pos */  <role6, t14, role22, t12, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA331Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-331 XX3Pos */  <role6, t7, role22, t25, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA332Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-332 XX3Pos */  <role6, t18, role22, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA333Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-333 XX3Pos */  <role6, t20, role22, t2, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA334Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-334 XX3Pos */  <role6, t22, role22, t5, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA335Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-335 XX3Pos */  <role6, t21, role22, t19, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA336Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-336 XX3Pos */  <role6, t2, role22, t27, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA337Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-337 XX3Pos */  <role6, t17, role22, t17, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA338Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-338 XX3Pos */  <role6, t25, role22, t20, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA339Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-339 XX3Pos */  <role6, t27, role22, t29, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA340Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-340 XX3Pos */  <role6, t9, role24, t18, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA341Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-341 XX3Pos */  <role6, t18, role24, t23, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA342Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-342 XX3Pos */  <role6, t1, role24, t1, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA343Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-343 XX3Pos */  <role6, t7, role24, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA344Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-344 XX3Pos */  <role6, t17, role24, t12, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA345Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-345 XX3Pos */  <role6, t24, role24, t17, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA346Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-346 XX3Pos */  <role6, t30, role24, t10, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA347Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-347 XX3Pos */  <role6, t14, role24, t11, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA348Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-348 XX3Pos */  <role6, t28, role24, t15, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA349Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-349 XX3Pos */  <role6, t22, role24, t14, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA350Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-350 XX3Pos */  <role6, t16, role24, t16, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA351Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-351 XX3Pos */  <role6, t19, role24, t19, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA352Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-352 XX3Pos */  <role6, t11, role24, t3, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA353Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-353 XX3Pos */  <role6, t15, role7, t14, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA354Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-354 XX3Pos */  <role6, t14, role7, t2, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA355Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-355 XX3Pos */  <role6, t2, role7, t15, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA356Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-356 XX3Pos */  <role6, t30, role7, t13, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA357Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-357 XX3Pos */  <role6, t19, role7, t16, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA358Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-358 XX3Pos */  <role6, t18, role7, t27, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA359Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-359 XX3Pos */  <role6, t11, role7, t24, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA360Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-360 XX3Pos */  <role6, t13, role7, t17, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA361Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-361 XX3Pos */  <role6, t27, role7, t29, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA362Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-362 XX3Pos */  <role6, t24, role7, t23, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA363Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-363 XX3Pos */  <role6, t20, role7, t18, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA364Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-364 XX3Pos */  <role8, t29, role3, t7, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA365Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-365 XX3Pos */  <role8, t19, role3, t9, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA366Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-366 XX3Pos */  <role8, t18, role3, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA367Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-367 XX3Pos */  <role8, t11, role3, t30, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA368Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-368 XX3Pos */  <role8, t16, role3, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA369Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-369 XX3Pos */  <role8, t4, role3, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA370Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-370 XX3Pos */  <role8, t24, role3, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA371Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-371 XX3Pos */  <role8, t7, role3, t11, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA372Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-372 XX3Pos */  <role8, t21, role3, t28, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA373Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-373 XX3Pos */  <role8, t8, role3, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA374Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-374 XX3Pos */  <role8, t13, role3, t12, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA375Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-375 XX3Pos */  <role8, t5, role3, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA376Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-376 XX3Pos */  <role8, t29, role4, t21, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA377Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-377 XX3Pos */  <role8, t6, role4, t19, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA378Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-378 XX3Pos */  <role8, t12, role4, t20, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA379Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-379 XX3Pos */  <role8, t7, role4, t3, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA380Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-380 XX3Pos */  <role8, t8, role4, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA381Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-381 XX3Pos */  <role8, t27, role4, t15, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA382Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-382 XX3Pos */  <role8, t9, role4, t28, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA383Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-383 XX3Pos */  <role8, t28, role4, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA384Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-384 XX3Pos */  <role8, t5, role4, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA385Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-385 XX3Pos */  <role8, t1, role4, t29, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA386Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-386 XX3Pos */  <role8, t30, role4, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA387Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-387 XX3Pos */  <role8, t2, role4, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA388Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-388 XX3Pos */  <role8, t26, role4, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA389Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-389 XX3Pos */  <role8, t3, role4, t14, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA390Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-390 XX3Pos */  <role8, t10, role4, t23, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA391Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-391 XX3Pos */  <role8, t11, role4, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA392Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-392 XX3Pos */  <role8, t7, role22, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA393Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-393 XX3Pos */  <role8, t12, role22, t25, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA394Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-394 XX3Pos */  <role8, t28, role22, t20, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA395Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-395 XX3Pos */  <role8, t8, role21, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA396Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-396 XX3Pos */  <role8, t9, role21, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA397Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-397 XX3Pos */  <role8, t17, role21, t9, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA398Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-398 XX3Pos */  <role8, t22, role21, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA399Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-399 XX3Pos */  <role8, t9, role6, t17, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA400Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-400 XX3Pos */  <role8, t18, role6, t24, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA401Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-401 XX3Pos */  <role8, t21, role6, t21, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA402Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-402 XX3Pos */  <role8, t3, role6, t6, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA403Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-403 XX3Pos */  <role8, t8, role6, t18, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA404Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-404 XX3Pos */  <role8, t26, role6, t25, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA405Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-405 XX3Pos */  <role8, t10, role6, t28, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA406Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-406 XX3Pos */  <role8, t7, role6, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA407Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-407 XX3Pos */  <role8, t11, role6, t12, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA408Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-408 XX3Pos */  <role8, t12, role6, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA409Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-409 XX3Pos */  <role8, t15, role6, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA410Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-410 XX3Pos */  <role8, t23, role6, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA411Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-411 XX3Pos */  <role8, t14, role24, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA412Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-412 XX3Pos */  <role8, t17, role24, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA413Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-413 XX3Pos */  <role8, t15, role24, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA414Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-414 XX3Pos */  <role8, t25, role24, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA415Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-415 XX3Pos */  <role8, t20, role24, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA416Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-416 XX3Pos */  <role8, t27, role24, t24, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA417Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-417 XX3Pos */  <role8, t1, role24, t16, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA418Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-418 XX3Pos */  <role8, t5, role24, t12, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA419Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-419 XX3Pos */  <role8, t30, role24, t25, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA420Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-420 XX3Pos */  <role8, t12, role24, t3, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA421Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-421 XX3Pos */  <role8, t2, role24, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA422Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-422 XX3Pos */  <role8, t21, role24, t17, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA423Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-423 XX3Pos */  <role8, t10, role24, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA424Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-424 XX3Pos */  <role8, t12, role23, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA425Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-425 XX3Pos */  <role8, t27, role8, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA426Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-426 XX3Pos */  <role8, t14, role8, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA427Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-427 XX3Pos */  <role8, t13, role8, t15, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA428Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-428 XX3Pos */  <role8, t19, role8, t28, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA429Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-429 XX3Pos */  <role8, t25, role8, t21, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA430Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-430 XX3Pos */  <role8, t28, role8, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA431Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-431 XX3Pos */  <role8, t21, role8, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA432Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-432 XX3Pos */  <role8, t3, role12, t30, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA433Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-433 XX3Pos */  <role8, t14, role12, t17, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA434Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-434 XX3Pos */  <role8, t7, role3, t28, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA435Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-435 XX3Pos */  <role8, t3, role3, t17, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA436Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-436 XX3Pos */  <role8, t30, role3, t25, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA437Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-437 XX3Pos */  <role8, t8, role3, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA438Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-438 XX3Pos */  <role8, t9, role3, t18, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA439Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-439 XX3Pos */  <role8, t2, role3, t15, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA440Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-440 XX3Pos */  <role8, t21, role3, t19, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA441Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-441 XX3Pos */  <role8, t10, role3, t27, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA442Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-442 XX3Pos */  <role8, t11, role3, t26, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA443Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-443 XX3Pos */  <role8, t4, role3, t11, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA444Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-444 XX3Pos */  <role8, t12, role3, t16, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA445Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-445 XX3Pos */  <role8, t13, role3, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA446Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-446 XX3Pos */  <role8, t5, role3, t24, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA447Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-447 XX3Pos */  <role8, t14, role3, t22, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA448Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-448 XX3Pos */  <role8, t6, role3, t5, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA449Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-449 XX3Pos */  <role8, t15, role3, t4, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA450Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-450 XX3Pos */  <role8, t9, role4, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA451Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-451 XX3Pos */  <role8, t21, role22, t23, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA452Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-452 XX3Pos */  <role8, t26, role22, t28, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA453Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-453 XX3Pos */  <role8, t9, role22, t22, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA454Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-454 XX3Pos */  <role8, t1, role22, t24, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA455Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-455 XX3Pos */  <role8, t8, role22, t11, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA456Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-456 XX3Pos */  <role8, t17, role22, t18, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA457Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-457 XX3Pos */  <role8, t27, role22, t19, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA458Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-458 XX3Pos */  <role8, t3, role22, t25, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA459Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-459 XX3Pos */  <role8, t14, role22, t15, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA460Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-460 XX3Pos */  <role8, t11, role22, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA461Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-461 XX3Pos */  <role8, t16, role22, t12, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA462Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-462 XX3Pos */  <role8, t12, role22, t8, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA463Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-463 XX3Pos */  <role8, t8, role21, t25, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA464Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-464 XX3Pos */  <role8, t13, role21, t20, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA465Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-465 XX3Pos */  <role8, t10, role21, t27, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA466Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-466 XX3Pos */  <role8, t7, role21, t29, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA467Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-467 XX3Pos */  <role8, t14, role21, t17, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA468Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-468 XX3Pos */  <role8, t4, role6, t30, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA469Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-469 XX3Pos */  <role8, t15, role6, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA470Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-470 XX3Pos */  <role8, t24, role6, t16, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA471Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-471 XX3Pos */  <role8, t30, role6, t1, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA472Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-472 XX3Pos */  <role8, t17, role6, t29, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA473Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-473 XX3Pos */  <role8, t5, role6, t7, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA474Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-474 XX3Pos */  <role8, t7, role6, t18, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA475Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-475 XX3Pos */  <role8, t3, role6, t19, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA476Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-476 XX3Pos */  <role8, t8, role6, t26, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA477Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-477 XX3Pos */  <role8, t21, role6, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA478Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-478 XX3Pos */  <role8, t30, role24, t18, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA479Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-479 XX3Pos */  <role8, t11, role24, t28, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA480Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-480 XX3Pos */  <role8, t21, role24, t13, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA481Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-481 XX3Pos */  <role8, t12, role24, t25, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA482Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-482 XX3Pos */  <role8, t13, role24, t26, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA483Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-483 XX3Pos */  <role8, t4, role23, t30, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA484Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-484 XX3Pos */  <role8, t6, role23, t4, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA485Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-485 XX3Pos */  <role8, t5, role23, t14, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA486Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-486 XX3Pos */  <role8, t29, role23, t23, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA487Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-487 XX4Mix */  <role8, t21, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t25, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA488Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-488 XX4Mix */  <role8, t16, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t14, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA489Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-489 XX4Mix */  <role8, t18, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t15, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA490Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-490 XX4Mix */  <role8, t1, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t16, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA491Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-491 XX4Mix */  <role8, t7, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t13, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA492Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-492 XX4Mix */  <role8, t8, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t18, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA493Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-493 XX4Mix */  <role8, t18, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t23, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA494Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-494 XX4Mix */  <role8, t21, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t24, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA495Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-495 XX4Mix */  <role8, t26, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA496Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-496 XX4Mix */  <role8, t15, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t26, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA497Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-497 XX4Mix */  <role8, t9, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA498Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-498 XX4Mix */  <role8, t4, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA499Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-499 XX4Mix */  <role8, t6, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t22, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA500Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-500 XX4Mix */  <role8, t25, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t27, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA501Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-501 XX4Mix */  <role8, t19, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t28, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA502Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-502 XX4Mix */  <role8, t14, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA503Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-503 XX4Mix */  <role8, t30, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t21, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA504Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-504 XX4Mix */  <role8, t17, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA505Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-505 XX4Mix */  <role8, t29, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t29, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA506Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-506 XX4Mix */  <role8, t7, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t14, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA507Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-507 XX4Mix */  <role8, t26, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t30, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA508Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-508 XX4Mix */  <role8, t2, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA509Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-509 XX4Mix */  <role8, t8, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t12, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA510Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-510 XX4Mix */  <role8, t14, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t15, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA511Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-511 XX4Mix */  <role8, t20, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t23, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA512Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-512 XX4Mix */  <role8, t18, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t24, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA513Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-513 XX4Mix */  <role8, t21, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t10, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA514Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-514 XX4Mix */  <role8, t25, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t22, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA515Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-515 XX4Mix */  <role8, t4, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t27, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA516Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-516 XX4Mix */  <role8, t24, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t13, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA517Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-517 XX4Mix */  <role8, t27, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t20, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA518Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-518 XX4Mix */  <role8, t1, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t22, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA519Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-519 XX4Mix */  <role8, t14, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA520Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-520 XX4Mix */  <role8, t28, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t22, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA521Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-521 XX4Mix */  <role8, t7, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA522Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-522 XX4Mix */  <role8, t21, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t20, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA523Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-523 XX4Mix */  <role8, t1, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA524Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-524 XX4Mix */  <role8, t27, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t26, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA525Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-525 XX4Mix */  <role8, t4, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA526Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-526 XX4Mix */  <role8, t14, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t12, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA527Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-527 XX4Mix */  <role8, t29, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t25, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA528Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-528 XX4Mix */  <role8, t30, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t21, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA529Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-529 XX4Mix */  <role8, t20, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA530Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-530 XX4Mix */  <role6, t20, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t30, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA531Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-531 XX4Mix */  <role6, t5, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t11, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA532Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-532 XX4Mix */  <role6, t19, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t6, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA533Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-533 XX4Mix */  <role6, t18, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t12, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA534Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-534 XX4Mix */  <role6, t27, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t13, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA535Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-535 XX4Mix */  <role6, t4, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t1, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA536Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-536 XX4Mix */  <role6, t24, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t14, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA537Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-537 XX4Mix */  <role6, t6, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t5, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA538Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-538 XX4Mix */  <role6, t15, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t16, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanRevoke Rules
	function fireCR1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-1 TA1Tru */  <TRUE, t7, TRUE, t8, role32>
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-2 TA1Tru */  <TRUE, t6, TRUE, t9, role32>
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-3 TA1Tru */  <TRUE, t30, TRUE, t10, role32>
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-4 TA1Tru */  <TRUE, t16, TRUE, t11, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-5 TA1Tru */  <TRUE, t21, TRUE, t30, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-6 TA1Tru */  <TRUE, t26, TRUE, t2, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-7 TA1Tru */  <TRUE, t2, TRUE, t10, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-8 TA1Tru */  <TRUE, t26, TRUE, t28, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-9 TA1Tru */  <TRUE, t28, TRUE, t18, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-10 TA1Tru */  <TRUE, t16, TRUE, t14, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-11 TA1Tru */  <TRUE, t6, TRUE, t18, role16>
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-12 TA1Tru */  <TRUE, t11, TRUE, t12, role16>
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-13 TA1Tru */  <TRUE, t12, TRUE, t30, role18>
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-14 TA1Tru */  <TRUE, t7, TRUE, t6, role33>
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-15 TA1Tru */  <TRUE, t13, TRUE, t8, role2>
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-16 TA1Tru */  <TRUE, t19, TRUE, t24, role15>
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-17 TA1Tru */  <TRUE, t7, TRUE, t29, role15>
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-18 TA1Tru */  <TRUE, t8, TRUE, t26, role16>
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-19 TA1Tru */  <TRUE, t4, TRUE, t29, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-20 TA1Tru */  <TRUE, t5, TRUE, t26, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-21 TA1Tru */  <TRUE, t6, TRUE, t27, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-22 TA1Tru */  <TRUE, t15, TRUE, t4, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-23 TA1Tru */  <TRUE, t19, TRUE, t6, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-24 TA1Tru */  <TRUE, t25, TRUE, t14, role10>
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-25 TA1Tru */  <TRUE, t28, TRUE, t25, role10>
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-26 TA1Tru */  <TRUE, t12, TRUE, t29, role11>
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-27 TA1Tru */  <TRUE, t20, TRUE, t23, role11>
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-28 TA1Tru */  <TRUE, t13, TRUE, t18, role25>
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-29 TA1Tru */  <TRUE, t11, TRUE, t17, role25>
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-30 TA1Tru */  <TRUE, t16, TRUE, t12, role25>
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-31 TA1Tru */  <TRUE, t18, TRUE, t1, role25>
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-32 TA1Tru */  <TRUE, t23, TRUE, t25, role13>
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-33 TA1Tru */  <TRUE, t7, TRUE, t22, role13>
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-34 TA1Tru */  <TRUE, t17, TRUE, t14, role6>
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-35 TA1Tru */  <TRUE, t9, TRUE, t8, role8>
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-36 TA1Tru */  <TRUE, t28, TRUE, t24, role8>
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-37 XX1Tru */  <role6, t25, TRUE, t6, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-38 XX1Tru */  <role6, t16, TRUE, t5, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-39 XX1Tru */  <role6, t24, TRUE, t11, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-40 XX1Tru */  <role6, t1, TRUE, t15, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-41 XX1Tru */  <role8, t8, TRUE, t29, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-42 XX1Tru */  <role8, t25, TRUE, t1, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-43 XX1Tru */  <role8, t27, TRUE, t8, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-44 XX1Tru */  <role8, t28, TRUE, t9, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-45 XX1Tru */  <role8, t6, TRUE, t7, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-46 XX1Tru */  <role8, t1, TRUE, t22, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-47 XX1Tru */  <role8, t7, TRUE, t24, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-48 XX1Tru */  <role8, t30, TRUE, t23, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-49 XX1Tru */  <role8, t9, TRUE, t6, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-50 XX1Tru */  <role8, t22, TRUE, t3, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-51 XX1Tru */  <role8, t10, TRUE, t12, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-52 XX1Tru */  <role8, t29, TRUE, t26, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-53 XX1Tru */  <role8, t13, TRUE, t25, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-54 XX1Tru */  <role8, t23, TRUE, t27, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-55 XX1Tru */  <role8, t4, TRUE, t4, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-56 XX1Tru */  <role8, t14, TRUE, t28, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-57 XX1Tru */  <role8, t23, TRUE, t23, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-58 XX1Tru */  <role8, t24, TRUE, t10, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-59 XX1Tru */  <role8, t19, TRUE, t21, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-60 XX1Tru */  <role8, t17, TRUE, t5, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-61 XX1Tru */  <role8, t23, TRUE, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-62 XX1Tru */  <role8, t16, TRUE, t27, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-63 XX1Tru */  <role8, t9, TRUE, t17, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-64 XX1Tru */  <role8, t18, TRUE, t11, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-65 XX1Tru */  <role8, t17, TRUE, t19, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-66 XX1Tru */  <role8, t30, TRUE, t14, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-67 XX1Tru */  <role8, t26, TRUE, t22, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-68 XX1Tru */  <role8, t10, TRUE, t21, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-69 XX1Tru */  <role8, t28, TRUE, t23, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-70 XX1Tru */  <role8, t21, TRUE, t15, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-71 XX1Tru */  <role8, t12, TRUE, t20, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-72 XX1Tru */  <role8, t4, TRUE, t29, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-73 XX1Tru */  <role8, t19, TRUE, t17, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-74 XX1Tru */  <role8, t27, TRUE, t22, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-75 XX1Tru */  <role8, t28, TRUE, t24, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-76 XX1Tru */  <role8, t25, TRUE, t1, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-77 XX1Tru */  <role8, t29, TRUE, t2, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-78 XX1Tru */  <role8, t24, TRUE, t20, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-79 XX1Tru */  <role8, t13, TRUE, t27, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-80 XX1Tru */  <role8, t4, TRUE, t21, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-81 XX1Tru */  <role6, t16, TRUE, t30, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-82 XX1Tru */  <role6, t3, TRUE, t3, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-83 XX1Tru */  <role6, t7, TRUE, t1, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-84 XX1Tru */  <role19, t16, TRUE, t25, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = false;
	}

	function fireCR85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-85 XX1Tru */  <role12, t21, TRUE, t13, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-86 XX1Tru */  <role12, t29, TRUE, t24, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-87 XX1Tru */  <role12, t22, TRUE, t21, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-88 XX1Tru */  <role6, t22, TRUE, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-89 XX1Tru */  <role7, t3, TRUE, t18, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-90 XX1Tru */  <role7, t11, TRUE, t4, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-91 XX1Tru */  <role7, t16, TRUE, t7, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-92 XX1Tru */  <role7, t14, TRUE, t11, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-93 XX1Tru */  <role7, t15, TRUE, t30, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-94 XX1Tru */  <role7, t5, TRUE, t3, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-95 XX1Tru */  <role8, t29, TRUE, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-96 XX1Tru */  <role8, t23, TRUE, t10, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-97 XX1Tru */  <role8, t3, TRUE, t20, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-98 XX1Tru */  <role8, t15, TRUE, t27, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-99 XX1Tru */  <role8, t11, TRUE, t12, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-100 XX1Tru */  <role8, t30, TRUE, t11, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-101 XX1Tru */  <role8, t20, TRUE, t12, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-102 XX1Tru */  <role8, t28, TRUE, t19, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-103 XX1Tru */  <role8, t6, TRUE, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-104 XX1Tru */  <role8, t18, TRUE, t14, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-105 XX1Tru */  <role8, t24, TRUE, t25, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-106 XX1Tru */  <role8, t28, TRUE, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-107 XX1Tru */  <role8, t9, TRUE, t18, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-108 XX1Tru */  <role8, t1, TRUE, t5, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-109 XX1Tru */  <role8, t25, TRUE, t17, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-110 XX1Tru */  <role8, t18, TRUE, t21, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-111 XX1Tru */  <role8, t10, TRUE, t28, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-112 XX1Tru */  <role8, t30, TRUE, t14, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-113 XX1Tru */  <role8, t22, TRUE, t30, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-114 XX1Tru */  <role8, t14, TRUE, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-115 XX1Tru */  <role8, t27, TRUE, t13, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-116 XX1Tru */  <role8, t29, TRUE, t1, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-117 XX1Tru */  <role8, t23, TRUE, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-118 XX1Tru */  <role8, t17, TRUE, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-119 XX1Tru */  <role8, t2, TRUE, t8, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-120 XX1Tru */  <role8, t2, TRUE, t24, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-121 XX1Tru */  <role8, t10, TRUE, t22, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-122 XX1Tru */  <role8, t3, TRUE, t2, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-123 XX1Tru */  <role8, t5, TRUE, t19, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-124 XX1Tru */  <role8, t6, TRUE, t15, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-125 XX1Tru */  <role8, t1, TRUE, t16, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-126 XX1Tru */  <role8, t7, TRUE, t20, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-127 XX1Tru */  <role8, t13, TRUE, t26, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-128 XX1Tru */  <role8, t11, TRUE, t21, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-129 XX1Tru */  <role8, t12, TRUE, t17, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-130 XX1Tru */  <role8, t9, TRUE, t18, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-131 XX1Tru */  <role8, t29, TRUE, t27, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-132 XX1Tru */  <role8, t5, TRUE, t1, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-133 XX1Tru */  <role8, t27, TRUE, t8, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-134 XX1Tru */  <role8, t13, TRUE, t17, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-135 XX1Tru */  <role8, t21, TRUE, t5, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR136Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-136 XX1Tru */  <role8, t11, TRUE, t3, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR137Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-137 XX1Tru */  <role8, t14, TRUE, t28, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR138Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-138 XX1Tru */  <role8, t15, TRUE, t18, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR139Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-139 XX1Tru */  <role8, t22, TRUE, t11, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR140Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-140 XX1Tru */  <role8, t16, TRUE, t6, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR141Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-141 XX1Tru */  <role8, t17, TRUE, t20, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR142Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-142 XX1Tru */  <role8, t18, TRUE, t9, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR143Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-143 XX1Tru */  <role8, t30, TRUE, t7, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR144Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-144 XX1Tru */  <role8, t1, TRUE, t12, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR145Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-145 XX1Tru */  <role8, t19, TRUE, t10, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR146Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-146 XX1Tru */  <role8, t6, TRUE, t30, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR147Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-147 XX1Tru */  <role8, t2, TRUE, t4, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR148Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-148 XX1Tru */  <role8, t12, TRUE, t7, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR149Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-149 XX1Tru */  <role8, t2, TRUE, t9, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR150Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-150 XX1Tru */  <role8, t1, TRUE, t10, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR151Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-151 XX1Tru */  <role8, t25, TRUE, t15, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR152Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-152 XX1Tru */  <role8, t14, TRUE, t11, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR153Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-153 XX1Tru */  <role8, t7, TRUE, t3, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR154Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-154 XX1Tru */  <role8, t10, TRUE, t4, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR155Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-155 XX1Tru */  <role8, t19, TRUE, t29, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR156Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-156 XX1Tru */  <role8, t15, TRUE, t25, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR157Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-157 XX1Tru */  <role8, t17, TRUE, t21, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR158Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-158 XX1Tru */  <role8, t30, TRUE, t30, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR159Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-159 XX1Tru */  <role8, t3, TRUE, t23, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR160Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-160 XX1Tru */  <role8, t4, TRUE, t19, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR161Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-161 XX1Tru */  <role8, t20, TRUE, t28, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR162Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-162 XX1Tru */  <role8, t21, TRUE, t2, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][31][0] = false;
	}

	function fireCR163Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-163 XX1Tru */  <role8, t14, TRUE, t26, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR164Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-164 XX1Tru */  <role8, t27, TRUE, t3, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR165Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-165 XX1Tru */  <role8, t15, TRUE, t19, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR166Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-166 XX1Tru */  <role8, t17, TRUE, t4, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR167Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-167 XX1Tru */  <role8, t8, TRUE, t20, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR168Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-168 XX1Tru */  <role8, t22, TRUE, t21, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR169Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-169 XX1Tru */  <role22, t14, TRUE, t2, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR170Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-170 XX1Tru */  <role22, t22, TRUE, t21, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR171Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-171 XX1Tru */  <role22, t21, TRUE, t16, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR172Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-172 XX1Tru */  <role22, t6, TRUE, t7, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR173Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-173 XX1Tru */  <role22, t9, TRUE, t10, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR174Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-174 XX1Tru */  <role22, t8, TRUE, t23, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR175Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-175 XX1Tru */  <role22, t3, TRUE, t26, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR176Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-176 XX1Tru */  <role22, t27, TRUE, t27, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR177Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-177 XX1Tru */  <role22, t23, TRUE, t21, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR178Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-178 XX1Tru */  <role22, t26, TRUE, t15, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR179Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-179 XX1Tru */  <role22, t24, TRUE, t19, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR180Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-180 XX1Tru */  <role22, t12, TRUE, t12, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR181Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-181 XX1Tru */  <role24, t4, TRUE, t3, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR182Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-182 XX1Tru */  <role24, t3, TRUE, t29, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR183Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-183 XX1Tru */  <role24, t6, TRUE, t8, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR184Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-184 XX1Tru */  <role24, t1, TRUE, t19, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR185Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-185 XX1Tru */  <role24, t16, TRUE, t24, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR186Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-186 XX1Tru */  <role24, t18, TRUE, t15, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR187Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-187 XX1Tru */  <role24, t21, TRUE, t21, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR188Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-188 XX1Tru */  <role6, t11, TRUE, t7, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR189Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-189 XX1Tru */  <role6, t13, TRUE, t19, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR190Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-190 XX1Tru */  <role6, t8, TRUE, t10, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR191Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-191 XX1Tru */  <role6, t10, TRUE, t13, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR192Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-192 XX1Tru */  <role6, t12, TRUE, t23, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR193Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-193 XX1Tru */  <role6, t14, TRUE, t29, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR194Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-194 XX1Tru */  <role6, t4, TRUE, t1, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR195Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-195 XX1Tru */  <role6, t5, TRUE, t3, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR196Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-196 XX1Tru */  <role6, t3, TRUE, t30, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR197Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-197 XX1Tru */  <role6, t17, TRUE, t12, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR198Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-198 XX1Tru */  <role6, t18, TRUE, t2, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanEnable Rules
	function fireCE1Rule() public {
		// /* CE-1 TA1Tru */  <TRUE, t7, TRUE, t8, role32>
		role_enablement[13][0] = true;
	}

	function fireCE2Rule() public {
		// /* CE-2 TA1Tru */  <TRUE, t6, TRUE, t9, role32>
		role_enablement[13][0] = true;
	}

	function fireCE3Rule() public {
		// /* CE-3 TA1Tru */  <TRUE, t30, TRUE, t10, role32>
		role_enablement[13][0] = true;
	}

	function fireCE4Rule() public {
		// /* CE-4 TA1Tru */  <TRUE, t1, TRUE, t2, role2>
		role_enablement[3][0] = true;
	}

	function fireCE5Rule() public {
		// /* CE-5 TA1Tru */  <TRUE, t26, TRUE, t28, role17>
		role_enablement[20][0] = true;
	}

	function fireCE6Rule() public {
		// /* CE-6 TA1Tru */  <TRUE, t28, TRUE, t18, role17>
		role_enablement[20][0] = true;
	}

	function fireCE7Rule() public {
		// /* CE-7 TA1Tru */  <TRUE, t1, TRUE, t1, role21>
		role_enablement[25][0] = true;
	}

	function fireCE8Rule() public {
		// /* CE-8 TA1Tru */  <TRUE, t11, TRUE, t12, role16>
		role_enablement[21][0] = true;
	}

	function fireCE9Rule() public {
		// /* CE-9 TA1Tru */  <TRUE, t13, TRUE, t20, role22>
		role_enablement[1][0] = true;
	}

	function fireCE10Rule() public {
		// /* CE-10 XX1Tru */  <role8, t28, TRUE, t9, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE11Rule() public {
		// /* CE-11 XX1Tru */  <role8, t6, TRUE, t7, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE12Rule() public {
		// /* CE-12 XX1Tru */  <role8, t1, TRUE, t22, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE13Rule() public {
		// /* CE-13 XX1Tru */  <role8, t7, TRUE, t24, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE14Rule() public {
		// /* CE-14 XX1Tru */  <role8, t10, TRUE, t21, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = true;
	}

	function fireCE15Rule() public {
		// /* CE-15 XX1Tru */  <role8, t29, TRUE, t2, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = true;
	}

	function fireCE16Rule() public {
		// /* CE-16 XX1Tru */  <role12, t21, TRUE, t13, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[11][0] = true;
	}

	function fireCE17Rule() public {
		// /* CE-17 XX3Pos */  <role22, t2, role28, t13, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE18Rule() public {
		// /* CE-18 XX3Pos */  <role22, t24, role28, t7, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE19Rule() public {
		// /* CE-19 XX3Pos */  <role22, t27, role28, t28, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE20Rule() public {
		// /* CE-20 XX4Mix */  <role7, t3, role28 & NOT ~ role15, t21, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE21Rule() public {
		// /* CE-21 XX4Mix */  <role7, t5, role28 & NOT ~ role15, t30, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE22Rule() public {
		// /* CE-22 XX4Mix */  <role7, t18, role28 & NOT ~ role15, t27, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE23Rule() public {
		// /* CE-23 XX4Mix */  <role7, t19, role28 & NOT ~ role15, t12, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[28][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE24Rule() public {
		// /* CE-24 XX4Mix */  <role22, t22, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t28, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE25Rule() public {
		// /* CE-25 XX4Mix */  <role22, t30, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t14, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE26Rule() public {
		// /* CE-26 XX4Mix */  <role22, t24, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t1, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE27Rule() public {
		// /* CE-27 XX4Mix */  <role22, t7, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t29, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE28Rule() public {
		// /* CE-28 XX4Mix */  <role24, t19, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t19, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[6][0] = true;
	}

	function fireCE29Rule() public {
		// /* CE-29 XX4Mix */  <role24, t14, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t28, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[6][0] = true;
	}

	function fireCE30Rule() public {
		// /* CE-30 XX4Mix */  <role24, t2, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t15, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[6][0] = true;
	}

	function fireCE31Rule() public {
		// /* CE-31 XX4Mix */  <role6, t20, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t30, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[4][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanDisable Rules
	function fireCD1Rule() public {
		// /* CD-1 TA1Tru */  <TRUE, t7, TRUE, t6, role33>
		role_enablement[11][0] = false;
	}

	function fireCD2Rule() public {
		// /* CD-2 XA4Mix */  <TRUE, t20, role7 & NOT ~ role15, t20, role2>
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD3Rule() public {
		// /* CD-3 XA4Mix */  <TRUE, t15, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t24, role24>
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD4Rule() public {
		// /* CD-4 XX1Tru */  <role6, t16, TRUE, t5, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = false;
	}

	function fireCD5Rule() public {
		// /* CD-5 XX1Tru */  <role8, t29, TRUE, t26, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}

	function fireCD6Rule() public {
		// /* CD-6 XX1Tru */  <role8, t13, TRUE, t25, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}

	function fireCD7Rule() public {
		// /* CD-7 XX1Tru */  <role8, t23, TRUE, t27, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}

	function fireCD8Rule() public {
		// /* CD-8 XX1Tru */  <role8, t24, TRUE, t10, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[20][0] = false;
	}

	function fireCD9Rule() public {
		// /* CD-9 XX1Tru */  <role8, t23, TRUE, t13, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = false;
	}

	function fireCD10Rule() public {
		// /* CD-10 XX1Tru */  <role8, t27, TRUE, t22, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = false;
	}

	function fireCD11Rule() public {
		// /* CD-11 XX1Tru */  <role6, t3, TRUE, t3, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[22][0] = false;
	}

	function fireCD12Rule() public {
		// /* CD-12 XX1Tru */  <role7, t15, TRUE, t30, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[3][0] = false;
	}

	function fireCD13Rule() public {
		// /* CD-13 XX4Mix */  <role7, t15, role7 & NOT ~ role15, t13, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD14Rule() public {
		// /* CD-14 XX4Mix */  <role7, t19, role7 & NOT ~ role15, t14, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD15Rule() public {
		// /* CD-15 XX4Mix */  <role7, t10, role7 & NOT ~ role15, t16, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD16Rule() public {
		// /* CD-16 XX4Mix */  <role7, t21, role7 & NOT ~ role15, t3, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[8][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD17Rule() public {
		// /* CD-17 XX4Mix */  <role22, t26, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t2, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}


	//////////////////////////////////////////////////////////
}