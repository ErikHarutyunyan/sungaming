import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import pluginPurgeCSS from "vite-plugin-purge";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // pluginPurgeCSS({
    //   // Specify the content paths to be checked for used CSS classes
    //   content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.css"],
    //   // Whitelist specific CSS classes or patterns
    //   // whitelist: ["my-whitelisted-class"],
    // }),
  ],
});
