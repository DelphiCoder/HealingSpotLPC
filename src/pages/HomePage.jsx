import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Concerns from "../sections/Concerns";
import { BOOKING_URL } from "../data/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Concerns />
      <section className="cta-band">
        <div className="cta-band__inner">
          <div className="cta-band__copy">
            <p className="cta-band__title">Ready to take the first step?</p>
            <p className="cta-band__text">
              It is normal to be lost or not know where you are going. Let's figure that out together and set a
              destination.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--white" href={BOOKING_URL}>
              Book a Free Consultation
            </a>
            <Link className="btn btn--ghost-light" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
