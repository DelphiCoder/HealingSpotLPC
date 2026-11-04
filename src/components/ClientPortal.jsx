import { HEADWAY_URL } from "../data/constants";
import Modal from "./Modal";

export default function ClientPortal({ onClose }) {
  return (
    <Modal className="modal--centered" lockScroll onClose={onClose}>
      <div className="modal__backdrop" data-close></div>
      <div className="modal__panel portal">
        <div className="portal__header">
          <div className="portal__heading">
            <span className="eyebrow eyebrow--terracotta">Client Portal</span>
            <h2 className="portal__title">Schedule a Telehealth Appointment</h2>
          </div>
          <button type="button" className="icon-button icon-button--outline" data-close aria-label="Close">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" style={{ stroke: "var(--sage-text)" }} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="portal__body">
          <p>To schedule a telehealth appointment, click “Go to Portal” below.</p>
          <p>
            It will open my secure Headway client page in a new tab, so you can come back here anytime. Questions? Feel
            free to reach out to me.
          </p>
        </div>
        <div className="portal__footer">
          <a className="btn btn--terracotta btn--small" href={HEADWAY_URL} target="_blank" rel="noopener noreferrer">
            Go to Portal →
          </a>
        </div>
      </div>
    </Modal>
  );
}
