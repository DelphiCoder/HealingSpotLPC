const FORMSPREE_URL = "https://formspree.io/f/xgaejdlw";

export function renderContactForm() {
  return `
    <form class="contact-form" data-contact-form>
      <h3 class="contact-form__title">Send a Message</h3>
      <div class="contact-form__row">
        <div class="field">
          <label class="field__label" for="cf-name">Full Name</label>
          <input class="field__input" id="cf-name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div class="field">
          <label class="field__label" for="cf-email">Email</label>
          <input class="field__input" id="cf-email" name="email" type="email" required placeholder="your@email.com" />
        </div>
      </div>
      <div class="contact-form__row">
        <div class="field">
          <label class="field__label" for="cf-phone">Phone (optional)</label>
          <input class="field__input" id="cf-phone" name="phone" type="tel" placeholder="(000) 000-0000" />
        </div>
        <div class="field">
          <label class="field__label" for="cf-service">Area of Interest</label>
          <select class="field__input field__input--select" id="cf-service" name="service">
            <option value="">Select a service…</option>
            <option>Individual Therapy</option>
            <option>Couples Counseling</option>
            <option>Trauma &amp; EMDR</option>
            <option>Military, Veterans &amp; First Responders</option>
            <option>Somatic Therapy</option>
            <option>Anxiety &amp; Burnout</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="field__label" for="cf-message">Message</label>
        <textarea class="field__input field__input--textarea" id="cf-message" name="message" rows="4" required placeholder="Tell me a bit about what's brought you here…"></textarea>
      </div>
      <p class="form-error" data-form-error hidden>Something went wrong sending your message. Please try again or call (405) 293-3099.</p>
      <button type="submit" class="btn btn--solid btn--form" data-submit>Send Message</button>
    </form>`;
}

// Wires up a rendered contact form inside `slot`. On success the form is replaced with a confirmation.
export function initContactForm(slot) {
  const form = slot.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("[data-submit]");
    const errorEl = form.querySelector("[data-form-error]");
    const data = new FormData(form);

    button.disabled = true;
    button.textContent = "Sending…";
    errorEl.hidden = true;

    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      slot.innerHTML = renderSuccess();
    } catch {
      errorEl.hidden = false;
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });
}

function renderSuccess() {
  return `
    <div class="contact-success">
      <div class="contact-success__icon">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 10l4 4 8-8" stroke="#faf8f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <p class="contact-success__title">Message Received</p>
      <p class="contact-success__text">Thank you for reaching out. I'll be in touch within 1 business day to schedule your free consultation.</p>
    </div>`;
}
