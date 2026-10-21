import { BOOKING_URL } from "../constants.js";
import { svgPaths } from "../svgPaths.js";
import { openClientPortal } from "./clientPortal.js";
import { routeHref } from "../paths.js";

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function renderHeader() {
  return `
    <header class="header" id="site-header">
      <div class="header__bar">
        <a href="${routeHref("/")}" class="brand">
          <span class="brand__mark">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="${svgPaths.p299ab2c0}" stroke="#4A5D4E" stroke-linecap="round" stroke-width="2" />
            </svg>
          </span>
          <span class="brand__name">The Healing Spot, LPC</span>
        </a>
        <nav class="nav" aria-label="Primary">
          ${NAV_LINKS.map((link) => `<a href="${routeHref(link.to)}" class="nav__link" data-path="${link.to}">${link.label}</a>`).join("")}
        </nav>
        <div class="header__actions">
          <button type="button" class="btn btn--outline" data-portal>Client Portal</button>
          <a href="${BOOKING_URL}" class="btn btn--solid">Book a Consultation</a>
        </div>
        <button type="button" class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" data-icon-open>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" data-icon-close hidden>
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu" hidden>
        ${NAV_LINKS.map((link) => `<a href="${routeHref(link.to)}" class="mobile-menu__link">${link.label}</a>`).join("")}
        <div class="mobile-menu__actions">
          <button type="button" class="btn btn--outline btn--block" data-portal>Client Portal</button>
          <a href="${BOOKING_URL}" class="btn btn--solid btn--block">Book a Consultation</a>
        </div>
      </div>
    </header>`;
}

// Wires header behaviour (scroll shadow, mobile menu, portal).
// Returns a callback the router calls on every route change to update the active link.
export function initHeader(header) {
  const menuToggle = header.querySelector("[data-menu-toggle]");
  const mobileMenu = header.querySelector("#mobile-menu");
  const iconOpen = header.querySelector("[data-icon-open]");
  const iconClose = header.querySelector("[data-icon-close]");

  const setMenu = (open) => {
    mobileMenu.hidden = !open;
    iconOpen.hidden = open;
    iconClose.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
  };

  menuToggle.addEventListener("click", () => setMenu(mobileMenu.hidden));

  header.addEventListener("click", (event) => {
    if (event.target.closest("[data-portal]")) {
      setMenu(false);
      openClientPortal();
    }
  });

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return (path) => {
    setMenu(false);
    header.querySelectorAll(".nav__link").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.path === path);
    });
  };
}
