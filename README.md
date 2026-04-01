<div align="center">

[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
&nbsp;&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
&nbsp;&nbsp;
![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)
&nbsp;&nbsp;
![themes](https://img.shields.io/badge/themes-18-orange?style=flat-square)
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
- 🎨 **18 Themes** — `Midnight`, `Crimson`, `Industrial`, `Solar` and more.
- 📐 **Fluid Layout** — One grid that adapts to any container width. Smart font scaling.
- 🛠️ **Fully Modular** — Toggle time, years, presets, month grid, week numbers independently.
- 🎛️ **Deeply Customizable** — Start of week, weekend highlights, gradients, brutalism mode.
- 🕒 **12 Smart Presets** — "Today", "Next week", "In 2 weeks", "Next month" and more.
- 👆 **Gesture Support** — Optional swipe scrolling for hour & minute tracks.
- ✅ **Multi-select** — Pick 2, 3, or unlimited dates. Selected dates panel with navigation.

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

```tsx
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
      showSelectedDates       // show selected dates panel
      onChangeDate={(d) => { if (Array.isArray(d)) setDates(d); }}
    />
  );
};
```

## Props

### Data & callbacks

| Property           | Type                              | Default      | Description                                                                          |
| :----------------- | :-------------------------------- | :----------- | :----------------------------------------------------------------------------------- |
| **date**           | `Date \| Date[]`                  | —            | Selected date (single) or array of selected dates (multi-select)                     |
| **onChangeDate**   | `(d: Date \| Date[] \| null) => void` | —        | Callback fired on selection. Returns `Date` in single mode, `Date[]` in multi mode, `null` on deselect |
| **startDate**      | `Date`                            | —            | Minimum selectable date                                                              |
| **endDate**        | `Date`                            | —            | Maximum selectable date                                                              |
| **startMonth**     | `Date`                            | —            | Initial month to display (does not set selected date)                                |
| **locale**         | `string`                          | `'en'`       | Any valid BCP 47 locale tag, see [Localization](#-localization)                      |
| **theme**          | `string`                          | `'paper'`    | Theme name, see [Themes](#-supported-themes)                                         |
| **width**          | `string \| number`                | `'100%'`     | Any CSS width value (e.g. `'400px'`)                                                 |
| **startOfWeek**    | `0–6`                             | `1`          | Week start day: `0` = Sunday, `1` = Monday, etc.                                     |
| **disabled**       | `DisabledRule`                    | —            | Disable specific dates. See [Disabled Dates](#-disabled-dates)                       |

### Multi-select

| Property              | Type               | Default | Description                                                                    |
| :-------------------- | :----------------- | :------ | :----------------------------------------------------------------------------- |
| **multiselect**       | `number \| boolean`| —       | Enable multi-select. Pass a number to cap selections (e.g. `2`, `3`), `true` for unlimited |
| **showSelectedDates** | `boolean`          | `false` | Show a panel below the calendar listing all selected dates. Works in both single and multi mode |

### Features & toggles

| Property              | Type      | Default | Description                                         |
| :-------------------- | :-------- | :------ | :-------------------------------------------------- |
| **time**              | `boolean` | `true`  | Enable time picker in header                        |
| **timeGrid**          | `boolean` | `false` | Enable full-size time selector panel                |
| **presets**           | `boolean` | `false` | Enable quick-select presets (today, tomorrow, etc.) |
| **years**             | `boolean` | `false` | Enable year selector in header                      |
| **months**            | `boolean` | `true`  | Enable month navigation arrows in header            |
| **monthsGrid**        | `boolean` | `false` | Enable full-size month-grid selector panel          |
| **compactMonths**     | `boolean` | `false` | Compact month dropdown button in header             |
| **compactYears**      | `boolean` | `true`  | Compact year dropdown button in header              |
| **gradient**          | `boolean` | `false` | Gradient background tinted by active theme          |
| **brutalism**         | `boolean` | `false` | Brutalism aesthetic mode                            |
| **gestures**          | `boolean` | `true`  | Swipe to change months and time on mobile           |
| **hour12**            | `boolean` | `false` | 12-hour (AM/PM) format for the time picker          |
| **highlightWeekends** | `boolean` | `true`  | Highlight Saturday and Sunday                       |
| **showWeekNumber**    | `boolean` | `false` | Show ISO week numbers alongside each row            |
| **hideLimited**       | `boolean` | `false` | Hide dates outside startDate/endDate range          |
| **hideWeekdays**      | `boolean` | `false` | Hide the weekday header row                         |
| **shortMonths**       | `boolean` | `false` | Use abbreviated month names (Jan, Feb…)             |

---

### 🚫 Disabled Dates

The `disabled` prop accepts several forms:

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

// Disable before/after a date
<Calendar disabled={{ before: new Date("2025-03-01") }} />
<Calendar disabled={{ after: new Date("2025-12-31") }} />
<Calendar disabled={{ before: new Date("2025-03-01"), after: new Date("2025-12-31") }} />
```

---

## 🎨 Aesthetic Themes

We offer 18 beautiful themes out of the box. Use the `theme` prop to switch between them.

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

| 🌑 Dark Themes | ☀️ Light Themes |
| :--- | :--- |
| <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" valign="middle"/> **`carbon`** | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`paper`** |
| <img src="https://placehold.co/15x15/161111/161111.png" valign="middle"/> **`crimson`** | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`amethyst`** |
| <img src="https://placehold.co/15x15/0d0d15/0d0d15.png" valign="middle"/> **`cyber`** | <img src="https://placehold.co/15x15/f8f9fc/f8f9fc.png" valign="middle"/> **`mint`** |
| <img src="https://placehold.co/15x15/141721/141721.png" valign="middle"/> **`midnight`** | <img src="https://placehold.co/15x15/dbd8e0/dbd8e0.png" valign="middle"/> **`rosa`** |
| <img src="https://placehold.co/15x15/020602/020602.png" valign="middle"/> **`phosphor`** | <img src="https://placehold.co/15x15/e2e5e9/e2e5e9.png" valign="middle"/> **`snow`** |
| <img src="https://placehold.co/15x15/1c1a17/1c1a17.png" valign="middle"/> **`sandstone`** | <img src="https://placehold.co/15x15/d8cf9a/d8cf9a.png" valign="middle"/> **`solar`** |
| <img src="https://placehold.co/15x15/1a0f0f/1a0f0f.png" valign="middle"/> **`dracula`** | <img src="https://placehold.co/15x15/e9ded5/e9ded5.png" valign="middle"/> **`comfy`** |
| <img src="https://placehold.co/15x15/122127/122127.png" valign="middle"/> **`temporal`** | <img src="https://placehold.co/15x15/fcfcf5/fcfcf5.png" valign="middle"/> **`neon`** |
| <img src="https://placehold.co/15x15/e85d00/e85d00.png" valign="middle"/> **`industrial`** | <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> **`graphite`** |

> 💡 Try enabling the `gradient` prop for an extra depth effect tailored to your active theme.

<a href="https://calendar-demo-pi.vercel.app/?step=3" target="_blank">
  <img src="https://img.shields.io/badge/Themes%20Playground-Try%20it%20Out-60d276?style=for-the-badge&logo=paint-format&logoColor=white" alt="Play with themes" />
</a>

### 🌍 Localization

No dictionaries, no extra bytes — powered by the native **Intl API** with support for **400+ BCP 47 locales**.

```tsx
<Calendar locale="en" />     // Default
<Calendar locale="zh-CN" />  // Chinese
<Calendar locale="ar-SA" />  // Arabic
```

Pass any valid locale tag and the calendar automatically formats days, months, and date labels to local standards.

![Locales](https://img.shields.io/badge/400+_Locales-Supported-60d276?style=flat-square&logo=globe&logoColor=white)

## ✅ Patch notes:

### 🚀 Version 5.0.0

- **✅ Multi-select** — Pick multiple dates via `multiselect` prop. Pass `2`, `3`, or `true` for unlimited. Unified `date` prop accepts both `Date` and `Date[]`.
- **📋 Selected dates panel** — New `showSelectedDates` prop renders a chip list below the calendar. Works in both single and multi mode. Clicking a chip navigates to that month without changing selection.
- **🔗 Range highlight** — Adjacent selected dates are visually connected into a continuous pill using `box-shadow` bridging, with correct border-radius on endpoints.
- **🗓️ Cross-month selection** — Selected dates from adjacent months are now highlighted in the current month view at reduced opacity.
- **🧭 Navigation fix** — Month/year navigation (arrows, month selector, year selector) no longer accidentally adds dates in multi-select mode.
- **📐 Narrow header fix** — Header wraps gracefully at very small widths when multiple controls are enabled simultaneously.

[**Full Version History in CHANGELOG.md**](https://github.com/kirilinsky/react-calendar-datetime/blob/main/CHANGELOG.md)

## 🗺️ Roadmap

- [ ] **Date Range** — Dedicated range selection mode (start → end).
- [ ] **Custom Presets** — Ability to pass custom quick-select buttons.
- [ ] **Custom Themes** — API for creating and applying fully custom color schemes.
- [ ] **RTL Support** — Full support for right-to-left interfaces.
