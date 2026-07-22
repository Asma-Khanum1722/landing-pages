import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
