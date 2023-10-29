/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
				protocol : 'https',
				hostname : 'storage.googleapis.com',
			},
            {
				protocol : 'https',
				hostname : 'hachette.imgix.net',
			},
        ]
    }
}

module.exports = nextConfig
