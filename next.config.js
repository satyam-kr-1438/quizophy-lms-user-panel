// /** @type {import('next').NextConfig} */
// const nextConfig = {
  // reactStrictMode: false,
  // images: {
  //   domains: ["https://quizophy.in", "https://quizophy.com"],
  //   unoptimized: true,
  // }
// }
// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public'
//     // Add any additional PWA options here if needed
//   },
//   ...nextConfig, // Merge your Next.js configuration with next-pwa configuration
// });

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: false,
  images: {
    domains: ["https://quizophy.in", "https://quizophy.com"],
    unoptimized: true,
  }
})