import { renderFooter } from "./components/footer.js";
import { renderHeader } from "./components/header.js";

export function renderLayout() {
  return `
    <div class="layout">
      ${renderHeader()}
      <main class="layout__main" id="main">
        <div class="route-outlet" id="route-outlet"></div>
        ${renderFooter()}
      </main>
    </div>`;
}
