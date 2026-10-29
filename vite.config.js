import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
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
  // Relative base for the production build so the site works from a subfolder such as
  // https://<user>.github.io/HealingSpotLPC/. The dev server keeps the root base.
  base: command === "build" ? "./" : "/",
}));
