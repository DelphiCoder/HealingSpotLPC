import { renderMeetTherapist } from "../sections/meetTherapist.js";
import { renderPhilosophy } from "../sections/philosophy.js";
import { renderProcess } from "../sections/process.js";
import { renderEndorsements } from "../sections/endorsements.js";

export const AboutPage = {
  render: () => `
    <div class="header-spacer"></div>
    ${renderMeetTherapist()}
    ${renderPhilosophy()}
    ${renderProcess()}
    ${renderEndorsements()}`,
};
