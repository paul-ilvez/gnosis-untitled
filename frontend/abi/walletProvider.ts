import { BrowserProvider, ethers } from "ethers";

let provider;

function getProvider(network) {
  if (typeof window !== "undefined" && window?.ethereum) {
    console.log("Provider Browser >>>", provider);
    return (provider = new BrowserProvider(window.ethereum));
  } else {
    console.log("Provider Infura >>>", provider);
    return (provider = new ethers.InfuraProvider(
      network,
      process.env.infuraProvider
    ));
  }
}
export default getProvider;
