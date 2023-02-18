"use strict";

/** @type {import('next').NextConfig} */
var withSvgr = require("next-plugin-svgr");

var nextConfig = {
  reactStrictMode: true,
  env: {
    defaultChain: "1",
    factoryContractAddress: "0x000",
    infuraProvider: "12187ae9826147799c5e4c804b69f801"
  }
};
module.exports = withSvgr(nextConfig);