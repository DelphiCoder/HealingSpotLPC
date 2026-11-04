import SectionLabel from "../components/SectionLabel";
import { asset } from "../lib/asset";

const PILLARS = [
  { title: "Evidence-Based", sub: "EMDR, CBT, and ACT approaches." },
  { title: "Trauma-Informed", sub: "Rooted in lived experience." },
  { title: "Goal-Oriented", sub: "Practical goals, measurable progress." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section section--sand section--philosophy philosophy">
      {/* compass-web.jpg: made from compass.jpg with _specs/make-web-image.ps1 -CenterY 1200 */}
      <img
        className="philosophy__image"
        src={asset("assets/compass-web.jpg")}
        width="1200"
        height="1119"
        alt="A hand holding a compass above a road — a metaphor for finding your direction"
      />
      <div className="stack stack--lg philosophy__content">
        <SectionLabel label="My Philosophy" />
        <p className="display-serif display-serif--philosophy">
          Therapy acts like a GPS system. GPS helps you understand where you are going and how to get there.
        </p>
        <p className="body-text body-text--loose">
          My philosophy is that therapy acts like a GPS system. GPS helps you understand where you are going and how to
          get there. Therapists do not get every detail, but what you give us allows us to see overhead. This often gives
          us an objective and bird's-eye view, and we can discuss the traffic ahead and find better routes to where you are
          going. Sometimes we can find a better routine and save you a lot of pain, and other times the best path is to go
          straight through. Even if you have to go straight through while in pain, you know where you are going and won't
          end up lost. I believe that I can help you find where you want to go and together find the best way to get there.
        </p>
        <div className="pillars">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="pillar">
              <span className="pillar__title">{pillar.title}</span>
              <span className="pillar__sub">{pillar.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
