"use strict";var e=require("classnames"),t=require("react"),a=require("../../../../../../modules");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var l=r(e),d=r(t);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.calendar{min-width:60vh;min-height:60vh;background:#ddd;display:grid;grid-template-columns:2fr 5fr;grid-template-rows:50px auto;grid-template-areas:"YY YY" "MM DD";user-select:none;font-family:sans-serif}.calendar.with_presets:not(.with_time){min-height:60vh;grid-template-columns:2fr 5fr;grid-template-rows:50px auto 50px;grid-template-areas:"YY YY" "MM DD" "PRESETS PRESETS"}.calendar.with_time:not(.with_presets){min-width:75vh;grid-template-columns:2fr 5fr 2fr;grid-template-rows:50px auto;grid-template-areas:"YY YY YY" "MM DD TIME";column-gap:2px}.calendar.with_presets,.calendar.with_time{grid-template-columns:2fr 5fr 2fr;grid-template-rows:50px auto 50px;grid-template-areas:"YY YY YY" "MM DD TIME" "PRESETS PRESETS PRESETS"}.calendar-presets{grid-area:PRESETS;display:flex;width:100%}.calendar-presets-preset{text-align:center;font-size:13px;width:20%;background:#9c9999;border-right:1px solid #fff;padding:3px}.calendar-presets-preset:last-child{border:none}.calendar-time{grid-area:TIME;display:flex;padding-left:1px}.calendar-time-half{width:50%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(7,1fr);background:#eeebe7}.calendar-time-half-cell:first-child,.calendar-time-half-cell:last-child{background:#ddd}.calendar-time-half-cell:nth-child(4){position:relative}.calendar-time-half-cell img{max-width:20%}.calendar-years{grid-area:YY;display:flex;justify-content:space-between}.calendar-years-current{width:60%;height:100%;text-align:center;font-weight:700;font-size:20px}.calendar-years-arrow{width:50px;height:100%}.calendar-years-arrow img{max-height:50%}.calendar-months{grid-area:MM;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(6,1fr)}.calendar-months-month{height:100%;font-size:14px;padding:1px 0}.calendar-days{grid-area:DD;background:#eeebe7;display:grid;grid-template-columns:repeat(7,1fr)}.calendar-time-half-cell:nth-child(4),.calendar_active{background:#b1aa48}.calendar-button:active,.calendar-button:hover,.calendar-days-day:active,.calendar-days-day:hover,.calendar-months-month:active,.calendar-months-month:hover,.calendar-presets-preset:active,.calendar-presets-preset:hover,.calendar-time-half-cell:active,.calendar-time-half-cell:hover,.calendar-years-arrow:active,.calendar-years-arrow:hover{background:#b1aa48;cursor:pointer}.calendar-days-day,.calendar-fcc,.calendar-months-month,.calendar-presets-preset,.calendar-time-half-cell,.calendar-years-arrow,.calendar-years-current{display:flex;align-items:center;justify-content:center}.dividerhour:after{content:":";position:absolute;top:50%;transform:translateY(-55%);right:0}'),Calendar=({presets:e=!1,date:r=new Date,time:i=!1,locale:c="en-gb",onChangeDate:s,width:o=null,height:h=null})=>{const[m,p]=t.useState(!c),f=e=>{s?s(e.toDate()):console.warn('Must be a handle function "onChangeDate"')};return t.useEffect((()=>{c&&"string"==typeof c&&Promise.resolve().then((function(){return n(require(`moment/locale/${c}`))})).then((()=>{p(!0)}))}),[]),d.default.createElement("div",{style:{width:o,height:h},className:l.default("calendar",{with_time:i,with_presets:e})},d.default.createElement(a.Years,{date:r,changeAction:f}),m&&d.default.createElement(a.Months,{date:r,changeAction:f}),d.default.createElement(a.Days,{date:r,changeAction:f}),i&&d.default.createElement(a.Time,{date:r,changeAction:f}),e&&d.default.createElement(a.Presets,{locale:c,date:r,changeAction:f}))};