const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
	// optional: you can modify antd less variables directly here

	// Or better still you can specify a path to a file
	lessVarsFilePath: './styles/variables.less',
	// optional
	lessVarsFilePathAppendToEndOfContent: false,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {},
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

	webpack(config) {
		return config;
	},

	// ONLY for Next.js 10, if you use Next.js 11, delete this block
});
module.exports = nextConfig;
