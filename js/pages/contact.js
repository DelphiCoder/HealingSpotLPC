import { renderContact, initContact } from "../sections/contact.js";

export const ContactPage = {
  render: () => `
    <div class="header-spacer"></div>
    ${renderContact()}`,
  init: (root) => initContact(root),
};
