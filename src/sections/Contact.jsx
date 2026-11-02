import ContactForm from "../components/ContactForm";
import { BOOKING_URL, EMAIL, PHONE } from "../data/constants";
import { svgPaths } from "../data/svgPaths";

function IconBadge({ path, className = "" }) {
  return (
    <span className={`contact__icon ${className}`} aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d={path} style={{ stroke: "var(--terracotta)" }} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </span>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section section--cream section--contact">
      <div className="contact__info">
        <div className="section-label">
          <span className="section-label__rule" aria-hidden="true"></span>
          <span className="section-label__text">Connect</span>
        </div>
        <h2 className="display-sans display-sans--ink display-sans--contact">Ready to take the first step?</h2>
        <p className="body-text body-text--contact">
          I offer a free 15-minute consultation to see if we're a good fit. If you're ready, things can improve — and
          you don't have to do it alone.
        </p>
        <div className="contact__lines">
          <a className="contact__line" href={`tel:${PHONE.replace(/\D/g, "")}`}>
            <IconBadge path={svgPaths.p29098400} />
            <span className="contact__value">{PHONE}</span>
          </a>
          <a className="contact__line" href={`mailto:${EMAIL}`}>
            <IconBadge path={svgPaths.p10d0c00} />
            <span className="contact__value">{EMAIL}</span>
          </a>
        </div>
        <a
          className="btn btn--solid btn--pill-bold btn--self-start"
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Free Consultation
        </a>
      </div>
      <div className="contact__form">
        <ContactForm />
      </div>
    </section>
  );
}
