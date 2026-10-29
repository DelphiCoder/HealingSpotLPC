import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // GitHub Pages serves 404.html for unknown paths, so the app shell is copied there
      // and the React router takes over from the requested URL.
      name: "spa-404-fallback",
      closeBundle() {
        copyFileSync(resolve("dist/index.html"), resolve("dist/404.html"));
      },
    },
  ],
  base: "/",
});
