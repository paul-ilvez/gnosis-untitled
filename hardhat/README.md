# Untitled Safe Contract

A multisig EVM wallet contract with functionality similar to the Gnosis Safe project. The smart contract part consists of two contract:

- Safe Factory (SafeFactory.sol)
- Safe instance (GnosisUntitled.sol)

The Safe Factory must be deployed preemptively and used to create new Safe instances.

## Safe Functionality

Once deployed, each Safe can accept the following transactions (proposals):

- Value transfer
- Execute arbitrary bytecode
- Add new Safe signer
- Remove Safe signer
- Pause Safe
- Unpause Safe
- Change quorum (threshold)

## How to Run Local Hardhat Network

1. Open two terminal windows
2. In the first run `npx hardhat node`
3. In the second run `npx hardhat --network localhost run scripts/deploy.ts`
4. The network will run under RPC node *http://127.0.0.1:8545*, chainId _31337_, the contract will be deterministically deployed to address _0x5fbdb2315678afecb367f032d93f642f64180aa3_
5. The network and the contract will be available for interaction (including Remix, Metamask and Front-end) as long as the first terminal will be running.

## Setup API and Private Keys

Create an `.env` file:

`touch .env`

Create the following entries and fill them with your real keys:

```
ETHERSCAN_API_KEY=""
INFURA_API_KEY=""
PRIVATE_KEY=""
```

## Deploying the Safe Creator

Let's go through deploying and validating the contract using Sepolia testnet as an example.

1. Deploy the Safe Creator:

`npx hardhat --network sepolia run scripts/deploy.ts`

2. Verify the contract using Hardhat:

`npx hardhat verify --network sepolia <DEPLOYED CONTRACT ADDRESS>`
