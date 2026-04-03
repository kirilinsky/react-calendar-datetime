## Changelog

### 🚀 Version 5.0.0

- **✅ Multi-select** — Pick multiple dates via `multiselect` prop (`2`, `3`, `4` etc, or `true` for unlimited). Unified `date` prop now accepts both `Date` and `Date[]`.
- **📋 Selected dates panel** — New `showSelectedDates` prop renders a chip list below the calendar. Works in both single and multi mode. Clicking a chip navigates to that month without changing selection.
- **🔗 Range highlight** — Adjacent selected dates are visually connected into a continuous pill using `box-shadow` bridging, with correct border-radius on endpoints.
- **🗓️ Cross-month selection** — Selected dates from adjacent months are now highlighted in the current month view at reduced opacity (0.9).
- **🗑️ API cleanup** — Removed separate `dates` prop; `date` now accepts `Date | Date[]`. Removed `onChangeDates`; `onChangeDate` returns `Date | Date[] | null` depending on mode.

---

### 🚀 Version 4.0.0 — Breaking

- **📐 Fluid adaptive grid** — Replaced static + "jelly" (cqw) dual modes with a single fluid layout that fits any container width. Smart font auto-sizing, ideal cell proportions, zero breakpoints.
- **🎨 Theme overhaul** — Reworked colors across all 18 themes for better contrast and readability.
- **🌈 Gradient mode redesign** — Completely rebuilt gradient backgrounds for a cleaner, more polished look.
- **🏗️ Brutalism mode redesign** — Now a proper industrial aesthetic — sharp edges, raw surfaces, heavy type.
- **🕒 4 new presets** — Next week, next month, in 2 weeks, next year.
- **👆 Gesture scrolling** — Swipe-to-scroll for hour & minute tracks (opt-in via `gestures` prop).
- **🚫 Date unselect** — Tap a selected date again to clear it.
- **🔲 Updated shadows** — Refined shadow tokens across all components.
- **🚫 Removed** — `minDate` / `maxDate` replaced by `startDate` / `endDate`. `disableWeekends` removed in favor of `disabled={{ dayOfWeek: [0, 6] }}`.

---

## Patch notes (old versions)

- **v3.2.1:** Compact inline time popup, 12/24h support via `hour12` prop, time grid redesign.
- **v3.1.2:** Themes: `Industrial` & `Graphite`, month grid is now optional. Month selector defaults to a compact header
- **v3.0.5:** Brutalism mode added.
- **v3.0.4:** Gradient backgrounds.
- **v3.0.1:** Touch gestures.
- **v3.0.0:** Jelly Mode, Crimson & Amethyst themes, `startOfWeek`, `showWeekNumber`, `highlightWeekends`/`disableWeekends`, `compactMonths`/`compactYears`, migrated to CSS Modules, switched to `tsdown`.
- **v2.5.4:** Bug fixes.
- **v2.5.3:** Added `minDate` and `maxDate` support.
- **v2.5.2:** Added a new `boxShadow` layer to the theme engine.
- **v2.5.1:** New themes: `Neon` and `Temporal`.
- **v2.5.0:** Infinite localization added.
- **v2.4.4:** Bug fixes.
- **v2.4.3:** Optimized bundle size (experimental `tsup` config).
- **v2.4.2:** Bug fixes, added `Tomorrow` preset.
- **v2.4.1:** Decoupled data from types in `.d.ts` files.
- **v2.4.0:** Added `Comfy`, `Rosa`, `Solar`, and `Snow` themes, added `Portugal` 🇵🇹 locale.
- **v2.3.0:** Removed `dayjs`, refactored Time Picker, implemented fixed 42-cell days grid.
- **v2.2.0:** Auto-injected runtime styles (~1KB), added `Dracula` dark-red theme.
- **v2.1.0:** Added `Phosphor` neon-green theme.
- **v2.0.0:** TS migration, strict types, React 19, pre-generated labels, flexible `months` layout, `es`/`sr` locales.
- **v1.3.1:** Added year picker, dark theme, `zh-cn` and `fr` locales.
- **v1.0.0:** Initial release.
