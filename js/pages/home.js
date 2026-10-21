import { BOOKING_URL } from "../constants.js";
import { renderHero } from "../sections/hero.js";
import { renderConcerns, initConcerns } from "../sections/concerns.js";

export const HomePage = {
  render: () => `
    ${renderHero()}
    ${renderConcerns()}
    <section class="cta-band">
      <div class="cta-band__inner">
        <div class="cta-band__copy">
          <p class="cta-band__title">Ready to take the first step?</p>
          <p class="cta-band__text">
            A crucible doesn't destroy what's poured into it — it transforms it. You bring what's been weighing on
            you, and together we apply the right conditions to help you come out as a version you can look at in the
            mirror. Every session will be a testament to your will to withstand the forge.
          </p>
        </div>
        <div class="cta-band__actions">
          <a class="btn btn--white" href="${BOOKING_URL}">Book a Free Consultation</a>
          <a class="btn btn--ghost-light" href="services">View Services</a>
        </div>
      </div>
    </section>`,
  init: (root) => initConcerns(root),
};
