import ha from"clsx";import{useEffect as ya,useInsertionEffect as ua,useState as U}from"react";import k from"dayjs";import ga from"dayjs/plugin/localeData";import"dayjs/locale/en";import"dayjs/locale/es";import"dayjs/locale/ru";import"dayjs/locale/de";import"dayjs/locale/sr";import"dayjs/locale/fr";import N from"dayjs";import{jsx as u}from"react/jsx-runtime";var Y=()=>u("svg",{height:"256",viewBox:"0 0 64 64",width:"256",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"})}),P=()=>u("svg",{height:"256",viewBox:"0 0 64 64",width:"256",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s-.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"})}),M=()=>u("svg",{viewBox:"0 0 492.002 492.002",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844 L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124 c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064 c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132 C494.624,356.041,494.624,338.965,484.136,328.473z"})}),E=()=>u("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:u("polygon",{points:"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"})});import{jsx as x,jsxs as V}from"react/jsx-runtime";var Q=({date:a,toggleYearPicker:i,changeAction:d})=>{let o=()=>{d(N(a).subtract(1,"year"))},t=()=>{d(N(a).add(1,"year"))};return V("div",{className:"calendar-years",children:[x("div",{tabIndex:0,role:"button",className:"calendar-years-arrow",onClick:o,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&o()},children:x(Y,{})}),x("div",{onClick:i,className:"calendar-years-current",role:"button",tabIndex:0,children:N(a).format("YYYY")}),x("div",{onClick:t,role:"button",tabIndex:0,className:"calendar-years-arrow",onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&t()},children:x(P,{})})]})},R=Q;import{useEffect as X,useState as K}from"react";import Z from"clsx";import T from"dayjs";import{jsx as D,jsxs as ea}from"react/jsx-runtime";var aa=({toggleYearPicker:a,date:i,changeAction:d})=>{let[o,t]=K(T(i)),[r,e]=K(!0),n=o.year(),p=Array.from({length:25},(l,C)=>n-12+C),c=l=>{l?.preventDefault(),d(T(o)),a()},f=l=>{d(T(o).year(l)),a()},y=l=>`${(Math.abs(n-l)*.1/2).toFixed(2)}s`;return X(()=>{e(!1);let l=setTimeout(()=>e(!0),50);return()=>clearTimeout(l)},[o]),ea("div",{className:"calendar-yearPicker",onContextMenu:c,children:[D("button",{disabled:n<1925,onClick:()=>t(o.subtract(25,"y")),className:"calendar-yearPicker-arrow",children:D(Y,{})}),p.map(l=>D("button",{disabled:l>2100||l<1900,onClick:()=>f(l),className:Z("calendar-yearPicker-year",{year_anim:r,calendar_active:n===l}),style:{animationDelay:y(l),animationIterationCount:1},children:l},l)),D("button",{className:"calendar-yearPicker-arrow",disabled:n>2075,onClick:()=>t(o.add(25,"y")),children:D(P,{})})]})},j=aa;import ta from"clsx";import{jsx as z}from"react/jsx-runtime";var ra=({date:a,monthsNames:i,changeAction:d})=>{let o=a.month();return z("div",{className:"calendar-months",children:i.map((t,r)=>z("div",{className:ta("calendar-months-month",{calendar_active:r===o}),onClick:()=>d(a.month(r)),children:t},r))})},S=ra;import oa from"clsx";import{useMemo as na}from"react";import{jsx as B,jsxs as la}from"react/jsx-runtime";var ca=({date:a,changeAction:i,weekdays:d})=>{let o=a.date(),t=na(()=>{let e=a.daysInMonth();return Array.from({length:e},(n,p)=>p+1)},[a]),r=e=>{e!==o&&i(a.date(e))};return la("div",{className:"calendar-days",children:[d.map(e=>B("div",{className:"calendar-days-header",children:e},e)),t.map(e=>B("div",{onClick:()=>r(e),onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&r(e)},tabIndex:0,role:"button",className:oa("calendar-days-day",{calendar_active:e===o}),children:e},e))]})},_=ca;import{useEffect as sa,useState as W}from"react";import m from"dayjs";import{jsx as s,jsxs as I}from"react/jsx-runtime";var ia=({date:a,changeAction:i})=>{let[d,o]=W(m(a).format("HH")),[t,r]=W(m(a).format("mm")),e=(c,f)=>{i(m(a).add(c,f))},n=(c,f)=>{i(m(a).subtract(c,f))},p=(c,f)=>{let y="deltaY"in c?c.deltaY:0;y<0?i(m(a).subtract(1,f)):y>0&&i(m(a).add(1,f))};return sa(()=>{let c=m(a);o(c.format("HH")),r(c.format("mm"))},[a]),I("div",{className:"calendar-time",children:[I("div",{className:"calendar-time-half hours",onWheel:c=>p(c,"h"),children:[s("div",{className:"calendar-time-half-cell",onClick:()=>n(1,"h"),children:s(M,{})}),s("div",{onClick:()=>n(2,"h"),className:"calendar-time-half-cell",children:m(a).subtract(2,"h").format("HH")}),s("div",{onClick:()=>n(1,"h"),className:"calendar-time-half-cell",children:m(a).subtract(1,"h").format("HH")}),s("div",{className:"calendar-time-half-cell dividerhour",children:d}),s("div",{onClick:()=>e(1,"h"),className:"calendar-time-half-cell",children:m(a).add(1,"h").format("HH")}),s("div",{onClick:()=>e(2,"h"),className:"calendar-time-half-cell",children:m(a).add(2,"h").format("HH")}),s("div",{className:"calendar-time-half-cell",onClick:()=>e(1,"h"),children:s(E,{})})]}),I("div",{className:"calendar-time-half",onWheel:c=>p(c,"m"),children:[s("div",{className:"calendar-time-half-cell",onClick:()=>n(1,"m"),children:s(M,{})}),s("div",{onClick:()=>n(2,"m"),className:"calendar-time-half-cell",children:m(a).subtract(2,"m").format("mm")}),s("div",{onClick:()=>n(1,"m"),className:"calendar-time-half-cell",children:m(a).subtract(1,"m").format("mm")}),s("div",{className:"calendar-time-half-cell",children:t}),s("div",{onClick:()=>e(1,"m"),className:"calendar-time-half-cell",children:m(a).add(1,"m").format("mm")}),s("div",{onClick:()=>e(2,"m"),className:"calendar-time-half-cell",children:m(a).add(2,"m").format("mm")}),s("div",{onClick:()=>e(1,"m"),className:"calendar-time-half-cell",children:s(E,{})})]})]})},L=ia;import ma from"dayjs";var da={ru:{t:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F",y:"\u0432\u0447\u0435\u0440\u0430",wa:"\u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434",ma:"\u043C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434",ya:"\u0433\u043E\u0434 \u043D\u0430\u0437\u0430\u0434"},en:{t:"today",y:"yesterday",wa:"week ago",ma:"month ago",ya:"year ago"},ua:{t:"\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",y:"\u0432\u0447\u043E\u0440\u0430",wa:"\u0442\u0438\u0436\u0434\u0435\u043D\u044C \u0442\u043E\u043C\u0443",ma:"\u043C\u0456\u0441\u044F\u0446\u044C \u0442\u043E\u043C\u0443",ya:"\u0440\u0456\u043A \u0442\u043E\u043C\u0443"},de:{t:"heute",y:"gestern",wa:"vor 1 Woche",ma:"vor 1 Monat",ya:"vor 1 Jahr"},"zh-cn":{t:"\u4ECA\u5929",y:"\u6628\u5929",wa:"\u4E00\u5468\u524D",ma:"\u4E00\u4E2A\u6708\u524D",ya:"\u4E00\u5E74\u524D"},fr:{t:"aujourd'hui",y:"hier",wa:"il y a une semaine",ma:"il y a un mois",ya:"il y a un an"},es:{t:"hoy",y:"ayer",wa:"hace una semana",ma:"hace un mes",ya:"hace un a\xF1o"},sr:{t:"danas",y:"ju\u010De",wa:"pre nedelju dana",ma:"pre mesec dana",ya:"pre godinu dana"}},H=da;import{jsx as O}from"react/jsx-runtime";var fa=[{key:"t",amount:0,unit:"day"},{key:"y",amount:1,unit:"day"},{key:"wa",amount:1,unit:"week"},{key:"ma",amount:1,unit:"month"},{key:"ya",amount:1,unit:"year"}],pa=({locale:a,changeAction:i})=>{let d=H[a]||H.en,o=(t,r)=>{i(ma().subtract(t,r).startOf("day"))};return O("div",{className:"calendar-presets",children:fa.map(({key:t,amount:r,unit:e})=>O("div",{onClick:()=>o(r,e),onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&o(r,e)},tabIndex:0,role:"button",className:"calendar-presets-preset",children:d[t]},t))})},A=pa;var $=`
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

[data-theme="cyber"] { 
--cal-accent: #0d0d15; 
--cal-backdrop: #07070b; 
--cal-highlight: #00f3ff; 
--cal-tone: #301649; 
--cal-color-text: #ffffff; 
--cal-border-color: #2a2a4a;
} 

[data-theme="phosphor"] {
  --cal-accent: #020602;
  --cal-backdrop: #010401;
  --cal-highlight: #76ff03;
  --cal-tone: #1a1f1a;
  --cal-color-text: #00e676;
  --cal-border-color: #00e676;
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
`;import{Fragment as va,jsx as g,jsxs as ba}from"react/jsx-runtime";k.extend(ga);var Re=({presets:a=!1,months:i=!0,date:d=new Date,time:o=!1,locale:t="en",onChangeDate:r,width:e=null,height:n=null,theme:p="light"})=>{let[c,f]=U(!1),[y,l]=U(!1),C=c?t:"en",w=k(d).locale(C),F=()=>l(!y);ua(()=>{let h="react-calendar-datetime-styles";if(typeof document<"u"&&!document.getElementById(h)){let b=document.createElement("style");b.id=h,b.innerHTML=$,document.head.appendChild(b)}},[]);let v=h=>{r?r(h.toDate()):console.warn('Must provide an "onChangeDate" function')},G=c?Array.from({length:12},(h,b)=>k().locale(t).month(b).format("MMMM")):[];ya(()=>{let h=!0;return(async()=>{try{t==="en"?k.locale("en"):(await import(`dayjs/locale/${t}.js`),h&&k.locale(t))}catch(q){console.warn(`Could not load locale: ${t}`,q)}finally{h&&f(!0)}})(),()=>{h=!1}},[t]);let J=c?k().locale(t).localeData().weekdaysMin():[];return g("div",{style:{width:e??void 0,height:n??void 0},className:ha("calendar",{with_time:o,with_presets:a,years_picker:y,no_months:!i}),"data-theme":p!=="light"?p:void 0,children:y?g(j,{date:w,changeAction:v,toggleYearPicker:F}):ba(va,{children:[g(R,{date:w,toggleYearPicker:F,changeAction:v}),i&&g(S,{monthsNames:G,date:w,changeAction:v}),c&&g(_,{date:w,changeAction:v,weekdays:J}),o&&g(L,{date:w,changeAction:v}),a&&g(A,{locale:t,changeAction:v})]})})};export{Re as Calendar};
