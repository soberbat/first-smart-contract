import { ethers } from "hardhat";




async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;


  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  await token.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${token.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
