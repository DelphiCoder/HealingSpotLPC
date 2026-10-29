import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import { BOOKING_URL } from "../data/constants";
import { svgPaths } from "../data/svgPaths";
import { asset } from "../lib/asset";

const FOCUS_AREAS = ["EMDR Therapy", "CBT", "ACT", "Anxiety/OCD", "ADHD"];

export default function MeetTherapist() {
  return (
    <section id="team" className="section section--sand section--meet">
      <div className="stack stack--md section--full">
        <SectionLabel label="Meet Your Therapist" />
        <h2 className="display-sans">A steady presence for your journey</h2>
      </div>
      <div className="meet">
        <img className="meet__photo" alt="Brian Counts, LPC" src={asset("assets/hero_brian_counts_reduced.jpg")} />
        <div className="meet__content">
          <div className="meet__name-block">
            <p className="meet__name">Brian Counts</p>
            <p className="meet__credential">LPC, Licensed Professional Counselor</p>
          </div>
          <div className="divider"></div>
          <div className="stack stack--sm meet__focus">
            <p className="overline overline--sage overline--bold">Areas of Focus</p>
            <div className="chip-row">
              {FOCUS_AREAS.map((focus) => (
                <span key={focus} className="chip chip--sand">
                  {focus}
                </span>
              ))}
            </div>
          </div>
          <div className="stack stack--lg meet__copy">
            <p className="meet__quote">
              "No matter what you believe about yourself or your life at this moment — change is possible."
            </p>
            <p className="body-text body-text--relaxed">
              I live in Ludington, MI, with my wife and 2 year old son. Growing up I had my own mental health challenges
              with ADHD. I learned to deal with my struggles often on my own with a lot of discomfort, but I came to
              realize that much of what I learned could have been accelerated if I knew to ask for help. I finally did
              years later, and this was a turning point where I began to feel accepted and no longer alone.
            </p>
            <p className="body-text body-text--relaxed">
              My path to counseling started from a basketball coach. My senior year of High School he had asked me "what
              advantages does ADHD give you." This was the first time I thought of my condition as giving me positive
              attributes. I began to look at my condition and my life differently, and it made me realize that sometimes
              all you need is a guide to help you see your life from a different perspective. Throughout college and grad
              school I had the opportunities to help others see their lives in a new way, and it gave me a strong desire
              to see others improve and heal.
            </p>
          </div>
          <div className="meet__actions">
            <a className="btn btn--solid btn--pill-bold" href={BOOKING_URL}>
              Book a Free Consultation
            </a>
            <Link className="text-link text-link--icon" to="/about#philosophy">
              Learn more about my approach
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
                <path d={svgPaths.p2b607f80} stroke="#4A5D4E" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
