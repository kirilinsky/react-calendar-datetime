"use strict";var na=Object.create;var N=Object.defineProperty;var la=Object.getOwnPropertyDescriptor;var ca=Object.getOwnPropertyNames;var sa=Object.getPrototypeOf,ia=Object.prototype.hasOwnProperty;var da=(a,t)=>{for(var n in t)N(a,n,{get:t[n],enumerable:!0})},G=(a,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of ca(t))!ia.call(a,e)&&e!==n&&N(a,e,{get:()=>t[e],enumerable:!(o=la(t,e))||o.enumerable});return a};var y=(a,t,n)=>(n=a!=null?na(sa(a)):{},G(t||!a||!a.__esModule?N(n,"default",{value:a,enumerable:!0}):n,a)),ma=a=>G(N({},"__esModule",{value:!0}),a);var wa={};da(wa,{Calendar:()=>ka});module.exports=ma(wa);var aa=y(require("clsx"),1),x=require("react"),w=y(require("dayjs"),1),ea=y(require("dayjs/plugin/localeData"),1),oe=require("dayjs/locale/en"),ne=require("dayjs/locale/es"),le=require("dayjs/locale/ru"),ce=require("dayjs/locale/de"),se=require("dayjs/locale/sr"),ie=require("dayjs/locale/fr");var j=y(require("dayjs"),1);var g=require("react/jsx-runtime"),R=()=>(0,g.jsx)("svg",{height:"256",viewBox:"0 0 64 64",width:"256",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"})}),T=()=>(0,g.jsx)("svg",{height:"256",viewBox:"0 0 64 64",width:"256",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s-.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"})}),I=()=>(0,g.jsx)("svg",{viewBox:"0 0 492.002 492.002",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844 L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124 c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064 c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132 C494.624,356.041,494.624,338.965,484.136,328.473z"})}),L=()=>(0,g.jsx)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("polygon",{points:"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"})});var b=require("react/jsx-runtime"),fa=({date:a,toggleYearPicker:t,changeAction:n})=>{let o=()=>{n((0,j.default)(a).subtract(1,"year"))},e=()=>{n((0,j.default)(a).add(1,"year"))};return(0,b.jsxs)("div",{className:"calendar-years",children:[(0,b.jsx)("div",{tabIndex:0,role:"button",className:"calendar-years-arrow",onClick:o,onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&o()},children:(0,b.jsx)(R,{})}),(0,b.jsx)("div",{onClick:t,className:"calendar-years-current",role:"button",tabIndex:0,children:(0,j.default)(a).format("YYYY")}),(0,b.jsx)("div",{onClick:e,role:"button",tabIndex:0,className:"calendar-years-arrow",onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&e()},children:(0,b.jsx)(T,{})})]})},H=fa;var C=require("react"),J=y(require("clsx"),1),S=y(require("dayjs"),1);var k=require("react/jsx-runtime"),pa=({toggleYearPicker:a,date:t,changeAction:n})=>{let[o,e]=(0,C.useState)((0,S.default)(t)),[l,r]=(0,C.useState)(!0),s=o.year(),h=Array.from({length:25},(d,_)=>s-12+_),i=d=>{d?.preventDefault(),n((0,S.default)(o)),a()},p=d=>{n((0,S.default)(o).year(d)),a()},v=d=>`${(Math.abs(s-d)*.1/2).toFixed(2)}s`;return(0,C.useEffect)(()=>{r(!1);let d=setTimeout(()=>r(!0),50);return()=>clearTimeout(d)},[o]),(0,k.jsxs)("div",{className:"calendar-yearPicker",onContextMenu:i,children:[(0,k.jsx)("button",{disabled:s<1925,onClick:()=>e(o.subtract(25,"y")),className:"calendar-yearPicker-arrow",children:(0,k.jsx)(R,{})}),h.map(d=>(0,k.jsx)("button",{disabled:d>2100||d<1900,onClick:()=>p(d),className:(0,J.default)("calendar-yearPicker-year",{year_anim:l,calendar_active:s===d}),style:{animationDelay:v(d),animationIterationCount:1},children:d},d)),(0,k.jsx)("button",{className:"calendar-yearPicker-arrow",disabled:s>2075,onClick:()=>e(o.add(25,"y")),children:(0,k.jsx)(T,{})})]})},A=pa;var q=y(require("clsx"),1),F=require("react/jsx-runtime"),ya=({date:a,monthsNames:t,changeAction:n})=>{let o=a.month();return(0,F.jsx)("div",{className:"calendar-months",children:t.map((e,l)=>(0,F.jsx)("div",{className:(0,q.default)("calendar-months-month",{calendar_active:l===o}),onClick:()=>n(a.month(l)),children:e},l))})},K=ya;var Q=y(require("clsx"),1),V=require("react"),M=require("react/jsx-runtime"),ha=({date:a,changeAction:t,weekdays:n})=>{let o=a.date(),e=(0,V.useMemo)(()=>{let r=a.daysInMonth();return Array.from({length:r},(s,h)=>h+1)},[a]),l=r=>{r!==o&&t(a.date(r))};return(0,M.jsxs)("div",{className:"calendar-days",children:[n.map(r=>(0,M.jsx)("div",{className:"calendar-days-header",children:r},r)),e.map(r=>(0,M.jsx)("div",{onClick:()=>l(r),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&l(r)},tabIndex:0,role:"button",className:(0,Q.default)("calendar-days-day",{calendar_active:r===o}),children:r},r))]})},z=ha;var E=require("react"),m=y(require("dayjs"),1);var c=require("react/jsx-runtime"),ua=({date:a,changeAction:t})=>{let[n,o]=(0,E.useState)((0,m.default)(a).format("HH")),[e,l]=(0,E.useState)((0,m.default)(a).format("mm")),r=(i,p)=>{t((0,m.default)(a).add(i,p))},s=(i,p)=>{t((0,m.default)(a).subtract(i,p))},h=(i,p)=>{let v="deltaY"in i?i.deltaY:0;v<0?t((0,m.default)(a).subtract(1,p)):v>0&&t((0,m.default)(a).add(1,p))};return(0,E.useEffect)(()=>{let i=(0,m.default)(a);o(i.format("HH")),l(i.format("mm"))},[a]),(0,c.jsxs)("div",{className:"calendar-time",children:[(0,c.jsxs)("div",{className:"calendar-time-half hours",onWheel:i=>h(i,"h"),children:[(0,c.jsx)("div",{className:"calendar-time-half-cell",onClick:()=>s(1,"h"),children:(0,c.jsx)(I,{})}),(0,c.jsx)("div",{onClick:()=>s(2,"h"),className:"calendar-time-half-cell",children:(0,m.default)(a).subtract(2,"h").format("HH")}),(0,c.jsx)("div",{onClick:()=>s(1,"h"),className:"calendar-time-half-cell",children:(0,m.default)(a).subtract(1,"h").format("HH")}),(0,c.jsx)("div",{className:"calendar-time-half-cell dividerhour",children:n}),(0,c.jsx)("div",{onClick:()=>r(1,"h"),className:"calendar-time-half-cell",children:(0,m.default)(a).add(1,"h").format("HH")}),(0,c.jsx)("div",{onClick:()=>r(2,"h"),className:"calendar-time-half-cell",children:(0,m.default)(a).add(2,"h").format("HH")}),(0,c.jsx)("div",{className:"calendar-time-half-cell",onClick:()=>r(1,"h"),children:(0,c.jsx)(L,{})})]}),(0,c.jsxs)("div",{className:"calendar-time-half",onWheel:i=>h(i,"m"),children:[(0,c.jsx)("div",{className:"calendar-time-half-cell",onClick:()=>s(1,"m"),children:(0,c.jsx)(I,{})}),(0,c.jsx)("div",{onClick:()=>s(2,"m"),className:"calendar-time-half-cell",children:(0,m.default)(a).subtract(2,"m").format("mm")}),(0,c.jsx)("div",{onClick:()=>s(1,"m"),className:"calendar-time-half-cell",children:(0,m.default)(a).subtract(1,"m").format("mm")}),(0,c.jsx)("div",{className:"calendar-time-half-cell",children:e}),(0,c.jsx)("div",{onClick:()=>r(1,"m"),className:"calendar-time-half-cell",children:(0,m.default)(a).add(1,"m").format("mm")}),(0,c.jsx)("div",{onClick:()=>r(2,"m"),className:"calendar-time-half-cell",children:(0,m.default)(a).add(2,"m").format("mm")}),(0,c.jsx)("div",{onClick:()=>r(1,"m"),className:"calendar-time-half-cell",children:(0,c.jsx)(L,{})})]})]})},B=ua;var X=y(require("dayjs"),1);var ga={ru:{t:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F",y:"\u0432\u0447\u0435\u0440\u0430",wa:"\u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434",ma:"\u043C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434",ya:"\u0433\u043E\u0434 \u043D\u0430\u0437\u0430\u0434"},en:{t:"today",y:"yesterday",wa:"week ago",ma:"month ago",ya:"year ago"},ua:{t:"\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",y:"\u0432\u0447\u043E\u0440\u0430",wa:"\u0442\u0438\u0436\u0434\u0435\u043D\u044C \u0442\u043E\u043C\u0443",ma:"\u043C\u0456\u0441\u044F\u0446\u044C \u0442\u043E\u043C\u0443",ya:"\u0440\u0456\u043A \u0442\u043E\u043C\u0443"},de:{t:"heute",y:"gestern",wa:"vor 1 Woche",ma:"vor 1 Monat",ya:"vor 1 Jahr"},"zh-cn":{t:"\u4ECA\u5929",y:"\u6628\u5929",wa:"\u4E00\u5468\u524D",ma:"\u4E00\u4E2A\u6708\u524D",ya:"\u4E00\u5E74\u524D"},fr:{t:"aujourd'hui",y:"hier",wa:"il y a une semaine",ma:"il y a un mois",ya:"il y a un an"},es:{t:"hoy",y:"ayer",wa:"hace una semana",ma:"hace un mes",ya:"hace un a\xF1o"},sr:{t:"danas",y:"ju\u010De",wa:"pre nedelju dana",ma:"pre mesec dana",ya:"pre godinu dana"}},W=ga;var O=require("react/jsx-runtime"),va=[{key:"t",amount:0,unit:"day"},{key:"y",amount:1,unit:"day"},{key:"wa",amount:1,unit:"week"},{key:"ma",amount:1,unit:"month"},{key:"ya",amount:1,unit:"year"}],ba=({locale:a,changeAction:t})=>{let n=W[a]||W.en,o=(e,l)=>{t((0,X.default)().subtract(e,l).startOf("day"))};return(0,O.jsx)("div",{className:"calendar-presets",children:va.map(({key:e,amount:l,unit:r})=>(0,O.jsx)("div",{onClick:()=>o(l,r),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&o(l,r)},tabIndex:0,role:"button",className:"calendar-presets-preset",children:n[e]},e))})},$=ba;var Z=`
:root {
  --cal-accent: #ffffff;
  --cal-backdrop: #ffffff;
  --cal-highlight: #1a1a1c;
  --cal-tone: #f4f4f4;
  --cal-color-text: #1a1a1c;
  --cal-border-color: #f0f0f0;
}

[data-theme="dark"] {
  --cal-accent: #1a1a1c;
  --cal-backdrop: #1a1a1c;
  --cal-highlight: #ffffff;
  --cal-tone: #2d2d2d;
  --cal-color-text: #f0f0f0;
  --cal-border-color: #333333;
}

[data-theme="midnight"] {
  --cal-accent: #141721;
  --cal-backdrop: #1e2333;
  --cal-highlight: #3559e0;
  --cal-tone: #252a3d;
  --cal-color-text: #ffffff;
  --cal-border-color: #2d3246;
}

[data-theme="sandstone"] {
  --cal-accent: #1c1a17;
  --cal-backdrop: #24211c;
  --cal-highlight: #e3ae5c;
  --cal-tone: #332f28;
  --cal-color-text: #fdfbf7;
  --cal-border-color: #3d372e;
}

[data-theme="mint_blue"] {
  --cal-accent: #ffffff;
  --cal-backdrop: #f8f9fc;
  --cal-highlight: #60d276;
  --cal-tone: #eaedf4;
  --cal-color-text: #171827;
  --cal-border-color: #eef0f5;
}

.calendar {
  min-width: 450px;
  min-height: 10vh;
  max-height: 100vh;
  background: var(--cal-accent);
  color: var(--cal-color-text);
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 60px auto;
  grid-template-areas: "YY YY" "MM DD";
  user-select: none;
  box-sizing: border-box;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  border-radius: 16px;
  border: 1px solid var(--cal-border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  &.with_presets:not(.with_time) {
    grid-template-rows: 60px auto 50px;
    grid-template-areas: "YY YY" "MM DD" "PRESETS PRESETS";
  }

  &.with_time:not(.with_presets) {
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-areas: "YY YY YY" "MM DD TIME";
  }

  &.with_time.with_presets {
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 60px auto 50px;
    grid-template-areas: "YY YY YY" "MM DD TIME" "PRESETS PRESETS PRESETS";
  }
  &.no_months {
    grid-template-columns: 1fr;

    grid-template-areas: "YY" "DD";

    &.with_time {
      grid-template-columns: 5fr 2fr;
      grid-template-areas: "YY YY" "DD TIME";
    }

    &.with_presets {
      grid-template-areas: "YY" "DD" "PRESETS";

      &.with_time {
        grid-template-areas: "YY YY" "DD TIME" "PRESETS PRESETS";
      }
    }
  }

  &.years_picker {
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr !important;
  }

  &
    :is(
      .calendar-button,
      .calendar-yearPicker-arrow,
      .calendar-yearPicker-year,
      .calendar-presets-preset,
      .calendar-time-half-cell,
      .calendar-years-arrow,
      .calendar-months-month,
      .calendar-days-day
    ) {
    border: none;
    color: var(--cal-color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:not([disabled]):is(:hover, :active) {
      background: var(--cal-tone);
      cursor: pointer;
    }

    &[disabled] {
      cursor: not-allowed;
      filter: opacity(0.4);
    }

    & svg {
      width: 23px;
      height: 23px;
      fill: currentColor;
      stroke-width: 1.4;
      flex-shrink: 0;
      display: block;
      margin: auto;
    }
  }
}

.calendar-years {
  grid-area: YY;
  display: flex;
  background: var(--cal-accent);
  border-bottom: 1px solid var(--cal-border-color);
  justify-content: space-between;

  & .calendar-years-current {
    flex: 4;
    font: bold 21px system-ui;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    transition:
      background 0.2s ease,
      color 0.2s ease;

    &:hover {
      cursor: pointer;
      background: var(--cal-tone);
    }
  }
  & .calendar-years-arrow {
    flex-grow: 1;
  }
}

.calendar-months {
  grid-area: MM;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 15px 10px;
  gap: 4px;
  border-right: 1px solid var(--cal-border-color);
  background: var(--cal-backdrop);

  & .calendar-months-month {
    font-size: 13px;
    padding: 10px 5px;
    justify-content: center;
  }
}

.calendar-days {
  grid-area: DD;
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 15px;
  gap: 5px;
}

.calendar-time {
  grid-area: TIME;
  display: flex;
  padding-left: 1px;
  border-left: 1px solid var(--cal-border-color);

  & .calendar-time-half {
    flex: 1;
    width: 50%;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    background: var(--cal-backdrop);

    & .calendar-time-half-cell:is(:first-child, :last-child) {
      background: var(--cal-accent);
    }
    & .calendar-time-half-cell:nth-child(4) {
      position: relative;
      background: var(--cal-highlight);
      color: var(--cal-accent);
    }
  }
}
.calendar-days-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--cal-color-text);
  opacity: 0.5;
  text-transform: uppercase;
  user-select: none;
}

.calendar-presets {
  grid-area: PRESETS;
  display: flex;

  border-top: 1px solid var(--cal-border-color);
  padding: 5px 7px;
  gap: 5px;

  & .calendar-presets-preset {
    flex: 1;
    text-align: center;
    font-size: 13px;
    padding: 3px;
    background: var(--cal-tone);
  }
}

.calendar-yearPicker {
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr) 50px;
  grid-template-rows: repeat(5, 1fr);
  animation: fadeIn 0.2s linear forwards;

  & .calendar-yearPicker-arrow {
    background: var(--cal-accent);
    &:first-child {
      grid-area: 1/1/6/2;
    }
    &:last-child {
      grid-area: 1/7/6/7;
    }
  }

  & .calendar-yearPicker-year {
    background: var(--cal-backdrop);
    opacity: 0;
    &.year_anim {
      animation: fadeIn 0.3s forwards;
    }
  }
}

.calendar_active {
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
}

.dividerhour::after {
  content: ":";
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  right: 0;
  animation: fadeIn 1.1s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;var f=require("react/jsx-runtime");w.default.extend(ea.default);var ka=({presets:a=!1,months:t=!0,date:n=new Date,time:o=!1,locale:e="en",onChangeDate:l,width:r=null,height:s=null,theme:h="light"})=>{let[i,p]=(0,x.useState)(!1),[v,d]=(0,x.useState)(!1),_=i?e:"en",P=(0,w.default)(n).locale(_),U=()=>d(!v);(0,x.useInsertionEffect)(()=>{let u="react-calendar-datetime-styles";if(typeof document<"u"&&!document.getElementById(u)){let Y=document.createElement("style");Y.id=u,Y.innerHTML=Z,document.head.appendChild(Y)}},[]);let D=u=>{l?l(u.toDate()):console.warn('Must provide an "onChangeDate" function')},ta=i?Array.from({length:12},(u,Y)=>(0,w.default)().locale(e).month(Y).format("MMMM")):[];(0,x.useEffect)(()=>{let u=!0;return(async()=>{try{e==="en"?w.default.locale("en"):(await import(`dayjs/locale/${e}.js`),u&&w.default.locale(e))}catch(oa){console.warn(`Could not load locale: ${e}`,oa)}finally{u&&p(!0)}})(),()=>{u=!1}},[e]);let ra=i?(0,w.default)().locale(e).localeData().weekdaysMin():[];return(0,f.jsx)("div",{style:{width:r??void 0,height:s??void 0},className:(0,aa.default)("calendar",{with_time:o,with_presets:a,years_picker:v,no_months:!t}),"data-theme":h!=="light"?h:void 0,children:v?(0,f.jsx)(A,{date:P,changeAction:D,toggleYearPicker:U}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(H,{date:P,toggleYearPicker:U,changeAction:D}),t&&(0,f.jsx)(K,{monthsNames:ta,date:P,changeAction:D}),i&&(0,f.jsx)(z,{date:P,changeAction:D,weekdays:ra}),o&&(0,f.jsx)(B,{date:P,changeAction:D}),a&&(0,f.jsx)($,{locale:e,changeAction:D})]})})};
