import { ethers, upgrades } from "hardhat";
import chai from "chai";
import { BigNumber, Contract, Signer, Wallet } from "ethers";
import { deployContract, solidity } from "ethereum-waffle";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
	MAX_UINT256,
	TIME,
	ZERO_ADDRESS,
	// asyncForEach,
	// deployContractWithLibraries,
	getCurrentBlockTimestamp,
	// getUserTokenBalance,
	// getUserTokenBalances,
	setNextTimestamp,
	setTimestamp,
} from "./testUtils"

chai.use(solidity);
const { expect } = chai;

describe("Tests for contractA", () => {
	let stakingContractAddress: string;
	let signers: Array<Signer>;
	let owner : SignerWithAddress, 
		owner2 : SignerWithAddress, 
		addr1 : SignerWithAddress, 
		addr2 : SignerWithAddress, 
		addr3 : SignerWithAddress, 
		addr4 : SignerWithAddress;
	let contractA: Contract,

	beforeEach(async () => {
		// get signers
		[owner, owner2, addr1, addr2, addr3, addr4] = await ethers.getSigners();
		
		// ---------------------------------------------------
		// deploy token contract
		const ContractAFactory: ContractFactory = await ethers.getContractFactory(
		'ContractA',
		);
		const contractA = await ContractAFactory.deploy();
		await contractA.deployed();
		// console.log(`Token contract address: ${token.address}`);

		// console.log(`Token owner: ${await token.owner()}`);

	});

	describe("Ownable", async () => {
		it("Should have the correct owner", async () => {
			expect(await contractA.owner()).to.equal(owner.address);
		});

		it("Owner is able to transfer ownership", async () => {
			await expect(contractA.transferOwnership(owner2.address))
				.to.emit(contractA, 'OwnershipTransferred')
				.withArgs(owner.address, owner2.address);
		});
	});

	// describe("Pausable", async () => {
	// 	it("Owner is able to pause when NOT paused", async () => {
	// 		await expect(stakingContract.pause())
	// 			.to.emit(stakingContract, 'Paused')
	// 			.withArgs(owner.address);
	// 	});

	// 	it("Owner is able to unpause when already paused", async () => {
	// 		stakingContract.pause();

	// 		await expect(stakingContract.unpause())
	// 			.to.emit(stakingContract, 'Unpaused')
	// 			.withArgs(owner.address);
	// 	});

	// 	it("Owner is NOT able to pause when already paused", async () => {
	// 		stakingContract.pause();

	// 		await expect(stakingContract.pause())
	// 			.to.be.revertedWith("Pausable: paused");
	// 	});

	// 	it("Owner is NOT able to unpause when already unpaused", async () => {
	// 		stakingContract.pause();

	// 		stakingContract.unpause();

	// 		await expect(stakingContract.unpause())
	// 			.to.be.revertedWith("Pausable: not paused");
	// 	});
	// });

	describe("parse", async () => {
		it("Success in parsing by owner", async () => {
			const arr1 = [2e18, 3e18, 1e17, 4e19];
			await expect(contractA.connect(owner).f1(arr1)).
				.to.emit(contractA, "E1");
		}); 

		it("Success in parsing by non-owner", async () => {
			const arr1 = [2e18, 3e18, 1e17, 4e19];
			await expect(contractA.connect(addr1).f1(arr1)).
				.to.emit(contractA, "E1");
		}); 
	});





});