/** @type {import('next').NextConfig} */

const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  reactStrictMode: true,
  env: {
    targetChainId: "0x7A69", // "0x5",
    factoryContractAddress: "0x000",
  },
};

module.exports = withSvgr(nextConfig);
