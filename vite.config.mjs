import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ ESM import works in `.mjs`

export default defineConfig({
  plugins: [react(), tailwindcss()],
});