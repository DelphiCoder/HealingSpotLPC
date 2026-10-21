import { BOOKING_URL, EMAIL, PHONE } from "../constants.js";
import { renderContactForm, initContactForm } from "../components/contactForm.js";
import { svgPaths } from "../svgPaths.js";

export function renderContact() {
  return `
    <section id="contact" class="section section--cream section--contact">
      <div class="contact__info">
        <div class="section-label">
          <span class="section-label__rule" aria-hidden="true"></span>
          <span class="section-label__text">Connect</span>
        </div>
        <h2 class="display-sans display-sans--ink display-sans--contact">Ready to take the first step?</h2>
        <p class="body-text body-text--contact">
          I offer a free 15-minute consultation to see if we're a good fit. If you're ready, things can improve — and
          you don't have to do it alone.
        </p>
        <div class="contact__lines">
          <a class="contact__line" href="tel:${PHONE.replace(/\D/g, "")}">
            ${iconSvg(svgPaths.p29098400)}
            <span class="contact__value">${PHONE}</span>
          </a>
          <a class="contact__line" href="mailto:${EMAIL}">
            ${iconSvg(svgPaths.p10d0c00)}
            <span class="contact__value">${EMAIL}</span>
          </a>
          <div class="contact__line contact__line--address">
            ${iconSvg(svgPaths.p8b99100, "contact__icon--top")}
            <div class="stack stack--xs">
              <span class="contact__office">The Warren Alexander Group</span>
              <span class="contact__address">1409 S Main St, Stillwater, OK 74074</span>
            </div>
          </div>
        </div>
        <div class="office-card">
          <img class="office-card__photo" src="assets/office.png" alt="The Warren Alexander Group — 1409 S Main St, Stillwater, OK" />
          <div class="office-card__bar">
            <div class="stack stack--xs">
              <span class="office-card__name">The Warren Alexander Group</span>
              <span class="office-card__address">1409 S Main St · Stillwater, OK 74074</span>
            </div>
            <a class="text-link text-link--small" href="https://maps.google.com/?q=1409+S+Main+St+Stillwater+OK+74074" target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
        </div>
        <a class="btn btn--solid btn--pill-bold btn--self-start" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
      </div>
      <div class="contact__form" data-contact-slot>
        ${renderContactForm()}
      </div>
    </section>`;
}

function iconSvg(path, extraClass = "") {
  return `
    <span class="contact__icon ${extraClass}" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="${path}" stroke="#C68B75" stroke-linecap="round" stroke-width="2" />
      </svg>
    </span>`;
}

export function initContact(root) {
  const slot = root.querySelector("[data-contact-slot]");
  if (slot) initContactForm(slot);
}
