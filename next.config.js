/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['scontent.xx.fbcdn.net', 'scontent.fotp3-1.fna.fbcdn.net', 'images.unsplash.com'],
  },
}

module.exports = nextConfig

