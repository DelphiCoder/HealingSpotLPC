import { BOOKING_URL } from "../data/constants";
import { PRACTICE_AREAS } from "../data/practiceAreas";
import Modal from "./Modal";

// Side drawer describing one practice area. Renders nothing if the label has no copy yet.
export default function PracticeAreaDrawer({ label, onClose }) {
  const area = PRACTICE_AREAS[label];
  if (!area) return null;

  return (
    <Modal className="modal--drawer" lockScroll onClose={onClose}>
      <div className="modal__backdrop" data-close></div>
      <div className="modal__panel drawer">
        <div className="drawer__header">
          <div className="drawer__heading">
            <span className="eyebrow eyebrow--terracotta">Area of Practice</span>
            <h2 className="drawer__title">{label}</h2>
          </div>
          <button
            type="button"
            className="icon-button icon-button--outline icon-button--round-lg"
            data-close
            aria-label="Close"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="#4a5d4e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="drawer__body">
          <div className="drawer__block">
            <span className="eyebrow eyebrow--sage eyebrow--semibold">What it is</span>
            <p className="drawer__text">{area.what}</p>
          </div>
          <div className="drawer__block">
            <span className="eyebrow eyebrow--sage eyebrow--semibold">How it shows up</span>
            <p className="drawer__text">{area.how}</p>
          </div>
          <div className="drawer__block drawer__block--list">
            <span className="eyebrow eyebrow--sage eyebrow--semibold">Benefits of treatment</span>
            <ul className="drawer__benefits">
              {area.benefits.map((benefit) => (
                <li key={benefit} className="drawer__benefit">
                  <span className="drawer__dot" aria-hidden="true"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="drawer__footer">
          <a className="btn btn--solid btn--wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </a>
          <button type="button" className="btn btn--outline btn--wide" data-close>
            Back to Site
          </button>
        </div>
      </div>
    </Modal>
  );
}
