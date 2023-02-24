/** @type {import('next').NextConfig} */

const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  reactStrictMode: true,
  env: {
    defaultChain: "1",
    factoryContractAddress: "0x000",
    infuraProvider: "12187ae9826147799c5e4c804b69f801",
    api:'http://localhost:1337/api'
  },
};

module.exports = withSvgr(nextConfig);