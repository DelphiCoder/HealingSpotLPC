// Path helpers so the site works from any base path (e.g. https://user.github.io/repo/).

// Directory the site is served from: "/" at a domain root, "/repo/" on a GitHub project page.
export const BASE_PATH = new URL("./", document.baseURI).pathname;

// Turns a route key like "/about" into a relative href ("about") that resolves under BASE_PATH.
export function routeHref(route) {
  return route === "/" ? "./" : route.slice(1);
}

// Returns the route key ("/", "/about", ...) for the current browser location.
export function currentRoute() {
  let path = location.pathname;
  if (path.startsWith(BASE_PATH)) path = "/" + path.slice(BASE_PATH.length);
  path = path.replace(/\/+$/, "");
  return path || "/";
}
