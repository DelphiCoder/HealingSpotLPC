import { SITE_ROOT } from "./siteRoot";

// Resolves a file in /public against the site root, as a root-based path
// (for example "/HealingSpotLPC/assets/x.jpg") so it works at any route depth.
export const asset = (path) => new URL(path, new URL(SITE_ROOT, window.location.href)).pathname;
