import { renderLayout } from "./layout.js";
import { initHeader } from "./components/header.js";
import { startRouter } from "./router.js";

const app = document.getElementById("app");
app.innerHTML = renderLayout();

const onNavigate = initHeader(app.querySelector("#site-header"));
startRouter({ outlet: app.querySelector("#route-outlet"), onNavigate });
