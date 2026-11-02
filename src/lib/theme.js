// Palette and light/dark selection.
//
// Visitors always get DEFAULT_PALETTE. Light/dark follows their OS setting.
//
// The palette tester (src/components/ThemeTester.jsx) is for testing only.
// It shows in the dev server, or on the live site after opening any page
// with ?themes in the URL (e.g. /about?themes). ?themes=off hides it again.
// Choices made in the tester are saved in that browser only and are ignored
// once the tester is hidden.
//
// To add a palette: create src/styles/palettes/<id>.css scoped to
// :root[data-palette="<id>"], import it in design-tokens.css, and add it to
// PALETTES below.

export const PALETTES = [
  { id: "brand", label: "Brand (teal & slate)", hasDark: true },
  { id: "brand-three", label: "Branding Three", hasDark: true },
  { id: "original", label: "Original (sage & terracotta)", hasDark: false },
];

export const DEFAULT_PALETTE = "brand";

// "auto" follows the OS; "light" and "dark" force a mode.
export const MODES = ["auto", "light", "dark"];

const TESTER_KEY = "hs-theme-tester";
const PALETTE_KEY = "hs-palette";
const MODE_KEY = "hs-mode";

function read(storage, key) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

function write(storage, key, value) {
  try {
    if (value === null) window[storage].removeItem(key);
    else window[storage].setItem(key, value);
  } catch {
    // Storage blocked (private mode, etc.): the choice just won't be remembered.
  }
}

// True when the tester should show. Reads and remembers the ?themes flag.
export function isTesterEnabled() {
  const param = new URLSearchParams(window.location.search).get("themes");
  if (param !== null) {
    const on = param !== "off" && param !== "0";
    write("localStorage", TESTER_KEY, on ? "1" : null);
    return on;
  }
  return import.meta.env.DEV || read("localStorage", TESTER_KEY) === "1";
}

export function getPalette() {
  const saved = read("localStorage", PALETTE_KEY);
  return PALETTES.some((p) => p.id === saved) ? saved : DEFAULT_PALETTE;
}

export function getMode() {
  const saved = read("localStorage", MODE_KEY);
  return MODES.includes(saved) ? saved : "auto";
}

function apply(palette, mode) {
  const root = document.documentElement;
  root.dataset.palette = palette;
  if (mode === "auto") delete root.dataset.theme;
  else root.dataset.theme = mode;
}

export function setPalette(palette) {
  write("localStorage", PALETTE_KEY, palette);
  apply(palette, getMode());
}

export function setMode(mode) {
  write("localStorage", MODE_KEY, mode === "auto" ? null : mode);
  apply(getPalette(), mode);
}

// Runs once before the first render. Returns whether the tester is enabled.
export function initTheme() {
  const tester = isTesterEnabled();
  if (tester) apply(getPalette(), getMode());
  else apply(DEFAULT_PALETTE, "auto");
  return tester;
}
