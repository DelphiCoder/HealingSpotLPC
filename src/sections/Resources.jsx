import SectionLabel from "../components/SectionLabel";

export default function Resources() {
  return (
    <section id="resources" className="section-plain section--resources">
      <div className="stack stack--lg">
        <SectionLabel label="Resources" />
        <p className="body-text body-text--library">
          Sometimes therapy alone is not enough to get through the challenges. There may be times where you might need
          medication or an assessment done for work or for school. These are some places to go for those needs.
        </p>
      </div>
    </section>
  );
}
