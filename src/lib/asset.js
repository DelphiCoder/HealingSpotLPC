// Resolves a file in /public against the site's base path, as a root-based path
// (for example "/HealingSpotLPC/assets/x.jpg") so it works at any route depth.
export const asset = (path) => new URL(`${import.meta.env.BASE_URL}${path}`, document.baseURI).pathname;
