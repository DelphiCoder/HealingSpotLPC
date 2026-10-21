// Small rule + uppercase label used above section headings.
export function sectionLabel(label, { light = false } = {}) {
  return `
    <div class="section-label${light ? " section-label--light" : ""}">
      <span class="section-label__rule" aria-hidden="true"></span>
      <span class="section-label__text">${label}</span>
    </div>`;
}
