import path from "path";
import { defineConfig } from "vitest/config";
import dts from 'vite-plugin-dts'

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
  },
  test: {}
});
