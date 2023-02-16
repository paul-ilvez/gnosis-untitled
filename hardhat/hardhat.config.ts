import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const localPK =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gasPrice: 875000000,
      chainId: 31337,
      accounts: [localPK],
    },
  },
};

export default config;


//Contract address: 0x5fbdb2315678afecb367f032d93f642f64180aa3