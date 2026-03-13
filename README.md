[![npm version](https://img.shields.io/npm/v/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![react version](https://img.shields.io/badge/react-%5E18.0.0%20%7C%7C%20%5E19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![npm downloads](https://img.shields.io/npm/dm/react-calendar-datetime.svg?style=flat-square)](https://www.npmjs.com/package/react-calendar-datetime)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-calendar-datetime?style=flat-square)](https://bundlephobia.com/package/react-calendar-datetime)
[![license](https://img.shields.io/npm/l/react-calendar-datetime.svg?style=flat-square)](https://github.com/kirilinsky/react-calendar-datetime/blob/main/LICENSE)

# Calendar component for React (i18n)

---

📅 Modern **Date** and **Time** picker with built-in presets and customizable themes.

[**Live Demo**](https://react-calendar-datetime.vercel.app/?story=components--calendar--base)

[![N|Solid](https://i.ibb.co/d0G4xXF7/image.png)](https://react-calendar-datetime.vercel.app/?story=components--calendar--base)

  <img src="https://i.ibb.co/rGGX6sSj/image.png" alt="Time Picker" width="45%"/>
# Time picker
  <img src="https://i.ibb.co/DPZWq2Tn/image.png" alt="Dark Theme" width="45%" >
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

| Property         | Type            | Default      | Description                                                       |
| :--------------- | :-------------- | :----------- | :---------------------------------------------------------------- |
| **date**         | `Date \| Dayjs` | `new Date()` | Accepts native Date, string, number or Dayjs instance             |
| **onChangeDate** | `function`      | -----        | Callback returns new native Date object on change                 |
| **locale**       | `string`        | `'en'`       | Supported: `en`, `ru`, `ua`, `de`, `fr`, `zh-cn`, `es`, `sr`      |
| **theme**        | `string`        | `'light'`    | Styles: `light`, `dark`, `midnight`, `sandstone`, `mint_blue`     |
| **presets**      | `boolean`       | `false`      | Enables quick date selection (today, yesterday, etc.)             |
| **time**         | `boolean`       | `false`      | Enables time picker mode                                          |
| **months**       | `boolean`       | `true`       | Toggle side month-selector. If `false`, day-grid fills full width |
| **width**        | `string`        | `null`       | Any CSS width measure (e.g. `'450px'` or `'100%'`)                |
| **height**       | `string`        | `null`       | Any CSS height measure                                            |

## 🛠 Scripts

Basic commands for development and building:

- `npm run dev` — Starts **tsup** in watch mode. Use this for active development.
- `npm run build` — Compiles the library into the `dist` folder for production.
- `npm run start` — Launches **Ladle** to preview your components and themes in isolation.

---

## ✅ Patch notes:

### v 2.1.0 — New Theme 🟢 'Phosphor' added  

 <img src="https://iili.io/qcQT4CG.md.png"   alt="Phosphor" border="0">

### v 2.0.0 — The "Performance & Style" Update 🚀

**Optimization & Refactoring:**

- **Dependency Swap:** Migrated from `classnames` to **`clsx`** — package is now lighter and faster.
- **Architecture Refactor:** Months and weekdays are now pre-generated in the core component, significantly reducing `dayjs` overhead in child components.
- **Modern Bundler Support:** Fixed dynamic locale loading
- **Type Safety:** Added strict `LocaleKey` and `Theme` types for better developer experience.

**New Features:**

- **Weekday Headers:** Added localized day-of-week labels (Mon, Tue, etc.) above the date grid.
- **Built-in Themes:** Introduced 5 color palettes using CSS variables.
- **Flexible Layout:** New `months` prop allows the date grid to adapt and fill the container width.
- **Expanded Locales:** Added `es` (Spanish) and `sr` (Serbian) support.
- **Smart Presets:** Labels like "yesterday" or "month ago" are now fully localized via a dedicated i18n engine.

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
