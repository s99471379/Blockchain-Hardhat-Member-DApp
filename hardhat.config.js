require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY,PRIVATE_KEYsepolia,PRIVATE_KEYGanache } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEYsepolia}`]
    },
    localhost: {
      url: "http://127.0.0.1:8545/", // 本地節點的 URL
      accounts: [`0x${PRIVATE_KEY}`] // 私鑰
    },
    localhostGanache: {
      url: "http://127.0.0.1:7545", // 本地節點的 URL
      accounts: [`0x${PRIVATE_KEYGanache}`] // 私鑰
    }

  },
}