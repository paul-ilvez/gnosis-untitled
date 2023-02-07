/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  reactStrictMode: true,
  env: {
    targetChainId: "0x5",
  }
}

module.exports = withSvgr(nextConfig)
