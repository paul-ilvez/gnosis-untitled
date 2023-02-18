"use strict";
exports.__esModule = true;
exports.findNetworkById = exports.undefinedNetwork = void 0;
var networks = [
    {
        chaindId: 1,
        name: "Mainnet",
        blockExplorer: "https://etherscan.io/",
        factoryContractAddress: ""
    },
    {
        chaindId: 5,
        name: "Goerli",
        blockExplorer: "https://goerli.etherscan.io/",
        factoryContractAddress: ""
    },
    {
        chaindId: 11155111,
        name: "Sepolia",
        blockExplorer: "https://sepolia.etherscan.io/",
        factoryContractAddress: ""
    },
    {
        chaindId: 31337,
        name: "Local Hardhat",
        factoryContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    },
];
exports.undefinedNetwork = {
    chaindId: 0,
    name: "Unknown Network",
    factoryContractAddress: ""
};
function findNetworkById(chainId) {
    var _a;
    return ((_a = networks.find(function (network) { return network.chaindId == chainId; })) !== null && _a !== void 0 ? _a : exports.undefinedNetwork);
}
exports.findNetworkById = findNetworkById;
