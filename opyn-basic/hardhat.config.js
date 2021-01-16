require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-web3");


module.exports = {
  solidity: "0.7.0",
  networks: {
    hardhat: {
      forking: {
	url: process.env.FORKING_URL,
	blockNumber: 11657113
      },
      gas: 95000000,
      blockGasLimit: 95000000
    }
  },
  paths: {
    artifacts: "./app/artifacts",
  },
  mocha: {
    timeout: 2000000
  },
}
