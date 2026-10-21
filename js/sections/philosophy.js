import { sectionLabel } from "../components/sectionLabel.js";

const PILLARS = [
  { title: "Evidence-Based", sub: "EMDR, CBT, and ACT approaches." },
  { title: "Trauma-Informed", sub: "Rooted in lived experience." },
  { title: "Person-Centered", sub: "Honoring your unique journey." },
];

export function renderPhilosophy() {
  return `
    <section id="philosophy" class="section section--sand section--philosophy philosophy">
      <img
        class="philosophy__image"
        src="https://images.unsplash.com/photo-1683183004672-e9feaf0bf718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2x0ZW4lMjBtZXRhbCUyMHBvdXJpbmclMjJjcnVjaWJsZSUyMGZvdW5kcnklMjJnbG93fGVufDF8fHx8MTc4ODgzOTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Glowing crucible — a metaphor for transformation"
      />
      <div class="stack stack--lg philosophy__content">
        ${sectionLabel("My Philosophy")}
        <p class="display-serif display-serif--philosophy">
          Every crucible holds something raw. Therapy is where that rawness gets refined.
        </p>
        <p class="body-text body-text--loose">
          A crucible doesn't destroy what's poured into it — it transforms it. The heat, the pressure, the process —
          just like in the therapeutic process, we work on separating what no longer serves you from what's worth
          keeping. You bring what's been weighing on you, and together we apply the right conditions to help you come
          out as a version you can look at in the mirror. I can't promise the world, but every session will be a
          testament to your will to withstand the forge.
        </p>
        <p class="body-text body-text--loose">
          Growing up in a military family, I learned early that sacrifice doesn't always come with recognition — and
          that the weight of service can follow you home. That understanding shapes how I show up for every client: with
          patience, honesty, and a deep respect for what you've already carried.
        </p>
        <div class="pillars">
          ${PILLARS.map(
            (pillar) => `
            <div class="pillar">
              <span class="pillar__title">${pillar.title}</span>
              <span class="pillar__sub">${pillar.sub}</span>
            </div>`,
          ).join("")}
        </div>
      </div>
    </section>`;
}
