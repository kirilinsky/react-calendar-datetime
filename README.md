# Calendar component for React

---
[![npm version](https://badge.fury.io/js/react-calendar-datetime.svg)](https://badge.fury.io/js/react-calendar-datetime) ![npm](https://img.shields.io/npm/dw/react-calendar-datetime)

###  [Demo](https://alex-webstart.xyz/calendar/)
[![N|Solid](https://s6.gifyu.com/images/QOg983dxWR.gif)](https://alex-webstart.xyz/calendar/)


📅 date and **time** picker, include presets

<div style="display:flex;width:80vw">
<img src="https://i.ibb.co/y5wg5Gp/browser-lg-Azxu6-JLE.png" alt="time" width="45%"/>
<img src="https://i.ibb.co/y5WgThj/browser-m-WUa-EXd1-GT.png" width="45%" alt="dark" > 
</div>

 ___


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
  const [date, setDate] = useState(new Date());
  return <Calendar date={date} onChangeDate={setDate} />;
};
```

Easy and simple :+1:

## Props:

| Property     |   Type   |      Default |                                                           Description |
| :----------- | :------: | -----------: | --------------------------------------------------------------------: |
| date         |   Date   | `new Date()` |                                 accepts the date in the normal format |
| onChangeDate | function |        ----- |    callback, called when the calendar changes and return the new date |
| locale       |  string  |    '_en-gb_' | locale name, currently supported: `en-gb`,`ru`,`de`,`uk`,`zh-cn`,`fr` |
| presets      | boolean  |      `false` |                                                          presets mode |
| time         | boolean  |      `false` |                                                       timepicker mode |
| width        |  string  |       `null` |                                         any _css-lang_ string measure |
| height       |  string  |       `null` |                                         any _css-lang_ string measure |
| dark         | boolean  |        false |                                                            dark theme |

## ✅ Patch note:

---

v 1.2.2

- add year picker
- add dark theme 🌙
[![N|Solids](https://s6.gifyu.com/images/dtfEBi6mpI.gif)](https://alex-webstart.xyz/calendar/?path=/story/calendar-react--dark-theme)
- add locales:
  - `zh-cn`
  - `fr`


 