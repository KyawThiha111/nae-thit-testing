/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eise.site",
        port: "",
        pathname: "/**"
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        // destination: "https://salpyarzay-innovix.odoo.com/api/:path*", // for production
        destination: "https://eise.site/:path*", // for development
      },
    ];
  },
  // i18n: {
  //   locales: ["en", "mm"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
