/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ['localhost', 'oncar-challenge-be0740413b49.herokuapp.com'],
  },
};

export default nextConfig;
