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
            {
				protocol : 'https',
				hostname : 'www.publishersweekly.com',
			},
            {
				protocol : 'https',
				hostname : 'www.johnsandford.org',
			},
        ]
    }
}

module.exports = nextConfig
