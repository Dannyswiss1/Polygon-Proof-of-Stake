const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const RobotsNFT = await hre.ethers.getContractFactory(
    "RobotsNFT"
  );
  const robotsNFT = await RobotsNFT.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await robotsNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await robotsNFT.balanceOf(process.env.WALLET_ADDRESS)) +
      " MetaToken NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await robotsNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
