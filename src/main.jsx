import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeTester from "./components/ThemeTester.jsx";
import { setFavicon } from "./lib/favicon";
import { initTheme } from "./lib/theme";
import "./fonts/fonts.css";
import "./styles/design-tokens.css";
import "./styles/styles.css";

setFavicon();
const showThemeTester = initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {showThemeTester && <ThemeTester />}
  </StrictMode>,
);
