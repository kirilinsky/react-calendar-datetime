# Calendar component for React

---

### Here - [Demo](https://alex-webstart.xyz/calendar/).

[![N|Solid](https://i.ibb.co/3MhRnbs/yg-Uf-Av1j-Rr.gif)](https://nodesource.com/products/nsolid)

📅 date and time picker, include presets

## 🔨 How to install:

```javascript

  npm install react-calendar-datetime

  or

  yarn add react-calendar-datetime

```

## 📆 How to use:

```javascript

 import React from 'react'

 import {Calendar} from 'react-calendar-datetime'

 const App = () => {
     const [date, setDate] = useState(new Date()
     return <Calendar date={date} onChangeDate={setDate} />
 }

```

Easy and simple :+1:

## Props:

| Property       |   Type   |      Default |                                                        Description |
| :------------- | :------: | -----------: | -----------------------------------------------------------------: |
| date           |   Date   | `new Date()` |                              accepts the date in the normal format |
| `onChangeDate` | function |     -------- | Callback, called when the calendar changes and return the new date |
| locale         |  string  |    '_en-gb_' |           locale name, currently supported: `en-gb`,`ru`,`de`,`uk` |
| presets        | boolean  |      `false` |                                                       presets mode |
| time           | boolean  |      `false` |                                                    timepicker mode |
| width          |  string  |       `null` |                                      any _css-lang_ string measure |
| height         |  string  |       `null` |                                      any _css-lang_ string measure |
