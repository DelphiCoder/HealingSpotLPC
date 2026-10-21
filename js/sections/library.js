const TOPICS = [
  "Anxiety & nervous system regulation",
  "Trauma, grief & life transitions",
  "Somatic approaches to healing",
  "Relationships & attachment",
  "Identity, values & meaning-making",
  "Practical tools between sessions",
];

export function renderLibrary() {
  return `
    <section id="resources" class="section-plain section--library">
      <div class="library__intro">
        <div class="stack stack--lg library__heading">
          <div class="section-label">
            <span class="section-label__rule" aria-hidden="true"></span>
            <span class="section-label__text">The Library</span>
          </div>
          <h2 class="display-sans display-sans--ink display-sans--library">Words for the space between sessions</h2>
        </div>
        <div class="stack stack--lg library__copy">
          <p class="body-text body-text--library">
            Healing doesn't stop when the hour ends. On my Substack, I write honest, grounded pieces on the topics we
            explore in the therapy room — offered freely, for when you need a steady voice at 11pm.
          </p>
          <p class="body-text body-text--library">
            No advice columns. No wellness platitudes. Just real writing about the hard, human work of getting better.
          </p>
        </div>
      </div>
      <div class="topic-row">
        ${TOPICS.map(
          (topic) => `
          <div class="topic">
            <span class="topic__icon" aria-hidden="true">◈</span>
            <span class="topic__label">${topic}</span>
          </div>`,
        ).join("")}
      </div>
      <div class="platforms">
        <div class="platform platform--journal">
          <div class="platform__badge-row">
            <div class="platform__badge platform__badge--terracotta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </div>
            <p class="platform__kicker">Substack Journal</p>
          </div>
          <h3 class="platform__title">Bridge to Wellness Journal</h3>
          <p class="platform__text">
            Honest, grounded essays on anxiety, trauma, relationships, and the hard work of healing. Free to read — no
            account needed, no cost to subscribe.
          </p>
          <a class="btn btn--terracotta-deep btn--pill-bold platform__cta" href="https://substack.com/@zacharyterrylpc" target="_blank" rel="noopener noreferrer">Read & Subscribe →</a>
        </div>
        <div class="platform platform--video">
          <div class="platform__badge-row">
            <div class="platform__badge platform__badge--youtube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <p class="platform__kicker">YouTube Channel</p>
          </div>
          <h3 class="platform__title">Bridge to Wellness Videos</h3>
          <p class="platform__text">
            Short videos on mental health, somatic tools, and what actually happens in therapy. A resource for clients
            and anyone beginning to explore healing.
          </p>
          <a class="btn btn--youtube btn--pill-bold platform__cta" href="https://www.youtube.com/channel/UCJz6hDV4G0N30FMfeEhVTgw" target="_blank" rel="noopener noreferrer">Watch & Subscribe →</a>
        </div>
      </div>
    </section>`;
}
