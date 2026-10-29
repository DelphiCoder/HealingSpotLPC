import SectionLabel from "../components/SectionLabel";

const STEPS = [
  {
    num: "01",
    title: "Consultation Call",
    desc: "A free 15-minute call to hear what's brought you here and see if we're a good fit. If we're not, I promise to help you find someone who is — you've taken the hardest step by reaching out, and I won't let that go unmet.",
  },
  {
    num: "02",
    title: "Intake & Mapping",
    desc: "A deep, 75-minute diagnostic intake where we map out your nervous system baseline, relational history, and set collaborative goals.",
  },
  {
    num: "03",
    title: "Sustained Care",
    desc: "55-minute weekly or bi-weekly sessions designed to weave cognitive tracking with profound, real-time somatic integration.",
  },
  {
    num: "04",
    title: "Re-Evaluation",
    desc: "Every 12 weeks, we check in on your metrics and feeling states to ensure therapy continues to feel alive, dynamic, and effective.",
  },
];

export default function Process() {
  return (
    <section className="section section--sand section--process">
      <div className="stack stack--md section--full">
        <SectionLabel label="The Process" />
        <h2 className="display-sans">Your journey with us</h2>
      </div>
      <div className="steps">
        {STEPS.map((step) => (
          <div key={step.num} className="step">
            <div className="step__num">
              <span>{step.num}</span>
            </div>
            <div className="stack stack--sm">
              <p className="step__title">{step.title}</p>
              <p className="step__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="promise">
        <div className="promise__icon">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 21C12 21 4 13.5 4 8.5C4 6.01 5.79 4 8 4C9.5 4 10.8 4.8 11.5 6C12.2 4.8 13.5 4 15 4C17.21 4 19 6.01 19 8.5C19 13.5 12 21 12 21Z"
              stroke="#faf8f5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="stack stack--sm">
          <p className="promise__title">My promise to you</p>
          <p className="promise__text">
            If we get on that consultation call and I'm not the right fit for you, I won't leave you without a next step.
            You reached out for help — that took courage — and I take that seriously. I will personally help point you
            toward someone who can better serve your needs. You won't be left to figure it out alone.
          </p>
        </div>
      </div>
    </section>
  );
}
