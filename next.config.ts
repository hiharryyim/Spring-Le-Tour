import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow first-party SVG placeholders (e.g. grooming-*.svg) to be served
    // through next/image. These are static, self-authored assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
