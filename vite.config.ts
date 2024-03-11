import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/pmndrs/react-three-offscreen?tab=readme-ov-file#vite
  plugins: [react()],
  worker: {
    plugins: () => [react()],
  },
});
