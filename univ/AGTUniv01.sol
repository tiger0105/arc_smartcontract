pragma solidity ^0.4.0;

contract AGTUniv01 {
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
		require(trbac_state[msg.sender][0][0] == true, "User does not satisfy the Safety Query");
		msg.sender.transfer(amount);
	}

	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanAssign Rules
	function fireCA1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-1 XA3Pos */  <TRUE, t5, role14, t4, role18>
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-2 XA3Pos */  <TRUE, t2, role32, t3, role18>
		require(trbac_state[_targetUser][11][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-3 XA3Pos */  <TRUE, t3, role3, t4, role16>
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-4 XA3Pos */  <TRUE, t2, role4, t3, role16>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-5 XA3Pos */  <TRUE, t4, role4, t4, role16>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-6 XA3Pos */  <TRUE, t2, role21, t3, role16>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-7 XA3Pos */  <TRUE, t1, role21, t5, role16>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-8 XA3Pos */  <TRUE, t4, role6, t1, role16>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-9 XA3Pos */  <TRUE, t3, role12, t1, role16>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-10 XA3Pos */  <TRUE, t2, role4, t1, role19>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-11 XA3Pos */  <TRUE, t5, role6, t2, role19>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-12 XA3Pos */  <TRUE, t1, role6, t4, role19>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-13 XA3Pos */  <TRUE, t2, role28, t3, role13>
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-14 XA3Pos */  <TRUE, t3, role28, t5, role13>
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-15 XA4Mix */  <TRUE, t4, role24 & NOT ~ role15, t1, role2>
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-16 XA4Mix */  <TRUE, t1, role28 & NOT ~ role15, t3, role2>
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-17 XA4Mix */  <TRUE, t3, role4 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-18 XA4Mix */  <TRUE, t4, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t2, role15>
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-19 XA4Mix */  <TRUE, t5, role6 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-20 XA4Mix */  <TRUE, t2, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-21 XA4Mix */  <TRUE, t3, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t5, role8>
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-22 XX1Tru */  <role22, t2, TRUE, t2, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-23 XX1Tru */  <role22, t1, TRUE, t4, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-24 XX1Tru */  <role22, t3, TRUE, t3, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = true;
	}

	function fireCA25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-25 XX1Tru */  <role22, t1, TRUE, t2, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-26 XX1Tru */  <role22, t4, TRUE, t5, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][27][0] = true;
	}

	function fireCA27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-27 XX1Tru */  <role22, t5, TRUE, t2, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-28 XX1Tru */  <role22, t1, TRUE, t5, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-29 XX1Tru */  <role22, t3, TRUE, t4, role7>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][6][0] = true;
	}

	function fireCA30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-30 XX1Tru */  <role22, t5, TRUE, t2, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-31 XX1Tru */  <role22, t1, TRUE, t4, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-32 XX1Tru */  <role22, t3, TRUE, t1, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-33 XX1Tru */  <role22, t2, TRUE, t3, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-34 XX1Tru */  <role22, t4, TRUE, t5, role21>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][25][0] = true;
	}

	function fireCA35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-35 XX1Tru */  <role22, t4, TRUE, t3, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = true;
	}

	function fireCA36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-36 XX3Pos */  <role1, t1, role6 & role8, t2, role34>
		require(trbac_state[msg.sender][2][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][8][0] = true;
	}

	function fireCA37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-37 XX3Pos */  <role8, t5, role17, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][19][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-38 XX3Pos */  <role8, t4, role14, t1, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-39 XX3Pos */  <role8, t3, role14, t3, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-40 XX3Pos */  <role8, t1, role14, t5, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-41 XX3Pos */  <role8, t2, role14, t2, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][22][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-42 XX3Pos */  <role8, t1, role32, t4, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][11][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-43 XX3Pos */  <role8, t5, role32, t5, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][11][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-44 XX3Pos */  <role8, t3, role32, t2, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][11][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][18][0] = true;
	}

	function fireCA45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-45 XX3Pos */  <role8, t4, role3, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-46 XX3Pos */  <role8, t1, role3, t3, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-47 XX3Pos */  <role8, t2, role3, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-48 XX3Pos */  <role8, t5, role4, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-49 XX3Pos */  <role8, t1, role4, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-50 XX3Pos */  <role8, t2, role22, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA51Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-51 XX3Pos */  <role8, t5, role22, t3, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA52Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-52 XX3Pos */  <role8, t1, role22, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA53Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-53 XX3Pos */  <role8, t3, role22, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA54Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-54 XX3Pos */  <role8, t4, role21, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA55Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-55 XX3Pos */  <role8, t5, role21, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA56Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-56 XX3Pos */  <role8, t3, role6, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA57Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-57 XX3Pos */  <role8, t5, role24, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA58Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-58 XX3Pos */  <role8, t1, role24, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA59Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-59 XX3Pos */  <role8, t3, role24, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA60Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-60 XX3Pos */  <role8, t2, role24, t3, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA61Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-61 XX3Pos */  <role8, t5, role23, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA62Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-62 XX3Pos */  <role8, t4, role23, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA63Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-63 XX3Pos */  <role8, t5, role8, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA64Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-64 XX3Pos */  <role8, t5, role12, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA65Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-65 XX3Pos */  <role8, t4, role12, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA66Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-66 XX3Pos */  <role8, t1, role12, t3, role12>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][0][0] = true;
	}

	function fireCA67Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-67 XX3Pos */  <role8, t2, role12, t5, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][20][0] = true;
	}

	function fireCA68Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-68 XX3Pos */  <role8, t2, role3, t3, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA69Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-69 XX3Pos */  <role8, t4, role3, t1, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA70Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-70 XX3Pos */  <role8, t3, role4, t5, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA71Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-71 XX3Pos */  <role8, t5, role4, t2, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA72Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-72 XX3Pos */  <role8, t4, role4, t3, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA73Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-73 XX3Pos */  <role8, t5, role22, t5, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA74Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-74 XX3Pos */  <role8, t2, role21, t2, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA75Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-75 XX3Pos */  <role8, t3, role21, t3, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA76Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-76 XX3Pos */  <role8, t5, role21, t4, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA77Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-77 XX3Pos */  <role8, t3, role6, t3, role12>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][0][0] = true;
	}

	function fireCA78Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-78 XX3Pos */  <role8, t2, role6, t5, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA79Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-79 XX3Pos */  <role8, t4, role6, t1, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA80Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-80 XX3Pos */  <role8, t1, role24, t2, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA81Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-81 XX3Pos */  <role8, t5, role24, t5, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA82Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-82 XX3Pos */  <role8, t4, role23, t4, role19>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][4][0] = true;
	}

	function fireCA83Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-83 XX3Pos */  <role8, t5, role3, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA84Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-84 XX3Pos */  <role8, t3, role3, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA85Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-85 XX3Pos */  <role8, t2, role3, t2, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA86Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-86 XX3Pos */  <role8, t1, role3, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA87Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-87 XX3Pos */  <role8, t2, role4, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA88Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-88 XX3Pos */  <role8, t3, role4, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA89Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-89 XX3Pos */  <role8, t1, role4, t2, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA90Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-90 XX3Pos */  <role8, t5, role4, t5, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA91Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-91 XX3Pos */  <role8, t4, role4, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][13][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA92Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-92 XX3Pos */  <role8, t5, role6, t1, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA93Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-93 XX3Pos */  <role8, t4, role7, t4, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA94Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-94 XX3Pos */  <role8, t2, role7, t3, role10>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][12][0] = true;
	}

	function fireCA95Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-95 XX3Pos */  <role22, t4, role6, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA96Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-96 XX3Pos */  <role22, t2, role6, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][5][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA97Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-97 XX3Pos */  <role22, t2, role7, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA98Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-98 XX3Pos */  <role22, t3, role8, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA99Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-99 XX3Pos */  <role22, t4, role8, t1, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA100Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-100 XX3Pos */  <role22, t3, role9, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][29][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA101Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-101 XX3Pos */  <role22, t4, role9, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][29][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA102Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-102 XX3Pos */  <role22, t2, role9, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][29][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA103Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-103 XX3Pos */  <role22, t1, role12, t1, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA104Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-104 XX3Pos */  <role22, t3, role12, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA105Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-105 XX3Pos */  <role22, t2, role22, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][1][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA106Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-106 XX3Pos */  <role22, t1, role21, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA107Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-107 XX3Pos */  <role22, t2, role24, t5, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA108Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-108 XX3Pos */  <role22, t4, role24, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][7][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA109Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-109 XX3Pos */  <role22, t5, role23, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA110Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-110 XX3Pos */  <role22, t3, role23, t1, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA111Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-111 XX3Pos */  <role22, t2, role23, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA112Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-112 XX3Pos */  <role22, t1, role28, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA113Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-113 XX3Pos */  <role22, t5, role28, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][23][0] = true;
	}

	function fireCA114Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-114 XX4Mix */  <role7, t1, role7 & NOT ~ role15, t2, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA115Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-115 XX4Mix */  <role7, t2, role7 & NOT ~ role15, t4, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA116Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-116 XX4Mix */  <role7, t5, role7 & NOT ~ role15, t3, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][6][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA117Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-117 XX4Mix */  <role7, t4, role28 & NOT ~ role15, t2, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA118Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-118 XX4Mix */  <role7, t3, role28 & NOT ~ role15, t4, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA119Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-119 XX4Mix */  <role7, t5, role28 & NOT ~ role15, t1, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][27][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][21][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][16][0] = true;
	}

	function fireCA120Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-120 XX4Mix */  <role8, t5, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t3, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA121Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-121 XX4Mix */  <role8, t2, role3 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t4, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][17][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA122Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-122 XX4Mix */  <role8, t3, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t1, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA123Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-123 XX4Mix */  <role8, t5, role21 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][25][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA124Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-124 XX4Mix */  <role8, t2, role23 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t3, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA125Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-125 XX4Mix */  <role8, t5, role8 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][3][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA126Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-126 XX4Mix */  <role8, t1, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA127Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-127 XX4Mix */  <role8, t5, role12 & NOT ~ role2 & NOT ~ role7 & NOT ~ role22 & NOT ~ role24, t3, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][0][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][16][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][6][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][21][0] = true;
	}

	function fireCA128Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-128 XX4Mix */  <role22, t3, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t5, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA129Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-129 XX4Mix */  <role22, t4, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t4, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][7][0] = true;
	}

	function fireCA130Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-130 XX4Mix */  <role24, t3, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA131Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-131 XX4Mix */  <role24, t4, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t5, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][3][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][5][0] = true;
	}

	function fireCA132Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-132 XX4Mix */  <role6, t2, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t4, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA133Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-133 XX4Mix */  <role6, t4, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t1, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA134Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-134 XX4Mix */  <role6, t5, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t2, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}

	function fireCA135Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CA-135 XX4Mix */  <role6, t1, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t3, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(trbac_state[_targetUser][24][0] == true,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][5][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][1][0] == false,"Target User does not satisfy the preconditions for the rule.");
		require(trbac_state[_targetUser][7][0] == false,"Target User does not satisfy the preconditions for the rule.");
		trbac_state[_targetUser][3][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanRevoke Rules
	function fireCR1Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-1 TA1Tru */  <TRUE, t3, TRUE, t3, role20>
		trbac_state[_targetUser][26][0] = false;
	}

	function fireCR2Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-2 TA1Tru */  <TRUE, t5, TRUE, t4, role5>
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR3Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-3 TA1Tru */  <TRUE, t3, TRUE, t1, role5>
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR4Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-4 TA1Tru */  <TRUE, t4, TRUE, t1, role15>
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR5Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-5 TA1Tru */  <TRUE, t4, TRUE, t1, role13>
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR6Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-6 XX1Tru */  <role6, t3, TRUE, t1, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR7Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-7 XX1Tru */  <role6, t5, TRUE, t2, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR8Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-8 XX1Tru */  <role6, t1, TRUE, t3, role32>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][11][0] = false;
	}

	function fireCR9Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-9 XX1Tru */  <role8, t4, TRUE, t2, role30>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][14][0] = false;
	}

	function fireCR10Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-10 XX1Tru */  <role8, t3, TRUE, t5, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR11Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-11 XX1Tru */  <role8, t4, TRUE, t3, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR12Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-12 XX1Tru */  <role8, t1, TRUE, t1, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR13Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-13 XX1Tru */  <role8, t5, TRUE, t2, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][19][0] = false;
	}

	function fireCR14Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-14 XX1Tru */  <role8, t4, TRUE, t2, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR15Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-15 XX1Tru */  <role8, t5, TRUE, t1, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][20][0] = false;
	}

	function fireCR16Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-16 XX1Tru */  <role8, t2, TRUE, t1, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR17Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-17 XX1Tru */  <role8, t1, TRUE, t4, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR18Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-18 XX1Tru */  <role8, t5, TRUE, t2, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR19Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-19 XX1Tru */  <role8, t3, TRUE, t5, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][18][0] = false;
	}

	function fireCR20Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-20 XX1Tru */  <role6, t5, TRUE, t2, role14>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR21Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-21 XX1Tru */  <role6, t4, TRUE, t5, role14>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][22][0] = false;
	}

	function fireCR22Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-22 XX1Tru */  <role6, t3, TRUE, t3, role12>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][0][0] = false;
	}

	function fireCR23Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-23 XX1Tru */  <role19, t1, TRUE, t5, role20>
		require(trbac_state[msg.sender][4][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][26][0] = false;
	}

	function fireCR24Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-24 XX1Tru */  <role12, t5, TRUE, t4, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR25Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-25 XX1Tru */  <role12, t2, TRUE, t2, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR26Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-26 XX1Tru */  <role12, t1, TRUE, t5, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR27Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-27 XX1Tru */  <role12, t3, TRUE, t3, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][9][0] = false;
	}

	function fireCR28Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-28 XX1Tru */  <role6, t2, TRUE, t3, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR29Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-29 XX1Tru */  <role6, t4, TRUE, t2, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR30Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-30 XX1Tru */  <role6, t1, TRUE, t5, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][15][0] = false;
	}

	function fireCR31Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-31 XX1Tru */  <role7, t4, TRUE, t4, role2>
		require(trbac_state[msg.sender][6][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][16][0] = false;
	}

	function fireCR32Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-32 XX1Tru */  <role8, t3, TRUE, t2, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR33Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-33 XX1Tru */  <role8, t1, TRUE, t4, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][21][0] = false;
	}

	function fireCR34Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-34 XX1Tru */  <role22, t1, TRUE, t4, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR35Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-35 XX1Tru */  <role22, t2, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][17][0] = false;
	}

	function fireCR36Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-36 XX1Tru */  <role22, t2, TRUE, t1, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR37Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-37 XX1Tru */  <role22, t1, TRUE, t2, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR38Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-38 XX1Tru */  <role22, t3, TRUE, t3, role12>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][0][0] = false;
	}

	function fireCR39Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-39 XX1Tru */  <role22, t4, TRUE, t4, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][13][0] = false;
	}

	function fireCR40Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-40 XX1Tru */  <role22, t4, TRUE, t5, role23>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][24][0] = false;
	}

	function fireCR41Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-41 XX1Tru */  <role22, t1, TRUE, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][23][0] = false;
	}

	function fireCR42Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-42 XX1Tru */  <role22, t5, TRUE, t3, role12>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][0][0] = false;
	}

	function fireCR43Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-43 XX1Tru */  <role22, t1, TRUE, t2, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = false;
	}

	function fireCR44Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-44 XX1Tru */  <role22, t2, TRUE, t4, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = false;
	}

	function fireCR45Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-45 XX1Tru */  <role22, t4, TRUE, t5, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = false;
	}

	function fireCR46Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-46 XX1Tru */  <role22, t3, TRUE, t1, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][7][0] = false;
	}

	function fireCR47Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-47 XX1Tru */  <role24, t2, TRUE, t4, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR48Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-48 XX1Tru */  <role24, t3, TRUE, t1, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][5][0] = false;
	}

	function fireCR49Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-49 XX1Tru */  <role6, t4, TRUE, t4, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}

	function fireCR50Rule(address _targetUser) public noZeroAddress(_targetUser) {
		// /* CR-50 XX1Tru */  <role6, t5, TRUE, t5, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		trbac_state[_targetUser][3][0] = false;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanEnable Rules
	function fireCE1Rule() public {
		// /* CE-1 TA1Tru */  <TRUE, t3, TRUE, t3, role20>
		role_enablement[26][0] = true;
	}

	function fireCE2Rule() public {
		// /* CE-2 XA4Mix */  <TRUE, t3, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t5, role8>
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE3Rule() public {
		// /* CE-3 XX1Tru */  <role8, t5, TRUE, t2, role17>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[19][0] = true;
	}

	function fireCE4Rule() public {
		// /* CE-4 XX1Tru */  <role12, t5, TRUE, t4, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[9][0] = true;
	}

	function fireCE5Rule() public {
		// /* CE-5 XX1Tru */  <role6, t1, TRUE, t5, role5>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[15][0] = true;
	}

	function fireCE6Rule() public {
		// /* CE-6 XX1Tru */  <role8, t3, TRUE, t2, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = true;
	}

	function fireCE7Rule() public {
		// /* CE-7 XX1Tru */  <role8, t5, TRUE, t5, role15>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[21][0] = true;
	}

	function fireCE8Rule() public {
		// /* CE-8 XX1Tru */  <role8, t2, TRUE, t4, role16>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[20][0] = true;
	}

	function fireCE9Rule() public {
		// /* CE-9 XX1Tru */  <role8, t1, TRUE, t5, role11>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[10][0] = true;
	}

	function fireCE10Rule() public {
		// /* CE-10 XX1Tru */  <role8, t2, TRUE, t2, role25>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[28][0] = true;
	}

	function fireCE11Rule() public {
		// /* CE-11 XX1Tru */  <role22, t1, TRUE, t4, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[27][0] = true;
	}

	function fireCE12Rule() public {
		// /* CE-12 XX1Tru */  <role22, t4, TRUE, t4, role4>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[13][0] = true;
	}

	function fireCE13Rule() public {
		// /* CE-13 XX1Tru */  <role22, t1, TRUE, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[23][0] = true;
	}

	function fireCE14Rule() public {
		// /* CE-14 XX1Tru */  <role22, t1, TRUE, t2, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE15Rule() public {
		// /* CE-15 XX1Tru */  <role22, t2, TRUE, t4, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[7][0] = true;
	}

	function fireCE16Rule() public {
		// /* CE-16 XX1Tru */  <role24, t2, TRUE, t4, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[5][0] = true;
	}

	function fireCE17Rule() public {
		// /* CE-17 XX3Pos */  <role22, t3, role8, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[3][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE18Rule() public {
		// /* CE-18 XX3Pos */  <role22, t1, role12, t1, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE19Rule() public {
		// /* CE-19 XX3Pos */  <role22, t3, role12, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[0][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE20Rule() public {
		// /* CE-20 XX3Pos */  <role22, t5, role28, t4, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[27][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = true;
	}

	function fireCE21Rule() public {
		// /* CE-21 XX4Mix */  <role24, t3, role23 & NOT ~ role8 & NOT ~ role22 & NOT ~ role24, t4, role6>
		require(trbac_state[msg.sender][7][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[5][0] = true;
	}

	function fireCE22Rule() public {
		// /* CE-22 XX4Mix */  <role6, t4, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t1, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE23Rule() public {
		// /* CE-23 XX4Mix */  <role6, t5, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t2, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}

	function fireCE24Rule() public {
		// /* CE-24 XX4Mix */  <role6, t1, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t3, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = true;
	}


	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	// CanDisable Rules
	function fireCD1Rule() public {
		// /* CD-1 TA1Tru */  <TRUE, t2, TRUE, t2, role28>
		role_enablement[27][0] = false;
	}

	function fireCD2Rule() public {
		// /* CD-2 XA3Pos */  <TRUE, t3, role4, t4, role13>
		require(role_enablement[13][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = false;
	}

	function fireCD3Rule() public {
		// /* CD-3 XX1Tru */  <role8, t1, TRUE, t4, role18>
		require(trbac_state[msg.sender][3][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[18][0] = false;
	}

	function fireCD4Rule() public {
		// /* CD-4 XX1Tru */  <role12, t1, TRUE, t5, role33>
		require(trbac_state[msg.sender][0][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[9][0] = false;
	}

	function fireCD5Rule() public {
		// /* CD-5 XX1Tru */  <role22, t5, TRUE, t3, role28>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[27][0] = false;
	}

	function fireCD6Rule() public {
		// /* CD-6 XX1Tru */  <role22, t1, TRUE, t4, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[17][0] = false;
	}

	function fireCD7Rule() public {
		// /* CD-7 XX1Tru */  <role22, t2, TRUE, t1, role3>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		role_enablement[17][0] = false;
	}

	function fireCD8Rule() public {
		// /* CD-8 XX3Pos */  <role22, t4, role6, t3, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[5][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = false;
	}

	function fireCD9Rule() public {
		// /* CD-9 XX3Pos */  <role22, t1, role28, t2, role13>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[27][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[23][0] = false;
	}

	function fireCD10Rule() public {
		// /* CD-10 XX4Mix */  <role22, t3, role23 & NOT ~ role6 & NOT ~ role8 & NOT ~ role22, t5, role24>
		require(trbac_state[msg.sender][1][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[3][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[7][0] = false;
	}

	function fireCD11Rule() public {
		// /* CD-11 XX4Mix */  <role6, t2, role23 & NOT ~ role6 & NOT ~ role22 & NOT ~ role24, t4, role8>
		require(trbac_state[msg.sender][5][0] == true, "Sender is not authorized to fire this rule at this time.");
		require(role_enablement[24][0] == true,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[5][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[1][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		require(role_enablement[7][0] == false,"Target Role does not satisfy the preconditions for the rule.");
		role_enablement[3][0] = false;
	}


	//////////////////////////////////////////////////////////
}