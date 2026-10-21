import { renderFeesInsurance, initFeesInsurance } from "../sections/feesInsurance.js";

export const FeesPage = {
  render: () => `
    <div class="header-spacer"></div>
    ${renderFeesInsurance()}`,
  init: (root) => initFeesInsurance(root),
};
