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

```tsx
import { Calendar } from "react-calendar-datetime";

const App = () => {
  const [date, setDate] = useState(new Date());

  return <Calendar date={date} onChangeDate={setDate} />;
};

export default App;
```

## Props

### Data & callbacks

| Property         | Type       | Default      | Description                                          |
| :--------------- | :--------- | :----------- | :--------------------------------------------------- |
| **date**         | `Date`     | `new Date()` | Initial selected date                                |
| **onChangeDate** | `function` | —            | Callback, returns new `Date` or `null` on change     |
| **minDate**      | `Date`     | —            | Minimum selectable date                              |
| **maxDate**      | `Date`     | —            | Maximum selectable date                              |
| **locale**       | `string`   | `'en'`       | Any valid locale, see [Localization](#-localization) |
| **theme**        | `string`   | `'paper'`    | Theme name, see [Themes](#-supported-themes)         |
| **width**        | `string`   | `'100%'`     | Any CSS width value (e.g. `'400px'`)                 |
| **startOfWeek**  | `number`   | `1`          | Week start day: `0` = Sunday, `1` = Monday, etc.     |

### Features & toggles

| Property              | Type      | Default | Description                                         |
| :-------------------- | :-------- | :------ | :-------------------------------------------------- |
| **time**              | `boolean` | `true`  | Enable time picker in header                        |
| **timeGrid**          | `boolean` | `false` | Enable full-size time selector                      |
| **presets**           | `boolean` | `false` | Enable quick-select presets (today, tomorrow, etc.) |
| **years**             | `boolean` | `false` | Enable year selector in header                      |
| **months**            | `boolean` | `true`  | Enable month selector in header                     |
| **monthsGrid**        | `boolean` | `false` | Enable full-size month-grid selector                |
| **compactMonths**     | `boolean` | `false` | Compact month dropdown in header                    |
| **compactYears**      | `boolean` | `true`  | Compact year dropdown in header                     |
| **gradient**          | `boolean` | `false` | Gradient background tinted by active theme          |
| **gestures**          | `boolean` | `true` | Swipe to change time and months on mobile           |
| **hour12**            | `boolean` | `false` | Toggle between 12-hour (AM/PM) and 24-hour time     |
| **highlightWeekends** | `boolean` | `true`  | Highlight weekend days                              |
| **disableWeekends**   | `boolean` | `false` | Disable weekend selection                           |

---

## 🎨 Aesthetic Themes

We offer 18 beautiful themes out of the box. Use the `theme` prop to switch between them.

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

| 🌑 Dark Themes                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ☀️ Light Themes                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="accent" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="backdrop" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="highlight" valign="middle"/> <img src="https://placehold.co/15x15/2d2d2d/2d2d2d.png" title="tone" valign="middle"/> <img src="https://placehold.co/15x15/f0f0f0/f0f0f0.png" title="text" valign="middle"/> **`carbon`** | <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="accent" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="backdrop" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="highlight" valign="middle"/> <img src="https://placehold.co/15x15/f4f4f4/f4f4f4.png" title="tone" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="text" valign="middle"/> **`paper`** |
| <img src="https://placehold.co/15x15/161111/161111.png" valign="middle"/> <img src="https://placehold.co/15x15/0d0909/0d0909.png" valign="middle"/> <img src="https://placehold.co/15x15/f92f2f/f92f2f.png" valign="middle"/> <img src="https://placehold.co/15x15/3a1616/3a1616.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`crimson`**                                                                            | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/f5f3f7/f5f3f7.png" valign="middle"/> <img src="https://placehold.co/15x15/681c9e/681c9e.png" valign="middle"/> <img src="https://placehold.co/15x15/ebdff4/ebdff4.png" valign="middle"/> <img src="https://placehold.co/15x15/2b2533/2b2533.png" valign="middle"/> **`amethyst`**                                                                          |
| <img src="https://placehold.co/15x15/0d0d15/0d0d15.png" valign="middle"/> <img src="https://placehold.co/15x15/07070b/07070b.png" valign="middle"/> <img src="https://placehold.co/15x15/00f3ff/00f3ff.png" valign="middle"/> <img src="https://placehold.co/15x15/301649/301649.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`cyber`**                                                                              | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/f8f9fc/f8f9fc.png" valign="middle"/> <img src="https://placehold.co/15x15/60d276/60d276.png" valign="middle"/> <img src="https://placehold.co/15x15/eaedf4/eaedf4.png" valign="middle"/> <img src="https://placehold.co/15x15/171827/171827.png" valign="middle"/> **`mint`**                                                                              |
| <img src="https://placehold.co/15x15/141721/141721.png" valign="middle"/> <img src="https://placehold.co/15x15/1a1e2b/1a1e2b.png" valign="middle"/> <img src="https://placehold.co/15x15/3559e0/3559e0.png" valign="middle"/> <img src="https://placehold.co/15x15/212638/212638.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`midnight`**                                                                           | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/dbd8e0/dbd8e0.png" valign="middle"/> <img src="https://placehold.co/15x15/d65d91/d65d91.png" valign="middle"/> <img src="https://placehold.co/15x15/e5e1e9/e5e1e9.png" valign="middle"/> <img src="https://placehold.co/15x15/2d2a32/2d2a32.png" valign="middle"/> **`rosa`**                                                                              |
| <img src="https://placehold.co/15x15/020602/020602.png" valign="middle"/> <img src="https://placehold.co/15x15/010401/010401.png" valign="middle"/> <img src="https://placehold.co/15x15/76ff03/76ff03.png" valign="middle"/> <img src="https://placehold.co/15x15/1a1f1a/1a1f1a.png" valign="middle"/> <img src="https://placehold.co/15x15/00e676/00e676.png" valign="middle"/> **`phosphor`**                                                                           | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/e2e5e9/e2e5e9.png" valign="middle"/> <img src="https://placehold.co/15x15/3a60d6/3a60d6.png" valign="middle"/> <img src="https://placehold.co/15x15/eceff4/eceff4.png" valign="middle"/> <img src="https://placehold.co/15x15/212630/212630.png" valign="middle"/> **`snow`**                                                                              |
| <img src="https://placehold.co/15x15/1c1a17/1c1a17.png" valign="middle"/> <img src="https://placehold.co/15x15/1f1c18/1f1c18.png" valign="middle"/> <img src="https://placehold.co/15x15/e3ae5c/e3ae5c.png" valign="middle"/> <img src="https://placehold.co/15x15/2f2b24/2f2b24.png" valign="middle"/> <img src="https://placehold.co/15x15/fdfbf7/fdfbf7.png" valign="middle"/> **`sandstone`**                                                                          | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/d8cf9a/d8cf9a.png" valign="middle"/> <img src="https://placehold.co/15x15/e67e22/e67e22.png" valign="middle"/> <img src="https://placehold.co/15x15/e4dbab/e4dbab.png" valign="middle"/> <img src="https://placehold.co/15x15/2b2718/2b2718.png" valign="middle"/> **`solar`**                                                                             |
| <img src="https://placehold.co/15x15/1a0f0f/1a0f0f.png" valign="middle"/> <img src="https://placehold.co/15x15/1c1111/1c1111.png" valign="middle"/> <img src="https://placehold.co/15x15/ff5e5e/ff5e5e.png" valign="middle"/> <img src="https://placehold.co/15x15/341d1d/341d1d.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`dracula`**                                                                            | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/e9ded5/e9ded5.png" valign="middle"/> <img src="https://placehold.co/15x15/a65d3a/a65d3a.png" valign="middle"/> <img src="https://placehold.co/15x15/f5ece5/f5ece5.png" valign="middle"/> <img src="https://placehold.co/15x15/6e4531/6e4531.png" valign="middle"/> **`comfy`**                                                                             |
| <img src="https://placehold.co/15x15/122127/122127.png" valign="middle"/> <img src="https://placehold.co/15x15/14252e/14252e.png" valign="middle"/> <img src="https://placehold.co/15x15/27d1f4/27d1f4.png" valign="middle"/> <img src="https://placehold.co/15x15/242f52/242f52.png" valign="middle"/> <img src="https://placehold.co/15x15/f1f5f9/f1f5f9.png" valign="middle"/> **`temporal`**                                                                           | <img src="https://placehold.co/15x15/fcfcf5/fcfcf5.png" valign="middle"/> <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> <img src="https://placehold.co/15x15/80ec27/80ec27.png" valign="middle"/> <img src="https://placehold.co/15x15/e9f3eb/e9f3eb.png" valign="middle"/> <img src="https://placehold.co/15x15/1f2937/1f2937.png" valign="middle"/> **`neon`**                                                                              |
| <img src="https://placehold.co/15x15/e85d00/e85d00.png" valign="middle"/> <img src="https://placehold.co/15x15/111111/111111.png" valign="middle"/> <img src="https://placehold.co/15x15/e85d00/e85d00.png" valign="middle"/> <img src="https://placehold.co/15x15/1c1c1c/1c1c1c.png" valign="middle"/> <img src="https://placehold.co/15x15/d4d4d4/d4d4d4.png" valign="middle"/> **`industrial`**                                                                         | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> <img src="https://placehold.co/15x15/f1a01d/f1a01d.png" valign="middle"/> <img src="https://placehold.co/15x15/eeeff1/eeeff1.png" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1a/1a1a1a.png" valign="middle"/> **`graphite`**                                                                          |

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

### 🚀 Version 4.0.0 — Breaking

- **📐 Fluid adaptive grid** — Replaced static + "jelly" (cqw) dual modes with a single fluid layout that fits any container width. Smart font auto-sizing, ideal cell proportions, zero breakpoints.
- **🎨 Theme overhaul** — Reworked colors across all 18 themes for better contrast and readability.
- **🌈 Gradient mode redesign** — Completely rebuilt gradient backgrounds for a cleaner, more polished look.
- **🏗️ Brutalism mode redesign** — Now a proper industrial aesthetic — sharp edges, raw surfaces, heavy type.
- **🕒 4 new presets** — Next week, next month, in 2 weeks, next year.
- **👆 Gesture scrolling** — Swipe-to-scroll for hour & minute tracks (opt-in via `gestures` prop).
- **🚫 Date unselect** — Tap a selected date again to clear it.
- **🔲 Updated shadows** — Refined shadow tokens across all components.

[**Full Version History in CHANGELOG.md**](https://github.com/kirilinsky/react-calendar-datetime/blob/main/CHANGELOG.md)

## 🗺️ Roadmap

- [ ] **Date Range** — Support for date range selection.
- [ ] **Custom Presets** — Ability to pass custom quick-select buttons.
- [ ] **Custom Themes** — API for creating and applying fully custom color schemes.
- [ ] **Disabled Dates Array** — Specific date blocking by passing an array.
- [ ] **RTL Support** — Full support for right-to-left interfaces.
