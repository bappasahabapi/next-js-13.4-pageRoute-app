const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["grzelinski.com"],
  }
  
}

module.exports = nextConfig
