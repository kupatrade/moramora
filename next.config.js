/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_META_URL: "https://moramora-soft.com/"
  }
}

module.exports = nextConfig
