/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ✅ REQUIRED FOR STATIC EXPORT

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true, // ✅ REQUIRED FOR STATIC HOSTING
  },
}

export default nextConfig
