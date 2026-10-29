// Small rule + uppercase label used above section headings.
export default function SectionLabel({ label, light = false }) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      <span className="section-label__rule" aria-hidden="true"></span>
      <span className="section-label__text">{label}</span>
    </div>
  );
}
