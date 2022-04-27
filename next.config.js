/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'heb'],
    defaultLocale: 'en-US',
  }
}

module.exports = nextConfig
