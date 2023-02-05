/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_META_URL: process.env.PUBLIC_META_URL
  }
}

module.exports = nextConfig
