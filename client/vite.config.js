import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: dev server proxies /api calls to the Express backend
// so the React app can call fetch("/api/contact") without CORS pain.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  }
});
