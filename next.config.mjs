/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**m.media-amazon.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
    ],
  },
};

export default nextConfig;
