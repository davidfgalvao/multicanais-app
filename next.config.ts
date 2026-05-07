import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  /** Só empacota o SW no `next build`; evita conflito com Turbopack no `next dev`. */
  disable: process.env.NODE_ENV === "development",
  additionalPrecacheEntries: [
    {
      url: "/~offline",
      revision:
        process.env.VERCEL_GIT_COMMIT_SHA ??
        process.env.npm_package_version ??
        "1",
    },
  ],
});

const nextConfig: NextConfig = {};

export default withSerwist(nextConfig);
