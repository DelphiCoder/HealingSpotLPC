import { BOOKING_URL } from "../constants.js";
import { sectionLabel } from "../components/sectionLabel.js";
import { svgPaths } from "../svgPaths.js";

const CONCERNS = [
  {
    title: "You can't turn your brain off",
    short: "Constant worry, dread, or a mind that never fully rests",
    detail:
      "You lie awake running through conversations that already happened. You brace for things that haven't. Your body is tired but your mind won't slow down. This isn't weakness — it's a nervous system stuck in overdrive. Therapy helps you understand why it's happening and gives you real tools to find your way back to quiet.",
    tag: "Anxiety · Stress · Burnout",
  },
  {
    title: "Something happened and you haven't been the same since",
    short: "Carrying something you can't seem to put down",
    detail:
      "Maybe it was one event. Maybe it was years of smaller things. Either way, it left a mark — and no matter how much time passes, it still pulls you back. You might avoid certain situations, feel numb, or react in ways that don't make sense to you. That's not weakness. That's what happens when the mind tries to protect you from something it didn't know how to process.",
    tag: "Trauma · PTSD · EMDR",
  },
  {
    title: "You're fine on the outside, but empty on the inside",
    short: "Going through the motions without really being there",
    detail:
      "You're showing up. You're doing the things. But nothing feels like it used to. Joy is hard to access. Mornings are heavy. You're not sure if this is just life now, or if something is actually wrong. It's not just life. Depression looks different for everyone — and it's one of the most treatable things we work on together.",
    tag: "Depression · Mood · Meaning",
  },
  {
    title: "You've been the strong one for too long",
    short: "Carrying everyone else while running on empty",
    detail:
      "You don't ask for help. You handle things. You figure it out. But somewhere along the way, the weight started to show — in how you sleep, how you lose your patience, how far away you feel from yourself. Men especially are often taught that asking for help is weakness. It isn't. It's the hardest and most important thing you can do.",
    tag: "Men's Issues · Burnout · Identity",
  },
  {
    title: "You and your partner keep having the same fight",
    short: "Feeling unheard, disconnected, or like you're drifting apart",
    detail:
      "It's not that you don't love each other. It's that you've stopped being able to reach each other. The same argument cycles back. One of you shuts down. The other escalates. Or you've just gone quiet. Couples therapy isn't a last resort — it's a place to slow down, actually hear each other, and do the repair work together.",
    tag: "Relationships · Communication · Trust",
  },
  {
    title: "You don't recognize your life — or yourself — anymore",
    short: "Navigating a transition that's left you untethered",
    detail:
      "A job ended. A relationship did. A role you built your life around shifted. Or maybe nothing dramatic happened — you just woke up one day and realized you don't know who you are without the things you used to be. Identity and transition work isn't about finding the answers. It's about creating enough space to hear yourself again.",
    tag: "Life Transitions · Identity · Purpose",
  },
];

export function renderConcerns() {
  return `
    <section class="section section--cream section--concerns" data-concerns>
      <div class="stack stack--lg">
        <div class="stack stack--sm">
          ${sectionLabel("Do Any of These Sound Like You?")}
          <p class="display-serif display-serif--concerns">
            You don't have to have the right words. Just a feeling that something needs to change.
          </p>
        </div>
        <div class="concern-grid">
          ${CONCERNS.map(
            (concern, index) => `
            <div class="concern" data-concern="${index}">
              <button type="button" class="concern__head" aria-expanded="false">
                <span class="concern__text">
                  <span class="concern__title">${concern.title}</span>
                  <span class="concern__short">${concern.short}</span>
                </span>
                <span class="concern__toggle" aria-hidden="true">
                  <svg width="12" height="12" fill="none" viewBox="0 0 18 18">
                    <path d="${svgPaths.p22a98e00}" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
                  </svg>
                </span>
              </button>
              <div class="concern__detail" hidden>
                <div class="concern__divider"></div>
                <p class="concern__body">${concern.detail}</p>
                <span class="concern__tag">${concern.tag}</span>
                <a class="btn btn--terracotta btn--pill-small" href="${BOOKING_URL}">Book a Consultation</a>
              </div>
            </div>`,
          ).join("")}
        </div>
      </div>
    </section>`;
}

// Single-open accordion: clicking a card toggles it and closes the others.
export function initConcerns(root) {
  const section = root.querySelector("[data-concerns]");
  if (!section) return;

  let openIndex = null;
  const cards = [...section.querySelectorAll("[data-concern]")];

  const apply = () => {
    cards.forEach((card, index) => {
      const isOpen = index === openIndex;
      card.classList.toggle("is-open", isOpen);
      card.querySelector(".concern__head").setAttribute("aria-expanded", String(isOpen));
      card.querySelector(".concern__detail").hidden = !isOpen;
    });
  };

  section.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    const card = event.target.closest("[data-concern]");
    if (!card) return;
    const index = Number(card.dataset.concern);
    openIndex = openIndex === index ? null : index;
    apply();
  });
}
