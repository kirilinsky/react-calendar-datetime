---
"@dateforge/react-calendar": minor
---

Per-module theming, completed.

- **`theme` on any module now takes a `createTheme` object**, not just a built-in family name — the same `string | ThemeFamily` union as the root `<Calendar theme>`. A name still rides on `data-theme`; an object is applied as inline `--c-*` vars with `light-dark()` values, so a custom family flips with the active scheme without any JS. Works on every module, including the tracks (`CalendarDaysTrack` / `CalendarMonthsTrack` / `CalendarYearsTrack`). The union is exported as `ModuleTheme`.
- **Fixed: per-module `scheme` painted nothing.** The attribute rendered, but only the root shell and portalled popups narrowed `color-scheme`, so every `light-dark()` token inside a module resolved to the light side regardless of the module's `scheme`. Module-level `data-scheme` now narrows `color-scheme` too (`auto` re-opens both sides).
- A module that declares its own `theme` or `scheme` now paints its own surface (`background: var(--c-backdrop)`; modules without either stay transparent and inherit the root) — otherwise a dark-schemed module painted light ink onto the root's light backdrop.
