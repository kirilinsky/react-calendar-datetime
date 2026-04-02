<div align="center">

[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
&nbsp;&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
&nbsp;&nbsp;
![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)
&nbsp;&nbsp;
![themes](https://img.shields.io/badge/themes-20-orange?style=flat-square)
&nbsp;&nbsp;
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
&nbsp;&nbsp;
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

</div>

# ⚡️ React Calendar & Date/Time Picker

📅 Ultra-lightweight Date & Time picker for React — zero dependencies, fluid adaptive layout.

<div align="center">
  <table style="border: none; border-collapse: collapse;">
    <tr style="border: none;">
      <td align="center" style="border: none; padding: 3px;">
        <p><b>Paper Theme (light theme by default)</b></p>
        <img src="https://i.ibb.co/NnrpfTsx/image.png" alt="Light" height="330" />
      </td>
      <td align="center" style="border: none; padding: 3px;">
        <p><b>Carbon Theme with gradient</b></p>
        <img src="https://iili.io/BHP0U0u.md.png" alt="Dark" height="330" />
      </td>
      <td align="center" style="border: none; padding: 3px;">
        <p><b>Industrial Theme with brutalism mode</b></p>
        <img src="https://i.ibb.co/d4JBjwy0/image.png" alt="Brutalism" height="330" />
      </td>
    </tr>
  </table>

  <br />

  <a href="https://calendar-demo-pi.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Try%20it%20Out-60d276?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo" />
  </a>
</div>

### ✨ Key Features

- ⚡ **Zero Dependencies** — No `moment`, `dayjs`, or `date-fns`. Pure React.
- 📦 **~7kb gzipped** — Styles included, no CSS imports required.
- 🌎 **400+ Locales** — Powered by native `Intl` API. No dictionaries, no extra bytes.
- 🎨 **20 Themes** — `Midnight`, `Crimson`, `Industrial`, `Forest`, `Latte` and more.
- 📐 **Fluid Layout** — One grid that adapts to any container width. Smart font scaling.
- 🛠️ **Fully Modular** — Toggle time, years, presets, month grid, week numbers independently.
- 🎛️ **Deeply Customizable** — Start of week, weekend highlights, gradients, brutalism mode.
- 🕒 **12 Smart Presets** — "Today", "Next week", "In 2 weeks", "Next month" and more.
- 👆 **Gesture Support** — Swipe left/right to change months, swipe hour & minute tracks.
- ✅ **Multi-select** — Pick 2, 3, or unlimited dates. Selected dates panel with navigation.
- 📅 **Date Range** — Select a start and end date with live hover preview and range highlight.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <p><b>Time, presets, months grid, wide screen</b></p>
        <img src="https://iili.io/BHv44zG.png" alt="presets" height="230" />
      </td>
      <td align="center">
        <p><b>Fully modular, compact selectors</b></p>
        <img src="https://i.ibb.co/cXRLTJNh/image.png" alt="modules" height="230" />
      </td>
    </tr>
    <tr>
      <td align="center">
          <p><b>Time, presets and months grid on ultra narrow mobile screen</b></p>
          <img src="https://i.ibb.co/Kc7PRJRH/image.png" alt="modules" height="600" />
      </td>
      <td align="center">
          <p><b>And medium mobile screen</b></p>
          <img src="https://i.ibb.co/q3wJCvHW/image.png" alt="modules" height="600" />
      </td>
    </tr>
  </table>
</div>

## 🔨 How to install:

```bash
npm i react-calendar-datetime
```

## 📆 How to use:

### Single date

```tsx
import { Calendar } from "react-calendar-datetime";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      date={date}
      onChangeDate={(d) => { if (d instanceof Date) setDate(d); }}
    />
  );
};
```

### Multi-select

```tsx
const App = () => {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <Calendar
      date={dates}
      multiselect={3}         // max 3 dates; true = unlimited
      showSelectedDates       // chip panel below calendar
      onChangeDate={(d) => { if (Array.isArray(d)) setDates(d); }}
    />
  );
};
```

### Date Range

```tsx
const App = () => {
  const [range, setRange] = useState<Date[]>([]);

  return (
    <Calendar
      range
      showSelectedDates       // shows "Apr 1, 2025 – May 15, 2025"
      date={range}
      onChangeDate={(d) => {
        if (!d) setRange([]);
        else if (Array.isArray(d)) setRange(d);   // [start, end] when complete
        else setRange([d]);                        // [start] while picking end
      }}
    />
  );
};
```

First click sets the start date. Hover shows a live preview of the range. Second click confirms the end date. Clicking the start date again resets. `onChangeDate` fires with `[start, end]` when the range is complete, and `null` when reset.

---

## Props

### Data & callbacks

| Property           | Type                                    | Default   | Description                                                                                   |
| :----------------- | :-------------------------------------- | :-------- | :-------------------------------------------------------------------------------------------- |
| **date**           | `Date \| Date[]`                        | —         | Selected date (single), array of dates (multi), or `[start, end]` pair (range)                |
| **onChangeDate**   | `(d: Date \| Date[] \| null) => void`   | —         | Fired on selection. Returns `Date`, `Date[]`, or `null` depending on mode                     |
| **startDate**      | `Date`                                  | —         | Minimum navigable/selectable date                                                             |
| **endDate**        | `Date`                                  | —         | Maximum navigable/selectable date                                                             |
| **startMonth**     | `Date`                                  | —         | Initial month to display (does not set selected date)                                         |
| **locale**         | `string`                                | `'en'`    | Any valid BCP 47 locale tag, see [Localization](#-localization)                               |
| **theme**          | `string`                                | `'paper'` | Theme name, see [Themes](#-themes)                                                            |
| **width**          | `string \| number`                      | `'100%'`  | Any CSS width value (e.g. `'400px'`)                                                          |
| **startOfWeek**    | `0–6`                                   | `1`       | Week start day: `0` = Sunday, `1` = Monday, etc.                                              |
| **disabled**       | `DisabledRule`                          | —         | Disable specific dates. See [Disabled Dates](#-disabled-dates)                                |

### Selection modes

| Property              | Type                | Default | Description                                                                                          |
| :-------------------- | :------------------ | :------ | :--------------------------------------------------------------------------------------------------- |
| **multiselect**       | `number \| boolean` | —       | Enable multi-select. Pass a number to cap selections (e.g. `2`, `3`), `true` for unlimited          |
| **range**             | `boolean`           | `false` | Enable range mode. Click to set start, click again to set end. Hover shows live preview              |
| **showSelectedDates** | `boolean`           | `false` | Panel below calendar showing selected dates. In range mode shows "from [start] to [end]" with locale-native separator |

### Features & toggles

| Property              | Type      | Default | Description                                                         |
| :-------------------- | :-------- | :------ | :------------------------------------------------------------------ |
| **time**              | `boolean` | `true`  | Enable time picker in header                                        |
| **timeGrid**          | `boolean` | `false` | Enable full-size time selector panel                                |
| **presets**           | `boolean` | `false` | Enable quick-select presets (today, tomorrow, etc.). Disabled dates are automatically excluded |
| **years**             | `boolean` | `false` | Enable year selector in header                                      |
| **months**            | `boolean` | `true`  | Enable month navigation arrows in header                            |
| **monthsGrid**        | `boolean` | `false` | Enable full-size month-grid selector panel                          |
| **compactMonths**     | `boolean` | `false` | Compact month dropdown button in header                             |
| **compactYears**      | `boolean` | `true`  | Compact year dropdown button in header                              |
| **gradient**          | `boolean` | `false` | Gradient background tinted by active theme                          |
| **brutalism**         | `boolean` | `false` | Brutalism aesthetic mode                                            |
| **gestures**          | `boolean` | `true`  | Swipe left/right on days to change month; swipe hour & minute tracks |
| **hour12**            | `boolean` | `false` | 12-hour (AM/PM) format for the time picker                          |
| **highlightWeekends** | `boolean` | `true`  | Highlight Saturday and Sunday                                       |
| **showWeekNumber**    | `boolean` | `false` | Show ISO week numbers alongside each row                            |
| **hideLimited**       | `boolean` | `false` | Hide dates outside `startDate`/`endDate` range instead of dimming  |
| **hideDisabled**      | `boolean` | `false` | Hide disabled dates entirely instead of showing them struck through |
| **hideWeekdays**      | `boolean` | `false` | Hide the weekday header row                                         |
| **shortMonths**       | `boolean` | `false` | Use abbreviated month names (Jan, Feb…)                             |

---

### 🚫 Disabled Dates

The `disabled` prop accepts several forms. Dates matching any rule are unclickable, excluded from presets, and block month/year navigation when using `before`/`after`.

```tsx
// Disable all dates
<Calendar disabled={true} />

// Disable a single date
<Calendar disabled={new Date("2025-12-25")} />

// Disable an array of dates
<Calendar disabled={[new Date("2025-01-01"), new Date("2025-12-31")]} />

// Disable a date range
<Calendar disabled={{ from: new Date("2025-06-01"), to: new Date("2025-06-30") }} />

// Disable specific weekdays (0=Sun, 6=Sat)
<Calendar disabled={{ dayOfWeek: [0, 6] }} />

// Disable before/after a date (also locks header navigation)
<Calendar disabled={{ before: new Date("2025-03-01") }} />
<Calendar disabled={{ after: new Date("2025-12-31") }} />
<Calendar disabled={{ before: new Date("2025-03-01"), after: new Date("2025-12-31") }} />
```

> `hideDisabled={true}` removes disabled days from the grid entirely. `hideLimited={true}` does the same for dates outside `startDate`/`endDate`.

---

## 🎨 Themes

20 built-in themes. Use the `theme` prop to switch.

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

| 🌑 Dark Themes | ☀️ Light Themes |
| :--- | :--- |
| <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" valign="middle"/> **`carbon`** | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`paper`** |
| <img src="https://placehold.co/15x15/0d0909/0d0909.png" valign="middle"/> **`crimson`** | <img src="https://placehold.co/15x15/f5f3f7/f5f3f7.png" valign="middle"/> **`amethyst`** |
| <img src="https://placehold.co/15x15/07070b/07070b.png" valign="middle"/> **`cyber`** | <img src="https://placehold.co/15x15/f8f9fc/f8f9fc.png" valign="middle"/> **`mint`** |
| <img src="https://placehold.co/15x15/1a1e2b/1a1e2b.png" valign="middle"/> **`midnight`** | <img src="https://placehold.co/15x15/fef0f4/fef0f4.png" valign="middle"/> **`rosa`** |
| <img src="https://placehold.co/15x15/010401/010401.png" valign="middle"/> **`phosphor`** | <img src="https://placehold.co/15x15/e2e5e9/e2e5e9.png" valign="middle"/> **`snow`** |
| <img src="https://placehold.co/15x15/1f1c18/1f1c18.png" valign="middle"/> **`sandstone`** | <img src="https://placehold.co/15x15/fffbe8/fffbe8.png" valign="middle"/> **`solar`** |
| <img src="https://placehold.co/15x15/1c1111/1c1111.png" valign="middle"/> **`dracula`** | <img src="https://placehold.co/15x15/f2e8e0/f2e8e0.png" valign="middle"/> **`comfy`** |
| <img src="https://placehold.co/15x15/14252e/14252e.png" valign="middle"/> **`temporal`** | <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> **`neon`** |
| <img src="https://placehold.co/15x15/111111/111111.png" valign="middle"/> **`industrial`** | <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> **`graphite`** |
| <img src="https://placehold.co/15x15/0f2016/0f2016.png" valign="middle"/> **`forest`** | <img src="https://placehold.co/15x15/faf8f4/faf8f4.png" valign="middle"/> **`latte`** |

> 💡 Enable `gradient` for an extra depth effect tailored to the active theme.

<a href="https://calendar-demo-pi.vercel.app/?step=3" target="_blank">
  <img src="https://img.shields.io/badge/Themes%20Playground-Try%20it%20Out-60d276?style=for-the-badge&logo=paint-format&logoColor=white" alt="Play with themes" />
</a>

---

### 🌍 Localization

No dictionaries, no extra bytes — powered by the native **Intl API** with support for **400+ BCP 47 locales**.

```tsx
<Calendar locale="en" />     // Default
<Calendar locale="zh-CN" />  // Chinese
<Calendar locale="ar-SA" />  // Arabic
```

Pass any valid locale tag and the calendar automatically formats days, months, date labels, and range separators to local standards.

![Locales](https://img.shields.io/badge/400+_Locales-Supported-60d276?style=flat-square&logo=globe&logoColor=white)

---

## ✅ Patch notes:

### 🚀 Version 5.0.0

- **📅 Date Range** — New `range` prop for start → end selection with animated hover preview, range fill using theme's `--c-r` color, and locale-native separator in the selected-dates panel.
- **✅ Multi-select** — Pick multiple dates via `multiselect` prop (`2`, `3`, or `true` for unlimited). Unified `date` prop accepts both `Date` and `Date[]`.
- **📋 Selected dates panel** — `showSelectedDates` renders chips below the calendar. In range mode shows "from [date] to [date]" with a locale-native separator via `Intl.DateTimeFormat.formatRangeToParts`.
- **🙈 hideDisabled** — New `hideDisabled` prop removes disabled dates from the grid entirely instead of showing them struck through.
- **🚦 Smart navigation** — Month/year arrows and swipe gestures now respect `disabled: { before, after }` rules and won't navigate into blocked months.
- **🎛️ Preset filtering** — Presets that land on a disabled date are automatically hidden.
- **🎨 20 Themes** — Added `latte` and `forest`.
- **🔗 Range highlight** — Adjacent selected dates connect into a continuous pill. Cross-month selected dates shown at reduced opacity.
 
[**Full Version History in CHANGELOG.md**](https://github.com/kirilinsky/react-calendar-datetime/blob/main/CHANGELOG.md)

## 🗺️ Roadmap

- [ ] **Holiday Calendar** — Prop to mark specific dates as holidays with optional labels.
- [ ] **Custom Presets** — Ability to pass custom quick-select buttons.
- [ ] **Custom Themes** — API for creating and applying fully custom color schemes.
- [ ] **RTL Support** — Full support for right-to-left interfaces.
