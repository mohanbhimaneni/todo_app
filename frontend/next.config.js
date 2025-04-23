const path=require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = {
    webpack: (nextConfig)=>{
        nextConfig.resolve.alias['@']=path.resolve(__dirname,'app');
        return nextConfig
    }
  }
  