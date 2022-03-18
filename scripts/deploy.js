const hre = require("hardhat");

async function main() {
  const GemanepaToken = await hre.ethers.getContractFactory("GemanepaToken");
  const gemanepaToken = await GemanepaToken.deploy("1000000000000000000000000000");

  await gemanepaToken.deployed();

  console.log("Token deployed to:", gemanepaToken.address);
}

main()
  .then(() => {
    console.log('Finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });