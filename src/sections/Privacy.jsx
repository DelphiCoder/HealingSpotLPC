import SectionLabel from "../components/SectionLabel";

const EXCEPTIONS = [
  "Suspected child abuse or dependent adult or elderly abuse, for which anyone is required by law to report to the appropriate authorities immediately.",
  "If a client is threatening serious bodily harm to himself or another person/s, we must notify the police and inform the intended victim if possible.",
  "If a client intends to harm himself or herself, we will make every effort to enlist their cooperation in ensuring their safety. If they do not cooperate, we will take further measures without their permission that are provided to us by law in order to ensure their safety.",
];

export default function Privacy() {
  return (
    <section className="section section--sand section--privacy">
      <div className="stack stack--lg privacy">
        <div className="stack stack--md">
          <SectionLabel label="Privacy" />
          <h1 className="display-sans display-sans--ink display-sans--faq">Confidentiality &amp; Privacy Policy</h1>
        </div>
        <p className="privacy__text">
          The law protects the relationship between a client and a psychotherapist, and information will not be
          disclosed without written permission.
        </p>
        <div className="stack stack--md">
          <p className="privacy__text">Exceptions include:</p>
          <ul className="privacy__list">
            {EXCEPTIONS.map((item) => (
              <li key={item} className="privacy__text">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="privacy__text">
          Other exceptions are when a court of law orders a therapist to break confidentiality in the context of a
          specific lawsuit.
        </p>
      </div>
    </section>
  );
}
