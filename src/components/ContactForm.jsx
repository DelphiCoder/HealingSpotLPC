import { useState } from "react";
import ContactFormNotice from "./ContactFormNotice";

const SERVICE_OPTIONS = [
  "Individual Therapy",
  "Couples Counseling",
  "Trauma & EMDR",
  "Military, Veterans & First Responders",
  "Somatic Therapy",
  "Anxiety & Burnout",
];

// The form has no working form service yet (see src/data/forms.js), so
// submitting only opens a popup that says so and gives Brian's email and
// phone. Nothing the visitor types is sent anywhere.
export default function ContactForm() {
  const [noticeOpen, setNoticeOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNoticeOpen(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">Send a Message</h3>
      <div className="contact-form__row">
        <div className="field">
          <label className="field__label" htmlFor="cf-name">
            Full Name
          </label>
          <input className="field__input" id="cf-name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="cf-email">
            Email
          </label>
          <input
            className="field__input"
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="field">
          <label className="field__label" htmlFor="cf-phone">
            Phone (optional)
          </label>
          <input className="field__input" id="cf-phone" name="phone" type="tel" placeholder="(000) 000-0000" />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="cf-service">
            Area of Interest
          </label>
          <select className="field__input field__input--select" id="cf-service" name="service" defaultValue="">
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label className="field__label" htmlFor="cf-message">
          Message
        </label>
        <textarea
          className="field__input field__input--textarea"
          id="cf-message"
          name="message"
          rows="4"
          required
          placeholder="Tell me a bit about what's brought you here…"
        ></textarea>
      </div>
      <button type="submit" className="btn btn--solid btn--form">
        Send Message
      </button>
      {noticeOpen && <ContactFormNotice onClose={() => setNoticeOpen(false)} />}
    </form>
  );
}
