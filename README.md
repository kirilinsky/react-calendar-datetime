<div align="center">

[![npm version](https://img.shields.io/npm/v/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
&nbsp;&nbsp;
[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
&nbsp;&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
&nbsp;&nbsp;
![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)
&nbsp;&nbsp;
![locales](https://img.shields.io/badge/locales-10-blue?style=flat-square)
&nbsp;&nbsp;
![themes](https://img.shields.io/badge/themes-12-orange?style=flat-square)
&nbsp;&nbsp;
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
&nbsp;&nbsp;
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

</div>

# ⚡️ React Calendar & Date/Time Picker

📅 **Ultra-lightweight** Date & Time picker for React. Built with **zero external dependencies**, **zero-runtime-bloat**, native **Intl** localization, time presets and aesthetic custom themes.

<div align="center">
  <table style="border: none; border-collapse: collapse;">
    <tr style="border: none;">
      <td align="center" style="border: none; padding: 6px;">
        <p><b>Light Theme</b></p>
        <img src="https://i.postimg.cc/3RZyjPRL/white.png" alt="Calendar Light Theme" width="400" />
      </td>
      <td align="center" style="border: none; padding: 6px;">
        <p><b>Dark Theme</b></p>
        <img src="https://i.postimg.cc/7ZTftCh9/dark.png" alt="Calendar Dark Theme" width="400" />
      </td>
    </tr>
  </table>

  <br />

  <a href="https://react-calendar-datetime.vercel.app/?story=calendar--base" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Try%20it%20Out-60d276?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo" />
  </a>
</div>

## 🔨 How to install:

```tsx

   npm i react-calendar-datetime

```

## 📆 How to use:

[![How to use](https://iili.io/q0IyGDv.md.png)](https://github.com/kirilinsky/react-calendar-datetime)

```tsx
import { Calendar } from "react-calendar-datetime";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar date={date} onChangeDate={setDate} locale="en" theme="comfy" />
  );
};

export default App;
```

## Props:

| Property         | Type       | Default      | Description                                                       |
| :--------------- | :--------- | :----------- | :---------------------------------------------------------------- |
| **date**         | `Date`     | `new Date()` | Accepts native Date, string, number or Dayjs instance             |
| **onChangeDate** | `function` | -----        | Callback returns new native Date object on change                 |
| **locale**       | `string`   | `'en'`       | See [Supported Locales](#-supported-locales)                      |
| **theme**        | `string`   | `'light'`    | Theme (style) name [Supported themes](#-supported-themes)         |
| **presets**      | `boolean`  | `false`      | Enables quick date selection (today, yesterday, etc.)             |
| **time**         | `boolean`  | `false`      | Enables time picker mode                                          |
| **months**       | `boolean`  | `true`       | Toggle side month-selector. If `false`, day-grid fills full width |
| **width**        | `string`   | `null`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                |
| **height**       | `string`   | `null`       | Any CSS height measure                                            |

### 🎨 Theming

The calendar comes with 12 built-in themes. Just pass the theme name as a prop:

<img src="https://i.ibb.co/PZMb2k02/theme.png" alt="Theme" />

### 🎨 Supported themes

| Dark Themes     | Backdrop                                                                 | Highlight                                                                |     | Light Themes    | Backdrop                                                                 | Highlight                                                                |
| :-------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------- | :-- | :-------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **`dark`**      | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) |     | **`light`**     | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) |
| **`midnight`**  | ![](https://img.shields.io/badge/-%23141721-%23141721?style=flat-square) | ![](https://img.shields.io/badge/-%233559e0-%233559e0?style=flat-square) |     | **`mintblue`**  | ![](https://img.shields.io/badge/-%23f8f9fc-%23f8f9fc?style=flat-square) | ![](https://img.shields.io/badge/-%2360d276-%2360d276?style=flat-square) |
| **`cyber`**     | ![](https://img.shields.io/badge/-%230d0d15-%230d0d15?style=flat-square) | ![](https://img.shields.io/badge/-%2300f3ff-%2300f3ff?style=flat-square) |     | **`comfy`**     | ![](https://img.shields.io/badge/-%23E9DED5-%23E9DED5?style=flat-square) | ![](https://img.shields.io/badge/-%23A65D3A-%23A65D3A?style=flat-square) |
| **`phosphor`**  | ![](https://img.shields.io/badge/-%23020602-%23020602?style=flat-square) | ![](https://img.shields.io/badge/-%2376ff03-%2376ff03?style=flat-square) |     | **`snowstorm`** | ![](https://img.shields.io/badge/-%23E2E5E9-%23E2E5E9?style=flat-square) | ![](https://img.shields.io/badge/-%233A60D6-%233A60D6?style=flat-square) |
| **`dracula`**   | ![](https://img.shields.io/badge/-%231a0f0f-%231a0f0f?style=flat-square) | ![](https://img.shields.io/badge/-%23ff5e5e-%23ff5e5e?style=flat-square) |     | **`larosa`**    | ![](https://img.shields.io/badge/-%23DBD8E0-%23DBD8E0?style=flat-square) | ![](https://img.shields.io/badge/-%23D65D91-%23D65D91?style=flat-square) |
| **`sandstone`** | ![](https://img.shields.io/badge/-%231c1a17-%231c1a17?style=flat-square) | ![](https://img.shields.io/badge/-%23e3ae5c-%23e3ae5c?style=flat-square) |     | **`solar`**     | ![](https://img.shields.io/badge/-%23D8CF9A-%23D8CF9A?style=flat-square) | ![](https://img.shields.io/badge/-%23A5994B-%23A5994B?style=flat-square) |

### 🌍 Supported Locales

The library uses the native **Intl API** for localization, ensuring minimal bundle size and high performance.

| Language         | Code |     | Language          | Code    |
| :--------------- | :--- | :-- | :---------------- | :------ |
| 🇺🇸 **English**   | `en` |     | 🇩🇪 **German**     | `de`    |
| 🇮🇹 **Italian**   | `it` |     | 🇫🇷 **French**     | `fr`    |
| 🇷🇺 **Russian**   | `ru` |     | 🇪🇸 **Spanish**    | `es`    |
| 🇺🇦 **Ukrainian** | `ua` |     | 🇨🇳 **Chinese**    | `zh-cn` |
| 🇷🇸 **Serbian**   | `sr` |     | 🇵🇹 **Portuguese** | `pt`    |

## ✅ Patch notes:

### 🚀 Version 2.4.0

- **Themes:** added `Comfy`, `La Rosa`,`Solar`, and `Snowstorm` palette.
- **Locales:** added `pt` 🇵🇹 language.

<details>
<summary>📜 Older versions</summary>
<br />
<ul>
  <li><strong>v2.3.0:</strong> Removed <code>dayjs</code>, refactored Time Picker, Implemented a fixed 42-cell days grid</li>
  <li><strong>v2.2.0:</strong> Auto-injected runtime styles (~1KB), added <code>Dracula</code> 🔴 dark-red palette</li>
  <li><strong>v2.1.0:</strong> Added <code>Phosphor</code> neon-green theme</li>
  <li><strong>v2.0.0:</strong> TS migration, strict types, React 19, pre-generated labels, flexible <code>months</code> layout, <code>es</code>/<code>sr</code> locales</li>
  <li><strong>v1.3.1:</strong> Added year picker, dark theme, and <code>zh-cn</code>, <code>fr</code> locales</li>
  <li><strong>v1.0.0:</strong> Initial release</li>
</ul>
</details>

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

</div>
