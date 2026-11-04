import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import BookingButton from "../components/BookingButton";
import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <SectionLabel label="Welcome" light />
          <h1 className="hero__title">If you feel overwhelmed or uncertain about your life. This is a place that can help.</h1>
          <p className="hero__lede">
            Maybe there are moments in your past, or hard times right now, that make moving forward seem impossible. If this
            sounds like you, it doesn't have to be that way, and I would like to help. Whether you feel lost, ashamed,
            trapped, or just frustrated, you don't have to take on these feelings alone. I am here when you are ready.
          </p>
          <div className="hero__ctas">
            <BookingButton className="btn btn--terracotta btn--hero">
              Book a Free Consultation
            </BookingButton>
            <Link className="btn btn--ghost-light btn--hero" to="/about">
              My Approach
            </Link>
          </div>
          <div className="hero__location">
            <span className="hero__location-rule" aria-hidden="true"></span>
            <span className="hero__location-text">Brian Counts · LPC · Ludington, MI</span>
          </div>
        </div>
        <div className="hero__media">
          <img className="hero__photo" src={asset("assets/hero_brian_counts_reduced.jpg")} alt="Brian Counts, Licensed Professional Counselor" />
          <div className="hero__fade" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
