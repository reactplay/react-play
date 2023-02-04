import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */

const { API_URL, PRIVATE_KEY_1, PRIVATE_KEY_2, API_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.0'
  },
  paths: {
    artifacts: '../artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    matic: {
      url: API_URL,
      accounts: [PRIVATE_KEY_1, PRIVATE_KEY_2]
    },
    bscTestnet: {
      url: API_URL,
      accounts: [PRIVATE_KEY_1, PRIVATE_KEY_2]
    }
  },
  etherscan: {
    apiKey: API_KEY
  }
};
