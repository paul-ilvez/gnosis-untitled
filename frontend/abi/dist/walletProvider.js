"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
var provider;
function getProvider(network) {
    if (typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.ethereum)) {
        console.log("Provider Browser >>>", provider);
        return (provider = new ethers_1.BrowserProvider(window.ethereum));
    }
    else {
        console.log("Provider Infura >>>", provider);
        return (provider = new ethers_1.ethers.InfuraProvider(network, process.env.infuraProvider));
    }
}
exports["default"] = getProvider;
