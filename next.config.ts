/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // Match all routes on myazlawfirm.com
        has: [{ type: "host", value: "myazlawfirm.com" }], // Only apply if the request comes from myazlawfirm.com
        destination: "https://www.myazlawfirm.com/:path*", // Redirect to www version
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
