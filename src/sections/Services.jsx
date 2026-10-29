import { useState } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import PracticeAreaDrawer from "../components/PracticeAreaDrawer";
import { BOOKING_URL } from "../data/constants";

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
    label: "Anxiety",
    desc: "Quiet the constant worry and tension in your body, and build tools that help your nervous system settle.",
  },
];

const ALSO_SPECIALIZING = [
  "ADHD",
  "Anger Management",
  "Bipolar Disorder",
  "Career Counseling",
  "Christian Counseling",
  "Men's Issues",
  "Obsessive Compulsive Disorder",
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

export default function Services() {
  // Practice-area label whose drawer is open, or null.
  const [areaLabel, setAreaLabel] = useState(null);

  return (
    <section id="services" className="section section--cream section--services">
      <div className="stack stack--md section--narrow">
        <SectionLabel label="Areas of Practice & Approach" />
        <h2 className="display-sans display-sans--ink display-sans--lg">Specialized care, evidence-based methods</h2>
      </div>

      <div className="panel-dark">
        <div className="panel-dark__head">
          <div className="stack stack--md panel-dark__intro">
            <span className="overline overline--mist">Individual Therapy · Primary Focus</span>
            <h3 className="display-serif display-serif--dark">One-on-one support built around you</h3>
          </div>
          <p className="panel-dark__lede">
            Sessions are 55 minutes, held weekly or bi-weekly.
          </p>
        </div>
        <div className="focus-grid">
          {FOCUS_AREAS.map((focus) => (
            <div key={focus.label} className="focus">
              <span className="focus__label">{focus.label}</span>
              <p className="focus__desc">{focus.desc}</p>
              <button type="button" className="text-button" onClick={() => setAreaLabel(focus.label)}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
        <div className="panel-dark__footer">
          <div className="stack stack--md">
            <div className="stack stack--xs">
              <span className="overline overline--mist overline--small">Also specializing in</span>
              <span className="panel-dark__hint">
                Tap any topic to learn more about what it is and how therapy can help.
              </span>
            </div>
            <div className="chip-row">
              {ALSO_SPECIALIZING.map((topic) => (
                <button key={topic} type="button" className="topic-chip" onClick={() => setAreaLabel(topic)}>
                  {topic} →
                </button>
              ))}
            </div>
          </div>
          <a
            className="btn btn--terracotta btn--pill-bold btn--self-end"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      <div className="callout">
        <div className="callout__inner">
          <div className="callout__copy">
            <div className="callout__kicker">
              <span className="callout__dot"></span>
              <span className="overline overline--terracotta">Important to Know</span>
            </div>
            <h4 className="callout__title">
              Struggling with suicidal thoughts doesn't mean you're headed for a crisis center.
            </h4>
            <p className="callout__text">
              Suicidal ideation is a symptom — not the problem itself. It's a sign that the pain you're carrying has become
              more than you know how to hold right now. My role is not to react with alarm or send you somewhere against
              your will. It's to sit with you honestly and help you find a way through.
            </p>
          </div>
          <div className="callout__actions">
            <button type="button" className="btn btn--terracotta" onClick={() => setAreaLabel("Suicidal Ideation")}>
              Read More
            </button>
            <a className="btn btn--outline-terracotta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="stack stack--sm offer__copy">
          <span className="overline overline--brown overline--small">Also Available</span>
          <h4 className="offer__title">Couples Counseling</h4>
          <p className="offer__text">
            For couples navigating communication breakdowns, rebuilding trust, or working through a difficult transition
            together.
          </p>
        </div>
        <div className="offer__actions">
          <button type="button" className="btn btn--outline btn--small" onClick={() => setAreaLabel("Couples Counseling")}>
            Learn More
          </button>
          <a className="btn btn--solid btn--small" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a Consultation
          </a>
        </div>
      </div>

      <div className="divider divider--full"></div>

      <div id="approach" className="approach">
        <div className="approach__intro">
          <SectionLabel label="My Therapeutic Approach" />
          <h3 className="display-approach">How we do the work</h3>
          <p className="body-text body-text--loose">
            I integrate evidence-based therapeutic approaches tailored to your unique needs. Each modality offers a
            different path toward healing — and together, we find the combination that works best for you.
          </p>
          <Link className="btn btn--outline btn--pill-md" to="/contact">
            Get in Touch
          </Link>
        </div>
        <div className="approach__list">
          {APPROACHES.map((approach) => (
            <div key={approach.tag} className="approach__item">
              <div className="approach__row">
                <div className="approach__heading">
                  <span className="approach__tag">{approach.tag}</span>
                  <span className="approach__title">{approach.title}</span>
                </div>
                <p className="approach__body">{approach.body}</p>
              </div>
              <a className="research-link" href={approach.researchUrl} target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    d="M1 6h10M6 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{approach.researchLabel}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {areaLabel && <PracticeAreaDrawer label={areaLabel} onClose={() => setAreaLabel(null)} />}
    </section>
  );
}
