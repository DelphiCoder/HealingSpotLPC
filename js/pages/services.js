import { renderServices, initServices } from "../sections/services.js";

export const ServicesPage = {
  render: () => `
    <div class="header-spacer"></div>
    ${renderServices()}`,
  init: (root) => initServices(root),
};
