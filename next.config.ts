import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://svraesthetics.co.uk/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
