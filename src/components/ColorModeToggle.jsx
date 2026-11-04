import { useState } from "react";

// Header button that cycles the color mode: Device -> Light -> Dark -> Device.
// "Device" removes data-theme from <html>, so palette.css follows the OS or
// browser setting. "light" / "dark" set data-theme and are saved in this
// browser. index.html applies the saved choice before the page first draws.

const STORAGE_KEY = "hs-color-mode";

const MODES = {
  device: { label: "Device", next: "light" },
  light: { label: "Light", next: "dark" },
  dark: { label: "Dark", next: "device" },
};

function readMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "device";
  } catch {
    return "device"; // Storage blocked: fall back to the device setting.
  }
}

function applyMode(mode) {
  const root = document.documentElement;
  if (mode === "device") delete root.dataset.theme;
  else root.dataset.theme = mode;
  try {
    if (mode === "device") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, mode);
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

function DeviceIcon() {
  // A monitor on a stand.
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

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

const ICONS = { device: DeviceIcon, light: SunIcon, dark: MoonIcon };

export default function ColorModeToggle() {
  const [mode, setMode] = useState(readMode);
  const Icon = ICONS[mode];
  const next = MODES[mode].next;
  const label = `Color mode: ${MODES[mode].label}. Switch to ${MODES[next].label}.`;

  const handleClick = () => {
    applyMode(next);
    setMode(next);
  };

  return (
    <button type="button" className="color-mode" onClick={handleClick} aria-label={label} title={label}>
      <Icon />
    </button>
  );
}
