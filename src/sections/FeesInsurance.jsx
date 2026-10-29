import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import InsuranceGlossary from "../components/InsuranceGlossary";
import { asset } from "../lib/asset";

const RATES = [
  { title: "Individual Session", price: "$135", desc: "55-minute individual therapy session." },
  { title: "Couples Session", price: "$145", desc: "55-minute couples counseling session." },
  {
    title: "Sliding Scale",
    price: "Income-Based",
    desc: "Limited slots available for clients who qualify based on income. Reach out to inquire.",
  },
];

const PAYMENT_METHODS = ["ACH Bank Transfer", "Cash", "Discover", "HSA", "Mastercard", "Visa"];

// Logo files live in public/logos/. Insurers without a file yet show their name only
// (the <img> is hidden when it fails to load).
const INSURERS = [
  { name: "Aetna", logo: "aetna_2.png" },
  { name: "BCBS", logo: "bcbs.png" },
  { name: "Cigna / Evernorth", logo: "cigna.png" },
  { name: "Carelon Behavioral Health", logo: "carelon.png" },
  { name: "Optum", logo: "optum-com-logo.png" },
  { name: "Quest Behavioral Health", logo: "quest.png" },
  { name: "UMR", logo: "umr.png" },
  { name: "UnitedHealthcare", logo: "uhc.png" },
  { name: "WebTPA", logo: "webtpa.png" },
  { name: "Ascension SmartHealth", logo: "ascension.png" },
];

export default function FeesInsurance() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  return (
    <section id="fees" className="section section--sand section--fees">
      <div className="fees__head">
        <div className="stack stack--md fees__intro">
          <SectionLabel label="Insurance & Rates" />
          <h2 className="display-sans display-sans--ink display-sans--fees">Fees & Insurance</h2>
          <p className="body-text body-text--loose body-text--muted">
            I believe in complete financial transparency. If you have questions about cost or coverage, please don't
            hesitate to reach out — I'm happy to help you navigate your options.
          </p>
        </div>
        <button
          type="button"
          className="btn btn--outline btn--pill-lg fees__glossary"
          onClick={() => setGlossaryOpen(true)}
        >
          Understand Your Coverage
        </button>
      </div>

      <div className="rate-grid">
        {RATES.map((rate) => (
          <div key={rate.title} className="rate">
            <div className="rate__head">
              <span className="rate__title">{rate.title}</span>
              <span className="rate__price">{rate.price}</span>
            </div>
            <p className="rate__desc">{rate.desc}</p>
          </div>
        ))}
      </div>

      <div className="stack stack--md">
        <p className="overline overline--sage overline--bold">Accepted Payment Methods</p>
        <div className="chip-row">
          {PAYMENT_METHODS.map((method) => (
            <span key={method} className="pay-chip">
              {method}
            </span>
          ))}
        </div>
      </div>

      <div className="stack stack--lg">
        <div className="insurer-head">
          <p className="overline overline--sage overline--bold">In-Network Insurance</p>
        </div>
        <div className="insurer-grid">
          {INSURERS.map((insurer) => (
            <div key={insurer.name} className="insurer">
              <img
                className="insurer__logo"
                src={asset(`logos/${insurer.logo}`)}
                alt={insurer.name}
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
              <span className="insurer__name">{insurer.name}</span>
            </div>
          ))}
        </div>
      </div>

      {glossaryOpen && <InsuranceGlossary onClose={() => setGlossaryOpen(false)} />}
    </section>
  );
}
