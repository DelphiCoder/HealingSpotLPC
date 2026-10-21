import { BOOKING_URL } from "../constants.js";
import { sectionLabel } from "../components/sectionLabel.js";

export function renderHero() {
  return `
    <section id="about" class="hero">
      <div class="hero__inner">
        <div class="hero__copy">
          ${sectionLabel("Welcome", { light: true })}
          <h1 class="hero__title">If you're here, it's because something needs to change.</h1>
          <p class="hero__lede">
            You may feel overwhelmed, stuck, or tired of carrying everything on your own. Whether you're a veteran,
            first responder, college student, or anyone navigating life's challenges — therapy can help. I'm here when
            you're ready.
          </p>
          <div class="hero__ctas">
            <a class="btn btn--terracotta btn--hero" href="${BOOKING_URL}">Book a Free Consultation</a>
            <a class="btn btn--ghost-light btn--hero" href="about">My Approach</a>
          </div>
          <div class="hero__location">
            <span class="hero__location-rule" aria-hidden="true"></span>
            <span class="hero__location-text">Zachary Terry · LPC · Stillwater, OK</span>
          </div>
        </div>
        <div class="hero__media">
          <img class="hero__photo" src="assets/zachary-terry.png" alt="Zachary Terry, Licensed Professional Counselor" />
          <div class="hero__fade" aria-hidden="true"></div>
        </div>
      </div>
    </section>`;
}
