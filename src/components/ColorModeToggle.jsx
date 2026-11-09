import { useEffect, useState } from "react";

// Header button that switches between Light and Dark.
//
// New visitors get their device (OS / browser) setting: no choice is saved, so
// <html> has no data-theme and palette.css follows prefers-color-scheme. The
// button shows whichever mode is currently in effect.
//
// Clicking switches to the other mode and saves it in localStorage, so it is
// kept on later visits in this browser. index.html applies the saved choice
// before the page first draws, so there is no flash of the other mode.

const STORAGE_KEY = "hs-color-mode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null; // Storage blocked: follow the device setting.
  }
}

function deviceIsDark() {
  return typeof window !== "undefined" && window.matchMedia?.(DARK_QUERY).matches === true;
}

function saveMode(mode) {
  document.documentElement.dataset.theme = mode;
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
}

// Icons: 24x24, 2px round strokes in currentColor, so they take the header's text color.
const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function SunIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ColorModeToggle() {
  const [saved, setSaved] = useState(readSaved);
  const [deviceDark, setDeviceDark] = useState(deviceIsDark);

  // Until the visitor picks a mode, keep the icon in step if the device setting
  // changes while the page is open (for example, an automatic evening switch).
  useEffect(() => {
    const media = window.matchMedia?.(DARK_QUERY);
    if (!media) return undefined;
    const onChange = (event) => setDeviceDark(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const current = saved ?? (deviceDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  const label = `Color mode: ${current === "dark" ? "Dark" : "Light"}. Switch to ${next === "dark" ? "Dark" : "Light"}.`;

  const handleClick = () => {
    saveMode(next);
    setSaved(next);
  };

  return (
    <button type="button" className="color-mode" onClick={handleClick} aria-label={label} title={label}>
      {current === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
