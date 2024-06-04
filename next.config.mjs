/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
