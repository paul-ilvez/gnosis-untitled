type Network = {
  chaindId: number;
  name: string;
  blockExplorer?: string;
  factoryContractAddress: string;
};

const networks: Network[] = [
  {
    chaindId: 1,
    name: "Mainnet",
    blockExplorer: "https://etherscan.io/",
    factoryContractAddress: "",
  },
  {
    chaindId: 5,
    name: "Goerli",
    blockExplorer: "https://goerli.etherscan.io/",
    factoryContractAddress: "",
  },
  {
    chaindId: 11155111,
    name: "Sepolia",
    blockExplorer: "https://sepolia.etherscan.io/",
    factoryContractAddress: "",
  },
  {
    chaindId: 31337,
    name: "Local Hardhat",
    factoryContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  },
];

const undefinedNetwork: Network = {
  chaindId: 0,
  name: "Unknown Network",
  factoryContractAddress: "",
};

export function findNetworkById(chainId: number): Network {
  return (
    networks.find((network) => network.chaindId == chainId) ?? undefinedNetwork
  );
}
