// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // your Next.js config
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "avatar.vercel.sh",
      },
      {
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default withPlaiceholder(config);
