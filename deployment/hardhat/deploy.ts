// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  
  // We get the token contract to deploy
  const ContractAFactory: ContractFactory = await ethers.getContractFactory(
    'ContractA',
  );
  const contractA: Contract = await ContractAFactory.deploy();
  await contractA.deployed();
  console.log('ContractA deployed to: ', contractA.address);

  console.log(
      `The transaction that was sent to the network to deploy the contractA: ${
          contractA.deployTransaction.hash
      }`
  );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.  
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
