const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const VirtualWarranty = await hre.ethers.getContractFactory("VirtualWarranty");
  const warranty = await VirtualWarranty.deploy();

  await warranty.deployed();

  console.log("Warranty contract deployed to:", warranty.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });