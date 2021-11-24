// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/utils/Context.sol';
import 'hardhat/console.sol';


contract ContractA is Ownable, Pausable {

	event E1(address indexed caller, uint256 num, uint256 currentTimestamp);

	function f1(uint256[] memory numArr) external whenNotPaused {
		require(numArr.length > 0, "array length must be non-zero");

		// caller is the owner
		if (_msgSender() == owner()) {
			for(uint256 i = 0;  i < numArr.length; ++i) {
				emit E1(_msgSender(), numArr[i], block.timestamp);
			}

		}
		// caller is the non-owner
		else {
			for(uint256 i = 0;  i < numArr.length; ++i) {
				if (numArr[i] > 1e18) {
					emit E1(_msgSender(), i, block.timestamp);
				}
			}
		}

		// for(uint256 i = 0;  i < numArr.length; ++i) {
		// 	if (_msgSender() == owner()) {
		// 		if (s)
		// 		emit E1(_msgSender(), i, block.timestamp);
		// 	}
		// }

	}

}