import { BOOKING_URL } from "../constants.js";
import { sectionLabel } from "../components/sectionLabel.js";
import { svgPaths } from "../svgPaths.js";

export function renderMeetTherapist() {
  return `
    <section id="team" class="section section--sand section--meet">
      <div class="stack stack--md section--full">
        ${sectionLabel("Meet Your Therapist")}
        <h2 class="display-sans">A steady presence for your journey</h2>
      </div>
      <div class="meet">
        <img class="meet__photo" alt="Brian Counts, LPC" src="assets/brian_damien.jpg" />
        <div class="meet__content">
          <div class="meet__name-block">
            <p class="meet__name">Brian Counts</p>
            <p class="meet__credential">LPC, Licensed Professional Counselor</p>
          </div>
          <div class="divider"></div>
          <div class="stack stack--sm meet__focus">
            <p class="overline overline--sage overline--bold">Areas of Focus</p>
            <div class="chip-row">
              ${["EMDR Therapy", "CBT", "ACT", "Veterans & First Responders"]
                .map((focus) => `<span class="chip chip--sand">${focus}</span>`)
                .join("")}
            </div>
          </div>
          <div class="stack stack--lg meet__copy">
            <p class="meet__quote">
              "We all go through experiences in life that shape us — both positively and negatively. I'm here to help
              you overcome some of the things you haven't been able to let go of."
            </p>
            <!-- TODO -->
            <p class="body-text body-text--relaxed">
              I live in Ludington, MI, with my wife, and my two year old son. More personalized text to follow.
            </p>
            <!-- TODO -->
            <p class="body-text body-text--relaxed">
              My path to counseling came through attending Abilene Christian University, where I learned firsthand
              that growth often comes from the hardest moments. My Christian faith is at the heart of who I am and how I
              show up for my clients — it grounds my work in compassion, grace, and a genuine desire to see people heal.
              I welcome clients from all walks of life and all belief systems, wherever you are on your journey.
            </p>
          </div>
          <div class="meet__actions">
            <a class="btn btn--solid btn--pill-bold" href="${BOOKING_URL}">Book a Free Consultation</a>
            <a class="text-link text-link--icon" href="about#philosophy">
              Learn more about my approach
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
                <path d="${svgPaths.p2b607f80}" stroke="#4A5D4E" stroke-linecap="round" stroke-width="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>`;
}
