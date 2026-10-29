import SectionLabel from "../components/SectionLabel";

const CREDENTIALS = [
  { label: "Licensed Professional Counselor", value: "LPC" },
  { label: "Oklahoma License", value: "#11680" },
  { label: "Years in Practice", value: "4+" },
  { label: "Education", value: "MS · Abilene Christian University" },
];

const ENDORSEMENTS = [
  {
    name: "Kristy L. Cannady",
    url: "https://www.psychologytoday.com/us/therapists/kristy-l-cannady-stillwater-ok/1588506",
    credential: "MSc",
    title: "Pre-Licensed Professional",
    quote:
      "I have worked alongside Zachary for almost 3 years. He has always been very professional, quick to return my inquiries and very helpful whenever I needed his assistance with something. His clients always speak highly of him!",
  },
  {
    name: "Zachary A. Walling",
    url: "https://www.psychologytoday.com/us/therapists/zachary-a-walling-stillwater-ok/1272773",
    credential: "MA",
    title: "Licensed Professional Counselor, LPC",
    quote:
      "Zachary is a compassionate and skilled therapist who creates a safe space for clients to feel heard and supported. His insight and collaborative approach allow people to make real and sustainable progress. I highly recommend him!",
  },
  {
    name: "Adam Daniel",
    url: "https://www.psychologytoday.com/us/therapists/adam-daniel-edmond-ok/1616031",
    credential: "LCSW, MSW",
    title: "Clinical Social Work / Therapist",
    quote:
      "Zach stands out in his ability to work with clients through very tangible, actionable approaches while respecting the difficulties they are going through. I have been lucky to work closely with Zach and hear his heart for Oklahomans in need.",
  },
  {
    name: "Morgan DeBorde",
    url: "https://www.psychologytoday.com/us/therapists/morgan-deborde-guthrie-ok/1808174",
    credential: "LPC-S",
    title: "Licensed Professional Counselor, Supervisor",
    quote:
      "Zach is an exceptional therapist who advocates wholeheartedly for his clients. He brings curiosity and insight to his work while holding clients accountable with genuine care, compassion, and respect.",
  },
];

export default function Endorsements() {
  return (
    <section className="section section--cream section--endorsements">
      <div className="endorsements__intro">
        <div className="stack stack--md endorsements__heading">
          <SectionLabel label="Clinical Endorsements" />
          <h2 className="display-sans display-sans--ink">Trusted by fellow clinicians</h2>
        </div>
        <div className="stack stack--sm endorsements__aside">
          <p className="body-text body-text--muted">
            Zachary has received 4 professional endorsements from licensed clinicians and mental health professionals via
            Psychology Today.
          </p>
          <a
            className="text-link text-link--underline"
            href="https://www.psychologytoday.com/us/therapists/zachary-terry-stillwater-ok/1595245"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full profile on Psychology Today →
          </a>
        </div>
      </div>
      <div className="credentials">
        {CREDENTIALS.map((credential) => (
          <div key={credential.label} className="credential">
            <span className="credential__label">{credential.label}</span>
            <span className="credential__value">{credential.value}</span>
          </div>
        ))}
      </div>
      <div className="endorsement-grid">
        {ENDORSEMENTS.map((endorsement) => (
          <div key={endorsement.name} className="endorsement">
            <p className="endorsement__quote">"{endorsement.quote}"</p>
            <div className="endorsement__rule"></div>
            <div className="endorsement__author">
              <div className="endorsement__avatar">
                <span>{endorsement.name.charAt(0)}</span>
              </div>
              <div className="stack stack--xs">
                <a className="endorsement__name" href={endorsement.url} target="_blank" rel="noopener noreferrer">
                  {endorsement.name}
                </a>
                <span className="endorsement__credential">
                  {endorsement.credential} · {endorsement.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
