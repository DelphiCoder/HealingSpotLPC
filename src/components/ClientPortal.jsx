import { HEADWAY_PLANS, HEADWAY_URL, SIMPLEPRACTICE_PLANS, SIMPLEPRACTICE_URL } from "../data/constants";
import Modal from "./Modal";

export default function ClientPortal({ onClose }) {
  return (
    <Modal className="modal--centered" lockScroll onClose={onClose}>
      <div className="modal__backdrop" data-close></div>
      <div className="modal__panel portal">
        <div className="portal__header">
          <div className="portal__heading">
            <span className="eyebrow eyebrow--terracotta">Client Portal</span>
            <h2 className="portal__title">Who is your insurance through?</h2>
            <p className="portal__intro">Select your plan below and we'll take you to the right portal.</p>
          </div>
          <button type="button" className="icon-button icon-button--outline" data-close aria-label="Close">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="#4a5d4e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="portal__group">
          <span className="eyebrow eyebrow--sage eyebrow--small">Billed through SimplePractice</span>
          <div className="portal__grid">
            {SIMPLEPRACTICE_PLANS.map((plan) => (
              <a
                key={plan}
                className="portal__plan portal__plan--sage"
                href={SIMPLEPRACTICE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{plan}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="portal__group portal__group--tight">
          <span className="eyebrow eyebrow--terracotta eyebrow--small">Billed through Headway</span>
          <div className="portal__grid">
            {HEADWAY_PLANS.map((plan) => (
              <a
                key={plan}
                className="portal__plan portal__plan--terracotta"
                href={HEADWAY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{plan}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="portal__footer">
          <div className="portal__footer-text">
            <span className="portal__footer-title">Paying out of pocket?</span>
            <span className="portal__footer-sub">Private pay clients use Headway</span>
          </div>
          <a className="btn btn--solid btn--small" href={HEADWAY_URL} target="_blank" rel="noopener noreferrer">
            Go to Portal →
          </a>
        </div>
      </div>
    </Modal>
  );
}
