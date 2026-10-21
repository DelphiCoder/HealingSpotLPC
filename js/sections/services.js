import { BOOKING_URL } from "../constants.js";
import { sectionLabel } from "../components/sectionLabel.js";
import { openEmdrNotify } from "../components/emdrNotify.js";
import { openPracticeArea } from "../components/practiceAreaDrawer.js";

const FOCUS_AREAS = [
  {
    label: "Trauma & PTSD",
    desc: "Process stored trauma and PTSD using evidence-based approaches including EMDR — so the past stops running your present.",
  },
  {
    label: "Depression",
    desc: "Move through the heaviness, reconnect with what matters, and rebuild a life that feels worth living.",
  },
  {
    label: "Christian Counseling",
    desc: "Faith-integrated therapy that weaves your beliefs into the clinical process — working through life's hardest moments without setting your faith aside.",
  },
];

const ALSO_SPECIALIZING = [
  "Addiction",
  "Anger Management",
  "Anxiety",
  "Bipolar Disorder",
  "Career Counseling",
  "Men's Issues",
  "Personality Disorders",
  "Sports Performance",
  "Stress",
  "Veterans",
];

const APPROACHES = [
  {
    tag: "EMDR Therapy",
    title: "Processing Trauma & PTSD",
    body: "Eye Movement Desensitization and Reprocessing is my primary tool for trauma and PTSD work. It helps your brain process distressing memories so they no longer carry the same emotional charge — allowing you to move forward without being pulled back. EMDR often reaches what years of talk therapy couldn't.",
    researchLabel: "EMDR Research — EMDR International Association",
    researchUrl: "https://www.emdria.org/about-emdr-therapy/",
  },
  {
    tag: "Cognitive Behavioral Therapy (CBT)",
    title: "Addressing Depression & Unhelpful Patterns",
    body: "CBT is particularly effective for depression and anxiety — it helps you identify the thought patterns that keep you stuck and replace them with ones that actually serve you. The skills you build in session translate directly into your daily life.",
    researchLabel: "CBT Research — American Psychological Association",
    researchUrl: "https://www.apa.org/ptsd-guideline/treatments/cognitive-behavioral-therapy",
  },
  {
    tag: "Acceptance & Commitment Therapy (ACT)",
    title: "Building Clarity Through Values & Action",
    body: "ACT helps you get clear on what truly matters to you and take action in that direction — even when difficult emotions show up along the way. Rather than waiting to feel ready, we work on building the psychological flexibility to move toward your values now, so you can build a life that actually feels worth living.",
    researchLabel: "ACT Research — Association for Contextual Behavioral Science",
    researchUrl: "https://contextualscience.org/act",
  },
  {
    tag: "Solution-Focused Therapy",
    title: "Building Momentum Toward What's Working",
    body: "Solution-Focused Therapy shifts the conversation from what's wrong to what's already working and what you want more of. Instead of digging deep into the past, we focus on concrete, achievable goals and the small steps that move you toward them — often in fewer sessions than traditional talk therapy requires.",
    researchLabel: "SFBT Research — Solution-Focused Brief Therapy Association",
    researchUrl: "https://www.sfbta.org/",
  },
];

export function renderServices() {
  return `
    <section id="services" class="section section--cream section--services">
      <div class="stack stack--md section--narrow">
        ${sectionLabel("Areas of Practice & Approach")}
        <h2 class="display-sans display-sans--ink display-sans--lg">Specialized care, evidence-based methods</h2>
      </div>

      <div class="panel-dark">
        <div class="panel-dark__head">
          <div class="stack stack--md panel-dark__intro">
            <span class="overline overline--mist">Individual Therapy · Primary Focus</span>
            <h3 class="display-serif display-serif--dark">One-on-one support built around you</h3>
          </div>
          <p class="panel-dark__lede">
            Sessions are 50 minutes, held weekly or bi-weekly, and shaped entirely around your goals — not a generic
            framework.
          </p>
        </div>
        <div class="focus-grid">
          ${FOCUS_AREAS.map(
            (focus) => `
            <div class="focus">
              <span class="focus__label">${focus.label}</span>
              <p class="focus__desc">${focus.desc}</p>
              <button type="button" class="text-button" data-area="${focus.label}">Learn More →</button>
            </div>`,
          ).join("")}
        </div>
        <div class="panel-dark__footer">
          <div class="stack stack--md">
            <div class="stack stack--xs">
              <span class="overline overline--mist overline--small">Also specializing in</span>
              <span class="panel-dark__hint">Tap any topic to learn more about what it is and how therapy can help.</span>
            </div>
            <div class="chip-row">
              ${ALSO_SPECIALIZING.map(
                (topic) => `<button type="button" class="topic-chip" data-area="${topic}">${topic} →</button>`,
              ).join("")}
            </div>
          </div>
          <a class="btn btn--terracotta btn--pill-bold btn--self-end" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
        </div>
      </div>

      <div class="callout">
        <div class="callout__inner">
          <div class="callout__copy">
            <div class="callout__kicker">
              <span class="callout__dot"></span>
              <span class="overline overline--terracotta">Important to Know</span>
            </div>
            <h4 class="callout__title">Struggling with suicidal thoughts doesn't mean you're headed for a crisis center.</h4>
            <p class="callout__text">
              Suicidal ideation is a symptom — not the problem itself. It's a sign that the pain you're carrying has
              become more than you know how to hold right now. My role is not to react with alarm or send you somewhere
              against your will. It's to sit with you honestly and help you find a way through.
            </p>
          </div>
          <div class="callout__actions">
            <button type="button" class="btn btn--terracotta" data-area="Suicidal Ideation">Read More</button>
            <a class="btn btn--outline-terracotta" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
          </div>
        </div>
      </div>

      <div class="notice">
        <div class="notice__copy">
          <span class="badge">Coming Soon</span>
          <div class="stack stack--xs">
            <span class="notice__title">EMDR Intensives</span>
            <span class="notice__text">
              Extended, focused EMDR sessions will be offered in the future for deeper trauma processing in a condensed
              format.
            </span>
          </div>
        </div>
        <button type="button" class="btn btn--outline btn--small" data-emdr>Get Notified</button>
      </div>

      <div class="offer">
        <div class="stack stack--sm offer__copy">
          <span class="overline overline--brown overline--small">Also Available</span>
          <h4 class="offer__title">Couples Counseling</h4>
          <p class="offer__text">
            For couples navigating communication breakdowns, rebuilding trust, or working through a difficult transition
            together.
          </p>
        </div>
        <div class="offer__actions">
          <button type="button" class="btn btn--outline btn--small" data-area="Couples Counseling">Learn More</button>
          <a class="btn btn--solid btn--small" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
        </div>
      </div>

      <div class="divider divider--full"></div>

      <div id="approach" class="approach">
        <div class="approach__intro">
          ${sectionLabel("My Therapeutic Approach")}
          <h3 class="display-approach">How we do the work</h3>
          <p class="body-text body-text--loose">
            I integrate evidence-based therapeutic approaches tailored to your unique needs. Each modality offers a
            different path toward healing — and together, we find the combination that works best for you.
          </p>
          <a class="btn btn--outline btn--pill-md" href="contact">Get in Touch</a>
        </div>
        <div class="approach__list">
          ${APPROACHES.map(
            (approach) => `
            <div class="approach__item">
              <div class="approach__row">
                <div class="approach__heading">
                  <span class="approach__tag">${approach.tag}</span>
                  <span class="approach__title">${approach.title}</span>
                </div>
                <p class="approach__body">${approach.body}</p>
              </div>
              <a class="research-link" href="${approach.researchUrl}" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>${approach.researchLabel}</span>
              </a>
            </div>`,
          ).join("")}
        </div>
      </div>
    </section>`;
}

// Wires up "Learn More" buttons (drawer), the EMDR waitlist, and nothing else.
export function initServices(root) {
  const section = root.querySelector("#services");
  if (!section) return;

  section.addEventListener("click", (event) => {
    const areaButton = event.target.closest("[data-area]");
    if (areaButton) {
      openPracticeArea(areaButton.dataset.area);
      return;
    }
    if (event.target.closest("[data-emdr]")) openEmdrNotify();
  });
}
