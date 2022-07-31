require("@nomiclabs/hardhat-waffle");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    hardhat: {
      blockGasLimit: 10000000,
      gas: 10000000,
      initialBaseFeePerGas: 0,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/bDfskAbFMc3bOFl3RRtsuz7VhYdy1JFn",
      blockGasLimit: 10000000,
      gas: 10000000,
      network_id: "80001",
      accounts:[`0x`]
    },
  },

  
};
