import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/flota/ltm-1090",         destination: "/flota/zuraw-samojezdny-90t",  permanent: true },
      { source: "/flota/ltm-1050",         destination: "/flota/zuraw-samojezdny-50t",  permanent: true },
      { source: "/flota/ltm-1030-2",       destination: "/flota/zuraw-samojezdny-35t",  permanent: true },
      { source: "/flota/ltm-1025",         destination: "/flota/zuraw-samojezdny-25t",  permanent: true },
      { source: "/flota/podnosnik-gsr-px-209", destination: "/flota/podnosnik-koszowy-21m", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'e-dzwigi.pl',
      },
    ],
  },
};

export default nextConfig;
