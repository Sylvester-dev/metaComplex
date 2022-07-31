require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["9dcf283071cfc84e514bc7555d319c09633fc6f0583c05cfae41d19945629c3d"]
    }
  },
  etherscan: {
    apiKey: "NQPNI1UMG18M1BTI2JRQRWT52CN3EQRX5D"
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
