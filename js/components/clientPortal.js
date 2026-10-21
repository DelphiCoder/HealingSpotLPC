import { HEADWAY_PLANS, HEADWAY_URL, SIMPLEPRACTICE_PLANS, SIMPLEPRACTICE_URL } from "../constants.js";
import { openModal } from "./modal.js";

export function openClientPortal() {
  return openModal({
    className: "modal--centered",
    lockScroll: true,
    html: `
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel portal">
        <div class="portal__header">
          <div class="portal__heading">
            <span class="eyebrow eyebrow--terracotta">Client Portal</span>
            <h2 class="portal__title">Who is your insurance through?</h2>
            <p class="portal__intro">Select your plan below and we'll take you to the right portal.</p>
          </div>
          <button type="button" class="icon-button icon-button--outline" data-close aria-label="Close">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="#4a5d4e" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div class="portal__group">
          <span class="eyebrow eyebrow--sage eyebrow--small">Billed through SimplePractice</span>
          <div class="portal__grid">
            ${SIMPLEPRACTICE_PLANS.map(
              (plan) => `
              <a class="portal__plan portal__plan--sage" href="${SIMPLEPRACTICE_URL}" target="_blank" rel="noopener noreferrer">
                <span>${plan}</span>
              </a>`,
            ).join("")}
          </div>
        </div>
        <div class="portal__group portal__group--tight">
          <span class="eyebrow eyebrow--terracotta eyebrow--small">Billed through Headway</span>
          <div class="portal__grid">
            ${HEADWAY_PLANS.map(
              (plan) => `
              <a class="portal__plan portal__plan--terracotta" href="${HEADWAY_URL}" target="_blank" rel="noopener noreferrer">
                <span>${plan}</span>
              </a>`,
            ).join("")}
          </div>
        </div>
        <div class="portal__footer">
          <div class="portal__footer-text">
            <span class="portal__footer-title">Paying out of pocket?</span>
            <span class="portal__footer-sub">Private pay clients use Headway</span>
          </div>
          <a class="btn btn--solid btn--small" href="${HEADWAY_URL}" target="_blank" rel="noopener noreferrer">Go to Portal →</a>
        </div>
      </div>`,
  });
}
