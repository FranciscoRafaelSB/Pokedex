/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  images: {
    domains: ["i.ibb.co", "raw.githubusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig
