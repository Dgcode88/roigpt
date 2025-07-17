/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // Enable static optimization
  trailingSlash: false,
  // SEO optimizations
  generateEtags: true,
  // Performance optimizations
  swcMinify: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

// Only add tempo devtools in development
if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_TEMPO) {
  if (!nextConfig.experimental) {
    nextConfig.experimental = {};
  }
  nextConfig.experimental.swcPlugins = [
    [require.resolve("tempo-devtools/swc/0.90"), {}],
  ];
}

module.exports = nextConfig;
