import { renderLibrary } from "../sections/library.js";
import { renderFaq, initFaq } from "../sections/faq.js";

export const ResourcesPage = {
  render: () => `
    <div class="header-spacer"></div>
    ${renderLibrary()}
    ${renderFaq()}`,
  init: (root) => initFaq(root),
};
