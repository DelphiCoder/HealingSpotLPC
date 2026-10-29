// Resolves a file in /public against the site's base path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
