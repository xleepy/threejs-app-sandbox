import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = "es2022";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target,
  },
  esbuild: {
    target,
  },
  optimizeDeps: {
    esbuildOptions: {
      target,
    },
  },
  worker: {
    plugins: () => [react()],
  },
  plugins: [react()],
});
