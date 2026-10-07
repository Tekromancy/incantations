// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config/site.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  redirects: {
    "/incantations": "/",
    "/incantations/[...slug]": "/[...slug]",
  },
  integrations: [
    react(),
    icon(),
    mdx(),
    sitemap({
      filter: (page) => {
        const excluded = [
          "/components",
          "/example",
          "/features",
          "/landing",
          "/theme",
        ];
        return !excluded.some((pattern) => page.includes(pattern));
      },
      serialize: (item) => {
        const url = item.url.replace(/\/$/, "");
        if (url === SITE.url) {
          item.priority = 1.0;
          item.changefreq = "daily";
        } else {
          item.priority = 0.8;
          item.changefreq = "weekly";
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  build: {
    inlineStylesheets: "auto",
    assets: "_assets",
  },
  compressHTML: true,
  image: {
    domains: [],
    remotePatterns: [],
  },
});
