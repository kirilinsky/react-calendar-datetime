# Calendar component for React

---

📅 Date and **time** picker, include presets

<div style="display:flex;width:80vw">
<img src="https://i.ibb.co/d0G4xXF7/image.png" alt="time" width="45%"/>
<img src="https://i.ibb.co/DPZWq2Tn/image.png" width="45%" alt="dark" > 
</div>

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

### v 2.0.0 — The "Performance & Style" Update 🚀

**Optimization & Refactoring:**

- **Dependency Swap:** Migrated from `classnames` to **`clsx`** — package is now lighter and faster.
- **Architecture Refactor:** Months and weekdays are now pre-generated in the core component, significantly reducing `dayjs` overhead in child components.
- **Modern Bundler Support:** Fixed dynamic locale loading
- **Type Safety:** Added strict `LocaleKey` and `Theme` types for better developer experience.

**New Features:**

- **Weekday Headers:** Added localized day-of-week labels (Mon, Tue, etc.) above the date grid.
- **Built-in Themes:** Introduced 5 color palettes using CSS variables.
- **Flexible Layout:** New `showMonths` prop allows the date grid to adapt and fill the container width.
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
