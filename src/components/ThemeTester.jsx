// Testing-only palette switcher. Not shown to visitors: see src/lib/theme.js
// for how it is turned on. Remove this file (and its use in main.jsx) once a
// palette is final.
import { useState } from "react";
import { MODES, PALETTES, getMode, getPalette, setMode, setPalette } from "../lib/theme";
import "./ThemeTester.css";

export default function ThemeTester() {
  const [open, setOpen] = useState(false);
  const [palette, setPaletteState] = useState(getPalette);
  const [mode, setModeState] = useState(getMode);

  const current = PALETTES.find((p) => p.id === palette);

  const choosePalette = (id) => {
    setPalette(id);
    setPaletteState(id);
  };

  const chooseMode = (value) => {
    setMode(value);
    setModeState(value);
  };

  if (!open) {
    return (
      <button type="button" className="theme-tester__tab" onClick={() => setOpen(true)}>
        Theme: {current?.label ?? palette}
      </button>
    );
  }

  return (
    <div className="theme-tester" role="dialog" aria-label="Theme tester">
      <div className="theme-tester__head">
        <strong>Theme tester</strong>
        <button type="button" className="theme-tester__close" onClick={() => setOpen(false)} aria-label="Close">
          ×
        </button>
      </div>

      <fieldset className="theme-tester__group">
        <legend>Palette</legend>
        {PALETTES.map((p) => (
          <label key={p.id} className="theme-tester__option">
            <input type="radio" name="tt-palette" checked={palette === p.id} onChange={() => choosePalette(p.id)} />
            {p.label}
          </label>
        ))}
      </fieldset>

      <fieldset className="theme-tester__group">
        <legend>Mode</legend>
        <div className="theme-tester__modes">
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              className={`theme-tester__mode${mode === m ? " is-active" : ""}`}
              aria-pressed={mode === m}
              onClick={() => chooseMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
        {current && !current.hasDark && <p className="theme-tester__note">This palette has no dark colors.</p>}
      </fieldset>

      <p className="theme-tester__note">Testing only. Visitors don't see this.</p>
    </div>
  );
}
