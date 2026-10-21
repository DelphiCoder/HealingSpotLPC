import { routeHref } from "../paths.js";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About & Approach", to: "/about" },
  { label: "Areas of Practice", to: "/services" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="crisis">
          <div class="crisis__dot" aria-hidden="true"></div>
          <p class="crisis__text">
            <span class="crisis__label">Emergency Support:</span> If you are experiencing an
            immediate crisis, please call or text
            <a href="tel:988" class="crisis__link">988</a>
            to reach the Suicide &amp; Crisis Lifeline, available 24/7.
          </p>
        </div>
        <div class="footer__columns">
          <div class="footer__about">
            <p class="footer__name">Bridge to Wellness Therapy</p>
            <p class="footer__blurb">
              Individual therapy for trauma, depression, and men's issues — offered in person in Stillwater, OK and via
              telehealth across Oklahoma. Zachary Terry, LPC.
            </p>
          </div>
          <div class="footer__links">
            <div class="footer__col">
              <p class="footer__heading">Explore</p>
              ${FOOTER_LINKS.map((link) => `<a href="${routeHref(link.to)}" class="footer__link">${link.label}</a>`).join("")}
            </div>
            <div class="footer__col">
              <p class="footer__heading">Hours</p>
              <p class="footer__text">By Appointment Only</p>
              <p class="footer__text">(405) 293-3099</p>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__copyright">© 2026 Bridge to Wellness Therapy LLP. All rights reserved.</p>
          <div class="footer__legal">
            <span class="footer__legal-link">Privacy Policy</span>
            <span class="footer__legal-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>`;
}
