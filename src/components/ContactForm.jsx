import { useState } from "react";
import { FORMSPREE_URL } from "../data/forms";

const SERVICE_OPTIONS = [
  "Individual Therapy",
  "Couples Counseling",
  "Trauma & EMDR",
  "Military, Veterans & First Responders",
  "Somatic Therapy",
  "Anxiety & Burnout",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | error | sent

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setStatus("sending");
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-success">
        <div className="contact-success__icon">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M4 10l4 4 8-8"
              stroke="#faf8f5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="contact-success__title">Message Received</p>
        <p className="contact-success__text">
          Thank you for reaching out. I'll be in touch within 1 business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

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
      <p className="form-error" hidden={status !== "error"}>
        Something went wrong sending your message. Please try again or call (405) 293-3099.
      </p>
      <button type="submit" className="btn btn--solid btn--form" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
