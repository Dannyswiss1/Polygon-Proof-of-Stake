const hre = require("hardhat");

async function main() {
  const RobotsNFT = await hre.ethers.getContractFactory("RobotsNFT");

  const RobotsNft = await RobotsNFT.deploy();

  console.log("MetaToken NFT deployed to: ", RobotsNft.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
