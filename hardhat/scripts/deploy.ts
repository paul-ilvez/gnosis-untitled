import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying smart contract with the account: ${deployer.address}`);
  const SafeFactory = await ethers.getContractFactory("SafeFactory");
  const safeFactory = await SafeFactory.deploy();

  await safeFactory.deployed();

  console.log(`SafeFactory.sol deployed to ${safeFactory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
