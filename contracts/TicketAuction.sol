// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/utils/Context.sol';
import 'hardhat/console.sol';


contract TicketAuction is Ownable, Pausable {

	IERC20 immutable token;

	// mapping(address => staking amount)
	mapping(uint256 => uint256) userStakings;

	constructor(address token)

}