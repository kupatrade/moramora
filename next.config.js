/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: false,
  env: {
    PUBLIC_META_URL: "https://moramora-soft.com/"
  }
}

module.exports = nextConfig
