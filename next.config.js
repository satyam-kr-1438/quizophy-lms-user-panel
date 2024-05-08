/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  // output: 'export'
    images: {
	  	domains:["https://quizophy.in","https://quizophy.com"],
	  	unoptimized: true,
		}
}

module.exports = nextConfig;
