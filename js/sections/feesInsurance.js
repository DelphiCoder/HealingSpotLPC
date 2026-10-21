import { sectionLabel } from "../components/sectionLabel.js";
import { openInsuranceGlossary } from "../components/insuranceGlossary.js";

const RATES = [
  { title: "Individual Session", price: "$135", desc: "50-minute individual therapy session." },
  { title: "Couples Session", price: "$150", desc: "50-minute couples counseling session." },
  {
    title: "Sliding Scale",
    price: "Income-Based",
    desc: "Limited slots available for clients who qualify based on income. Reach out to inquire.",
  },
];

const PAYMENT_METHODS = ["ACH Bank Transfer", "Cash", "Discover", "HSA", "Mastercard", "Visa"];

// Logo files live in vanilla/logos/. Insurers without a file yet show their name only
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

export function renderFeesInsurance() {
  return `
    <section id="fees" class="section section--sand section--fees">
      <div class="fees__head">
        <div class="stack stack--md fees__intro">
          ${sectionLabel("Insurance & Rates")}
          <h2 class="display-sans display-sans--ink display-sans--fees">Fees & Insurance</h2>
          <p class="body-text body-text--loose body-text--muted">
            I believe in complete financial transparency. If you have questions about cost or coverage, please don't
            hesitate to reach out — I'm happy to help you navigate your options.
          </p>
        </div>
        <button type="button" class="btn btn--outline btn--pill-lg fees__glossary" data-glossary>Understand Your Coverage</button>
      </div>

      <div class="rate-grid">
        ${RATES.map(
          (rate) => `
          <div class="rate">
            <div class="rate__head">
              <span class="rate__title">${rate.title}</span>
              <span class="rate__price">${rate.price}</span>
            </div>
            <p class="rate__desc">${rate.desc}</p>
          </div>`,
        ).join("")}
      </div>

      <div class="stack stack--md">
        <p class="overline overline--sage overline--bold">Accepted Payment Methods</p>
        <div class="chip-row">
          ${PAYMENT_METHODS.map((method) => `<span class="pay-chip">${method}</span>`).join("")}
        </div>
      </div>

      <div class="stack stack--lg">
        <div class="insurer-head">
          <p class="overline overline--sage overline--bold">In-Network Insurance</p>
          <span class="insurer-head__note">
            Out-of-network clients can receive a superbill · Insurance questions:
            <a href="tel:4052933099">(405) 293-3099</a>
          </span>
        </div>
        <div class="insurer-grid">
          ${INSURERS.map(
            (insurer) => `
            <div class="insurer">
              <img
                class="insurer__logo"
                src="logos/${insurer.logo}"
                alt="${insurer.name}"
                data-logo
              />
              <span class="insurer__name">${insurer.name}</span>
            </div>`,
          ).join("")}
        </div>
      </div>
    </section>`;
}

// Opens the glossary modal and hides any logo that fails to load (the name still shows).
export function initFeesInsurance(root) {
  const section = root.querySelector("#fees");
  if (!section) return;

  section.addEventListener("click", (event) => {
    if (event.target.closest("[data-glossary]")) openInsuranceGlossary();
  });

  section.addEventListener(
    "error",
    (event) => {
      if (event.target.matches("img[data-logo]")) event.target.hidden = true;
    },
    true,
  );
}
