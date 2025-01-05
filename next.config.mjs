/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3100",
                pathname: "/uploads/**",
            }
        ]
    },
    env: {
        PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL,
        
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
