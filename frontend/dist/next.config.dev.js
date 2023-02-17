"use strict";

/** @type {import('next').NextConfig} */
var withSvgr = require("next-plugin-svgr");

var nextConfig = {
  reactStrictMode: true,
  env: {
    targetChainId: "0x7A69",
    // "0x5",
    factoryContractAddress: "0x000"
  }
};
module.exports = withSvgr(nextConfig);