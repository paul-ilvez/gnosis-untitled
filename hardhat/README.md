# Untitled Gnosis Contract

## How to run Local Hardhat Network with the Contract
1. Open two terminal windows
2. In the first run `npx hardhat node`
3. In the second run `npx hardhat --network localhost run scripts/deploy.ts`
4. The network will run under RPC node *http://127.0.0.1:8545*, chainId *31337*, the contract will be deterministically deployed to address *0x5fbdb2315678afecb367f032d93f642f64180aa3*
5. The network and the contract will be available for interaction (including Remix, Metamask and Front-end) as long as the first terminal will be running.