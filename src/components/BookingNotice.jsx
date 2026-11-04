import { BOOKING_URL } from "../data/constants";
import Modal from "./Modal";

// The visitor's time zone as the browser reports it, e.g. "Central Time".
// Read each time the popup opens, so a settings change shows on the next open.
// Privacy settings that hide the real zone usually report UTC, which shows
// as "Coordinated Universal Time" and is the hint something is off.
function browserTimeZoneName() {
  const nameFor = (style) => {
    try {
      return new Intl.DateTimeFormat("en-US", { timeZoneName: style })
        .formatToParts(new Date())
        .find((part) => part.type === "timeZoneName")?.value;
    } catch {
      return undefined; // "longGeneric" is not supported in older browsers.
    }
  };
  return (
    nameFor("longGeneric") || // "Central Time"
    nameFor("long") || // "Central Standard Time"
    Intl.DateTimeFormat().resolvedOptions().timeZone // "America/Chicago"
  );
}

// Shown before the booking calendar opens, with a note about time zones.
// Uses the same layout and styles as the Client Portal popup.
export default function BookingNotice({ onClose }) {
  const timeZone = browserTimeZoneName();

  return (
    <Modal className="modal--centered" lockScroll onClose={onClose}>
      <div className="modal__backdrop" data-close></div>
      <div className="modal__panel portal">
        <div className="portal__header">
          <div className="portal__heading">
            <span className="eyebrow eyebrow--terracotta">Book a Consultation</span>
            <h2 className="portal__title">Schedule a Consultation</h2>
          </div>
          <button type="button" className="icon-button icon-button--outline" data-close aria-label="Close">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" style={{ stroke: "var(--sage-text)" }} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="portal__body">
          <p>To schedule a consultation, click “Go to Calendar” below.</p>
          <p>
            Be aware that your browser will try to “guess” your time zone. If it guesses wrong because of your privacy
            settings, you may need to change it manually or adjust your settings.
          </p>
          {timeZone && (
            <p>
              Your browser currently shows <strong>{timeZone}</strong>.
            </p>
          )}
        </div>
        <div className="portal__footer">
          <a
            className="btn btn--terracotta btn--small"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setTimeout(onClose, 0)}
          >
            Go to Calendar →
          </a>
        </div>
      </div>
    </Modal>
  );
}
