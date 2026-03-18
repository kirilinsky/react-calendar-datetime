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
        <img src="https://i.postimg.cc/3RZyjPRL/white.png" alt="Light" width="430" />
      </td>
      <td align="center" style="border: none; padding: 6px;">
        <p><b>Sandstone Theme</b></p>
        <img src="https://i.postimg.cc/7ZTftCh9/dark.png" alt="Dark" width="430" />
      </td>
    </tr>
  </table>

  <br />

  <a href="https://react-calendar-datetime.vercel.app/?story=calendar--base" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Try%20it%20Out-60d276?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo" />
  </a>
</div>

### ✨ Key Features

- 🚀 **Zero Dependencies** — No `moment`, `dayjs`, or `date-fns`. Just pure React.
- 📦 **Tiny Footprint** — Optimized for the modern web.
- 🌎 **Global by Default** — Instant support for **400+ BCP47 locales** (including `en`, `de`, `ru`, `zh-CN` etc).
- 🌐 **Universal Localization** — No dictionaries, no extra bytes—powered by native **Intl API**.
- 🎨 **16 Aesthetic Themes** — Switch between `Midnight`, `Snow`, `Solar`, `Crimson` and more.
- 🕒 **Smart Presets** — Quick select for "Today", "Last week", "Month ago" etc.
- 🛠️ **Fully Modular** — Toggle **Years**, **Months**, **Time**, or **Presets** independently. Build your own UI.
- 🎛️ **Deeply Customizable** — Tailor the experience: choose start-of-week day, highlight weekends, gradient and more.

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

| Property               | Type                           | Default      | Description                                                           |
| :--------------------- | :----------------------------- | :----------- | :-------------------------------------------------------------------- |
| **date**               | `Date`                         | `new Date()` | Accepts native Date                                                   |
| **minDate**            | `Date`                         | -----        | Accepts native Date                                                   |
| **maxDate**            | `Date`                         | -----        | Accepts native Date                                                   |
| **onChangeDate**       | `function`                     | -----        | Callback returns new native Date on change                            |
| **locale**             | `string`                       | `'en'`       | Supports every possible locale, see [Localization](#-localization)    |
| **theme**              | `string`                       | `'paper'`    | Theme (style) name [Supported themes](#-supported-themes)             |
| **presets**            | `boolean`                      | `false`      | Toggle quick date selection (today, yesterday, etc.)                  |
| **years**              | `boolean`                      | `true`       | Toggle year section and year picker mode                              |
| **time**               | `boolean`                      | `false`      | Toggle time picker mode                                               |
| **months**             | `boolean`                      | `false`      | Toggle side month-selector.                                           |
| **compactYears**       | `boolean`                      | `false`      | Toggle compact years-selector in header.                              |
| **compactMonths**      | `boolean`                      | `true`       | Toggle compact month-selector in header.                              |
| **jellyMode**          | `boolean`                      | `false`      | Toggle **Jelly Mode** extra adaptive layout (with dynamic font-size). |
| **highlightWeekends**  | `boolean`                      | `true`       | Use this if you want to highlight weekends.                           |
| **disableWeekends**    | `boolean`                      | `false`      | Use this if you want to disable weekends.                             |
| **showWeekNumber**     | `boolean`                      | -----        | Use this if you want to display week numbers.                         |
| **gradientBackground** | `boolean`                      | '`false`'    | Toggle for main block gradient background.                            |
| **gestures**           | `boolean`                      | -----        | Enable swipe gestures on mobile screen to change months.              |
| **startOfWeek**        | `number (0 to 7)  0 == Sunday` | 1            | Set start of week day.                                                |
| **width**              | `string`                       | `100%`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                    |
| **height**             | `string`                       | `auto`       | Any CSS height measure                                                |

### 🎨 Theming

The calendar comes with 16 built-in themes. Just pass the theme name as a prop:

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

### 🎨 Supported themes

| Dark Themes     | Backdrop                                                                 | Highlight                                                                |     | Light Themes    | Backdrop                                                                 | Highlight                                                                |
| :-------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------- | :-- | :-------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **`carbon`**    | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) |     | **`paper`**     | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) |
| **`midnight`**  | ![](https://img.shields.io/badge/-%231a1e2b-%231a1e2b?style=flat-square) | ![](https://img.shields.io/badge/-%233559e0-%233559e0?style=flat-square) |     | **`mintblue`**  | ![](https://img.shields.io/badge/-%23f8f9fc-%23f8f9fc?style=flat-square) | ![](https://img.shields.io/badge/-%2360d276-%2360d276?style=flat-square) |
| **`cyber`**     | ![](https://img.shields.io/badge/-%2307070b-%2307070b?style=flat-square) | ![](https://img.shields.io/badge/-%2300f3ff-%2300f3ff?style=flat-square) |     | **`comfy`**     | ![](https://img.shields.io/badge/-%23e9ded5-%23e9ded5?style=flat-square) | ![](https://img.shields.io/badge/-%23a65d3a-%23a65d3a?style=flat-square) |
| **`phosphor`**  | ![](https://img.shields.io/badge/-%23010401-%23010401?style=flat-square) | ![](https://img.shields.io/badge/-%2376ff03-%2376ff03?style=flat-square) |     | **`snowstorm`** | ![](https://img.shields.io/badge/-%23e2e5e9-%23e2e5e9?style=flat-square) | ![](https://img.shields.io/badge/-%233a60d6-%233a60d6?style=flat-square) |
| **`dracula`**   | ![](https://img.shields.io/badge/-%231c1111-%231c1111?style=flat-square) | ![](https://img.shields.io/badge/-%23ff5e5e-%23ff5e5e?style=flat-square) |     | **`larosa`**    | ![](https://img.shields.io/badge/-%23dbd8e0-%23dbd8e0?style=flat-square) | ![](https://img.shields.io/badge/-%23d65d91-%23d65d91?style=flat-square) |
| **`sandstone`** | ![](https://img.shields.io/badge/-%231f1c18-%231f1c18?style=flat-square) | ![](https://img.shields.io/badge/-%23e3ae5c-%23e3ae5c?style=flat-square) |     | **`solar`**     | ![](https://img.shields.io/badge/-%23d8cf9a-%23d8cf9a?style=flat-square) | ![](https://img.shields.io/badge/-%23e67e22-%23e67e22?style=flat-square) |
| **`temporal`**  | ![](https://img.shields.io/badge/-%2314252e-%2314252e?style=flat-square) | ![](https://img.shields.io/badge/-%2327d1f4-%2327d1f4?style=flat-square) |     | **`neonlight`** | ![](https://img.shields.io/badge/-%23f7f8f9-%23f7f8f9?style=flat-square) | ![](https://img.shields.io/badge/-%2380ec27-%2380ec27?style=flat-square) |
| **`crimson`**   | ![](https://img.shields.io/badge/-%230d0909-%230d0909?style=flat-square) | ![](https://img.shields.io/badge/-%23f92f2f-%23f92f2f?style=flat-square) |     | **`amethyst`**  | ![](https://img.shields.io/badge/-%23f5f3f7-%23f5f3f7?style=flat-square) | ![](https://img.shields.io/badge/-%23681c9e-%23681c9e?style=flat-square) |

&nbsp;

<a href="https://react-calendar-datetime.vercel.app/?story=calendar--theme-playground" target="_blank">
  <img src="https://img.shields.io/badge/Themes%20Playground-Try%20it%20Out-60d276?style=for-the-badge&logo=paint-format&logoColor=white" alt="Play with themes" />
</a>

### 🌍 Localization

No dictionaries, no extra bytes. The library leverages the native browser **Intl API**, providing instant support for **400+ locales**.

```tsx
  <Calendar locale="en" /> // Default
  <Calendar locale="zh-CN" />  // Chinese
```

Pass any **BCP 47** language tag, and the calendar will automatically format days, months, and smart presets according to local standards.

## ✅ Patch notes:

### 🚀 Version 3.0.0

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
