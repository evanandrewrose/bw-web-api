import path from "path";
import dts from 'vite-plugin-dts';
import { defineConfig } from "vitest/config";

module.exports = defineConfig({
  base: "./",
  plugins: [dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: 'BwWebApi',
      fileName: 'bw-web-api',
    },
    sourcemap: true,
  },
  test: {}
});
