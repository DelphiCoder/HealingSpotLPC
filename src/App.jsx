import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FeesPage from "./pages/FeesPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import { SITE_ROOT } from "./lib/siteRoot";
import { NOT_FOUND_TITLE, PAGE_TITLES, SITE_URL } from "./data/pages";

// Folder the site is served from: "" on a domain root, "/HealingSpotLPC" on a GitHub project page.
const basename = new URL(SITE_ROOT, window.location.href).pathname.replace(/\/$/, "");

// Jumps to the hash target when there is one, otherwise back to the top on a new page.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
    }
    previousPath.current = pathname;
  }, [pathname, hash]);

  return null;
}

// Finds a <head> tag, creating it if needed.
function headTag(selector, create) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  return tag;
}

// Gives each page its own title and canonical address (index.html only has the
// home page's), and tells search engines not to index unknown addresses.
function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const known = Object.hasOwn(PAGE_TITLES, path);
    const url = SITE_URL + (path === "/" ? "/" : path);

    document.title = known ? PAGE_TITLES[path] : NOT_FOUND_TITLE;
    headTag('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" })).href = url;
    headTag('meta[property="og:url"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      return tag;
    }).content = url;

    const robots = document.head.querySelector('meta[name="robots"]');
    if (known) robots?.remove();
    else headTag('meta[name="robots"]', () => Object.assign(document.createElement("meta"), { name: "robots" })).content = "noindex";
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollManager />
      <PageMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="fees" element={<FeesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
