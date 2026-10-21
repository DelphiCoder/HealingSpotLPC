import { BOOKING_URL } from "../constants.js";
import { PRACTICE_AREAS } from "../practiceAreas.js";
import { escapeHtml } from "../dom.js";
import { openModal } from "./modal.js";

// Opens the side drawer for a practice area. Does nothing if the label has no copy yet.
export function openPracticeArea(label) {
  const area = PRACTICE_AREAS[label];
  if (!area) return null;

  return openModal({
    className: "modal--drawer",
    lockScroll: true,
    html: `
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel drawer">
        <div class="drawer__header">
          <div class="drawer__heading">
            <span class="eyebrow eyebrow--terracotta">Area of Practice</span>
            <h2 class="drawer__title">${escapeHtml(label)}</h2>
          </div>
          <button type="button" class="icon-button icon-button--outline icon-button--round-lg" data-close aria-label="Close">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="#4a5d4e" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div class="drawer__body">
          <div class="drawer__block">
            <span class="eyebrow eyebrow--sage eyebrow--semibold">What it is</span>
            <p class="drawer__text">${area.what}</p>
          </div>
          <div class="drawer__block">
            <span class="eyebrow eyebrow--sage eyebrow--semibold">How it shows up</span>
            <p class="drawer__text">${area.how}</p>
          </div>
          <div class="drawer__block drawer__block--list">
            <span class="eyebrow eyebrow--sage eyebrow--semibold">Benefits of treatment</span>
            <ul class="drawer__benefits">
              ${area.benefits
                .map(
                  (benefit) => `
                <li class="drawer__benefit">
                  <span class="drawer__dot" aria-hidden="true"></span>
                  <span>${benefit}</span>
                </li>`,
                )
                .join("")}
            </ul>
          </div>
        </div>
        <div class="drawer__footer">
          <a class="btn btn--solid btn--wide" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
          <button type="button" class="btn btn--outline btn--wide" data-close>Back to Site</button>
        </div>
      </div>`,
  });
}
