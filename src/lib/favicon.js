import { asset } from "./asset";

// Sets the browser-tab icon from a file in /public at runtime.
// A static <link rel="icon"> in index.html can be ignored or cached on localhost,
// on subdomains, and under a project folder such as /HealingSpotLPC/, so the link is
// created here, using the same site-root resolution as the rest of the site.
export function setFavicon(path = "logos/Healing_spot_logo_sans_text.svg") {
  const href = asset(path);

  document.querySelectorAll("link[rel~='icon']").forEach((link) => link.remove());

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = href;
  document.head.appendChild(link);
}
