import { EMAIL } from "../constants.js";
import { openModal } from "./modal.js";

const TERMS = [
  {
    title: "Deductible",
    body: "This is the amount you pay out-of-pocket each year before your insurance starts covering costs. For example, if your deductible is $1,000, you pay the first $1,000 of covered services yourself. Many plans reset on January 1st.",
  },
  {
    title: "Copay",
    body: "A copay is a fixed amount you pay for a covered service — for example, $30 per therapy session. Copays are typically due at the time of your appointment and don't always count toward your deductible.",
  },
  {
    title: "Coinsurance",
    body: "After meeting your deductible, coinsurance is the percentage of costs you share with your insurer. If your coinsurance is 20%, your insurance pays 80% and you pay 20% of each session fee.",
  },
  {
    title: "In-Network vs. Out-of-Network",
    body: "In-network means your therapist has a contract with your insurance company, typically resulting in lower costs. Out-of-network means no contract exists — you may still receive partial reimbursement depending on your plan's OON benefits.",
  },
  {
    title: "Superbill",
    body: "A superbill is a detailed receipt provided by your therapist that you can submit to your insurance company for out-of-network reimbursement. It includes diagnosis codes, service codes, and session details your insurer needs to process the claim.",
  },
  {
    title: "Out-of-Pocket Maximum",
    body: "This is the most you'll have to pay for covered services in a plan year. Once you reach this limit, your insurance covers 100% of covered services for the rest of the year — including therapy sessions.",
  },
  {
    title: "How to Verify Your Benefits",
    body: "Call the member services number on the back of your insurance card and ask: Do I have mental health benefits? What is my deductible and has it been met? What is my copay or coinsurance for outpatient therapy? Do I have out-of-network benefits?",
  },
];

export function openInsuranceGlossary() {
  return openModal({
    className: "modal--centered",
    html: `
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel glossary">
        <div class="glossary__header">
          <div class="glossary__heading">
            <p class="glossary__title">Understanding Your Insurance</p>
            <p class="glossary__subtitle">Plain-language explanations of common insurance terms</p>
          </div>
          <button type="button" class="icon-button icon-button--muted" data-close aria-label="Close">
            <svg width="14" height="14" fill="none" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M4 4L14 14M4 14L14 4" stroke="#2d2e2d" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div class="glossary__body">
          <p class="glossary__intro">
            Navigating insurance can feel overwhelming. Below are plain-language explanations of the terms you're most
            likely to encounter when using your mental health benefits.
          </p>
          <div class="glossary__terms">
            ${TERMS.map(
              (term) => `
              <div class="glossary__term">
                <div class="glossary__term-title-wrap">
                  <span class="glossary__term-title">${term.title}</span>
                </div>
                <p class="glossary__term-body">${term.body}</p>
              </div>`,
            ).join("")}
          </div>
          <div class="glossary__cta">
            <div class="glossary__cta-text">
              <p class="glossary__cta-title">Still have questions?</p>
              <p class="glossary__cta-sub">
                Call us directly for insurance help: <a href="tel:4052933099">(405) 293-3099</a>
              </p>
            </div>
            <a class="btn btn--solid btn--small" href="mailto:${EMAIL}?subject=Insurance Question">Email Us</a>
          </div>
        </div>
      </div>`,
  });
}
