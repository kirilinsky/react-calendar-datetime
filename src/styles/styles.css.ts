import {
  createThemeContract,
  createTheme,
  style,
  keyframes,
  globalStyle,
} from "@vanilla-extract/css";

// 1. ПЕРЕМЕННЫЕ И ТЕМЫ
export const vars = createThemeContract({
  accent: null,
  backdrop: null,
  highlight: null,
  tone: null,
  colorText: null,
  borderColor: null,
});

export const themes = {
  light: createTheme(vars, {
    accent: "#ffffff",
    backdrop: "#ffffff",
    highlight: "#1a1a1c",
    tone: "#f4f4f4",
    colorText: "#1a1a1c",
    borderColor: "#f0f0f0",
  }),
  dark: createTheme(vars, {
    accent: "#1a1a1c",
    backdrop: "#1a1a1c",
    highlight: "#ffffff",
    tone: "#2d2d2d",
    colorText: "#f0f0f0",
    borderColor: "#333333",
  }),
  cyber: createTheme(vars, {
    accent: "#0d0d15",
    backdrop: "#07070b",
    highlight: "#00f3ff",
    tone: "#301649",
    colorText: "#ffffff",
    borderColor: "#2a2a4a",
  }),
  phosphor: createTheme(vars, {
    accent: "#020602",
    backdrop: "#010401",
    highlight: "#76ff03",
    tone: "#1a1f1a",
    colorText: "#00e676",
    borderColor: "#00e676",
  }),
  midnight: createTheme(vars, {
    accent: "#141721",
    backdrop: "#1e2333",
    highlight: "#3559e0",
    tone: "#252a3d",
    colorText: "#ffffff",
    borderColor: "#2d3246",
  }),
  sandstone: createTheme(vars, {
    accent: "#1c1a17",
    backdrop: "#24211c",
    highlight: "#e3ae5c",
    tone: "#332f28",
    colorText: "#fdfbf7",
    borderColor: "#3d372e",
  }),
  mint_blue: createTheme(vars, {
    accent: "#ffffff",
    backdrop: "#f8f9fc",
    highlight: "#60d276",
    tone: "#eaedf4",
    colorText: "#171827",
    borderColor: "#eef0f5",
  }),
};

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

// 2. БАЗОВЫЕ ИНТЕРАКТИВНЫЕ СТИЛИ (Кнопки, ячейки)
export const interactive = style({
  border: "none",
  color: vars.colorText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  cursor: "pointer",
  background: "transparent",
  selectors: {
    "&:hover:not([disabled])": { background: vars.tone },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.4 },
  },
});

globalStyle(`${interactive} svg`, {
  width: "23px",
  height: "23px",
  fill: "currentColor",
  strokeWidth: 1.4,
  flexShrink: 0,
  display: "block",
  margin: "auto",
});

// Наследники интерактивности
export const monthItem = style([
  interactive,
  { fontSize: "13px", padding: "10px 5px" },
]);
export const dayItem = style([interactive]);
export const presetItem = style([
  interactive,
  { flex: 1, fontSize: "13px", padding: "3px", background: vars.tone },
]);
export const timeCell = style([interactive]);

// 3. ОСНОВНОЙ КОНТЕЙНЕР
export const calendar = style({
  minWidth: "450px",
  minHeight: "10vh",
  maxHeight: "100vh",
  background: vars.accent,
  color: vars.colorText,
  display: "grid",
  gridTemplateColumns: "2fr 5fr",
  gridTemplateRows: "60px auto",
  gridTemplateAreas: '"YY YY" "MM DD"',
  userSelect: "none",
  boxSizing: "border-box",
  fontFamily: "system-ui, sans-serif",
  borderRadius: "16px",
  border: `1px solid ${vars.borderColor}`,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
  overflow: "hidden",
  selectors: {
    "&.with_presets:not(.with_time)": {
      gridTemplateRows: "60px auto 50px",
      gridTemplateAreas: '"YY YY" "MM DD" "PRESETS PRESETS"',
    },
    "&.with_time:not(.with_presets)": {
      gridTemplateColumns: "2fr 5fr 2fr",
      gridTemplateAreas: '"YY YY YY" "MM DD TIME"',
    },
    "&.with_time.with_presets)": {
      gridTemplateColumns: "2fr 5fr 2fr",
      gridTemplateRows: "60px auto 50px",
      gridTemplateAreas: '"YY YY YY" "MM DD TIME" "PRESETS PRESETS PRESETS"',
    },
    "&.no_months": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: '"YY" "DD"',
    },
    "&.no_months.with_time": {
      gridTemplateColumns: "5fr 2fr",
      gridTemplateAreas: '"YY YY" "DD TIME"',
    },
    "&.no_months.with_presets": { gridTemplateAreas: '"YY" "DD" "PRESETS"' },
    "&.years_picker": {
      gridTemplateColumns: "1fr !important",
      gridTemplateRows: "1fr !important",
    },
  },
});

// 4. СЕКЦИИ КАЛЕНДАРЯ
export const years = style({
  gridArea: "YY",
  display: "flex",
  background: vars.accent,
  borderBottom: `1px solid ${vars.borderColor}`,
  justifyContent: "space-between",
});
export const yearsCurrent = style([
  interactive,
  { flex: 4, font: "bold 21px system-ui", borderRadius: "8px" },
]);

export const months = style({
  gridArea: "MM",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  padding: "15px 10px",
  gap: "4px",
  borderRight: `1px solid ${vars.borderColor}`,
  background: vars.backdrop,
});

export const days = style({
  gridArea: "DD",
  background: vars.backdrop,
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  padding: "15px",
  gap: "5px",
});
export const daysHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 600,
  opacity: 0.5,
  textTransform: "uppercase",
});

export const time = style({
  gridArea: "TIME",
  display: "flex",
  paddingLeft: "1px",
  borderLeft: `1px solid ${vars.borderColor}`,
});
export const timeHalf = style({
  flex: 1,
  width: "50%",
  display: "grid",
  gridTemplateRows: "repeat(7, 1fr)",
  background: vars.backdrop,
  selectors: {
    [`& ${timeCell}:is(:first-child, :last-child)`]: {
      background: vars.accent,
    },
    [`& ${timeCell}:nth-child(4)`]: {
      position: "relative",
      background: vars.highlight,
      color: vars.accent,
    },
  },
});

export const presets = style({
  gridArea: "PRESETS",
  display: "flex",
  borderTop: `1px solid ${vars.borderColor}`,
  padding: "5px 7px",
  gap: "5px",
});

export const yearPicker = style({
  background: vars.backdrop,
  display: "grid",
  gridTemplateColumns: "50px repeat(5, 1fr) 50px",
  gridTemplateRows: "repeat(5, 1fr)",
  animation: `${fadeIn} 0.2s linear forwards`,
});

export const active = style({
  background: `${vars.highlight} !important`,
  color: `${vars.accent} !important`,
});

export const yearPickerArrow = style([
  interactive,
  {
    background: vars.accent,
    selectors: {
      "&:first-child": { gridArea: "1 / 1 / 6 / 2" },
      "&:last-child": { gridArea: "1 / 7 / 6 / 7" },
    },
  },
]);

export const yearItem = style([
  interactive,
  {
    background: vars.backdrop,
    opacity: 0,
  },
]);

export const yearAnim = style({
  animation: `${fadeIn} 0.3s forwards`,
});

export const dividerHour = style({
  position: "relative",
  selectors: {
    "&::after": {
      content: '":"',
      position: "absolute",
      top: "50%",
      transform: "translateY(-55%)",
      right: 0,
      animation: `${fadeIn} 1.1s infinite`,
    },
  },
});
