/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**', // Allow all paths for ibb.co
          },
          {
            protocol: 'https',
            hostname: 'shop.thrashermagazine.com',
            pathname: '/cdn/shop/files/**',
          },
        ],
      },
};

export default nextConfig;
