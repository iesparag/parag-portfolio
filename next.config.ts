// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use this if it's a project site (not username.github.io)
  basePath: process.env.NODE_ENV === 'production' ? '/parag-portfolio' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;