<div align="center">

[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
&nbsp;&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
&nbsp;&nbsp;
![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)
&nbsp;&nbsp;
![themes](https://img.shields.io/badge/themes-16-orange?style=flat-square)
&nbsp;&nbsp;
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
&nbsp;&nbsp;
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

</div>

# ⚡️ React Calendar & Date/Time Picker

📅 **Ultra-lightweight** Date & Time picker for React.  
📦 **Small but Mighty**: **Zero external dependencies** & **zero-runtime-bloat**.

<div align="center">
  <table style="border: none; border-collapse: collapse;">
    <tr style="border: none;">
      <td align="center" style="border: none; padding: 6px;">
        <p><b>Paper Theme (default)</b></p>
        <img src="https://i.ibb.co/gFQtzfF8/image.png" alt="Light" width="440" />
      </td>
      <td align="center" style="border: none; padding: 6px;">
        <p><b>Carbon Theme</b></p>
        <img src="https://i.ibb.co/hFDGFJD5/image.png" alt="Dark" width="440" />
      </td>
    </tr>
  </table>

  <br />

  <a href="https://calendar-demo-pi.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Try%20it%20Out-60d276?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo" />
  </a>
</div>

### ✨ Key Features

- 🚀 **Zero Dependencies** — No `moment`, `dayjs`, or `date-fns`. Just pure React.
- 📦 **Tiny Footprint** — `~6kb gzipped`. Optimized for the modern web.
- 🌎 **Global by Default** — Instant support for **400+ BCP47 locales** (including `en`, `de`, `ru`, `zh-CN` etc).
- 🌐 **Universal Localization** — No dictionaries, no extra bytes—powered by native **Intl API**.
- 🎨 **16 Aesthetic Themes** — Switch between `Midnight`, `Snow`, `Solar`, `Crimson` and more.
- 🕒 **Smart Presets** — Quick select for "Today", "Last week", "Month ago" etc.
- 🛠️ **Fully Modular** — Toggle **Years**, **Months**, **Time**, or **Presets** independently. Build your own UI.
- 🎛️ **Deeply Customizable** — Tailor experience: start-of-week day, highlight weekends, gradient.

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

## Props:

| Property               | Type       | Default      | Description                                                           |
| :--------------------- | :--------- | :----------- | :-------------------------------------------------------------------- |
| **date**               | `Date`     | `new Date()` | Accepts native Date                                                   |
| **minDate**            | `Date`     | -----        | Accepts native Date                                                   |
| **maxDate**            | `Date`     | -----        | Accepts native Date                                                   |
| **onChangeDate**       | `function` | -----        | Callback returns new native Date on change                            |
| **locale**             | `string`   | `'en'`       | Supports every possible locale, see [Localization](#-localization)    |
| **theme**              | `string`   | `'paper'`    | Theme (style) name [Supported themes](#-supported-themes)             |
| **presets**            | `boolean`  | `false`      | Toggle quick date selection (today, yesterday, etc.)                  |
| **years**              | `boolean`  | `true`       | Toggle year section and year picker mode                              |
| **time**               | `boolean`  | `false`      | Toggle time picker mode                                               |
| **months**             | `boolean`  | `false`      | Toggle side month-selector.                                           |
| **compactYears**       | `boolean`  | `false`      | Toggle compact years-selector in header.                              |
| **compactMonths**      | `boolean`  | `true`       | Toggle compact month-selector in header.                              |
| **brutalism**          | `boolean`  | `false`      | Toggle brutalism mode (unset border-radius).
| **jellyMode**          | `boolean`  | `false`      | Toggle **Jelly Mode** extra adaptive layout (with dynamic font-size). |
| **highlightWeekends**  | `boolean`  | `true`       | Use this if you want to highlight weekends.                           |
| **disableWeekends**    | `boolean`  | `false`      | Use this if you want to disable weekends.                             |
| **showWeekNumber**     | `boolean`  | -----        | Use this if you want to display week numbers.                         |
| **gradientBackground** | `boolean`  | '`false`'    | Toggle for main block gradient background.                            |
| **gestures**           | `boolean`  | -----        | Enable swipe gestures on mobile screen to change months.              |
| **startOfWeek**        | `number`   | 1            | Set start of week day, values (0 to 7) where 0 == Sunday              |
| **width**              | `string`   | `100%`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                    |
| **height**             | `string`   | `auto`       | Any CSS height measure                                                |

## 🎨 Aesthetic Themes

We offer 16 beautiful themes out of the box. Use the `theme` prop to switch between them.

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

| 🌑 Dark Themes                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ☀️ Light Themes                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="accent" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="backdrop" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="highlight" valign="middle"/> <img src="https://placehold.co/15x15/2d2d2d/2d2d2d.png" title="tone" valign="middle"/> <img src="https://placehold.co/15x15/f0f0f0/f0f0f0.png" title="text" valign="middle"/> **`carbon`** | <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="accent" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" title="backdrop" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="highlight" valign="middle"/> <img src="https://placehold.co/15x15/f4f4f4/f4f4f4.png" title="tone" valign="middle"/> <img src="https://placehold.co/15x15/1a1a1c/1a1a1c.png" title="text" valign="middle"/> **`paper`** |
| <img src="https://placehold.co/15x15/161111/161111.png" valign="middle"/> <img src="https://placehold.co/15x15/0d0909/0d0909.png" valign="middle"/> <img src="https://placehold.co/15x15/f92f2f/f92f2f.png" valign="middle"/> <img src="https://placehold.co/15x15/3a1616/3a1616.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`crimson`**                                                                            | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/f5f3f7/f5f3f7.png" valign="middle"/> <img src="https://placehold.co/15x15/681c9e/681c9e.png" valign="middle"/> <img src="https://placehold.co/15x15/ebdff4/ebdff4.png" valign="middle"/> <img src="https://placehold.co/15x15/2b2533/2b2533.png" valign="middle"/> **`amethyst`**                                                                          |
| <img src="https://placehold.co/15x15/0d0d15/0d0d15.png" valign="middle"/> <img src="https://placehold.co/15x15/07070b/07070b.png" valign="middle"/> <img src="https://placehold.co/15x15/00f3ff/00f3ff.png" valign="middle"/> <img src="https://placehold.co/15x15/301649/301649.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`cyber`**                                                                              | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/f8f9fc/f8f9fc.png" valign="middle"/> <img src="https://placehold.co/15x15/60d276/60d276.png" valign="middle"/> <img src="https://placehold.co/15x15/eaedf4/eaedf4.png" valign="middle"/> <img src="https://placehold.co/15x15/171827/171827.png" valign="middle"/> **`mintblue`**                                                                          |
| <img src="https://placehold.co/15x15/141721/141721.png" valign="middle"/> <img src="https://placehold.co/15x15/1a1e2b/1a1e2b.png" valign="middle"/> <img src="https://placehold.co/15x15/3559e0/3559e0.png" valign="middle"/> <img src="https://placehold.co/15x15/212638/212638.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`midnight`**                                                                           | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/dbd8e0/dbd8e0.png" valign="middle"/> <img src="https://placehold.co/15x15/d65d91/d65d91.png" valign="middle"/> <img src="https://placehold.co/15x15/e5e1e9/e5e1e9.png" valign="middle"/> <img src="https://placehold.co/15x15/2d2a32/2d2a32.png" valign="middle"/> **`larosa`**                                                                            |
| <img src="https://placehold.co/15x15/020602/020602.png" valign="middle"/> <img src="https://placehold.co/15x15/010401/010401.png" valign="middle"/> <img src="https://placehold.co/15x15/76ff03/76ff03.png" valign="middle"/> <img src="https://placehold.co/15x15/1a1f1a/1a1f1a.png" valign="middle"/> <img src="https://placehold.co/15x15/00e676/00e676.png" valign="middle"/> **`phosphor`**                                                                           | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/e2e5e9/e2e5e9.png" valign="middle"/> <img src="https://placehold.co/15x15/3a60d6/3a60d6.png" valign="middle"/> <img src="https://placehold.co/15x15/eceff4/eceff4.png" valign="middle"/> <img src="https://placehold.co/15x15/212630/212630.png" valign="middle"/> **`snowstorm`**                                                                         |
| <img src="https://placehold.co/15x15/1c1a17/1c1a17.png" valign="middle"/> <img src="https://placehold.co/15x15/1f1c18/1f1c18.png" valign="middle"/> <img src="https://placehold.co/15x15/e3ae5c/e3ae5c.png" valign="middle"/> <img src="https://placehold.co/15x15/2f2b24/2f2b24.png" valign="middle"/> <img src="https://placehold.co/15x15/fdfbf7/fdfbf7.png" valign="middle"/> **`sandstone`**                                                                          | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/d8cf9a/d8cf9a.png" valign="middle"/> <img src="https://placehold.co/15x15/e67e22/e67e22.png" valign="middle"/> <img src="https://placehold.co/15x15/e4dbab/e4dbab.png" valign="middle"/> <img src="https://placehold.co/15x15/2b2718/2b2718.png" valign="middle"/> **`solar`**                                                                             |
| <img src="https://placehold.co/15x15/1a0f0f/1a0f0f.png" valign="middle"/> <img src="https://placehold.co/15x15/1c1111/1c1111.png" valign="middle"/> <img src="https://placehold.co/15x15/ff5e5e/ff5e5e.png" valign="middle"/> <img src="https://placehold.co/15x15/341d1d/341d1d.png" valign="middle"/> <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> **`dracula`**                                                                            | <img src="https://placehold.co/15x15/ffffff/ffffff.png" valign="middle"/> <img src="https://placehold.co/15x15/e9ded5/e9ded5.png" valign="middle"/> <img src="https://placehold.co/15x15/a65d3a/a65d3a.png" valign="middle"/> <img src="https://placehold.co/15x15/f5ece5/f5ece5.png" valign="middle"/> <img src="https://placehold.co/15x15/6e4531/6e4531.png" valign="middle"/> **`comfy`**                                                                             |
| <img src="https://placehold.co/15x15/122127/122127.png" valign="middle"/> <img src="https://placehold.co/15x15/14252e/14252e.png" valign="middle"/> <img src="https://placehold.co/15x15/27d1f4/27d1f4.png" valign="middle"/> <img src="https://placehold.co/15x15/242f52/242f52.png" valign="middle"/> <img src="https://placehold.co/15x15/f1f5f9/f1f5f9.png" valign="middle"/> **`temporal`**                                                                           | <img src="https://placehold.co/15x15/fcfcf5/fcfcf5.png" valign="middle"/> <img src="https://placehold.co/15x15/f7f8f9/f7f8f9.png" valign="middle"/> <img src="https://placehold.co/15x15/80ec27/80ec27.png" valign="middle"/> <img src="https://placehold.co/15x15/e9f3eb/e9f3eb.png" valign="middle"/> <img src="https://placehold.co/15x15/1f2937/1f2937.png" valign="middle"/> **`neonlight`**                                                                         |

&nbsp;

<a href="https://calendar-demo-pi.vercel.app/?step=3" target="_blank">
  <img src="https://img.shields.io/badge/Themes%20Playground-Try%20it%20Out-60d276?style=for-the-badge&logo=paint-format&logoColor=white" alt="Play with themes" />
</a>

### 🌍 Localization

No dictionaries, no extra bytes. The library leverages the native browser **Intl API**, providing instant support for **400+ locales**.

```tsx
  <Calendar locale="en" /> // Default
  <Calendar locale="zh-CN" />  // Chinese
```

Pass any **BCP 47** language tag, and the calendar will automatically format days, months, and smart presets according to local standards.

![Check all locales](https://img.shields.io/badge/400_Locales-Supported-60d276?style=flat-square&logo=globe&logoColor=white)

## ✅ Patch notes:

### 🚀 Version 3.0.5

- **🪲 Minor bug fixes**
- **🔳 Brutalism mode prop** - To remove rounded corners.
- **🍮 Jelly Mode (Fluid Scaling)** — True responsive design. The calendar fluidly scales its text and layout to perfectly fill any parent container while preserving exact proportions.
- **🎨 New Themes & Gradients** — Added `Crimson` and `Amethyst` themes. Enable the `gradientBackground` prop to add visual depth tailored to your active theme.
- **🗓️ Advanced Grid Controls** — Deeply tailor the calendar to your needs:
  - `startOfWeek`: Choose ANY day to start the week (e.g., `0` for Sunday, `1` for Monday, `2` for Tuesday, etc).
  - `showWeekNumber`: Display a dedicated column for ISO week numbers.
  - `highlightWeekends` & `disableWeekends`: Visually emphasize weekends or completely lock them out from selection.
- **📱 Touch Gestures** — Enable the `gestures` prop for smooth, native-feeling swipe navigation between months on mobile devices.
- **🗜️ Compact & Overhauled Selectors** — Introducing `compactMonths` and `compactYears`—sleek, space-saving dropdowns built directly into the header. The standard full-view month and year `selector` screens have also been completely redesigned.
- **💅 Zero-Runtime Styling** — Migrated from `goober` to **CSS Modules**, completely eliminating CSS-in-JS runtime overhead for better performance and predictable scoping.
- **⚡ Next-Gen Build Engine** — Switched from `tsup` to `tsdown` for superior minification. While the massive influx of new features resulted in a slightly larger footprint, the new bundler keeps the calendar incredibly lean and highly optimized.

  [**Full Version History in CONTRIBUTING.md**](https://github.com/kirilinsky/react-calendar-datetime/blob/main/CONTRIBUTING.md)

## 🗺️ Roadmap

- [ ] **Date Range** — Support for date range selection.
- [ ] **Custom Presets** — Ability to pass custom quick-select buttons.
- [ ] **Custom Themes** — API for creating and applying fully custom color schemes.
- [ ] **Disabled Dates Array** — Specific date blocking by passing an array.
- [ ] **RTL Support** — Full support for right-to-left interfaces.
- [ ] **Compact Time Selector** — A new minimalist widget for time selection.
