import { EMAIL, PHONE } from "../data/constants";
import Modal from "./Modal";

// Shown when the contact form is submitted while it has no working form
// service. Nothing is sent anywhere; the visitor's text stays in the form so
// they can copy it into an email. Uses the same layout as the booking popup.
export default function ContactFormNotice({ onClose }) {
  return (
    <Modal className="modal--centered" lockScroll closeOnEscape onClose={onClose}>
      <div className="modal__backdrop" data-close></div>
      <div className="modal__panel portal" role="dialog" aria-modal="true" aria-labelledby="contact-notice-title">
        <div className="portal__header">
          <div className="portal__heading">
            <span className="eyebrow eyebrow--terracotta">Contact Form</span>
            <h2 className="portal__title" id="contact-notice-title">
              This form isn't working yet
            </h2>
          </div>
          <button type="button" className="icon-button icon-button--outline" data-close aria-label="Close">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" style={{ stroke: "var(--sage-text)" }} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="portal__body">
          <p>
            Thank you for reaching out. The contact form is being worked on and can't send messages right now, so{" "}
            <strong>your message was not sent</strong>.
          </p>
          <p>
            Please email me at <a className="portal__link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a> or call{" "}
            <a className="portal__link" href={`tel:${PHONE.replace(/\D/g, "")}`}>
              {PHONE}
            </a>. What you typed is still in the form if you'd like to
            copy it.
          </p>
        </div>
        <div className="portal__footer">
          <a className="btn btn--terracotta btn--small" href={`mailto:${EMAIL}?subject=Contact from website`}>
            Email Me →
          </a>
        </div>
      </div>
    </Modal>
  );
}
