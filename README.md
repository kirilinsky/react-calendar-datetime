[![npm version](https://img.shields.io/npm/v/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

# Calendar component for React (i18n)

---

📅 Modern **Date** and **Time** picker with built-in presets and customizable themes.

[**Live Demo**](https://react-calendar-datetime.vercel.app/?story=components--calendar--base)

[![N|Solid](https://i.ibb.co/WvZsPvWJ/image.png)](https://react-calendar-datetime.vercel.app/?story=components--calendar--base)

  <img src="https://i.ibb.co/B5pxjJf9/image.png" alt="Time Picker" width="45%"/>
# Time picker
  <img src="https://i.ibb.co/99RdvGNM/image.png" alt="Dark Theme" width="50%" >
# Themes

---

## 🔨 How to install:

```javascript

  npm install react-calendar-datetime

  or

  yarn add react-calendar-datetime

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

| Property         | Type            | Default      | Description                                                                    |
| :--------------- | :-------------- | :----------- | :----------------------------------------------------------------------------- |
| **date**         | `Date \| Dayjs` | `new Date()` | Accepts native Date, string, number or Dayjs instance                          |
| **onChangeDate** | `function`      | -----        | Callback returns new native Date object on change                              |
| **locale**       | `string`        | `'en'`       | Supported: `en`, `ru`, `ua`, `de`, `fr`, `zh-cn`, `es`, `sr`                   |
| **theme**        | `string`        | `'light'`    | Styles: `light`, `dark`, `midnight`, `sandstone`, `mintblue,dracula, phosphor` |
| **presets**      | `boolean`       | `false`      | Enables quick date selection (today, yesterday, etc.)                          |
| **time**         | `boolean`       | `false`      | Enables time picker mode                                                       |
| **months**       | `boolean`       | `true`       | Toggle side month-selector. If `false`, day-grid fills full width              |
| **width**        | `string`        | `null`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                             |
| **height**       | `string`        | `null`       | Any CSS height measure                                                         |

## 🛠 Scripts

Basic commands for development and building:

- `npm run dev` — Starts **tsup** in watch mode. Use this for active development.
- `npm run build` — Compiles the library into the `dist` folder for production.
- `npm run start` — Launches **Ladle** to preview your components and themes in isolation.

---

## ✅ Patch notes:

### 📦 v2.2.0 — The Runtime Evolution

**Core Engine:**

- **Goober Integration:** Migrated to runtime CSS-in-JS (~1KB). Dropped `clsx`
- **Import:** Styles are now auto-injected; manual `.css` imports removed.

**Themes:**

- **Dracula Theme:** Added a new `Dracula` 🔴 dark-red color palette.

### v 2.1.0 — New Theme 🟢 'Phosphor' added

<img src="https://iili.io/qcQT4CG.md.png" alt="Phosphor" border="0">

### v 2.0.0 — The "Performance & Style" Update 🚀

**Refactoring & Optimization:**

- **clsx:** Switched for better performance and lower weight.
- **Logic:** Pre-generated labels to cut `dayjs` overhead.
- **Stability:** Fixed dynamic locales and added strict type safety via `typescript`.

**New Features:**

- **Visuals:** Added weekday headers and 5 built-in color themes.
- **Layout:** New flexible `months` prop for responsive grids.
- **i18n:** Added `es`, `sr` support and localized smart presets.

---

### v 1.3.1

- Added year picker
- Added dark theme 🌙
- Added locales: `zh-cn`, `fr`

---

### v 1.0.0

- Base version of the calendar
- Date and time selection
- Basic presets
