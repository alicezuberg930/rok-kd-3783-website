/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REACT_APP_HOST_API_KEY: process.env.REACT_APP_HOST_API_KEY
    },
    webpack: config => {
        config.resolve.fallback = { ...config.resolve.fallback, net: false, os: false, fs: false }
        return config
    },
};

export default nextConfig;