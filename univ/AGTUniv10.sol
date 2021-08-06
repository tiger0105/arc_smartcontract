pragma solidity ^0.4.0;

contract AGTUniv10 {
	mapping(uint => mapping(uint => bool)) public role_enablement;
	mapping (address => mapping (uint => mapping (uint => bool))) trbac_state;

	modifier noZeroAddress(address account) {
		require(account != address(0), "Address cannot be the zero address");
		_;
	}

	//////////////////////////////////////////////////////////
	// Safety Query
	constructor() public { owner = msg.sender; }
	address public owner;
	function deposit(uint256 amount) public payable {
		require(msg.value == amount, "Incorrect amount sent");
	}

	function withdraw(uint256 amount) public {
		require(amount <= address(this).balance, "Not Enough Funds");
		require(trbac_state[msg.sender][12][0] == true, "User does not satisfy the Safety Query");
		msg.sender.transfer(amount);
	}

	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanAssign Rules
	function fireCA1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-1 TA1Tru */  <TRUE, t12, TRUE, t31, role3>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-2 TA1Tru */  <TRUE, t31, TRUE, t34, role3>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-3 TA1Tru */  <TRUE, t9, TRUE, t20, role28>
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-4 TA1Tru */  <TRUE, t11, TRUE, t6, role28>
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-5 TA1Tru */  <TRUE, t7, TRUE, t36, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-6 TA1Tru */  <TRUE, t31, TRUE, t27, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-7 TA1Tru */  <TRUE, t32, TRUE, t40, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-8 TA1Tru */  <TRUE, t3, TRUE, t34, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-9 TA1Tru */  <TRUE, t9, TRUE, t22, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-10 TA1Tru */  <TRUE, t4, TRUE, t13, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-11 TA1Tru */  <TRUE, t29, TRUE, t5, role7>
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-12 TA1Tru */  <TRUE, t22, TRUE, t13, role21>
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-13 TA1Tru */  <TRUE, t22, TRUE, t26, role3>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-14 TA1Tru */  <TRUE, t14, TRUE, t12, role3>
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-15 TA1Tru */  <TRUE, t3, TRUE, t4, role23>
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-16 TA1Tru */  <TRUE, t4, TRUE, t38, role23>
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-17 TA2Neg */  <TRUE, t2, NOT ~ role14, t6, role32>
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-18 XA3Pos */  <TRUE, t3, role14, t4, role17>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-19 XA3Pos */  <TRUE, t9, role14, t1, role17>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-20 XA3Pos */  <TRUE, t34, role14, t27, role17>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-21 XA3Pos */  <TRUE, t33, role17, t31, role16>
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-22 XA3Pos */  <TRUE, t18, role17, t21, role16>
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-23 XA3Pos */  <TRUE, t26, role17, t14, role16>
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-24 XA3Pos */  <TRUE, t14, role17, t19, role16>
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-25 XA3Pos */  <TRUE, t37, role14, t27, role18>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-26 XA3Pos */  <TRUE, t4, role29, t30, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-27 XA3Pos */  <TRUE, t3, role29, t23, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-28 XA3Pos */  <TRUE, t1, role29, t24, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-29 XA3Pos */  <TRUE, t37, role29, t28, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-30 XA3Pos */  <TRUE, t18, role29, t20, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-31 XA3Pos */  <TRUE, t36, role29, t33, role27>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-32 XA3Pos */  <TRUE, t33, role14, t15, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-33 XA3Pos */  <TRUE, t36, role14, t10, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-34 XA3Pos */  <TRUE, t20, role14, t6, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-35 XA3Pos */  <TRUE, t22, role14, t38, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-36 XA3Pos */  <TRUE, t23, role14, t12, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-37 XA3Pos */  <TRUE, t16, role14, t35, role27>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-38 XA3Pos */  <TRUE, t25, role32, t13, role27>
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-39 XA3Pos */  <TRUE, t40, role14, t6, role33>
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-40 XA3Pos */  <TRUE, t23, role32, t36, role33>
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-41 XA3Pos */  <TRUE, t30, role32, t27, role33>
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-42 XA3Pos */  <TRUE, t32, role32, t40, role33>
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-43 XA3Pos */  <TRUE, t12, role2, t27, role5>
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-44 XA3Pos */  <TRUE, t35, role2, t29, role5>
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-45 XA3Pos */  <TRUE, t32, role2, t19, role5>
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-46 XA3Pos */  <TRUE, t28, role2, t13, role5>
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-47 XA3Pos */  <TRUE, t39, role2, t3, role5>
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-48 XA3Pos */  <TRUE, t5, role22, t2, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-49 XA3Pos */  <TRUE, t39, role22, t35, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-50 XA3Pos */  <TRUE, t20, role22, t22, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-51 XA3Pos */  <TRUE, t2, role22, t1, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-52 XA3Pos */  <TRUE, t13, role22, t3, role5>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-53 XA3Pos */  <TRUE, t31, role24, t40, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-54 XA3Pos */  <TRUE, t34, role24, t12, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-55 XA3Pos */  <TRUE, t22, role24, t33, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-56 XA3Pos */  <TRUE, t33, role24, t13, role5>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-57 XA3Pos */  <TRUE, t10, role7, t22, role5>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-58 XA3Pos */  <TRUE, t33, role28, t15, role5>
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-59 XA3Pos */  <TRUE, t12, role3, t34, role16>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-60 XA3Pos */  <TRUE, t29, role3, t40, role16>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-61 XA3Pos */  <TRUE, t30, role3, t2, role16>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-62 XA3Pos */  <TRUE, t2, role4, t23, role16>
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-63 XA3Pos */  <TRUE, t30, role22, t28, role16>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-64 XA3Pos */  <TRUE, t3, role21, t33, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-65 XA3Pos */  <TRUE, t22, role21, t13, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-66 XA3Pos */  <TRUE, t10, role21, t40, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-67 XA3Pos */  <TRUE, t11, role21, t7, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-68 XA3Pos */  <TRUE, t16, role21, t22, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-69 XA3Pos */  <TRUE, t17, role21, t23, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-70 XA3Pos */  <TRUE, t40, role21, t12, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-71 XA3Pos */  <TRUE, t5, role21, t20, role16>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-72 XA3Pos */  <TRUE, t16, role6, t7, role16>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-73 XA3Pos */  <TRUE, t3, role6, t24, role16>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-74 XA3Pos */  <TRUE, t12, role6, t28, role16>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-75 XA3Pos */  <TRUE, t24, role24, t4, role16>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-76 XA3Pos */  <TRUE, t20, role24, t9, role16>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-77 XA3Pos */  <TRUE, t29, role23, t3, role16>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-78 XA3Pos */  <TRUE, t35, role8, t25, role16>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-79 XA3Pos */  <TRUE, t16, role8, t1, role16>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-80 XA3Pos */  <TRUE, t30, role8, t36, role16>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-81 XA3Pos */  <TRUE, t29, role8, t27, role16>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-82 XA3Pos */  <TRUE, t32, role12, t25, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-83 XA3Pos */  <TRUE, t8, role12, t21, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-84 XA3Pos */  <TRUE, t3, role12, t32, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-85 XA3Pos */  <TRUE, t29, role4, t31, role10>
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-86 XA3Pos */  <TRUE, t40, role4, t19, role10>
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-87 XA3Pos */  <TRUE, t9, role4, t29, role10>
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-88 XA3Pos */  <TRUE, t37, role4, t32, role10>
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-89 XA3Pos */  <TRUE, t4, role6, t39, role10>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-90 XA3Pos */  <TRUE, t9, role8, t3, role10>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-91 XA3Pos */  <TRUE, t22, role8, t32, role10>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-92 XA3Pos */  <TRUE, t26, role8, t27, role10>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-93 XA3Pos */  <TRUE, t36, role8, t38, role10>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-94 XA3Pos */  <TRUE, t33, role9, t17, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-95 XA3Pos */  <TRUE, t14, role9, t25, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-96 XA3Pos */  <TRUE, t15, role9, t27, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-97 XA3Pos */  <TRUE, t31, role9, t40, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-98 XA3Pos */  <TRUE, t7, role9, t33, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-99 XA3Pos */  <TRUE, t38, role9, t14, role10>
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-100 XA3Pos */  <TRUE, t14, role12, t26, role10>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-101 XA3Pos */  <TRUE, t17, role12, t22, role10>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-102 XA3Pos */  <TRUE, t2, role12, t10, role10>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-103 XA3Pos */  <TRUE, t35, role21, t11, role10>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-104 XA3Pos */  <TRUE, t2, role21, t38, role10>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-105 XA3Pos */  <TRUE, t19, role21, t15, role10>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-106 XA3Pos */  <TRUE, t5, role24, t22, role10>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-107 XA3Pos */  <TRUE, t34, role24, t18, role10>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-108 XA3Pos */  <TRUE, t21, role23, t23, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-109 XA3Pos */  <TRUE, t11, role23, t33, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-110 XA3Pos */  <TRUE, t17, role23, t19, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-111 XA3Pos */  <TRUE, t5, role23, t12, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-112 XA3Pos */  <TRUE, t18, role23, t24, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-113 XA3Pos */  <TRUE, t19, role23, t14, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-114 XA3Pos */  <TRUE, t15, role23, t9, role10>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-115 XA3Pos */  <TRUE, t20, role28, t22, role10>
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-116 XA3Pos */  <TRUE, t32, role22, t23, role11>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-117 XA3Pos */  <TRUE, t30, role22, t30, role11>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-118 XA3Pos */  <TRUE, t13, role6, t18, role11>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-119 XA3Pos */  <TRUE, t6, role6, t13, role11>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-120 XA3Pos */  <TRUE, t11, role23, t6, role11>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-121 XA3Pos */  <TRUE, t8, role23, t4, role22>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][1][0] = true;
	}

	function fireCA122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-122 XA3Pos */  <TRUE, t22, role23, t8, role11>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-123 XA3Pos */  <TRUE, t5, role23, t2, role11>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-124 XA3Pos */  <TRUE, t20, role12, t16, role11>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-125 XA3Pos */  <TRUE, t21, role12, t3, role11>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-126 XA4Mix */  <TRUE, t20, role22 & NOT ~ role15, t13, role2>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-127 XA4Mix */  <TRUE, t21, role22 & NOT ~ role15, t20, role2>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-128 XA4Mix */  <TRUE, t22, role24 & NOT ~ role15, t39, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-129 XA4Mix */  <TRUE, t35, role24 & NOT ~ role15, t22, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-130 XA4Mix */  <TRUE, t11, role24 & NOT ~ role15, t26, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-131 XA4Mix */  <TRUE, t24, role24 & NOT ~ role15, t20, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-132 XA4Mix */  <TRUE, t6, role24 & NOT ~ role15, t16, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-133 XA4Mix */  <TRUE, t14, role7 & NOT ~ role15, t30, role2>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-134 XA4Mix */  <TRUE, t7, role7 & NOT ~ role15, t7, role2>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-135 XA4Mix */  <TRUE, t10, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t28, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA136Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-136 XA4Mix */  <TRUE, t39, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t8, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA137Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-137 XA4Mix */  <TRUE, t11, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t38, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA138Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-138 XA4Mix */  <TRUE, t8, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t39, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA139Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-139 XA4Mix */  <TRUE, t25, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t34, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA140Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-140 XA4Mix */  <TRUE, t1, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t31, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA141Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-141 XA4Mix */  <TRUE, t16, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t10, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA142Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-142 XA4Mix */  <TRUE, t32, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t40, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA143Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-143 XA4Mix */  <TRUE, t8, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA144Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-144 XA4Mix */  <TRUE, t2, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t32, role15>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA145Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-145 XA4Mix */  <TRUE, t38, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA146Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-146 XA4Mix */  <TRUE, t33, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t15, role15>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA147Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-147 XA4Mix */  <TRUE, t10, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t12, role15>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA148Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-148 XA4Mix */  <TRUE, t11, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t21, role15>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA149Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-149 XA4Mix */  <TRUE, t2, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t23, role15>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA150Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-150 XA4Mix */  <TRUE, t6, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t3, role15>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA151Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-151 XA4Mix */  <TRUE, t19, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA152Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-152 XA4Mix */  <TRUE, t27, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t12, role15>
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA153Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-153 XA4Mix */  <TRUE, t11, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t35, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA154Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-154 XA4Mix */  <TRUE, t4, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t34, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA155Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-155 XA4Mix */  <TRUE, t35, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t7, role6>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA156Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-156 XA4Mix */  <TRUE, t25, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA157Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-157 XA4Mix */  <TRUE, t26, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t10, role8>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA158Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-158 XA4Mix */  <TRUE, t29, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t7, role8>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA159Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-159 XX1Tru */  <role22, t28, TRUE, t30, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA160Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-160 XX1Tru */  <role22, t26, TRUE, t32, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA161Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-161 XX1Tru */  <role22, t14, TRUE, t34, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA162Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-162 XX1Tru */  <role22, t32, TRUE, t31, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA163Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-163 XX1Tru */  <role22, t15, TRUE, t9, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA164Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-164 XX1Tru */  <role22, t2, TRUE, t38, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA165Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-165 XX1Tru */  <role22, t10, TRUE, t3, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA166Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-166 XX1Tru */  <role22, t33, TRUE, t35, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = true;
	}

	function fireCA167Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-167 XX1Tru */  <role22, t2, TRUE, t10, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA168Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-168 XX1Tru */  <role22, t38, TRUE, t32, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA169Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-169 XX1Tru */  <role22, t20, TRUE, t14, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA170Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-170 XX1Tru */  <role22, t40, TRUE, t31, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA171Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-171 XX1Tru */  <role22, t17, TRUE, t38, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA172Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-172 XX1Tru */  <role22, t34, TRUE, t24, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA173Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-173 XX1Tru */  <role22, t35, TRUE, t28, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA174Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-174 XX1Tru */  <role22, t1, TRUE, t15, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA175Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-175 XX1Tru */  <role22, t39, TRUE, t7, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA176Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-176 XX1Tru */  <role22, t36, TRUE, t11, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA177Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-177 XX1Tru */  <role22, t22, TRUE, t12, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA178Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-178 XX1Tru */  <role22, t25, TRUE, t33, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA179Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-179 XX1Tru */  <role22, t33, TRUE, t30, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA180Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-180 XX1Tru */  <role22, t19, TRUE, t8, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA181Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-181 XX1Tru */  <role22, t17, TRUE, t18, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA182Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-182 XX1Tru */  <role22, t24, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA183Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-183 XX1Tru */  <role22, t25, TRUE, t38, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA184Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-184 XX1Tru */  <role22, t28, TRUE, t22, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA185Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-185 XX1Tru */  <role22, t12, TRUE, t20, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA186Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-186 XX1Tru */  <role22, t25, TRUE, t27, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA187Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-187 XX1Tru */  <role22, t31, TRUE, t33, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA188Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-188 XX1Tru */  <role22, t33, TRUE, t32, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA189Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-189 XX1Tru */  <role22, t4, TRUE, t23, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA190Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-190 XX1Tru */  <role22, t13, TRUE, t1, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA191Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-191 XX1Tru */  <role22, t22, TRUE, t40, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA192Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-192 XX1Tru */  <role22, t10, TRUE, t24, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA193Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-193 XX1Tru */  <role22, t5, TRUE, t28, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA194Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-194 XX1Tru */  <role22, t35, TRUE, t11, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA195Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-195 XX1Tru */  <role22, t38, TRUE, t12, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA196Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-196 XX1Tru */  <role22, t20, TRUE, t35, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA197Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-197 XX1Tru */  <role2, t9, TRUE, t23, role4>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA198Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-198 XX1Tru */  <role22, t17, TRUE, t3, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA199Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-199 XX1Tru */  <role22, t40, TRUE, t4, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA200Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-200 XX1Tru */  <role22, t18, TRUE, t13, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA201Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-201 XX1Tru */  <role22, t6, TRUE, t19, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA202Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-202 XX1Tru */  <role22, t15, TRUE, t14, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA203Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-203 XX1Tru */  <role22, t7, TRUE, t6, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA204Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-204 XX1Tru */  <role22, t23, TRUE, t15, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA205Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-205 XX1Tru */  <role22, t19, TRUE, t2, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA206Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-206 XX1Tru */  <role22, t21, TRUE, t26, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA207Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-207 XX1Tru */  <role22, t14, TRUE, t21, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA208Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-208 XX2Neg */  <role2, t29, NOT ~ role14, t16, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA209Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-209 XX2Neg */  <role2, t6, NOT ~ role14, t27, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA210Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-210 XX2Neg */  <role2, t4, NOT ~ role14, t10, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA211Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-211 XX2Neg */  <role2, t22, NOT ~ role14, t15, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA212Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-212 XX2Neg */  <role2, t40, NOT ~ role14, t13, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA213Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-213 XX2Neg */  <role2, t18, NOT ~ role14, t7, role32>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA214Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-214 XX3Pos */  <role8, t23, role14, t33, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA215Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-215 XX3Pos */  <role8, t9, role14, t25, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA216Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-216 XX3Pos */  <role8, t15, role14, t10, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA217Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-217 XX3Pos */  <role8, t40, role14, t38, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA218Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-218 XX3Pos */  <role8, t38, role14, t18, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA219Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-219 XX3Pos */  <role8, t1, role14, t13, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA220Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-220 XX3Pos */  <role8, t2, role14, t21, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA221Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-221 XX3Pos */  <role8, t33, role14, t20, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA222Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-222 XX3Pos */  <role8, t5, role14, t5, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA223Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-223 XX3Pos */  <role8, t29, role14, t14, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA224Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-224 XX3Pos */  <role8, t4, role14, t6, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA225Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-225 XX3Pos */  <role8, t8, role14, t16, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA226Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-226 XX3Pos */  <role8, t24, role14, t19, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA227Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-227 XX3Pos */  <role8, t16, role14, t30, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA228Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-228 XX3Pos */  <role8, t15, role14, t22, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA229Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-229 XX3Pos */  <role8, t39, role14, t23, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA230Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-230 XX3Pos */  <role8, t31, role14, t15, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA231Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-231 XX3Pos */  <role8, t22, role14, t39, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA232Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-232 XX3Pos */  <role8, t6, role14, t26, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA233Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-233 XX3Pos */  <role8, t37, role14, t29, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA234Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-234 XX3Pos */  <role8, t35, role17, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA235Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-235 XX3Pos */  <role8, t23, role17, t30, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA236Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-236 XX3Pos */  <role8, t15, role17, t11, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA237Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-237 XX3Pos */  <role8, t38, role17, t40, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA238Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-238 XX3Pos */  <role8, t16, role17, t8, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA239Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-239 XX3Pos */  <role8, t6, role17, t25, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA240Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-240 XX3Pos */  <role8, t28, role17, t15, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA241Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-241 XX3Pos */  <role8, t40, role17, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA242Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-242 XX3Pos */  <role8, t36, role17, t32, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA243Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-243 XX3Pos */  <role8, t11, role17, t22, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA244Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-244 XX3Pos */  <role8, t12, role17, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA245Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-245 XX3Pos */  <role8, t3, role17, t12, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA246Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-246 XX3Pos */  <role8, t19, role17, t38, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA247Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-247 XX3Pos */  <role8, t29, role17, t7, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA248Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-248 XX3Pos */  <role8, t4, role17, t16, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA249Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-249 XX3Pos */  <role8, t32, role17, t17, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA250Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-250 XX3Pos */  <role8, t17, role17, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA251Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-251 XX3Pos */  <role8, t5, role17, t9, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA252Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-252 XX3Pos */  <role8, t7, role17, t33, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA253Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-253 XX3Pos */  <role7, t4, role9, t23, role4>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA254Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-254 XX3Pos */  <role8, t26, role14, t29, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA255Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-255 XX3Pos */  <role8, t40, role14, t23, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA256Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-256 XX3Pos */  <role8, t21, role14, t24, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA257Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-257 XX3Pos */  <role8, t32, role14, t9, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA258Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-258 XX3Pos */  <role8, t1, role14, t4, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA259Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-259 XX3Pos */  <role8, t31, role14, t25, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA260Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-260 XX3Pos */  <role8, t33, role14, t34, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA261Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-261 XX3Pos */  <role8, t9, role14, t22, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA262Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-262 XX3Pos */  <role8, t34, role14, t20, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA263Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-263 XX3Pos */  <role8, t15, role14, t11, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA264Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-264 XX3Pos */  <role8, t35, role14, t26, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA265Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-265 XX3Pos */  <role8, t5, role14, t40, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA266Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-266 XX3Pos */  <role8, t36, role14, t31, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA267Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-267 XX3Pos */  <role8, t26, role32, t39, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA268Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-268 XX3Pos */  <role8, t36, role32, t1, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA269Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-269 XX3Pos */  <role12, t26, role29, t32, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA270Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-270 XX3Pos */  <role12, t10, role29, t22, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA271Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-271 XX3Pos */  <role12, t6, role29, t25, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA272Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-272 XX3Pos */  <role12, t33, role29, t26, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA273Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-273 XX3Pos */  <role12, t28, role29, t36, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA274Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-274 XX3Pos */  <role12, t32, role29, t40, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA275Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-275 XX3Pos */  <role12, t38, role29, t3, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA276Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-276 XX3Pos */  <role12, t30, role29, t27, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA277Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-277 XX3Pos */  <role12, t27, role29, t9, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA278Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-278 XX3Pos */  <role12, t17, role29, t31, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA279Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-279 XX3Pos */  <role12, t34, role29, t4, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA280Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-280 XX3Pos */  <role12, t19, role29, t35, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA281Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-281 XX3Pos */  <role12, t13, role29, t18, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA282Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-282 XX3Pos */  <role12, t39, role29, t21, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA283Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-283 XX3Pos */  <role12, t35, role29, t34, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA284Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-284 XX3Pos */  <role12, t2, role29, t29, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA285Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-285 XX3Pos */  <role12, t27, role14, t25, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA286Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-286 XX3Pos */  <role12, t11, role14, t20, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA287Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-287 XX3Pos */  <role12, t15, role14, t2, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA288Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-288 XX3Pos */  <role12, t34, role14, t39, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA289Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-289 XX3Pos */  <role12, t19, role14, t8, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA290Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-290 XX3Pos */  <role12, t25, role14, t34, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA291Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-291 XX3Pos */  <role12, t13, role14, t5, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA292Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-292 XX3Pos */  <role12, t21, role14, t30, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA293Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-293 XX3Pos */  <role12, t18, role14, t31, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA294Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-294 XX3Pos */  <role12, t14, role14, t33, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA295Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-295 XX3Pos */  <role12, t35, role14, t37, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA296Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-296 XX3Pos */  <role12, t17, role14, t18, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA297Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-297 XX3Pos */  <role12, t38, role32, t20, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA298Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-298 XX3Pos */  <role12, t11, role32, t25, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA299Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-299 XX3Pos */  <role12, t19, role32, t28, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA300Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-300 XX3Pos */  <role12, t20, role32, t33, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA301Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-301 XX3Pos */  <role12, t27, role14, t23, role4>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA302Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-302 XX3Pos */  <role12, t27, role14, t29, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA303Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-303 XX3Pos */  <role12, t18, role14, t7, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA304Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-304 XX3Pos */  <role12, t40, role32, t23, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA305Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-305 XX3Pos */  <role12, t36, role32, t15, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA306Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-306 XX3Pos */  <role12, t33, role32, t20, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA307Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-307 XX3Pos */  <role12, t17, role32, t16, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA308Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-308 XX3Pos */  <role12, t26, role32, t33, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA309Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-309 XX3Pos */  <role12, t21, role32, t24, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA310Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-310 XX3Pos */  <role12, t28, role32, t17, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA311Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-311 XX3Pos */  <role12, t11, role32, t14, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA312Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-312 XX3Pos */  <role12, t1, role32, t39, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA313Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-313 XX3Pos */  <role12, t2, role32, t18, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA314Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-314 XX3Pos */  <role12, t37, role32, t28, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA315Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-315 XX3Pos */  <role12, t14, role32, t34, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA316Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-316 XX3Pos */  <role12, t14, role32, t23, role4>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA317Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-317 XX3Pos */  <role12, t12, role32, t8, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA318Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-318 XX3Pos */  <role12, t31, role32, t6, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA319Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-319 XX3Pos */  <role12, t29, role32, t3, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA320Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-320 XX3Pos */  <role12, t13, role32, t25, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA321Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-321 XX3Pos */  <role12, t15, role32, t29, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA322Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-322 XX3Pos */  <role12, t22, role32, t13, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA323Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-323 XX3Pos */  <role12, t3, role32, t19, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA324Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-324 XX3Pos */  <role12, t10, role32, t4, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA325Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-325 XX3Pos */  <role12, t4, role32, t7, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA326Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-326 XX3Pos */  <role12, t24, role32, t9, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][10][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA327Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-327 XX3Pos */  <role6, t13, role2, t18, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA328Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-328 XX3Pos */  <role6, t7, role2, t34, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA329Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-329 XX3Pos */  <role6, t33, role2, t36, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA330Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-330 XX3Pos */  <role6, t20, role2, t39, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA331Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-331 XX3Pos */  <role6, t15, role2, t35, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA332Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-332 XX3Pos */  <role6, t14, role2, t11, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA333Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-333 XX3Pos */  <role6, t17, role2, t9, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA334Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-334 XX3Pos */  <role6, t16, role2, t33, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA335Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-335 XX3Pos */  <role6, t36, role2, t20, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA336Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-336 XX3Pos */  <role6, t8, role2, t12, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA337Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-337 XX3Pos */  <role6, t18, role2, t37, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA338Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-338 XX3Pos */  <role6, t2, role2, t38, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA339Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-339 XX3Pos */  <role6, t34, role2, t21, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA340Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-340 XX3Pos */  <role6, t37, role2, t14, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA341Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-341 XX3Pos */  <role6, t19, role2, t5, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA342Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-342 XX3Pos */  <role6, t21, role2, t8, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA343Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-343 XX3Pos */  <role6, t22, role2, t10, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA344Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-344 XX3Pos */  <role6, t38, role2, t16, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA345Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-345 XX3Pos */  <role6, t30, role2, t22, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA346Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-346 XX3Pos */  <role6, t40, role2, t6, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][2][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA347Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-347 XX3Pos */  <role6, t16, role22, t30, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA348Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-348 XX3Pos */  <role6, t19, role22, t29, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA349Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-349 XX3Pos */  <role6, t40, role22, t38, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA350Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-350 XX3Pos */  <role6, t32, role22, t17, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA351Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-351 XX3Pos */  <role6, t1, role22, t24, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA352Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-352 XX3Pos */  <role6, t10, role24, t22, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA353Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-353 XX3Pos */  <role6, t17, role24, t11, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA354Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-354 XX3Pos */  <role6, t3, role24, t28, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA355Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-355 XX3Pos */  <role6, t30, role24, t9, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA356Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-356 XX3Pos */  <role6, t2, role24, t31, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA357Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-357 XX3Pos */  <role6, t15, role24, t10, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA358Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-358 XX3Pos */  <role6, t32, role24, t34, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA359Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-359 XX3Pos */  <role6, t20, role24, t3, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA360Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-360 XX3Pos */  <role6, t24, role7, t10, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA361Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-361 XX3Pos */  <role6, t40, role7, t9, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA362Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-362 XX3Pos */  <role6, t19, role28, t14, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA363Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-363 XX3Pos */  <role6, t38, role28, t23, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA364Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-364 XX3Pos */  <role6, t39, role28, t22, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA365Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-365 XX3Pos */  <role6, t20, role28, t37, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA366Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-366 XX3Pos */  <role6, t5, role28, t34, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA367Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-367 XX3Pos */  <role6, t34, role28, t3, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA368Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-368 XX3Pos */  <role6, t21, role28, t33, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA369Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-369 XX3Pos */  <role6, t25, role28, t27, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA370Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-370 XX3Pos */  <role6, t35, role28, t30, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA371Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-371 XX3Pos */  <role6, t30, role28, t35, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA372Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-372 XX3Pos */  <role8, t25, role3, t15, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA373Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-373 XX3Pos */  <role8, t37, role3, t33, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA374Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-374 XX3Pos */  <role8, t19, role3, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA375Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-375 XX3Pos */  <role8, t18, role3, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA376Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-376 XX3Pos */  <role8, t1, role3, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA377Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-377 XX3Pos */  <role8, t27, role3, t11, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA378Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-378 XX3Pos */  <role8, t26, role3, t12, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA379Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-379 XX3Pos */  <role8, t38, role3, t38, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA380Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-380 XX3Pos */  <role8, t9, role3, t13, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA381Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-381 XX3Pos */  <role8, t20, role3, t35, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA382Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-382 XX3Pos */  <role8, t24, role3, t39, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA383Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-383 XX3Pos */  <role8, t6, role3, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA384Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-384 XX3Pos */  <role8, t22, role4, t6, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA385Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-385 XX3Pos */  <role8, t23, role4, t33, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA386Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-386 XX3Pos */  <role8, t21, role4, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA387Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-387 XX3Pos */  <role8, t30, role4, t16, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA388Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-388 XX3Pos */  <role8, t24, role4, t30, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA389Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-389 XX3Pos */  <role8, t29, role4, t8, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA390Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-390 XX3Pos */  <role8, t31, role4, t13, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA391Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-391 XX3Pos */  <role8, t25, role4, t18, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA392Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-392 XX3Pos */  <role8, t5, role4, t22, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA393Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-393 XX3Pos */  <role8, t34, role4, t3, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA394Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-394 XX3Pos */  <role8, t3, role4, t14, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA395Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-395 XX3Pos */  <role8, t39, role4, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA396Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-396 XX3Pos */  <role8, t6, role4, t28, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA397Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-397 XX3Pos */  <role8, t31, role22, t29, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA398Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-398 XX3Pos */  <role8, t20, role22, t8, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA399Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-399 XX3Pos */  <role8, t15, role22, t24, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA400Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-400 XX3Pos */  <role8, t18, role21, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA401Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-401 XX3Pos */  <role8, t39, role21, t19, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA402Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-402 XX3Pos */  <role8, t7, role21, t28, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA403Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-403 XX3Pos */  <role8, t20, role21, t3, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA404Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-404 XX3Pos */  <role8, t34, role21, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA405Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-405 XX3Pos */  <role8, t9, role21, t6, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA406Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-406 XX3Pos */  <role8, t8, role21, t14, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA407Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-407 XX3Pos */  <role8, t12, role21, t15, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA408Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-408 XX3Pos */  <role8, t24, role21, t30, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA409Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-409 XX3Pos */  <role8, t28, role21, t8, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA410Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-410 XX3Pos */  <role8, t4, role21, t17, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA411Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-411 XX3Pos */  <role8, t13, role21, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA412Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-412 XX3Pos */  <role8, t21, role21, t29, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA413Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-413 XX3Pos */  <role8, t34, role6, t32, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA414Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-414 XX3Pos */  <role8, t9, role6, t6, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA415Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-415 XX3Pos */  <role8, t7, role6, t31, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA416Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-416 XX3Pos */  <role8, t35, role6, t8, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA417Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-417 XX3Pos */  <role8, t11, role6, t14, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA418Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-418 XX3Pos */  <role8, t36, role6, t27, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA419Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-419 XX3Pos */  <role8, t22, role6, t17, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA420Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-420 XX3Pos */  <role8, t40, role6, t35, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA421Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-421 XX3Pos */  <role8, t2, role6, t9, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA422Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-422 XX3Pos */  <role8, t39, role6, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA423Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-423 XX3Pos */  <role8, t37, role6, t16, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA424Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-424 XX3Pos */  <role8, t38, role6, t33, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA425Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-425 XX3Pos */  <role8, t21, role6, t29, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA426Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-426 XX3Pos */  <role8, t33, role6, t21, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA427Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-427 XX3Pos */  <role8, t1, role6, t34, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA428Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-428 XX3Pos */  <role8, t17, role6, t11, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA429Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-429 XX3Pos */  <role8, t31, role6, t26, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA430Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-430 XX3Pos */  <role8, t23, role6, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA431Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-431 XX3Pos */  <role8, t8, role6, t18, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA432Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-432 XX3Pos */  <role8, t4, role6, t30, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA433Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-433 XX3Pos */  <role8, t10, role6, t13, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA434Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-434 XX3Pos */  <role8, t20, role6, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA435Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-435 XX3Pos */  <role8, t31, role24, t40, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA436Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-436 XX3Pos */  <role8, t25, role24, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA437Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-437 XX3Pos */  <role8, t33, role24, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA438Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-438 XX3Pos */  <role8, t2, role24, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA439Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-439 XX3Pos */  <role8, t14, role24, t27, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA440Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-440 XX3Pos */  <role8, t35, role24, t39, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA441Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-441 XX3Pos */  <role8, t39, role24, t31, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA442Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-442 XX3Pos */  <role8, t9, role24, t15, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA443Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-443 XX3Pos */  <role8, t3, role24, t28, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA444Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-444 XX3Pos */  <role8, t2, role23, t14, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA445Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-445 XX3Pos */  <role8, t39, role23, t38, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA446Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-446 XX3Pos */  <role8, t17, role23, t17, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA447Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-447 XX3Pos */  <role8, t30, role23, t6, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA448Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-448 XX3Pos */  <role8, t24, role23, t40, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA449Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-449 XX3Pos */  <role8, t14, role23, t39, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA450Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-450 XX3Pos */  <role8, t15, role23, t29, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA451Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-451 XX3Pos */  <role8, t7, role23, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA452Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-452 XX3Pos */  <role8, t13, role23, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA453Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-453 XX3Pos */  <role8, t35, role23, t13, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA454Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-454 XX3Pos */  <role8, t23, role23, t18, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA455Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-455 XX3Pos */  <role8, t4, role23, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA456Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-456 XX3Pos */  <role8, t33, role23, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA457Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-457 XX3Pos */  <role8, t36, role23, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA458Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-458 XX3Pos */  <role8, t26, role23, t34, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA459Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-459 XX3Pos */  <role8, t5, role8, t23, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA460Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-460 XX3Pos */  <role8, t3, role8, t30, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA461Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-461 XX3Pos */  <role8, t6, role8, t33, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA462Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-462 XX3Pos */  <role8, t28, role8, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA463Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-463 XX3Pos */  <role8, t13, role8, t40, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA464Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-464 XX3Pos */  <role8, t27, role8, t28, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA465Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-465 XX3Pos */  <role8, t8, role8, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA466Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-466 XX3Pos */  <role8, t39, role8, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA467Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-467 XX3Pos */  <role8, t29, role12, t37, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA468Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-468 XX3Pos */  <role8, t2, role12, t23, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA469Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-469 XX3Pos */  <role8, t18, role12, t27, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA470Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-470 XX3Pos */  <role8, t10, role12, t35, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA471Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-471 XX3Pos */  <role8, t37, role12, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA472Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-472 XX3Pos */  <role8, t28, role12, t6, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA473Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-473 XX3Pos */  <role8, t7, role12, t28, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA474Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-474 XX3Pos */  <role8, t30, role12, t36, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA475Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-475 XX3Pos */  <role8, t1, role12, t19, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA476Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-476 XX3Pos */  <role8, t15, role12, t40, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA477Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-477 XX3Pos */  <role8, t4, role12, t7, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA478Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-478 XX3Pos */  <role8, t5, role12, t38, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA479Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-479 XX3Pos */  <role8, t11, role4, t12, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA480Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-480 XX3Pos */  <role8, t22, role4, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA481Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-481 XX3Pos */  <role8, t26, role4, t9, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA482Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-482 XX3Pos */  <role8, t15, role4, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA483Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-483 XX3Pos */  <role8, t16, role4, t7, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA484Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-484 XX3Pos */  <role8, t34, role4, t26, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA485Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-485 XX3Pos */  <role8, t8, role4, t28, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA486Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-486 XX3Pos */  <role8, t30, role4, t14, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA487Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-487 XX3Pos */  <role8, t27, role4, t17, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA488Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-488 XX3Pos */  <role8, t39, role4, t23, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA489Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-489 XX3Pos */  <role8, t11, role6, t10, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA490Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-490 XX3Pos */  <role8, t14, role6, t24, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA491Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-491 XX3Pos */  <role8, t24, role6, t40, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA492Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-492 XX3Pos */  <role8, t30, role6, t22, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA493Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-493 XX3Pos */  <role8, t6, role6, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA494Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-494 XX3Pos */  <role8, t8, role6, t20, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA495Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-495 XX3Pos */  <role8, t23, role6, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA496Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-496 XX3Pos */  <role8, t27, role6, t26, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA497Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-497 XX3Pos */  <role8, t39, role6, t6, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA498Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-498 XX3Pos */  <role8, t3, role6, t37, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA499Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-499 XX3Pos */  <role8, t36, role7, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA500Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-500 XX3Pos */  <role8, t20, role7, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA501Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-501 XX3Pos */  <role8, t21, role8, t34, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA502Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-502 XX3Pos */  <role8, t13, role8, t2, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA503Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-503 XX3Pos */  <role8, t27, role8, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA504Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-504 XX3Pos */  <role8, t19, role8, t12, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA505Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-505 XX3Pos */  <role8, t34, role8, t13, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA506Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-506 XX3Pos */  <role8, t23, role8, t20, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA507Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-507 XX3Pos */  <role8, t15, role8, t5, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA508Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-508 XX3Pos */  <role8, t29, role8, t14, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA509Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-509 XX3Pos */  <role8, t3, role8, t21, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA510Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-510 XX3Pos */  <role8, t25, role8, t35, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA511Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-511 XX3Pos */  <role8, t35, role8, t15, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA512Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-512 XX3Pos */  <role8, t30, role8, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA513Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-513 XX3Pos */  <role8, t5, role8, t16, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA514Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-514 XX3Pos */  <role8, t17, role8, t17, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA515Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-515 XX3Pos */  <role8, t6, role8, t36, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA516Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-516 XX3Pos */  <role8, t38, role8, t11, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA517Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-517 XX3Pos */  <role8, t24, role8, t37, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA518Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-518 XX3Pos */  <role8, t14, role8, t26, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA519Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-519 XX3Pos */  <role8, t29, role9, t19, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA520Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-520 XX3Pos */  <role8, t5, role9, t7, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA521Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-521 XX3Pos */  <role8, t30, role9, t13, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA522Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-522 XX3Pos */  <role8, t1, role9, t39, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA523Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-523 XX3Pos */  <role8, t39, role9, t31, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA524Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-524 XX3Pos */  <role8, t32, role9, t20, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA525Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-525 XX3Pos */  <role8, t27, role9, t2, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA526Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-526 XX3Pos */  <role8, t13, role9, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA527Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-527 XX3Pos */  <role8, t19, role9, t34, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA528Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-528 XX3Pos */  <role8, t2, role9, t32, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA529Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-529 XX3Pos */  <role8, t24, role9, t24, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA530Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-530 XX3Pos */  <role8, t16, role9, t38, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA531Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-531 XX3Pos */  <role8, t36, role9, t37, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA532Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-532 XX3Pos */  <role8, t34, role9, t18, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA533Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-533 XX3Pos */  <role8, t25, role9, t28, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA534Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-534 XX3Pos */  <role8, t11, role9, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA535Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-535 XX3Pos */  <role8, t22, role9, t29, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA536Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-536 XX3Pos */  <role8, t40, role9, t10, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][30][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA537Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-537 XX3Pos */  <role8, t36, role12, t8, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA538Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-538 XX3Pos */  <role8, t35, role12, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA539Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-539 XX3Pos */  <role8, t14, role22, t8, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA540Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-540 XX3Pos */  <role8, t13, role22, t32, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA541Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-541 XX3Pos */  <role8, t31, role22, t29, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA542Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-542 XX3Pos */  <role8, t20, role22, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA543Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-543 XX3Pos */  <role8, t9, role22, t25, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA544Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-544 XX3Pos */  <role8, t36, role22, t24, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA545Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-545 XX3Pos */  <role8, t29, role21, t19, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA546Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-546 XX3Pos */  <role8, t24, role21, t9, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA547Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-547 XX3Pos */  <role8, t12, role21, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA548Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-548 XX3Pos */  <role8, t8, role21, t36, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA549Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-549 XX3Pos */  <role8, t39, role21, t27, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA550Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-550 XX3Pos */  <role8, t22, role21, t14, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA551Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-551 XX3Pos */  <role8, t31, role21, t7, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA552Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-552 XX3Pos */  <role8, t13, role21, t8, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA553Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-553 XX3Pos */  <role8, t9, role21, t26, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA554Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-554 XX3Pos */  <role8, t4, role21, t37, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA555Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-555 XX3Pos */  <role8, t15, role21, t10, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA556Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-556 XX3Pos */  <role8, t14, role21, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA557Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-557 XX3Pos */  <role8, t16, role21, t12, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA558Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-558 XX3Pos */  <role8, t37, role24, t16, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA559Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-559 XX3Pos */  <role8, t22, role24, t28, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA560Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-560 XX3Pos */  <role8, t38, role24, t29, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA561Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-561 XX3Pos */  <role8, t4, role24, t38, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA562Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-562 XX3Pos */  <role8, t20, role24, t39, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA563Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-563 XX3Pos */  <role8, t15, role24, t33, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA564Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-564 XX3Pos */  <role8, t31, role24, t37, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA565Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-565 XX3Pos */  <role8, t21, role24, t35, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA566Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-566 XX3Pos */  <role8, t6, role24, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA567Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-567 XX3Pos */  <role8, t37, role23, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA568Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-568 XX3Pos */  <role8, t16, role23, t25, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA569Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-569 XX3Pos */  <role8, t22, role23, t17, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA570Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-570 XX3Pos */  <role8, t27, role23, t32, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA571Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-571 XX3Pos */  <role8, t7, role23, t21, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA572Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-572 XX3Pos */  <role8, t34, role23, t26, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA573Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-573 XX3Pos */  <role8, t1, role23, t5, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA574Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-574 XX3Pos */  <role8, t35, role23, t40, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA575Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-575 XX3Pos */  <role8, t36, role23, t38, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA576Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-576 XX3Pos */  <role8, t28, role23, t31, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA577Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-577 XX3Pos */  <role8, t8, role23, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA578Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-578 XX3Pos */  <role8, t10, role23, t30, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA579Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-579 XX3Pos */  <role8, t25, role23, t27, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA580Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-580 XX3Pos */  <role8, t38, role28, t38, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA581Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-581 XX3Pos */  <role8, t18, role28, t31, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA582Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-582 XX3Pos */  <role8, t37, role28, t35, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA583Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-583 XX3Pos */  <role8, t19, role28, t18, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA584Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-584 XX3Pos */  <role8, t7, role28, t28, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA585Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-585 XX3Pos */  <role8, t8, role22, t38, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA586Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-586 XX3Pos */  <role8, t4, role22, t36, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA587Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-587 XX3Pos */  <role8, t3, role22, t1, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA588Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-588 XX3Pos */  <role8, t17, role21, t23, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA589Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-589 XX3Pos */  <role8, t24, role21, t31, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA590Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-590 XX3Pos */  <role8, t38, role6, t28, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA591Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-591 XX3Pos */  <role8, t40, role6, t22, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA592Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-592 XX3Pos */  <role8, t20, role6, t33, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA593Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-593 XX3Pos */  <role8, t18, role6, t7, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA594Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-594 XX3Pos */  <role8, t33, role6, t31, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA595Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-595 XX3Pos */  <role8, t14, role6, t5, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA596Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-596 XX3Pos */  <role8, t16, role6, t34, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA597Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-597 XX3Pos */  <role8, t5, role6, t11, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA598Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-598 XX3Pos */  <role8, t20, role24, t25, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA599Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-599 XX3Pos */  <role8, t21, role23, t29, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA600Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-600 XX3Pos */  <role8, t24, role23, t11, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA601Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-601 XX3Pos */  <role8, t12, role23, t28, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA602Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-602 XX3Pos */  <role8, t31, role23, t19, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA603Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-603 XX3Pos */  <role8, t3, role23, t32, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA604Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-604 XX3Pos */  <role8, t34, role23, t40, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA605Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-605 XX3Pos */  <role8, t13, role23, t30, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA606Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-606 XX3Pos */  <role8, t28, role23, t34, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA607Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-607 XX3Pos */  <role8, t35, role23, t13, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA608Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-608 XX3Pos */  <role8, t19, role23, t1, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA609Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-609 XX3Pos */  <role8, t5, role12, t14, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA610Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-610 XX3Pos */  <role8, t1, role12, t24, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA611Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-611 XX3Pos */  <role8, t33, role12, t33, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA612Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-612 XX3Pos */  <role8, t2, role12, t17, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA613Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-613 XX3Pos */  <role8, t26, role12, t39, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA614Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-614 XX3Pos */  <role8, t35, role12, t4, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA615Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-615 XX4Mix */  <role7, t37, role22 & NOT ~ role15, t24, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA616Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-616 XX4Mix */  <role7, t38, role22 & NOT ~ role15, t25, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA617Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-617 XX4Mix */  <role7, t15, role22 & NOT ~ role15, t5, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA618Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-618 XX4Mix */  <role7, t29, role22 & NOT ~ role15, t12, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA619Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-619 XX4Mix */  <role7, t40, role22 & NOT ~ role15, t31, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA620Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-620 XX4Mix */  <role7, t23, role22 & NOT ~ role15, t7, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA621Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-621 XX4Mix */  <role7, t31, role22 & NOT ~ role15, t27, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA622Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-622 XX4Mix */  <role7, t33, role24 & NOT ~ role15, t13, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA623Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-623 XX4Mix */  <role7, t38, role24 & NOT ~ role15, t30, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA624Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-624 XX4Mix */  <role7, t10, role24 & NOT ~ role15, t40, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA625Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-625 XX4Mix */  <role7, t37, role24 & NOT ~ role15, t2, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA626Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-626 XX4Mix */  <role7, t28, role24 & NOT ~ role15, t38, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA627Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-627 XX4Mix */  <role7, t4, role24 & NOT ~ role15, t1, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA628Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-628 XX4Mix */  <role7, t25, role24 & NOT ~ role15, t14, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA629Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-629 XX4Mix */  <role7, t32, role24 & NOT ~ role15, t34, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA630Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-630 XX4Mix */  <role7, t14, role24 & NOT ~ role15, t9, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA631Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-631 XX4Mix */  <role7, t18, role24 & NOT ~ role15, t25, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA632Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-632 XX4Mix */  <role7, t27, role24 & NOT ~ role15, t8, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA633Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-633 XX4Mix */  <role7, t34, role24 & NOT ~ role15, t6, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA634Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-634 XX4Mix */  <role7, t8, role24 & NOT ~ role15, t31, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA635Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-635 XX4Mix */  <role7, t26, role24 & NOT ~ role15, t32, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA636Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-636 XX4Mix */  <role7, t19, role24 & NOT ~ role15, t15, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA637Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-637 XX4Mix */  <role7, t20, role24 & NOT ~ role15, t3, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA638Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-638 XX4Mix */  <role7, t39, role24 & NOT ~ role15, t27, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA639Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-639 XX4Mix */  <role7, t3, role24 & NOT ~ role15, t10, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA640Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-640 XX4Mix */  <role7, t29, role24 & NOT ~ role15, t17, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA641Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-641 XX4Mix */  <role7, t28, role7 & NOT ~ role15, t40, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA642Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-642 XX4Mix */  <role7, t36, role7 & NOT ~ role15, t13, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA643Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-643 XX4Mix */  <role7, t4, role7 & NOT ~ role15, t22, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA644Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-644 XX4Mix */  <role7, t9, role28 & NOT ~ role15, t28, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA645Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-645 XX4Mix */  <role7, t8, role28 & NOT ~ role15, t22, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][19][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][2][0] = true;
	}

	function fireCA646Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-646 XX4Mix */  <role8, t9, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA647Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-647 XX4Mix */  <role8, t24, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA648Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-648 XX4Mix */  <role8, t12, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA649Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-649 XX4Mix */  <role8, t40, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t11, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA650Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-650 XX4Mix */  <role8, t34, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t37, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA651Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-651 XX4Mix */  <role8, t35, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t32, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA652Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-652 XX4Mix */  <role8, t38, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t33, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA653Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-653 XX4Mix */  <role8, t31, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t37, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][12][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA654Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-654 XX4Mix */  <role8, t7, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t19, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA655Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-655 XX4Mix */  <role8, t28, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t30, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA656Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-656 XX4Mix */  <role8, t17, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA657Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-657 XX4Mix */  <role8, t20, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA658Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-658 XX4Mix */  <role8, t40, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA659Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-659 XX4Mix */  <role8, t39, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t17, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA660Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-660 XX4Mix */  <role8, t13, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t8, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA661Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-661 XX4Mix */  <role8, t10, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t13, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA662Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-662 XX4Mix */  <role8, t37, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t29, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA663Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-663 XX4Mix */  <role8, t19, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA664Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-664 XX4Mix */  <role8, t24, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t30, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA665Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-665 XX4Mix */  <role8, t17, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t36, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA666Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-666 XX4Mix */  <role8, t31, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t39, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA667Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-667 XX4Mix */  <role8, t14, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t12, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA668Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-668 XX4Mix */  <role8, t3, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t34, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA669Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-669 XX4Mix */  <role8, t7, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t33, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA670Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-670 XX4Mix */  <role8, t25, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA671Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-671 XX4Mix */  <role8, t27, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t19, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA672Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-672 XX4Mix */  <role8, t20, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t28, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA673Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-673 XX4Mix */  <role8, t9, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t20, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA674Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-674 XX4Mix */  <role8, t38, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t35, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA675Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-675 XX4Mix */  <role8, t39, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA676Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-676 XX4Mix */  <role8, t22, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA677Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-677 XX4Mix */  <role8, t18, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA678Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-678 XX4Mix */  <role8, t26, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t27, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA679Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-679 XX4Mix */  <role8, t28, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t36, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA680Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-680 XX4Mix */  <role8, t12, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t32, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA681Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-681 XX4Mix */  <role8, t24, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t37, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA682Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-682 XX4Mix */  <role8, t21, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t38, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA683Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-683 XX4Mix */  <role8, t3, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA684Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-684 XX4Mix */  <role8, t3, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA685Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-685 XX4Mix */  <role8, t7, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t22, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA686Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-686 XX4Mix */  <role8, t14, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA687Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-687 XX4Mix */  <role8, t12, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t29, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA688Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-688 XX4Mix */  <role8, t40, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t25, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA689Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-689 XX4Mix */  <role8, t23, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t39, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA690Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-690 XX4Mix */  <role8, t30, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t40, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][2][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA691Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-691 XX4Mix */  <role24, t4, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t17, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA692Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-692 XX4Mix */  <role24, t26, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t20, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA693Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-693 XX4Mix */  <role24, t17, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t25, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA694Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-694 XX4Mix */  <role24, t15, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t23, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA695Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-695 XX4Mix */  <role24, t27, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t22, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA696Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-696 XX4Mix */  <role24, t31, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t8, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA697Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-697 XX4Mix */  <role24, t32, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t15, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA698Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-698 XX4Mix */  <role24, t28, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t24, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA699Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-699 XX4Mix */  <role24, t34, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t26, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA700Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-700 XX4Mix */  <role24, t14, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t27, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA701Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-701 XX4Mix */  <role24, t18, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t29, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA702Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-702 XX4Mix */  <role24, t11, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t31, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA703Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-703 XX4Mix */  <role24, t10, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t32, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA704Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-704 XX4Mix */  <role6, t28, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t31, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA705Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-705 XX4Mix */  <role6, t13, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t24, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA706Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-706 XX4Mix */  <role6, t14, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t40, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA707Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-707 XX4Mix */  <role6, t33, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t30, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA708Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-708 XX4Mix */  <role6, t11, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t22, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA709Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-709 XX4Mix */  <role6, t27, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t11, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA710Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-710 XX4Mix */  <role6, t30, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t29, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA711Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-711 XX4Mix */  <role6, t34, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t8, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA712Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-712 XX4Mix */  <role6, t21, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t25, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA713Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-713 XX4Mix */  <role6, t19, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t33, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA714Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-714 XX4Mix */  <role6, t35, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t5, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanRevoke Rules
	function fireCR1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-1 TA1Tru */  <TRUE, t16, TRUE, t33, role30>
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-2 TA1Tru */  <TRUE, t12, TRUE, t7, role3>
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-3 XX1Tru */  <role6, t17, TRUE, t7, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][10][0] = false;
	}

	function fireCR4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-4 XX1Tru */  <role6, t37, TRUE, t37, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][10][0] = false;
	}

	function fireCR5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-5 XX1Tru */  <role6, t34, TRUE, t31, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][10][0] = false;
	}

	function fireCR6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-6 XX1Tru */  <role8, t3, TRUE, t18, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-7 XX1Tru */  <role8, t5, TRUE, t14, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-8 XX1Tru */  <role8, t36, TRUE, t17, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-9 XX1Tru */  <role8, t18, TRUE, t20, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-10 XX1Tru */  <role8, t15, TRUE, t3, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-11 XX1Tru */  <role8, t12, TRUE, t39, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-12 XX1Tru */  <role22, t40, TRUE, t38, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-13 XX1Tru */  <role22, t24, TRUE, t34, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-14 XX1Tru */  <role22, t10, TRUE, t18, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanEnable Rules
	function fireCE1Rule() public {
		// /* CE-1 TA1Tru */  <TRUE, t18, TRUE, t4, role17>
		role_enablement[17][0] = true;
	}

	function fireCE2Rule() public {
		// /* CE-2 TA1Tru */  <TRUE, t26, TRUE, t34, role18>
		role_enablement[16][0] = true;
	}

	function fireCE3Rule() public {
		// /* CE-3 TA1Tru */  <TRUE, t21, TRUE, t8, role18>
		role_enablement[16][0] = true;
	}

	function fireCE4Rule() public {
		// /* CE-4 TA1Tru */  <TRUE, t34, TRUE, t19, role33>
		role_enablement[8][0] = true;
	}

	function fireCE5Rule() public {
		// /* CE-5 TA1Tru */  <TRUE, t4, TRUE, t4, role22>
		role_enablement[1][0] = true;
	}

	function fireCE6Rule() public {
		// /* CE-6 TA1Tru */  <TRUE, t21, TRUE, t27, role16>
		role_enablement[18][0] = true;
	}

	function fireCE7Rule() public {
		// /* CE-7 TA1Tru */  <TRUE, t15, TRUE, t33, role25>
		role_enablement[29][0] = true;
	}

	function fireCE8Rule() public {
		// /* CE-8 TA1Tru */  <TRUE, t19, TRUE, t27, role7>
		role_enablement[6][0] = true;
	}

	function fireCE9Rule() public {
		// /* CE-9 TA1Tru */  <TRUE, t23, TRUE, t18, role23>
		role_enablement[22][0] = true;
	}

	function fireCE10Rule() public {
		// /* CE-10 TA1Tru */  <TRUE, t37, TRUE, t1, role23>
		role_enablement[22][0] = true;
	}

	function fireCE11Rule() public {
		// /* CE-11 TA1Tru */  <TRUE, t27, TRUE, t35, role23>
		role_enablement[22][0] = true;
	}

	function fireCE12Rule() public {
		// /* CE-12 TA1Tru */  <TRUE, t12, TRUE, t31, role3>
		role_enablement[15][0] = true;
	}

	function fireCE13Rule() public {
		// /* CE-13 TA1Tru */  <TRUE, t30, TRUE, t40, role23>
		role_enablement[22][0] = true;
	}

	function fireCE14Rule() public {
		// /* CE-14 XA3Pos */  <TRUE, t18, role23, t24, role10>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE15Rule() public {
		// /* CE-15 XA3Pos */  <TRUE, t20, role28, t22, role10>
		require(role_enablement[26][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE16Rule() public {
		// /* CE-16 XA3Pos */  <TRUE, t11, role23, t6, role11>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE17Rule() public {
		// /* CE-17 XA3Pos */  <TRUE, t12, role22, t23, role25>
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE18Rule() public {
		// /* CE-18 XA3Pos */  <TRUE, t2, role22, t22, role25>
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE19Rule() public {
		// /* CE-19 XA3Pos */  <TRUE, t27, role16, t9, role26>
		require(role_enablement[18][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[28][0] = true;
	}

	function fireCE20Rule() public {
		// /* CE-20 XA3Pos */  <TRUE, t23, role16, t30, role26>
		require(role_enablement[18][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[28][0] = true;
	}

	function fireCE21Rule() public {
		// /* CE-21 XA3Pos */  <TRUE, t3, role3, t11, role13>
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE22Rule() public {
		// /* CE-22 XA3Pos */  <TRUE, t18, role4, t4, role13>
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE23Rule() public {
		// /* CE-23 XA3Pos */  <TRUE, t5, role6, t37, role13>
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE24Rule() public {
		// /* CE-24 XA3Pos */  <TRUE, t13, role7, t25, role13>
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE25Rule() public {
		// /* CE-25 XA3Pos */  <TRUE, t8, role9, t15, role13>
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE26Rule() public {
		// /* CE-26 XA3Pos */  <TRUE, t19, role9, t39, role13>
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE27Rule() public {
		// /* CE-27 XA3Pos */  <TRUE, t29, role24, t25, role13>
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE28Rule() public {
		// /* CE-28 XA3Pos */  <TRUE, t27, role28, t1, role13>
		require(role_enablement[26][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE29Rule() public {
		// /* CE-29 XA4Mix */  <TRUE, t25, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE30Rule() public {
		// /* CE-30 XX1Tru */  <role8, t15, TRUE, t3, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = true;
	}

	function fireCE31Rule() public {
		// /* CE-31 XX1Tru */  <role8, t19, TRUE, t7, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = true;
	}

	function fireCE32Rule() public {
		// /* CE-32 XX1Tru */  <role8, t24, TRUE, t1, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[17][0] = true;
	}

	function fireCE33Rule() public {
		// /* CE-33 XX1Tru */  <role8, t6, TRUE, t10, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[18][0] = true;
	}

	function fireCE34Rule() public {
		// /* CE-34 XX1Tru */  <role8, t27, TRUE, t31, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE35Rule() public {
		// /* CE-35 XX1Tru */  <role8, t40, TRUE, t27, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE36Rule() public {
		// /* CE-36 XX1Tru */  <role19, t11, TRUE, t16, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = true;
	}

	function fireCE37Rule() public {
		// /* CE-37 XX1Tru */  <role19, t18, TRUE, t4, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = true;
	}

	function fireCE38Rule() public {
		// /* CE-38 XX1Tru */  <role19, t9, TRUE, t22, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = true;
	}

	function fireCE39Rule() public {
		// /* CE-39 XX1Tru */  <role19, t28, TRUE, t6, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = true;
	}

	function fireCE40Rule() public {
		// /* CE-40 XX1Tru */  <role12, t6, TRUE, t22, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[8][0] = true;
	}

	function fireCE41Rule() public {
		// /* CE-41 XX1Tru */  <role12, t8, TRUE, t4, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[8][0] = true;
	}

	function fireCE42Rule() public {
		// /* CE-42 XX1Tru */  <role7, t30, TRUE, t10, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[2][0] = true;
	}

	function fireCE43Rule() public {
		// /* CE-43 XX1Tru */  <role7, t17, TRUE, t34, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[2][0] = true;
	}

	function fireCE44Rule() public {
		// /* CE-44 XX1Tru */  <role7, t36, TRUE, t35, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[2][0] = true;
	}

	function fireCE45Rule() public {
		// /* CE-45 XX1Tru */  <role8, t13, TRUE, t7, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = true;
	}

	function fireCE46Rule() public {
		// /* CE-46 XX1Tru */  <role8, t24, TRUE, t39, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[4][0] = true;
	}

	function fireCE47Rule() public {
		// /* CE-47 XX1Tru */  <role8, t28, TRUE, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[11][0] = true;
	}

	function fireCE48Rule() public {
		// /* CE-48 XX1Tru */  <role8, t5, TRUE, t2, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = true;
	}

	function fireCE49Rule() public {
		// /* CE-49 XX1Tru */  <role8, t40, TRUE, t1, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = true;
	}

	function fireCE50Rule() public {
		// /* CE-50 XX1Tru */  <role8, t1, TRUE, t15, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = true;
	}

	function fireCE51Rule() public {
		// /* CE-51 XX1Tru */  <role8, t4, TRUE, t7, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = true;
	}

	function fireCE52Rule() public {
		// /* CE-52 XX1Tru */  <role8, t12, TRUE, t16, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = true;
	}

	function fireCE53Rule() public {
		// /* CE-53 XX1Tru */  <role8, t14, TRUE, t2, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = true;
	}

	function fireCE54Rule() public {
		// /* CE-54 XX1Tru */  <role8, t20, TRUE, t19, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = true;
	}

	function fireCE55Rule() public {
		// /* CE-55 XX1Tru */  <role22, t28, TRUE, t28, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE56Rule() public {
		// /* CE-56 XX1Tru */  <role22, t40, TRUE, t33, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE57Rule() public {
		// /* CE-57 XX1Tru */  <role22, t35, TRUE, t38, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE58Rule() public {
		// /* CE-58 XX1Tru */  <role22, t16, TRUE, t21, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[6][0] = true;
	}

	function fireCE59Rule() public {
		// /* CE-59 XX1Tru */  <role22, t10, TRUE, t18, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE60Rule() public {
		// /* CE-60 XX1Tru */  <role22, t9, TRUE, t21, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE61Rule() public {
		// /* CE-61 XX1Tru */  <role22, t13, TRUE, t15, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE62Rule() public {
		// /* CE-62 XX1Tru */  <role22, t8, TRUE, t6, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE63Rule() public {
		// /* CE-63 XX1Tru */  <role22, t30, TRUE, t17, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE64Rule() public {
		// /* CE-64 XX1Tru */  <role22, t19, TRUE, t16, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE65Rule() public {
		// /* CE-65 XX1Tru */  <role22, t5, TRUE, t1, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = true;
	}

	function fireCE66Rule() public {
		// /* CE-66 XX1Tru */  <role22, t5, TRUE, t30, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[22][0] = true;
	}

	function fireCE67Rule() public {
		// /* CE-67 XX1Tru */  <role22, t40, TRUE, t20, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = true;
	}

	function fireCE68Rule() public {
		// /* CE-68 XX1Tru */  <role22, t24, TRUE, t26, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = true;
	}

	function fireCE69Rule() public {
		// /* CE-69 XX1Tru */  <role22, t29, TRUE, t27, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE70Rule() public {
		// /* CE-70 XX1Tru */  <role22, t19, TRUE, t2, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE71Rule() public {
		// /* CE-71 XX1Tru */  <role22, t15, TRUE, t17, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE72Rule() public {
		// /* CE-72 XX1Tru */  <role22, t18, TRUE, t10, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE73Rule() public {
		// /* CE-73 XX1Tru */  <role22, t34, TRUE, t19, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE74Rule() public {
		// /* CE-74 XX1Tru */  <role22, t10, TRUE, t12, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE75Rule() public {
		// /* CE-75 XX1Tru */  <role6, t7, TRUE, t33, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[3][0] = true;
	}

	function fireCE76Rule() public {
		// /* CE-76 XX1Tru */  <role22, t6, TRUE, t21, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[22][0] = true;
	}

	function fireCE77Rule() public {
		// /* CE-77 XX1Tru */  <role22, t5, TRUE, t8, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE78Rule() public {
		// /* CE-78 XX1Tru */  <role22, t16, TRUE, t7, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[23][0] = true;
	}

	function fireCE79Rule() public {
		// /* CE-79 XX1Tru */  <role22, t39, TRUE, t7, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE80Rule() public {
		// /* CE-80 XX1Tru */  <role22, t22, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE81Rule() public {
		// /* CE-81 XX1Tru */  <role22, t28, TRUE, t30, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE82Rule() public {
		// /* CE-82 XX1Tru */  <role22, t26, TRUE, t32, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE83Rule() public {
		// /* CE-83 XX1Tru */  <role22, t27, TRUE, t10, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE84Rule() public {
		// /* CE-84 XX1Tru */  <role22, t13, TRUE, t25, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE85Rule() public {
		// /* CE-85 XX1Tru */  <role22, t40, TRUE, t11, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = true;
	}

	function fireCE86Rule() public {
		// /* CE-86 XX1Tru */  <role22, t11, TRUE, t24, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = true;
	}

	function fireCE87Rule() public {
		// /* CE-87 XX1Tru */  <role22, t34, TRUE, t29, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = true;
	}

	function fireCE88Rule() public {
		// /* CE-88 XX1Tru */  <role22, t30, TRUE, t36, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = true;
	}

	function fireCE89Rule() public {
		// /* CE-89 XX1Tru */  <role22, t14, TRUE, t34, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE90Rule() public {
		// /* CE-90 XX1Tru */  <role22, t32, TRUE, t31, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE91Rule() public {
		// /* CE-91 XX1Tru */  <role22, t33, TRUE, t35, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = true;
	}

	function fireCE92Rule() public {
		// /* CE-92 XX1Tru */  <role22, t2, TRUE, t10, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[6][0] = true;
	}

	function fireCE93Rule() public {
		// /* CE-93 XX3Pos */  <role8, t37, role23, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE94Rule() public {
		// /* CE-94 XX3Pos */  <role8, t22, role23, t17, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE95Rule() public {
		// /* CE-95 XX3Pos */  <role8, t7, role23, t21, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE96Rule() public {
		// /* CE-96 XX3Pos */  <role8, t1, role23, t5, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE97Rule() public {
		// /* CE-97 XX3Pos */  <role8, t8, role23, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE98Rule() public {
		// /* CE-98 XX3Pos */  <role8, t4, role28, t39, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[26][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = true;
	}

	function fireCE99Rule() public {
		// /* CE-99 XX3Pos */  <role8, t27, role3, t12, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE100Rule() public {
		// /* CE-100 XX3Pos */  <role8, t36, role4, t19, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE101Rule() public {
		// /* CE-101 XX3Pos */  <role8, t38, role6, t28, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE102Rule() public {
		// /* CE-102 XX3Pos */  <role8, t18, role6, t7, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE103Rule() public {
		// /* CE-103 XX3Pos */  <role8, t14, role6, t5, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE104Rule() public {
		// /* CE-104 XX3Pos */  <role8, t5, role6, t11, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE105Rule() public {
		// /* CE-105 XX3Pos */  <role8, t24, role23, t11, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE106Rule() public {
		// /* CE-106 XX3Pos */  <role8, t25, role23, t3, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE107Rule() public {
		// /* CE-107 XX3Pos */  <role8, t13, role8, t3, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE108Rule() public {
		// /* CE-108 XX3Pos */  <role8, t31, role8, t34, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE109Rule() public {
		// /* CE-109 XX3Pos */  <role8, t38, role12, t36, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE110Rule() public {
		// /* CE-110 XX3Pos */  <role8, t34, role12, t25, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE111Rule() public {
		// /* CE-111 XX3Pos */  <role8, t18, role12, t9, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE112Rule() public {
		// /* CE-112 XX3Pos */  <role8, t40, role12, t38, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE113Rule() public {
		// /* CE-113 XX3Pos */  <role8, t16, role12, t26, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE114Rule() public {
		// /* CE-114 XX3Pos */  <role8, t17, role3, t39, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE115Rule() public {
		// /* CE-115 XX3Pos */  <role8, t27, role3, t1, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE116Rule() public {
		// /* CE-116 XX3Pos */  <role8, t21, role22, t31, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE117Rule() public {
		// /* CE-117 XX3Pos */  <role8, t33, role22, t32, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE118Rule() public {
		// /* CE-118 XX3Pos */  <role8, t10, role22, t26, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE119Rule() public {
		// /* CE-119 XX3Pos */  <role8, t37, role21, t18, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE120Rule() public {
		// /* CE-120 XX3Pos */  <role8, t21, role24, t18, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE121Rule() public {
		// /* CE-121 XX3Pos */  <role8, t29, role24, t8, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE122Rule() public {
		// /* CE-122 XX3Pos */  <role8, t8, role24, t2, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE123Rule() public {
		// /* CE-123 XX3Pos */  <role8, t10, role23, t7, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE124Rule() public {
		// /* CE-124 XX3Pos */  <role8, t1, role23, t8, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE125Rule() public {
		// /* CE-125 XX3Pos */  <role8, t13, role8, t38, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE126Rule() public {
		// /* CE-126 XX3Pos */  <role8, t28, role8, t28, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE127Rule() public {
		// /* CE-127 XX3Pos */  <role8, t23, role8, t40, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE128Rule() public {
		// /* CE-128 XX3Pos */  <role8, t1, role12, t20, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = true;
	}

	function fireCE129Rule() public {
		// /* CE-129 XX3Pos */  <role8, t33, role16, t23, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[18][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[28][0] = true;
	}

	function fireCE130Rule() public {
		// /* CE-130 XX3Pos */  <role8, t16, role16, t40, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[18][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[28][0] = true;
	}

	function fireCE131Rule() public {
		// /* CE-131 XX3Pos */  <role22, t28, role2, t7, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[2][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE132Rule() public {
		// /* CE-132 XX3Pos */  <role22, t31, role2, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[2][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE133Rule() public {
		// /* CE-133 XX3Pos */  <role22, t40, role2, t18, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[2][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE134Rule() public {
		// /* CE-134 XX3Pos */  <role22, t12, role4, t33, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE135Rule() public {
		// /* CE-135 XX3Pos */  <role22, t19, role4, t9, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE136Rule() public {
		// /* CE-136 XX3Pos */  <role22, t7, role6, t33, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE137Rule() public {
		// /* CE-137 XX3Pos */  <role22, t38, role7, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE138Rule() public {
		// /* CE-138 XX3Pos */  <role22, t34, role7, t38, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE139Rule() public {
		// /* CE-139 XX3Pos */  <role22, t30, role7, t26, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE140Rule() public {
		// /* CE-140 XX3Pos */  <role22, t24, role7, t6, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE141Rule() public {
		// /* CE-141 XX3Pos */  <role22, t20, role7, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE142Rule() public {
		// /* CE-142 XX3Pos */  <role22, t12, role7, t1, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE143Rule() public {
		// /* CE-143 XX3Pos */  <role22, t40, role7, t37, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE144Rule() public {
		// /* CE-144 XX3Pos */  <role22, t34, role8, t31, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE145Rule() public {
		// /* CE-145 XX3Pos */  <role22, t33, role9, t25, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE146Rule() public {
		// /* CE-146 XX3Pos */  <role22, t27, role9, t7, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE147Rule() public {
		// /* CE-147 XX3Pos */  <role22, t29, role9, t30, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE148Rule() public {
		// /* CE-148 XX3Pos */  <role22, t35, role9, t6, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE149Rule() public {
		// /* CE-149 XX3Pos */  <role22, t30, role9, t24, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE150Rule() public {
		// /* CE-150 XX3Pos */  <role22, t6, role12, t27, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE151Rule() public {
		// /* CE-151 XX3Pos */  <role22, t36, role22, t13, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE152Rule() public {
		// /* CE-152 XX3Pos */  <role22, t24, role22, t33, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE153Rule() public {
		// /* CE-153 XX3Pos */  <role22, t25, role22, t39, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE154Rule() public {
		// /* CE-154 XX3Pos */  <role22, t27, role21, t11, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE155Rule() public {
		// /* CE-155 XX3Pos */  <role22, t20, role24, t17, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE156Rule() public {
		// /* CE-156 XX3Pos */  <role22, t40, role24, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = true;
	}

	function fireCE157Rule() public {
		// /* CE-157 XX4Mix */  <role22, t20, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t13, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[7][0] = true;
	}

	function fireCE158Rule() public {
		// /* CE-158 XX4Mix */  <role24, t24, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t3, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE159Rule() public {
		// /* CE-159 XX4Mix */  <role24, t4, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t17, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE160Rule() public {
		// /* CE-160 XX4Mix */  <role24, t26, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t20, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE161Rule() public {
		// /* CE-161 XX4Mix */  <role24, t15, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t23, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE162Rule() public {
		// /* CE-162 XX4Mix */  <role24, t31, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t8, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE163Rule() public {
		// /* CE-163 XX4Mix */  <role24, t32, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t15, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE164Rule() public {
		// /* CE-164 XX4Mix */  <role24, t28, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t24, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE165Rule() public {
		// /* CE-165 XX4Mix */  <role24, t10, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t32, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE166Rule() public {
		// /* CE-166 XX4Mix */  <role6, t14, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t40, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE167Rule() public {
		// /* CE-167 XX4Mix */  <role6, t21, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t25, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE168Rule() public {
		// /* CE-168 XX4Mix */  <role6, t19, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t33, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanDisable Rules
	function fireCD1Rule() public {
		// /* CD-1 TA1Tru */  <TRUE, t23, TRUE, t38, role17>
		role_enablement[17][0] = false;
	}

	function fireCD2Rule() public {
		// /* CD-2 TA1Tru */  <TRUE, t32, TRUE, t1, role20>
		role_enablement[24][0] = false;
	}

	function fireCD3Rule() public {
		// /* CD-3 TA1Tru */  <TRUE, t1, TRUE, t5, role20>
		role_enablement[24][0] = false;
	}

	function fireCD4Rule() public {
		// /* CD-4 TA1Tru */  <TRUE, t28, TRUE, t22, role5>
		role_enablement[14][0] = false;
	}

	function fireCD5Rule() public {
		// /* CD-5 TA1Tru */  <TRUE, t40, TRUE, t34, role11>
		role_enablement[9][0] = false;
	}

	function fireCD6Rule() public {
		// /* CD-6 TA1Tru */  <TRUE, t31, TRUE, t31, role26>
		role_enablement[28][0] = false;
	}

	function fireCD7Rule() public {
		// /* CD-7 TA1Tru */  <TRUE, t25, TRUE, t34, role21>
		role_enablement[23][0] = false;
	}

	function fireCD8Rule() public {
		// /* CD-8 TA1Tru */  <TRUE, t16, TRUE, t24, role3>
		role_enablement[15][0] = false;
	}

	function fireCD9Rule() public {
		// /* CD-9 TA1Tru */  <TRUE, t13, TRUE, t35, role8>
		role_enablement[3][0] = false;
	}

	function fireCD10Rule() public {
		// /* CD-10 TA1Tru */  <TRUE, t36, TRUE, t33, role23>
		role_enablement[22][0] = false;
	}

	function fireCD11Rule() public {
		// /* CD-11 TA1Tru */  <TRUE, t4, TRUE, t16, role3>
		role_enablement[15][0] = false;
	}

	function fireCD12Rule() public {
		// /* CD-12 TA1Tru */  <TRUE, t36, TRUE, t11, role3>
		role_enablement[15][0] = false;
	}

	function fireCD13Rule() public {
		// /* CD-13 TA1Tru */  <TRUE, t2, TRUE, t12, role4>
		role_enablement[12][0] = false;
	}

	function fireCD14Rule() public {
		// /* CD-14 XA3Pos */  <TRUE, t11, role23, t33, role10>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = false;
	}

	function fireCD15Rule() public {
		// /* CD-15 XA3Pos */  <TRUE, t17, role23, t19, role10>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = false;
	}

	function fireCD16Rule() public {
		// /* CD-16 XA3Pos */  <TRUE, t30, role22, t30, role11>
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD17Rule() public {
		// /* CD-17 XA3Pos */  <TRUE, t6, role6, t13, role11>
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD18Rule() public {
		// /* CD-18 XA3Pos */  <TRUE, t26, role22, t8, role25>
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD19Rule() public {
		// /* CD-19 XA3Pos */  <TRUE, t3, role23, t23, role25>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD20Rule() public {
		// /* CD-20 XA3Pos */  <TRUE, t17, role12, t1, role25>
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD21Rule() public {
		// /* CD-21 XA3Pos */  <TRUE, t39, role2, t24, role13>
		require(role_enablement[2][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD22Rule() public {
		// /* CD-22 XA3Pos */  <TRUE, t36, role7, t36, role13>
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD23Rule() public {
		// /* CD-23 XA3Pos */  <TRUE, t26, role7, t3, role13>
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD24Rule() public {
		// /* CD-24 XA3Pos */  <TRUE, t11, role8, t17, role13>
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD25Rule() public {
		// /* CD-25 XA4Mix */  <TRUE, t30, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t21, role6>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = false;
	}

	function fireCD26Rule() public {
		// /* CD-26 XA4Mix */  <TRUE, t26, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t10, role8>
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}

	function fireCD27Rule() public {
		// /* CD-27 XX1Tru */  <role8, t24, TRUE, t21, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = false;
	}

	function fireCD28Rule() public {
		// /* CD-28 XX1Tru */  <role8, t16, TRUE, t34, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[18][0] = false;
	}

	function fireCD29Rule() public {
		// /* CD-29 XX1Tru */  <role8, t13, TRUE, t12, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}

	function fireCD30Rule() public {
		// /* CD-30 XX1Tru */  <role8, t23, TRUE, t6, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}

	function fireCD31Rule() public {
		// /* CD-31 XX1Tru */  <role19, t4, TRUE, t2, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = false;
	}

	function fireCD32Rule() public {
		// /* CD-32 XX1Tru */  <role19, t37, TRUE, t39, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[24][0] = false;
	}

	function fireCD33Rule() public {
		// /* CD-33 XX1Tru */  <role6, t40, TRUE, t21, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[14][0] = false;
	}

	function fireCD34Rule() public {
		// /* CD-34 XX1Tru */  <role8, t17, TRUE, t17, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = false;
	}

	function fireCD35Rule() public {
		// /* CD-35 XX1Tru */  <role8, t24, TRUE, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = false;
	}

	function fireCD36Rule() public {
		// /* CD-36 XX1Tru */  <role8, t18, TRUE, t32, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = false;
	}

	function fireCD37Rule() public {
		// /* CD-37 XX1Tru */  <role8, t27, TRUE, t29, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[18][0] = false;
	}

	function fireCD38Rule() public {
		// /* CD-38 XX1Tru */  <role8, t3, TRUE, t36, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[9][0] = false;
	}

	function fireCD39Rule() public {
		// /* CD-39 XX1Tru */  <role8, t13, TRUE, t21, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[29][0] = false;
	}

	function fireCD40Rule() public {
		// /* CD-40 XX1Tru */  <role8, t21, TRUE, t20, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = false;
	}

	function fireCD41Rule() public {
		// /* CD-41 XX1Tru */  <role8, t23, TRUE, t15, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = false;
	}

	function fireCD42Rule() public {
		// /* CD-42 XX1Tru */  <role8, t26, TRUE, t5, role26>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = false;
	}

	function fireCD43Rule() public {
		// /* CD-43 XX1Tru */  <role22, t14, TRUE, t11, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = false;
	}

	function fireCD44Rule() public {
		// /* CD-44 XX1Tru */  <role22, t26, TRUE, t15, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[23][0] = false;
	}

	function fireCD45Rule() public {
		// /* CD-45 XX1Tru */  <role22, t29, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = false;
	}

	function fireCD46Rule() public {
		// /* CD-46 XX1Tru */  <role22, t23, TRUE, t14, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = false;
	}

	function fireCD47Rule() public {
		// /* CD-47 XX1Tru */  <role22, t26, TRUE, t35, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = false;
	}

	function fireCD48Rule() public {
		// /* CD-48 XX1Tru */  <role22, t14, TRUE, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = false;
	}

	function fireCD49Rule() public {
		// /* CD-49 XX1Tru */  <role22, t2, TRUE, t13, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = false;
	}

	function fireCD50Rule() public {
		// /* CD-50 XX1Tru */  <role24, t13, TRUE, t25, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[5][0] = false;
	}

	function fireCD51Rule() public {
		// /* CD-51 XX1Tru */  <role24, t4, TRUE, t26, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[5][0] = false;
	}

	function fireCD52Rule() public {
		// /* CD-52 XX1Tru */  <role22, t35, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = false;
	}

	function fireCD53Rule() public {
		// /* CD-53 XX1Tru */  <role22, t29, TRUE, t8, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = false;
	}

	function fireCD54Rule() public {
		// /* CD-54 XX1Tru */  <role22, t30, TRUE, t24, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = false;
	}

	function fireCD55Rule() public {
		// /* CD-55 XX1Tru */  <role22, t23, TRUE, t28, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = false;
	}

	function fireCD56Rule() public {
		// /* CD-56 XX1Tru */  <role22, t32, TRUE, t23, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[12][0] = false;
	}

	function fireCD57Rule() public {
		// /* CD-57 XX1Tru */  <role22, t21, TRUE, t8, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[26][0] = false;
	}

	function fireCD58Rule() public {
		// /* CD-58 XX3Pos */  <role8, t10, role23, t30, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = false;
	}

	function fireCD59Rule() public {
		// /* CD-59 XX3Pos */  <role8, t18, role28, t31, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[26][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[11][0] = false;
	}

	function fireCD60Rule() public {
		// /* CD-60 XX3Pos */  <role8, t12, role3, t23, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD61Rule() public {
		// /* CD-61 XX3Pos */  <role8, t17, role4, t3, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD62Rule() public {
		// /* CD-62 XX3Pos */  <role8, t33, role6, t31, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD63Rule() public {
		// /* CD-63 XX3Pos */  <role8, t34, role23, t40, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD64Rule() public {
		// /* CD-64 XX3Pos */  <role8, t4, role23, t37, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD65Rule() public {
		// /* CD-65 XX3Pos */  <role8, t39, role12, t1, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD66Rule() public {
		// /* CD-66 XX3Pos */  <role8, t32, role12, t18, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = false;
	}

	function fireCD67Rule() public {
		// /* CD-67 XX3Pos */  <role8, t27, role22, t29, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD68Rule() public {
		// /* CD-68 XX3Pos */  <role8, t11, role22, t36, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD69Rule() public {
		// /* CD-69 XX3Pos */  <role8, t22, role24, t3, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD70Rule() public {
		// /* CD-70 XX3Pos */  <role8, t11, role24, t26, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[7][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD71Rule() public {
		// /* CD-71 XX3Pos */  <role8, t20, role8, t37, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD72Rule() public {
		// /* CD-72 XX3Pos */  <role8, t14, role8, t39, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD73Rule() public {
		// /* CD-73 XX3Pos */  <role8, t20, role12, t3, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[29][0] = false;
	}

	function fireCD74Rule() public {
		// /* CD-74 XX3Pos */  <role22, t12, role3, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[15][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD75Rule() public {
		// /* CD-75 XX3Pos */  <role22, t20, role4, t11, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD76Rule() public {
		// /* CD-76 XX3Pos */  <role22, t21, role4, t31, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[12][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD77Rule() public {
		// /* CD-77 XX3Pos */  <role22, t3, role6, t20, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD78Rule() public {
		// /* CD-78 XX3Pos */  <role22, t34, role6, t25, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD79Rule() public {
		// /* CD-79 XX3Pos */  <role22, t4, role6, t36, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD80Rule() public {
		// /* CD-80 XX3Pos */  <role22, t8, role6, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD81Rule() public {
		// /* CD-81 XX3Pos */  <role22, t25, role6, t39, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD82Rule() public {
		// /* CD-82 XX3Pos */  <role22, t37, role6, t19, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD83Rule() public {
		// /* CD-83 XX3Pos */  <role22, t33, role7, t29, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[6][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD84Rule() public {
		// /* CD-84 XX3Pos */  <role22, t7, role8, t26, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD85Rule() public {
		// /* CD-85 XX3Pos */  <role22, t23, role8, t35, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD86Rule() public {
		// /* CD-86 XX3Pos */  <role22, t10, role9, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[30][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD87Rule() public {
		// /* CD-87 XX3Pos */  <role22, t4, role12, t34, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD88Rule() public {
		// /* CD-88 XX3Pos */  <role22, t19, role22, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD89Rule() public {
		// /* CD-89 XX3Pos */  <role22, t16, role22, t14, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD90Rule() public {
		// /* CD-90 XX3Pos */  <role22, t26, role22, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[1][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD91Rule() public {
		// /* CD-91 XX3Pos */  <role22, t11, role21, t10, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD92Rule() public {
		// /* CD-92 XX3Pos */  <role22, t5, role23, t18, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD93Rule() public {
		// /* CD-93 XX3Pos */  <role22, t6, role28, t16, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[26][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[21][0] = false;
	}

	function fireCD94Rule() public {
		// /* CD-94 XX4Mix */  <role22, t23, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t12, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[7][0] = false;
	}

	function fireCD95Rule() public {
		// /* CD-95 XX4Mix */  <role24, t16, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t30, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = false;
	}

	function fireCD96Rule() public {
		// /* CD-96 XX4Mix */  <role24, t14, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t27, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = false;
	}

	function fireCD97Rule() public {
		// /* CD-97 XX4Mix */  <role24, t18, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t29, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = false;
	}

	function fireCD98Rule() public {
		// /* CD-98 XX4Mix */  <role6, t34, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t8, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[22][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}


	//////////////////////////////////////////////////////////
}