import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { setFavicon } from "./lib/favicon";
import "./fonts/fonts.css";
import "./styles/design-tokens.css";
import "./styles/styles.css";

setFavicon();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
