// Address of the site's root folder. In a production build the JavaScript lives in
// <site>/assets/, so "../" from the bundle's own URL is the site root. This does not depend
// on the page address, so it works with or without a trailing slash (for example
// /HealingSpotLPC or /HealingSpotLPC/). The dev server uses "/".
export const SITE_ROOT = import.meta.env.DEV ? "/" : new URL("../", import.meta.url).href;
