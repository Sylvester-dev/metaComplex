const hre = require("hardhat");

async function main() {
  // const name = "MG Coin";
  // const symbol = "MG";
  // const initSupply = (ethers.utils.parseEther("1000000")).toString(); // 1000000 mg

  // const SolToken = await ethers.getContractFactory("SolToken");
  // solToken = await SolToken.deploy(name, symbol, initSupply);
  // await solToken.deployed();

  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy("0x514066a543d8Df91680b140d1d5190396cA37Eeb");
  await nftMarket.deployed();
  console.log("NFTMarket deployed to:", nftMarket.address);

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);


  for (i = 60; i < 70; i++) {
    const l1 = await nft.createToken("https://gateway.pinata.cloud/ipfs/QmPrgYyFrH8HTYUGaN5zdmDt1usQPpyZ8Tc3rdjSp1Gq7x")
    console.log(l1.value)
  
    const t1 = await nftMarket.createMarketItem(nft.address, i, 10)
    console.log(t1)
  }


  

  // const l2 = await nft.createToken("")
  // console.log(l2.value)
  
  // const t2 = await nftMarket.createMarketItem(nft.address, 2, 10)
  // console.log(t2)

  // const l3 = await nft.createToken("")
  // console.log(l3.value)
  
  // const t3 = await nftMarket.createMarketItem(nft.address, 3, 10)
  // console.log(t3)

  // const l4 = await nft.createToken("")
  // console.log(l4.value)
  
  // const t4 = await nftMarket.createMarketItem(nft.address, 4, 10)
  // console.log(t4)

  // const l5 = await nft.createToken("")
  // console.log(l5.value)
  
  // const t5 = await nftMarket.createMarketItem(nft.address, 5, 10)
  // console.log(t5)

  // const l6 = await nft.createToken("")
  // console.log(l6.value)
  
  // const t6 = await nftMarket.createMarketItem(nft.address, 6, 10)
  // console.log(t6)

  // const l7 = await nft.createToken("")
  // console.log(l7.value)
  
  // const t7 = await nftMarket.createMarketItem(nft.address, 7, 10)
  // console.log(t7)

  // const l8 = await nft.createToken("")
  // console.log(l8.value)
  
  // const t8 = await nftMarket.createMarketItem(nft.address, 8, 10)
  // console.log(t8)

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
