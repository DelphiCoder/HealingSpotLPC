import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Concerns from "../sections/Concerns";
import BookingButton from "../components/BookingButton";

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
              Feeling lost or unsure of your next step is a very human experience, and you don't have to figure it out on your own. Together, we'll find your direction and decide where you want to go.
            </p>
          </div>
          <div className="cta-band__actions">
            <BookingButton className="btn btn--white">
              Book a Free Consultation
            </BookingButton>
            <Link className="btn btn--ghost-light" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
