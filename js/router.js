import { closeAllModals } from "./components/modal.js";
import { currentRoute } from "./paths.js";
import { HomePage } from "./pages/home.js";
import { AboutPage } from "./pages/about.js";
import { ServicesPage } from "./pages/services.js";
import { FeesPage } from "./pages/fees.js";
import { ResourcesPage } from "./pages/resources.js";
import { ContactPage } from "./pages/contact.js";

const ROUTES = {
  "/": HomePage,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/fees": FeesPage,
  "/resources": ResourcesPage,
  "/contact": ContactPage,
};

const NotFoundPage = {
  render: () => `
    <section class="not-found">
      <p class="eyebrow eyebrow--terracotta">Page not found</p>
      <h1 class="not-found__title">This page doesn't exist.</h1>
      <a class="btn btn--solid" href="./">Return home</a>
    </section>`,
};

function scrollToHash(hash) {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (target) target.scrollIntoView();
}

// Minimal History-API router. Pages render into `outlet` and may export an `init(root)` for interactivity.
export function startRouter({ outlet, onNavigate }) {
  let currentPath = null;

  function render() {
    const path = currentRoute();
    const pageChanged = path !== currentPath;

    if (pageChanged) {
      closeAllModals();
      const page = ROUTES[path] ?? NotFoundPage;
      outlet.innerHTML = page.render();
      page.init?.(outlet);
      currentPath = path;
      onNavigate(path);
    }

    if (location.hash) scrollToHash(location.hash);
    else if (pageChanged) window.scrollTo(0, 0);
  }

  function navigate(url) {
    const current = location.pathname + location.search + location.hash;
    if (url !== current) history.pushState(null, "", url);
    render();
  }

  window.addEventListener("popstate", render);

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[href]");
    if (!link || link.target || link.hasAttribute("download") || link.origin !== location.origin) return;
    event.preventDefault();
    navigate(link.pathname + link.search + link.hash);
  });

  render();
}
