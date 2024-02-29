/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oncar-challenge-be0740413b49.herokuapp.com',
        port: '',
      },

      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
      },
    ],
  },
};

export default nextConfig;
