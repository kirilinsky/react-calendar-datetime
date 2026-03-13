import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../styles/styles.css";

export const wrap = style({
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "system-ui, sans-serif",
  padding: "20px",
  transition: "background 0.3s ease",
  backgroundColor: vars.backdrop,
});

export const header = style({
  textAlign: "center",
  marginBottom: "32px",
});

export const title = style({
  margin: 0,
  fontSize: "24px",
  color: vars.colorText,
});

export const subtitle = style({
  margin: "8px 0 0",
  color: "#6b7280",
  fontSize: "15px",
});

export const buttonGroup = style({
  display: "flex",
  gap: "8px",
  marginBottom: "24px",
  flexWrap: "wrap",
  justifyContent: "center",
});

// Базовый стиль кнопки выбора
export const baseButton = style({
  padding: "8px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 500,
  transition: "all 0.2s",
  border: `1px solid ${vars.borderColor}`,
  background: vars.accent,
  color: vars.colorText,
});

// Варианты для активных кнопок
export const buttonActive = style({
  borderColor: "#3b82f6",
  background: "#eff6ff",
  color: "#1d4ed8",
  borderWidth: "2px",
});

export const control = style({
  width: "70%",
  height: "77px",
  borderRadius: "14px",
  padding: "10px",
  background: "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  transition: "all 0.3s ease",
});

export const dark = style({
  background: "#000",
  color: "#fff",
  selectors: {
    [`& ${control}`]: {
      background: "#fff",
    },
  },
});

export const trs = style({});

globalStyle(`${trs}, ${trs} *, ${trs} *::before, ${trs} *::after`, {
  transition: "all 750ms !important",
  transitionDelay: "0 !important",
});

export const checkbox = style({
  height: 0,
  width: 0,
  visibility: "hidden",
});

export const switchLabel = style({
  cursor: "pointer",
  textIndent: "-9999px",
  width: "52px",
  height: "27px",
  background: "grey",
  float: "right",
  marginLeft: "11px",
  borderRadius: "100px",
  position: "relative",
  display: "block",

  ":after": {
    content: '""',
    position: "absolute",
    top: "3px",
    left: "3px",
    width: "20px",
    height: "20px",
    background: "#fff",
    borderRadius: "90px",
    transition: "0.3s",
  },

  selectors: {
    [`${checkbox}:checked + &`]: {
      background: "#0077ff",
    },
    [`${checkbox}:checked + &:after`]: {
      left: "calc(100% - 5px)",
      transform: "translateX(-100%)",
    },
    "&:active:after": {
      width: "45px",
    },
  },
});
