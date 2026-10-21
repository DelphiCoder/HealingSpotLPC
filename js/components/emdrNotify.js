import { openModal } from "./modal.js";

const FORMSPREE_URL = "https://formspree.io/f/xgaejdlw";

export function openEmdrNotify() {
  const { element, close } = openModal({
    className: "modal--centered",
    lockScroll: true,
    closeOnEscape: true,
    html: `
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel modal__panel--card emdr">
        <button type="button" class="emdr__close" data-close aria-label="Close">✕</button>
        <div class="emdr__intro">
          <span class="pill">Coming Soon</span>
          <h3 class="emdr__title">EMDR Intensives</h3>
          <p class="emdr__text">
            Extended, focused EMDR sessions for deeper trauma processing in a condensed format. Enter your email and
            I'll reach out when they become available.
          </p>
        </div>
        <div class="emdr__body" data-emdr-body>
          ${renderForm()}
        </div>
      </div>`,
  });

  const body = element.querySelector("[data-emdr-body]");
  body.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    if (!email) return;

    const button = form.querySelector("button");
    const errorEl = form.querySelector("[data-error]");
    button.disabled = true;
    button.textContent = "Sending…";
    errorEl.hidden = true;

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: "EMDR Intensives Notification Request", email }),
      });
      if (response.ok) {
        body.innerHTML = renderSuccess();
      } else {
        showError(button, errorEl);
      }
    } catch {
      showError(button, errorEl);
    }
  });

  return close;
}

function showError(button, errorEl) {
  errorEl.hidden = false;
  button.disabled = false;
  button.textContent = "Notify Me";
}

function renderForm() {
  return `
    <form class="emdr__form">
      <input class="emdr__input" type="email" name="email" required placeholder="your@email.com" />
      <p class="emdr__error" data-error hidden>Something went wrong. Please try again.</p>
      <button type="submit" class="emdr__submit">Notify Me</button>
    </form>`;
}

function renderSuccess() {
  return `
    <div class="emdr__success">
      <p class="emdr__success-title">You're on the list!</p>
      <p class="emdr__success-text">I'll be in touch when EMDR intensives are available.</p>
    </div>`;
}
