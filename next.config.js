/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {},
	async redirects() {
		return [
			{
				source: '/search',
				destination: '/',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
