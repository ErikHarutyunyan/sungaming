import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginPurgeCSS from "vite-plugin-purge";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // pluginPurgeCSS({
      // Specify the content paths to be checked for used CSS classes
      // content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.css"],
      // content: ["index.html", "**/*.jsx", "**/*.js", "**/*.css"],
      // css: ["**/*.css"],
      // Whitelist specific CSS classes or patterns
      // whitelist: ["my-whitelisted-class"],
    // }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      tiff: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
    viteCompression(),
  ],
});
