export type Network = {
  chaindId: number;
  name: string;
  blockExplorer?: string;
  factoryContractAddress: string;
  symbol: string;

  shortName: string;
};

export const networks: Network[] = [
  {
    chaindId: 1,
    name: "Mainnet",
    blockExplorer: "https://etherscan.io/",
    factoryContractAddress: "",
    symbol: "eth",
    shortName: "eth",
  },
  {
    chaindId: 5,
    name: "Goerli",
    blockExplorer: "https://goerli.etherscan.io/",
    factoryContractAddress: "0x1Ef5550D3b9b9e8637A0B7b8F44B739D96F3dB59",
    symbol: "eth",
    shortName: "gor",
  },
  {
    chaindId: 11155111,
    name: "Sepolia",
    blockExplorer: "https://sepolia.etherscan.io/",
    factoryContractAddress: "0xd78f965B341B7f74c038362886E0A58d67deeCF7",
    symbol: "eth",
    shortName: "sep",
  },
  {
    chaindId: 31337,
    name: "Local Hardhat",
    factoryContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    symbol: "eth",
    shortName: "loc",
  },
];

export const undefinedNetwork: Network = {
  chaindId: 0,
  name: "Unknown Network",
  factoryContractAddress: "",
  symbol: "und",
  shortName: "und",
};

export function findNetworkById(chainId: number): Network {
  return (
    networks.find((network) => network.chaindId == chainId) ?? undefinedNetwork
  );
}
