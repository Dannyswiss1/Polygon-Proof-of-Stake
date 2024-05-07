const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const RobotsNFT = await hre.ethers.getContractFactory("RobotsNFT");

  const robotsNFT = await RobotsNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await robotsNFT.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
