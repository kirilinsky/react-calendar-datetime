[![npm version](https://img.shields.io/npm/v/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

# Calendar component for React (i18n)

---

📅 Modern **Date** and **Time** picker with locales, built-in presets and themes.

[![N|Solid](https://i.ibb.co/TBshMfhH/image.png)](https://react-calendar-datetime.vercel.app/?story=components--calendar--base)

  <a href="https://react-calendar-datetime.vercel.app/?story=components--calendar--base" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Try%20it%20Out-60d276?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo" />
  </td>
 
---

## 🔨 How to install:

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=60D276&background=0F111A&vCenter=true&width=400&lines=%3E+npm+i+react-calendar-datetime)](https://git.io/typing-svg)

```javascript

  npm i react-calendar-datetime

```

## 📆 How to use:

```javascript
import React from "react";
import { Calendar } from "react-calendar-datetime";

const App = () => {
  const [date, setDate] = useState < Date > new Date();

  return <Calendar date={date} onChangeDate={setDate} />;
};
```

## Props:

| Property         | Type            | Default      | Description                                                       |
| :--------------- | :-------------- | :----------- | :---------------------------------------------------------------- |
| **date**         | `Date \| Dayjs` | `new Date()` | Accepts native Date, string, number or Dayjs instance             |
| **onChangeDate** | `function`      | -----        | Callback returns new native Date object on change                 |
| **locale**       | `string`        | `'en'`       | Supported: `en`,`it`, `ru`, `ua`, `de`, `fr`, `zh-cn`, `es`, `sr` |
| **theme**        | `string`        | `'light'`    | Theme (style) name                                                |
| **presets**      | `boolean`       | `false`      | Enables quick date selection (today, yesterday, etc.)             |
| **time**         | `boolean`       | `false`      | Enables time picker mode                                          |
| **months**       | `boolean`       | `true`       | Toggle side month-selector. If `false`, day-grid fills full width |
| **width**        | `string`        | `null`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                |
| **height**       | `string`        | `null`       | Any CSS height measure                                            |

### 🎨 Theming

The calendar comes with 8 built-in themes. Just pass the theme name as a prop: `<Calendar theme="dracula" />`.

| Theme Name      | Background (`accent`)                                                    | Highlight (`highlight`)                                                  |
| :-------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **`light`**     | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) |
| **`dark`**      | ![](https://img.shields.io/badge/-%231a1a1c-%231a1a1c?style=flat-square) | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) |
| **`cyber`**     | ![](https://img.shields.io/badge/-%230d0d15-%230d0d15?style=flat-square) | ![](https://img.shields.io/badge/-%2300f3ff-%2300f3ff?style=flat-square) |
| **`phosphor`**  | ![](https://img.shields.io/badge/-%23020602-%23020602?style=flat-square) | ![](https://img.shields.io/badge/-%2376ff03-%2376ff03?style=flat-square) |
| **`midnight`**  | ![](https://img.shields.io/badge/-%23141721-%23141721?style=flat-square) | ![](https://img.shields.io/badge/-%233559e0-%233559e0?style=flat-square) |
| **`sandstone`** | ![](https://img.shields.io/badge/-%231c1a17-%231c1a17?style=flat-square) | ![](https://img.shields.io/badge/-%23e3ae5c-%23e3ae5c?style=flat-square) |
| **`mintblue`**  | ![](https://img.shields.io/badge/-%23ffffff-%23ffffff?style=flat-square) | ![](https://img.shields.io/badge/-%2360d276-%2360d276?style=flat-square) |
| **`dracula`**   | ![](https://img.shields.io/badge/-%231a0f0f-%231a0f0f?style=flat-square) | ![](https://img.shields.io/badge/-%23ff5e5e-%23ff5e5e?style=flat-square) |

## 🛠 Scripts

Basic commands for development and building:

- `npm run dev` — Starts **tsup** in watch mode. Use this for active development.
- `npm run build` — Compiles the library into the `dist` folder for production.
- `npm run start` — Launches **Ladle** to preview your components and themes in isolation.

---

## ✅ Patch notes:

## 🚀 Version 2.3.0 _ Current _

- **Zero-Deps:** Removed `dayjs` entirely; significantly reduced bundle size by switching to native **JS Date** and **Intl API**.
- **Drum Picker & IT:** Revamped Time Picker with a smooth "drum" UI, input throttling, and added **Italian** locale support.
- **Stable UI:** Implemented a fixed 42-cell grid to prevent layout shifts, enhanced with a subtle fade-in animation.

<details>
<summary>📜 Older versions</summary>

- **v2.2.0:** Auto-injected runtime styles (~1KB), added `Dracula` 🔴 dark-red palette.
- **v2.1.0:** Added `Phosphor` neon-green theme.
- **v2.0.0:** TS migration, strict types, React 19, pre-generated labels, flexible `months` layout, `es`/`sr` locales.
- **v1.3.1:** Added year picker, dark theme, and `zh-cn`, `fr` locales.
- **v1.0.0:** Initial release.
</details>
