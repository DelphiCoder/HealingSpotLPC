import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { BOOKING_URL } from "../data/constants";

const FAQ_GROUPS = [
  {
    label: "Getting Started",
    color: "#c68b75",
    faqs: [
      {
        q: "I've never been to therapy before. What should I expect?",
        a: "That's okay — most people feel nervous before their first session. We'll start by just talking. I want to understand what's bringing you in, what your life looks like right now, and what you're hoping for. There's no pressure to have it all figured out. You don't need to know what's wrong — just showing up is enough.",
      },
      {
        q: "How do I know if you're the right fit for me?",
        a: "The best way to find out is through the free 15-minute consultation call. We'll talk briefly about what you're looking for, and you can get a feel for my style. If it doesn't feel like a good fit, I will honestly tell you and help connect you with someone who may be better suited. Finding the right therapist matters more to me than filling a slot.",
      },
    ],
  },
  {
    label: "Sessions & Logistics",
    color: "#4a5d4e",
    faqs: [
      {
        q: "Do you offer telehealth or in-person sessions?",
        a: "I offer both. In-person sessions are available in Ludington, Michigan. I also offer telehealth sessions for clients in Michigan and Texas, including the Austin area. Many clients mix both depending on the week — whatever works best for you.",
      },
      {
        q: "How long does therapy usually take?",
        a: "It depends entirely on you and your goals. Some people feel meaningfully better in a few months; others find ongoing therapy valuable for years. We'll check in regularly about your progress and adjust as needed — I don't believe in keeping clients longer than is helpful.",
      },
      {
        q: "What is your cancellation policy?",
        a: "I ask for at least 24 hours notice if you need to cancel or reschedule. Sessions cancelled with less than 24 hours notice are charged at the full session rate. Life happens — if something urgent comes up, reach out and we can talk through it.",
      },
    ],
  },
  {
    label: "Fees & Insurance",
    color: "#8a7560",
    faqs: [
      {
        q: "Do you take insurance?",
        a: "Yes. I am currently in-network with Aetna, Blue Cross Blue Shield, Cigna, and United Healthcare. If you have a different plan, I can provide a superbill for potential out-of-network reimbursement. Use the Insurance & Rates button at the top of the page for more detail.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "I have a limited number of sliding scale slots available for clients who demonstrate financial need. Sliding scale fees are based on income. Please bring this up during your consultation call and we will figure out what works.",
      },
    ],
  },
];

// Single-open accordion across all groups. `index` is the FAQ's position across every group.
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  let offset = 0;

  return (
    <section className="section-plain section--faq">
      <div className="faq">
        <div className="faq__intro">
          <div className="stack stack--md faq__heading">
            <SectionLabel label="FAQ" />
            <h2 className="display-sans display-sans--ink display-sans--faq">Questions I hear often</h2>
          </div>
          <p className="body-text body-text--muted faq__lede">
            Starting therapy brings up a lot of questions. Here are honest answers to the ones I hear most.
          </p>
        </div>
        <div className="faq__groups">
          {FAQ_GROUPS.map((group) => {
            const groupOffset = offset;
            offset += group.faqs.length;
            return (
              <div key={group.label} className="faq-group">
                <div className="faq-group__label" style={{ "--accent": group.color }}>
                  <span className="faq-group__dot"></span>
                  <span className="faq-group__name">{group.label}</span>
                </div>
                <div className="faq-group__list">
                  {group.faqs.map((faq, faqIndex) => {
                    const index = groupOffset + faqIndex;
                    const isOpen = index === openIndex;
                    return (
                      <div
                        key={faq.q}
                        className={`faq-item${isOpen ? " is-open" : ""}`}
                        style={{ "--accent": group.color }}
                      >
                        <button
                          type="button"
                          className="faq-item__question"
                          aria-expanded={isOpen}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span className="faq-item__text">{faq.q}</span>
                          <span className="faq-item__icon" aria-hidden="true">
                            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </span>
                        </button>
                        <p className="faq-item__answer" hidden={!isOpen}>
                          {faq.a}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="faq__cta">
          <div className="stack stack--sm">
            <p className="faq__cta-title">Still have questions?</p>
            <p className="faq__cta-text">
              The consultation call is the best place to get real answers for your specific situation.
            </p>
          </div>
          <a
            className="btn btn--solid btn--pill-bold btn--self-center"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
