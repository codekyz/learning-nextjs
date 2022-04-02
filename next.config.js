/** @type {import('next').NextConfig} */

const API_KEY = "c86c641601cf7350d7d1ba8309546a04";
const BASE_URL = "https://api.themoviedb.org/3";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
