import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // auto-opens browser when running npm run dev
    port: 5173, // optional: specify port
  },
});