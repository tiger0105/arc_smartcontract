pragma solidity ^0.4.0;

contract AGTUniv03 {
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
		require(trbac_state[msg.sender][29][0] == true, "User does not satisfy the Safety Query");
		msg.sender.transfer(amount);
	}

	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanAssign Rules
	function fireCA1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-1 TA1Tru */  <TRUE, t1, TRUE, t6, role23>
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-2 TA1Tru */  <TRUE, t5, TRUE, t3, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-3 TA1Tru */  <TRUE, t10, TRUE, t1, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-4 TA1Tru */  <TRUE, t7, TRUE, t7, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-5 TA1Tru */  <TRUE, t4, TRUE, t6, role21>
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-6 TA1Tru */  <TRUE, t8, TRUE, t4, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-7 TA1Tru */  <TRUE, t4, TRUE, t9, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-8 TA1Tru */  <TRUE, t2, TRUE, t9, role23>
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-9 TA1Tru */  <TRUE, t10, TRUE, t4, role28>
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-10 TA1Tru */  <TRUE, t3, TRUE, t2, role7>
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-11 TA1Tru */  <TRUE, t7, TRUE, t9, role21>
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-12 TA1Tru */  <TRUE, t3, TRUE, t8, role21>
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-13 TA1Tru */  <TRUE, t6, TRUE, t3, role3>
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-14 TA2Neg */  <TRUE, t2, NOT ~ role14, t1, role32>
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-15 TA2Neg */  <TRUE, t5, NOT ~ role14, t4, role32>
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-16 XA3Pos */  <TRUE, t5, role6 & role8, t7, role34>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-17 XA3Pos */  <TRUE, t2, role6 & role8, t2, role34>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-18 XA3Pos */  <TRUE, t9, role14, t3, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-19 XA3Pos */  <TRUE, t8, role14, t2, role17>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-20 XA3Pos */  <TRUE, t7, role29, t2, role27>
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-21 XA3Pos */  <TRUE, t9, role29, t4, role27>
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-22 XA3Pos */  <TRUE, t1, role29, t5, role27>
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-23 XA3Pos */  <TRUE, t3, role14, t5, role27>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-24 XA3Pos */  <TRUE, t4, role32, t9, role27>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-25 XA3Pos */  <TRUE, t2, role32, t10, role27>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-26 XA3Pos */  <TRUE, t6, role32, t2, role27>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-27 XA3Pos */  <TRUE, t3, role32, t7, role20>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-28 XA3Pos */  <TRUE, t7, role14, t1, role33>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-29 XA3Pos */  <TRUE, t3, role24, t10, role5>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-30 XA3Pos */  <TRUE, t2, role3, t4, role16>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-31 XA3Pos */  <TRUE, t1, role4, t5, role16>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-32 XA3Pos */  <TRUE, t4, role22, t3, role16>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-33 XA3Pos */  <TRUE, t5, role6, t7, role16>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-34 XA3Pos */  <TRUE, t1, role24, t10, role16>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-35 XA3Pos */  <TRUE, t2, role24, t8, role16>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-36 XA3Pos */  <TRUE, t3, role24, t3, role16>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-37 XA3Pos */  <TRUE, t7, role12, t4, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-38 XA3Pos */  <TRUE, t2, role12, t3, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-39 XA3Pos */  <TRUE, t5, role3, t8, role19>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-40 XA3Pos */  <TRUE, t9, role3, t6, role19>
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-41 XA3Pos */  <TRUE, t5, role4, t6, role19>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-42 XA3Pos */  <TRUE, t4, role21, t8, role19>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-43 XA3Pos */  <TRUE, t3, role21, t2, role19>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-44 XA3Pos */  <TRUE, t7, role6, t3, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-45 XA3Pos */  <TRUE, t6, role6, t7, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-46 XA3Pos */  <TRUE, t8, role6, t5, role19>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-47 XA3Pos */  <TRUE, t3, role8, t7, role19>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-48 XA3Pos */  <TRUE, t6, role21, t10, role10>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-49 XA3Pos */  <TRUE, t2, role24, t10, role10>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-50 XA3Pos */  <TRUE, t8, role23, t8, role10>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-51 XA3Pos */  <TRUE, t6, role23, t4, role10>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-52 XA4Mix */  <TRUE, t3, role22 & NOT ~ role15, t10, role2>
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-53 XA4Mix */  <TRUE, t8, role24 & NOT ~ role15, t10, role2>
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-54 XA4Mix */  <TRUE, t3, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-55 XA4Mix */  <TRUE, t9, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-56 XA4Mix */  <TRUE, t3, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-57 XA4Mix */  <TRUE, t9, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-58 XA4Mix */  <TRUE, t5, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t10, role15>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-59 XA4Mix */  <TRUE, t4, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-60 XA4Mix */  <TRUE, t6, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t1, role24>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-61 XA4Mix */  <TRUE, t1, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t6, role6>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-62 XA4Mix */  <TRUE, t5, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t9, role8>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-63 XA4Mix */  <TRUE, t10, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t1, role8>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-64 XA4Mix */  <TRUE, t8, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t3, role8>
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-65 XX1Tru */  <role22, t9, TRUE, t1, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-66 XX1Tru */  <role22, t3, TRUE, t3, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-67 XX1Tru */  <role22, t5, TRUE, t5, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-68 XX1Tru */  <role22, t8, TRUE, t8, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-69 XX1Tru */  <role22, t2, TRUE, t9, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-70 XX1Tru */  <role22, t6, TRUE, t7, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-71 XX1Tru */  <role22, t4, TRUE, t4, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-72 XX1Tru */  <role22, t7, TRUE, t10, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-73 XX1Tru */  <role22, t10, TRUE, t4, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-74 XX1Tru */  <role22, t4, TRUE, t5, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-75 XX1Tru */  <role22, t1, TRUE, t10, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-76 XX1Tru */  <role22, t3, TRUE, t9, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-77 XX1Tru */  <role22, t2, TRUE, t6, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-78 XX1Tru */  <role22, t6, TRUE, t2, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-79 XX1Tru */  <role22, t9, TRUE, t4, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-80 XX1Tru */  <role22, t3, TRUE, t1, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-81 XX1Tru */  <role22, t2, TRUE, t10, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-82 XX1Tru */  <role22, t6, TRUE, t3, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-83 XX1Tru */  <role22, t7, TRUE, t5, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-84 XX1Tru */  <role22, t10, TRUE, t7, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-85 XX1Tru */  <role22, t1, TRUE, t8, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-86 XX1Tru */  <role22, t5, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-87 XX1Tru */  <role22, t4, TRUE, t3, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-88 XX1Tru */  <role22, t3, TRUE, t10, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-89 XX1Tru */  <role22, t4, TRUE, t8, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-90 XX1Tru */  <role22, t5, TRUE, t5, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-91 XX1Tru */  <role22, t8, TRUE, t6, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-92 XX1Tru */  <role22, t3, TRUE, t2, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-93 XX1Tru */  <role22, t8, TRUE, t3, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-94 XX1Tru */  <role22, t4, TRUE, t9, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-95 XX1Tru */  <role22, t6, TRUE, t1, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-96 XX1Tru */  <role22, t5, TRUE, t7, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-97 XX1Tru */  <role22, t7, TRUE, t6, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-98 XX1Tru */  <role22, t9, TRUE, t10, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-99 XX1Tru */  <role22, t1, TRUE, t8, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-100 XX1Tru */  <role22, t2, TRUE, t5, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-101 XX1Tru */  <role22, t9, TRUE, t8, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-102 XX1Tru */  <role22, t4, TRUE, t9, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-103 XX1Tru */  <role22, t8, TRUE, t1, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-104 XX1Tru */  <role22, t7, TRUE, t4, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-105 XX1Tru */  <role22, t5, TRUE, t10, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-106 XX1Tru */  <role22, t5, TRUE, t1, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-107 XX1Tru */  <role22, t8, TRUE, t10, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-108 XX1Tru */  <role22, t9, TRUE, t6, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-109 XX1Tru */  <role22, t6, TRUE, t3, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-110 XX1Tru */  <role22, t2, TRUE, t7, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-111 XX1Tru */  <role22, t4, TRUE, t4, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-112 XX1Tru */  <role22, t10, TRUE, t5, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-113 XX1Tru */  <role22, t1, TRUE, t2, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-114 XX1Tru */  <role22, t4, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-115 XX1Tru */  <role22, t10, TRUE, t7, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-116 XX1Tru */  <role22, t2, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-117 XX1Tru */  <role22, t1, TRUE, t5, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-118 XX1Tru */  <role22, t3, TRUE, t4, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-119 XX1Tru */  <role22, t7, TRUE, t8, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-120 XX1Tru */  <role22, t5, TRUE, t1, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-121 XX1Tru */  <role22, t3, TRUE, t7, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-122 XX1Tru */  <role22, t1, TRUE, t3, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = true;
	}

	function fireCA123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-123 XX2Neg */  <role2, t6, NOT ~ role14, t2, role32>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-124 XX2Neg */  <role2, t7, NOT ~ role14, t3, role32>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][13][0] = true;
	}

	function fireCA125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-125 XX2Neg */  <role15, t1, NOT ~ role32, t2, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-126 XX2Neg */  <role15, t9, NOT ~ role32, t3, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-127 XX2Neg */  <role15, t6, NOT ~ role32, t9, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-128 XX2Neg */  <role15, t2, NOT ~ role32, t4, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-129 XX2Neg */  <role15, t7, NOT ~ role32, t5, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-130 XX2Neg */  <role15, t8, NOT ~ role32, t1, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-131 XX2Neg */  <role15, t4, NOT ~ role32, t6, role14>
		require(trbac_state[msg.sender][8][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][22][0] = true;
	}

	function fireCA132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-132 XX3Pos */  <role1, t8, role6 & role8, t9, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-133 XX3Pos */  <role1, t1, role6 & role8, t10, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-134 XX3Pos */  <role1, t10, role6 & role8, t8, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-135 XX3Pos */  <role1, t7, role6 & role8, t4, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA136Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-136 XX3Pos */  <role1, t9, role6 & role8, t1, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA137Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-137 XX3Pos */  <role1, t3, role6 & role8, t3, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][10][0] = true;
	}

	function fireCA138Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-138 XX3Pos */  <role22, t16, role7, t9, role26>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}

	function fireCA139Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-139 XX3Pos */  <role8, t2, role14, t1, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA140Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-140 XX3Pos */  <role8, t3, role14, t4, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA141Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-141 XX3Pos */  <role8, t3, role14, t10, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA142Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-142 XX3Pos */  <role8, t10, role14, t7, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA143Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-143 XX3Pos */  <role8, t1, role14, t4, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA144Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-144 XX3Pos */  <role8, t2, role17, t6, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA145Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-145 XX3Pos */  <role8, t9, role17, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA146Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-146 XX3Pos */  <role8, t8, role17, t3, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][20][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA147Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-147 XX3Pos */  <role8, t4, role14, t8, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA148Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-148 XX3Pos */  <role8, t2, role14, t9, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA149Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-149 XX3Pos */  <role8, t8, role32, t1, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA150Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-150 XX3Pos */  <role8, t9, role32, t4, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA151Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-151 XX3Pos */  <role8, t10, role32, t8, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA152Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-152 XX3Pos */  <role8, t2, role32, t6, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA153Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-153 XX3Pos */  <role8, t1, role32, t3, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA154Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-154 XX3Pos */  <role8, t3, role32, t5, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][19][0] = true;
	}

	function fireCA155Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-155 XX3Pos */  <role12, t2, role29, t1, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA156Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-156 XX3Pos */  <role12, t3, role29, t6, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA157Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-157 XX3Pos */  <role12, t4, role29, t7, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA158Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-158 XX3Pos */  <role12, t5, role29, t8, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA159Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-159 XX3Pos */  <role12, t6, role29, t9, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA160Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-160 XX3Pos */  <role12, t10, role29, t10, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA161Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-161 XX3Pos */  <role12, t8, role29, t3, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][26][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA162Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-162 XX3Pos */  <role12, t8, role14, t4, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA163Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-163 XX3Pos */  <role12, t10, role14, t7, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA164Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-164 XX3Pos */  <role12, t1, role14, t6, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA165Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-165 XX3Pos */  <role12, t9, role14, t10, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA166Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-166 XX3Pos */  <role12, t4, role14, t9, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA167Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-167 XX3Pos */  <role12, t5, role14, t1, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA168Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-168 XX3Pos */  <role12, t2, role14, t2, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA169Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-169 XX3Pos */  <role12, t6, role14, t8, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA170Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-170 XX3Pos */  <role12, t7, role14, t3, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA171Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-171 XX3Pos */  <role12, t1, role32, t6, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA172Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-172 XX3Pos */  <role12, t9, role32, t7, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA173Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-173 XX3Pos */  <role12, t3, role32, t4, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA174Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-174 XX3Pos */  <role12, t8, role32, t5, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA175Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-175 XX3Pos */  <role12, t10, role32, t8, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA176Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-176 XX3Pos */  <role12, t5, role32, t1, role27>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][28][0] = true;
	}

	function fireCA177Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-177 XX3Pos */  <role19, t6, role14, t7, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA178Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-178 XX3Pos */  <role19, t9, role14, t2, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA179Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-179 XX3Pos */  <role19, t1, role14, t9, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA180Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-180 XX3Pos */  <role19, t7, role14, t3, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA181Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-181 XX3Pos */  <role19, t5, role14, t8, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA182Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-182 XX3Pos */  <role19, t8, role14, t5, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA183Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-183 XX3Pos */  <role19, t10, role14, t10, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA184Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-184 XX3Pos */  <role19, t2, role14, t1, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA185Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-185 XX3Pos */  <role19, t3, role14, t4, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA186Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-186 XX3Pos */  <role19, t4, role14, t6, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA187Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-187 XX3Pos */  <role12, t5, role14, t8, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA188Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-188 XX3Pos */  <role12, t6, role14, t7, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA189Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-189 XX3Pos */  <role12, t4, role32, t6, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA190Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-190 XX3Pos */  <role12, t2, role32, t2, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][11][0] = true;
	}

	function fireCA191Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-191 XX3Pos */  <role6, t8, role2, t6, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA192Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-192 XX3Pos */  <role6, t3, role2, t10, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA193Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-193 XX3Pos */  <role6, t10, role2, t7, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA194Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-194 XX3Pos */  <role6, t5, role2, t3, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA195Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-195 XX3Pos */  <role6, t1, role2, t2, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA196Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-196 XX3Pos */  <role6, t4, role2, t8, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA197Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-197 XX3Pos */  <role6, t2, role2, t1, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA198Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-198 XX3Pos */  <role6, t7, role2, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA199Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-199 XX3Pos */  <role6, t8, role22, t1, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA200Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-200 XX3Pos */  <role6, t6, role22, t8, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA201Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-201 XX3Pos */  <role6, t9, role22, t7, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA202Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-202 XX3Pos */  <role6, t6, role24, t9, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA203Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-203 XX3Pos */  <role6, t5, role24, t3, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA204Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-204 XX3Pos */  <role6, t7, role24, t6, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA205Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-205 XX3Pos */  <role6, t2, role7, t3, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA206Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-206 XX3Pos */  <role6, t1, role7, t7, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA207Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-207 XX3Pos */  <role6, t4, role7, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA208Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-208 XX3Pos */  <role6, t7, role28, t5, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA209Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-209 XX3Pos */  <role8, t9, role3, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA210Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-210 XX3Pos */  <role8, t10, role3, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA211Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-211 XX3Pos */  <role8, t1, role3, t6, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA212Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-212 XX3Pos */  <role8, t4, role3, t7, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA213Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-213 XX3Pos */  <role8, t3, role22, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA214Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-214 XX3Pos */  <role8, t5, role22, t6, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA215Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-215 XX3Pos */  <role8, t6, role22, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA216Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-216 XX3Pos */  <role8, t9, role22, t7, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA217Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-217 XX3Pos */  <role8, t9, role21, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA218Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-218 XX3Pos */  <role8, t4, role21, t7, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA219Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-219 XX3Pos */  <role8, t10, role21, t9, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA220Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-220 XX3Pos */  <role8, t7, role21, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA221Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-221 XX3Pos */  <role8, t5, role21, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA222Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-222 XX3Pos */  <role8, t6, role21, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA223Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-223 XX3Pos */  <role8, t10, role6, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA224Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-224 XX3Pos */  <role8, t1, role6, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA225Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-225 XX3Pos */  <role8, t2, role6, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA226Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-226 XX3Pos */  <role8, t8, role24, t9, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA227Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-227 XX3Pos */  <role8, t9, role24, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA228Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-228 XX3Pos */  <role8, t10, role24, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA229Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-229 XX3Pos */  <role8, t6, role24, t4, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA230Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-230 XX3Pos */  <role8, t4, role24, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA231Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-231 XX3Pos */  <role8, t8, role23, t3, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA232Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-232 XX3Pos */  <role8, t6, role23, t8, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA233Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-233 XX3Pos */  <role8, t3, role23, t6, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA234Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-234 XX3Pos */  <role8, t4, role8, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA235Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-235 XX3Pos */  <role8, t8, role8, t3, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA236Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-236 XX3Pos */  <role8, t9, role8, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA237Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-237 XX3Pos */  <role8, t1, role12, t10, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA238Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-238 XX3Pos */  <role8, t5, role12, t9, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA239Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-239 XX3Pos */  <role8, t4, role12, t1, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA240Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-240 XX3Pos */  <role8, t3, role12, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA241Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-241 XX3Pos */  <role8, t6, role12, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA242Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-242 XX3Pos */  <role8, t2, role3, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA243Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-243 XX3Pos */  <role8, t4, role3, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA244Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-244 XX3Pos */  <role8, t1, role3, t1, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA245Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-245 XX3Pos */  <role8, t3, role3, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA246Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-246 XX3Pos */  <role8, t6, role3, t7, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA247Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-247 XX3Pos */  <role8, t8, role3, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA248Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-248 XX3Pos */  <role8, t7, role3, t5, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA249Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-249 XX3Pos */  <role8, t10, role3, t4, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA250Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-250 XX3Pos */  <role8, t1, role4, t8, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA251Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-251 XX3Pos */  <role8, t1, role22, t6, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA252Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-252 XX3Pos */  <role8, t5, role22, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA253Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-253 XX3Pos */  <role8, t7, role21, t5, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA254Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-254 XX3Pos */  <role8, t5, role21, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA255Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-255 XX3Pos */  <role8, t8, role21, t6, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA256Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-256 XX3Pos */  <role8, t9, role21, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA257Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-257 XX3Pos */  <role8, t10, role21, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA258Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-258 XX3Pos */  <role8, t1, role21, t7, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA259Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-259 XX3Pos */  <role8, t2, role21, t4, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA260Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-260 XX3Pos */  <role8, t6, role21, t1, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA261Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-261 XX3Pos */  <role8, t4, role6, t8, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA262Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-262 XX3Pos */  <role8, t3, role6, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA263Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-263 XX3Pos */  <role8, t10, role6, t4, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA264Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-264 XX3Pos */  <role8, t5, role6, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA265Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-265 XX3Pos */  <role8, t1, role6, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA266Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-266 XX3Pos */  <role8, t1, role24, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA267Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-267 XX3Pos */  <role8, t3, role23, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA268Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-268 XX3Pos */  <role8, t10, role8, t8, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA269Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-269 XX3Pos */  <role8, t1, role8, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA270Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-270 XX3Pos */  <role8, t9, role8, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA271Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-271 XX3Pos */  <role8, t2, role8, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA272Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-272 XX3Pos */  <role8, t2, role21, t1, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA273Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-273 XX3Pos */  <role8, t10, role21, t4, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA274Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-274 XX3Pos */  <role8, t8, role21, t3, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA275Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-275 XX3Pos */  <role8, t3, role24, t8, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA276Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-276 XX3Pos */  <role8, t1, role24, t9, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA277Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-277 XX3Pos */  <role8, t10, role24, t3, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA278Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-278 XX3Pos */  <role8, t9, role24, t1, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA279Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-279 XX3Pos */  <role8, t7, role24, t7, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA280Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-280 XX3Pos */  <role8, t8, role24, t6, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA281Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-281 XX3Pos */  <role8, t4, role24, t2, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA282Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-282 XX3Pos */  <role8, t9, role23, t5, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA283Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-283 XX3Pos */  <role8, t7, role23, t3, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA284Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-284 XX3Pos */  <role8, t1, role23, t6, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA285Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-285 XX3Pos */  <role8, t2, role23, t7, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA286Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-286 XX3Pos */  <role8, t10, role23, t10, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA287Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-287 XX3Pos */  <role8, t3, role23, t1, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][14][0] = true;
	}

	function fireCA288Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-288 XX4Mix */  <role7, t2, role22 & NOT ~ role15, t4, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA289Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-289 XX4Mix */  <role7, t5, role24 & NOT ~ role15, t3, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA290Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-290 XX4Mix */  <role7, t7, role24 & NOT ~ role15, t6, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA291Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-291 XX4Mix */  <role7, t10, role24 & NOT ~ role15, t5, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA292Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-292 XX4Mix */  <role7, t4, role24 & NOT ~ role15, t8, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA293Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-293 XX4Mix */  <role7, t6, role24 & NOT ~ role15, t9, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA294Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-294 XX4Mix */  <role7, t1, role24 & NOT ~ role15, t4, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA295Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-295 XX4Mix */  <role7, t9, role24 & NOT ~ role15, t1, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA296Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-296 XX4Mix */  <role7, t2, role24 & NOT ~ role15, t2, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA297Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-297 XX4Mix */  <role7, t3, role24 & NOT ~ role15, t7, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][9][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA298Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-298 XX4Mix */  <role7, t8, role7 & NOT ~ role15, t7, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA299Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-299 XX4Mix */  <role7, t9, role28 & NOT ~ role15, t2, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][8][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA300Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-300 XX4Mix */  <role8, t7, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][18][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA301Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-301 XX4Mix */  <role8, t4, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA302Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-302 XX4Mix */  <role8, t2, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t8, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][15][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA303Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-303 XX4Mix */  <role8, t1, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA304Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-304 XX4Mix */  <role8, t4, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t10, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA305Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-305 XX4Mix */  <role8, t2, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t8, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA306Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-306 XX4Mix */  <role8, t5, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA307Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-307 XX4Mix */  <role8, t10, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA308Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-308 XX4Mix */  <role8, t5, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA309Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-309 XX4Mix */  <role8, t8, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA310Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-310 XX4Mix */  <role8, t10, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA311Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-311 XX4Mix */  <role8, t1, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA312Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-312 XX4Mix */  <role8, t6, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA313Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-313 XX4Mix */  <role8, t9, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t8, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA314Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-314 XX4Mix */  <role8, t3, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t3, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA315Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-315 XX4Mix */  <role8, t7, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t9, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA316Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-316 XX4Mix */  <role8, t2, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t7, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][4][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA317Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-317 XX4Mix */  <role8, t10, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t10, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA318Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-318 XX4Mix */  <role8, t7, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA319Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-319 XX4Mix */  <role8, t4, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t6, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA320Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-320 XX4Mix */  <role22, t7, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t2, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA321Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-321 XX4Mix */  <role22, t9, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t4, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA322Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-322 XX4Mix */  <role22, t2, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t5, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][9][0] = true;
	}

	function fireCA323Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-323 XX4Mix */  <role24, t10, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t5, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA324Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-324 XX4Mix */  <role24, t6, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t10, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA325Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-325 XX4Mix */  <role24, t5, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA326Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-326 XX4Mix */  <role24, t3, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t1, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][4][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA327Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-327 XX4Mix */  <role6, t9, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t6, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA328Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-328 XX4Mix */  <role6, t4, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t7, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA329Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-329 XX4Mix */  <role6, t3, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t10, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA330Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-330 XX4Mix */  <role6, t7, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t2, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA331Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-331 XX4Mix */  <role6, t1, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t9, role26>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][23][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][9][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][29][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanRevoke Rules
	function fireCR1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-1 TA1Tru */  <TRUE, t2, TRUE, t9, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-2 TA1Tru */  <TRUE, t10, TRUE, t1, role30>
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-3 TA1Tru */  <TRUE, t8, TRUE, t3, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-4 TA1Tru */  <TRUE, t10, TRUE, t1, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-5 TA1Tru */  <TRUE, t2, TRUE, t7, role17>
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-6 TA1Tru */  <TRUE, t5, TRUE, t2, role14>
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-7 TA1Tru */  <TRUE, t3, TRUE, t8, role20>
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-8 TA1Tru */  <TRUE, t10, TRUE, t2, role20>
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-9 TA1Tru */  <TRUE, t4, TRUE, t9, role20>
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-10 TA1Tru */  <TRUE, t8, TRUE, t5, role33>
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-11 TA1Tru */  <TRUE, t1, TRUE, t7, role15>
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-12 TA1Tru */  <TRUE, t5, TRUE, t3, role16>
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-13 TA1Tru */  <TRUE, t4, TRUE, t4, role19>
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-14 TA1Tru */  <TRUE, t6, TRUE, t1, role10>
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-15 TA1Tru */  <TRUE, t4, TRUE, t6, role10>
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-16 TA1Tru */  <TRUE, t8, TRUE, t10, role10>
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-17 TA1Tru */  <TRUE, t3, TRUE, t1, role25>
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-18 TA1Tru */  <TRUE, t1, TRUE, t1, role26>
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-19 TA1Tru */  <TRUE, t7, TRUE, t9, role26>
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-20 TA1Tru */  <TRUE, t8, TRUE, t7, role3>
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-21 TA1Tru */  <TRUE, t8, TRUE, t4, role4>
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-22 TA1Tru */  <TRUE, t7, TRUE, t6, role4>
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-23 TA1Tru */  <TRUE, t2, TRUE, t4, role24>
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-24 TA1Tru */  <TRUE, t4, TRUE, t8, role24>
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-25 TA1Tru */  <TRUE, t4, TRUE, t3, role6>
		trbac_state[_targetUser][6][0] = false;
	}

	function fireCR26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-26 XX1Tru */  <role6, t9, TRUE, t6, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-27 XX1Tru */  <role6, t6, TRUE, t4, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-28 XX1Tru */  <role6, t2, TRUE, t5, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-29 XX1Tru */  <role6, t4, TRUE, t1, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-30 XX1Tru */  <role6, t7, TRUE, t7, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-31 XX1Tru */  <role6, t8, TRUE, t3, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-32 XX1Tru */  <role6, t10, TRUE, t8, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-33 XX1Tru */  <role8, t9, TRUE, t7, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-34 XX1Tru */  <role8, t5, TRUE, t3, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-35 XX1Tru */  <role8, t3, TRUE, t6, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-36 XX1Tru */  <role8, t8, TRUE, t8, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-37 XX1Tru */  <role8, t4, TRUE, t2, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-38 XX1Tru */  <role8, t6, TRUE, t10, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-39 XX1Tru */  <role8, t1, TRUE, t2, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-40 XX1Tru */  <role8, t3, TRUE, t4, role17>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-41 XX1Tru */  <role8, t9, TRUE, t7, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-42 XX1Tru */  <role8, t5, TRUE, t9, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-43 XX1Tru */  <role8, t4, TRUE, t3, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-44 XX1Tru */  <role8, t9, TRUE, t4, role18>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-45 XX1Tru */  <role6, t6, TRUE, t9, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-46 XX1Tru */  <role6, t3, TRUE, t4, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-47 XX1Tru */  <role6, t1, TRUE, t7, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-48 XX1Tru */  <role6, t9, TRUE, t1, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-49 XX1Tru */  <role6, t4, TRUE, t6, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-50 XX1Tru */  <role6, t7, TRUE, t5, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-51 XX1Tru */  <role6, t8, TRUE, t8, role14>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-52 XX1Tru */  <role19, t9, TRUE, t7, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-53 XX1Tru */  <role19, t2, TRUE, t3, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-54 XX1Tru */  <role19, t8, TRUE, t5, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-55 XX1Tru */  <role19, t7, TRUE, t6, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-56 XX1Tru */  <role19, t6, TRUE, t1, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-57 XX1Tru */  <role19, t1, TRUE, t4, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-58 XX1Tru */  <role19, t5, TRUE, t10, role20>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = false;
	}

	function fireCR59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-59 XX1Tru */  <role12, t5, TRUE, t2, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-60 XX1Tru */  <role12, t1, TRUE, t1, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-61 XX1Tru */  <role12, t2, TRUE, t6, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-62 XX1Tru */  <role12, t6, TRUE, t7, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-63 XX1Tru */  <role6, t1, TRUE, t4, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-64 XX1Tru */  <role6, t4, TRUE, t9, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-65 XX1Tru */  <role6, t2, TRUE, t3, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-66 XX1Tru */  <role6, t3, TRUE, t6, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-67 XX1Tru */  <role6, t7, TRUE, t5, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-68 XX1Tru */  <role6, t5, TRUE, t10, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-69 XX1Tru */  <role6, t6, TRUE, t8, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-70 XX1Tru */  <role6, t8, TRUE, t1, role5>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-71 XX1Tru */  <role7, t10, TRUE, t8, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-72 XX1Tru */  <role7, t7, TRUE, t9, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-73 XX1Tru */  <role7, t4, TRUE, t10, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-74 XX1Tru */  <role7, t3, TRUE, t1, role2>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-75 XX1Tru */  <role8, t10, TRUE, t9, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-76 XX1Tru */  <role8, t6, TRUE, t2, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-77 XX1Tru */  <role8, t9, TRUE, t3, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-78 XX1Tru */  <role8, t4, TRUE, t8, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-79 XX1Tru */  <role8, t2, TRUE, t4, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-80 XX1Tru */  <role6, t7, TRUE, t9, role26>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-81 XX1Tru */  <role8, t7, TRUE, t10, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-82 XX1Tru */  <role8, t3, TRUE, t1, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-83 XX1Tru */  <role8, t5, TRUE, t5, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-84 XX1Tru */  <role8, t8, TRUE, t6, role15>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][8][0] = false;
	}

	function fireCR85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-85 XX1Tru */  <role8, t6, TRUE, t2, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-86 XX1Tru */  <role8, t4, TRUE, t5, role16>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-87 XX1Tru */  <role8, t3, TRUE, t6, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-88 XX1Tru */  <role8, t7, TRUE, t3, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-89 XX1Tru */  <role8, t6, TRUE, t2, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-90 XX1Tru */  <role8, t5, TRUE, t7, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-91 XX1Tru */  <role8, t7, TRUE, t9, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-92 XX1Tru */  <role8, t9, TRUE, t10, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-93 XX1Tru */  <role8, t8, TRUE, t5, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-94 XX1Tru */  <role8, t1, TRUE, t9, role19>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-95 XX1Tru */  <role8, t2, TRUE, t3, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-96 XX1Tru */  <role8, t3, TRUE, t2, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-97 XX1Tru */  <role8, t5, TRUE, t5, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-98 XX1Tru */  <role8, t7, TRUE, t4, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-99 XX1Tru */  <role8, t9, TRUE, t9, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-100 XX1Tru */  <role8, t10, TRUE, t7, role10>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-101 XX1Tru */  <role8, t5, TRUE, t1, role11>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][12][0] = false;
	}

	function fireCR102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-102 XX1Tru */  <role8, t1, TRUE, t8, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-103 XX1Tru */  <role8, t7, TRUE, t9, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-104 XX1Tru */  <role8, t9, TRUE, t10, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-105 XX1Tru */  <role8, t8, TRUE, t6, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-106 XX1Tru */  <role8, t10, TRUE, t2, role25>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][30][0] = false;
	}

	function fireCR107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-107 XX1Tru */  <role8, t9, TRUE, t2, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-108 XX1Tru */  <role8, t10, TRUE, t6, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-109 XX1Tru */  <role8, t6, TRUE, t3, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-110 XX1Tru */  <role8, t2, TRUE, t4, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-111 XX1Tru */  <role8, t3, TRUE, t8, role26>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][29][0] = false;
	}

	function fireCR112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-112 XX1Tru */  <role22, t4, TRUE, t1, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-113 XX1Tru */  <role22, t5, TRUE, t7, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-114 XX1Tru */  <role22, t9, TRUE, t2, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-115 XX1Tru */  <role22, t8, TRUE, t3, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-116 XX1Tru */  <role22, t3, TRUE, t9, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-117 XX1Tru */  <role22, t9, TRUE, t10, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-118 XX1Tru */  <role22, t10, TRUE, t2, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-119 XX1Tru */  <role22, t6, TRUE, t8, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-120 XX1Tru */  <role22, t2, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-121 XX1Tru */  <role22, t1, TRUE, t3, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-122 XX1Tru */  <role22, t3, TRUE, t2, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-123 XX1Tru */  <role22, t5, TRUE, t3, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-124 XX1Tru */  <role22, t4, TRUE, t1, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-125 XX1Tru */  <role22, t9, TRUE, t8, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-126 XX1Tru */  <role22, t2, TRUE, t5, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-127 XX1Tru */  <role22, t10, TRUE, t7, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-128 XX1Tru */  <role22, t10, TRUE, t3, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-129 XX1Tru */  <role22, t7, TRUE, t5, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-130 XX1Tru */  <role22, t9, TRUE, t7, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-131 XX1Tru */  <role22, t1, TRUE, t1, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-132 XX1Tru */  <role22, t5, TRUE, t9, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-133 XX1Tru */  <role6, t1, TRUE, t8, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-134 XX1Tru */  <role6, t5, TRUE, t3, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-135 XX1Tru */  <role6, t2, TRUE, t9, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR136Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-136 XX1Tru */  <role6, t3, TRUE, t4, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR137Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-137 XX1Tru */  <role6, t7, TRUE, t2, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR138Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-138 XX1Tru */  <role6, t6, TRUE, t10, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}

	function fireCR139Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-139 XX1Tru */  <role6, t4, TRUE, t5, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][4][0] = false;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanEnable Rules
	function fireCE1Rule() public {
		// /* CE-1 XX1Tru */  <role6, t8, TRUE, t3, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = true;
	}

	function fireCE2Rule() public {
		// /* CE-2 XX1Tru */  <role8, t5, TRUE, t3, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = true;
	}

	function fireCE3Rule() public {
		// /* CE-3 XX4Mix */  <role22, t8, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t6, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[9][0] = true;
	}

	function fireCE4Rule() public {
		// /* CE-4 XX4Mix */  <role24, t10, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t5, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[6][0] = true;
	}

	function fireCE5Rule() public {
		// /* CE-5 XX4Mix */  <role24, t5, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(trbac_state[msg.sender][9][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[4][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[6][0] = true;
	}

	function fireCE6Rule() public {
		// /* CE-6 XX4Mix */  <role6, t9, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t6, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[4][0] = true;
	}

	function fireCE7Rule() public {
		// /* CE-7 XX4Mix */  <role6, t6, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t8, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[4][0] = true;
	}

	function fireCE8Rule() public {
		// /* CE-8 XX4Mix */  <role6, t7, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t2, role8>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[4][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanDisable Rules
	function fireCD1Rule() public {
		// /* CD-1 TA1Tru */  <TRUE, t10, TRUE, t1, role30>
		role_enablement[16][0] = false;
	}

	function fireCD2Rule() public {
		// /* CD-2 XA4Mix */  <TRUE, t5, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t9, role8>
		require(role_enablement[23][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[6][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[9][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[4][0] = false;
	}

	function fireCD3Rule() public {
		// /* CD-3 XX1Tru */  <role6, t2, TRUE, t5, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = false;
	}

	function fireCD4Rule() public {
		// /* CD-4 XX1Tru */  <role6, t10, TRUE, t8, role32>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = false;
	}

	function fireCD5Rule() public {
		// /* CD-5 XX1Tru */  <role8, t9, TRUE, t7, role30>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[16][0] = false;
	}


	//////////////////////////////////////////////////////////
}