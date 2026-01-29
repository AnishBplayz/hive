const path = require('path');

const webDir = path.resolve(__dirname);

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typedRoutes: false,
	turbopack: {
		root: webDir,
	},
	webpack: (config, { isServer }) => {
		config.context = webDir;
		config.resolve.modules = [path.join(webDir, 'node_modules'), ...(config.resolve.modules || [])];
		return config;
	},
};

module.exports = nextConfig;
