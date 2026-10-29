import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BOOKING_URL } from "../data/constants";
import { svgPaths } from "../data/svgPaths";
import ClientPortal from "./ClientPortal";

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu and the portal whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
    setPortalOpen(false);
  }, [pathname]);

  const openPortal = () => {
    setMenuOpen(false);
    setPortalOpen(true);
  };

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`} id="site-header">
      <div className="header__bar">
        <Link to="/" className="brand">
          <span className="brand__mark">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d={svgPaths.p299ab2c0} stroke="#4A5D4E" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </span>
          <span className="brand__name">The Healing Spot, LPC</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav__link">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__actions">
          <button type="button" className="btn btn--outline" onClick={openPortal}>
            Client Portal
          </button>
          <a href={BOOKING_URL} className="btn btn--solid">
            Book a Consultation
          </a>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} className="mobile-menu__link">
            {link.label}
          </NavLink>
        ))}
        <div className="mobile-menu__actions">
          <button type="button" className="btn btn--outline btn--block" onClick={openPortal}>
            Client Portal
          </button>
          <a href={BOOKING_URL} className="btn btn--solid btn--block">
            Book a Consultation
          </a>
        </div>
      </div>
      {portalOpen && <ClientPortal onClose={() => setPortalOpen(false)} />}
    </header>
  );
}
