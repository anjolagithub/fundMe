require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    hardhat: {},
    optimism: {
      url: "https://mainnet.optimism.io", // Optimism RPC endpoint
      accounts: { mnemonic: "industry process almost stem eagle track token elevator sign clerk dad letter" } // Account mnemonic with funds for deployment
    }
  },
  solidity: "0.8.20",
};
