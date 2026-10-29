import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { BOOKING_URL } from "../data/constants";
import { svgPaths } from "../data/svgPaths";

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

// Single-open accordion: clicking a card toggles it and closes the others.
export default function Concerns() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (event, index) => {
    if (event.target.closest("a")) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section--cream section--concerns">
      <div className="stack stack--lg">
        <h2 className="display-sans display-sans--ink display-sans--concerns">Do Any of These Sound Like You?</h2>
        <div className="concern-grid">
          {CONCERNS.map((concern, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={concern.title}
                className={`concern${isOpen ? " is-open" : ""}`}
                onClick={(event) => handleClick(event, index)}
              >
                <button type="button" className="concern__head" aria-expanded={isOpen}>
                  <span className="concern__text">
                    <span className="concern__title">{concern.title}</span>
                    <span className="concern__short">{concern.short}</span>
                  </span>
                  <span className="concern__toggle" aria-hidden="true">
                    <svg width="12" height="12" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p22a98e00} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
                <div className="concern__detail" hidden={!isOpen}>
                  <div className="concern__divider"></div>
                  <p className="concern__body">{concern.detail}</p>
                  <span className="concern__tag">{concern.tag}</span>
                  <a className="btn btn--terracotta btn--pill-small" href={BOOKING_URL}>
                    Book a Consultation
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
