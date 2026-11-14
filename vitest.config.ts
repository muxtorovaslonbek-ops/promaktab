import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "virtual-pwa-register-stub",
      resolveId(id) {
        if (id === "virtual:pwa-register") return "\0virtual:pwa-register";
        return undefined;
      },
      load(id) {
        if (id === "\0virtual:pwa-register") {
          return "export function registerSW() { return () => Promise.resolve(); }";
        }
        return undefined;
      },
    },
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
