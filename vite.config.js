import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import pluginPurgeCSS from "vite-plugin-purge";
// import million from "million/compiler";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // million.vite({ auto: true }),
    react(),
    pluginPurgeCSS({
      // Specify the content paths to be checked for used CSS classes
      // content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.css"],
      content: ["**/*.css"],
      // css: ["**/*.css"],
      // Whitelist specific CSS classes or patterns
      // whitelist: ["my-whitelisted-class"],
    }),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      tiff: {
        quality: 70,
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
  resolve: {
    /*eslint-disable */
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      images: `${path.resolve(__dirname, "./src/components/Images/")}`,
      data: `${path.resolve(__dirname, "./src/data/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      router: `${path.resolve(__dirname, "./src/router/")}`,
    },
  },
});
