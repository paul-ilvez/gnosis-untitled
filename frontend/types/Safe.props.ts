export type SafeType  = {
  chainId: number;
  address: string;
  countOwners: number;
  balance: number;
  quorum: number;

  shortName: string;

  symbol: string;

  factoryContractAddress: string;

  networkName: string;
}

export default SafeType