import { CustomThemePreset } from "@/types/themes";

export const CALENDAR_THEMES = {
  paper: {
    accent: "#ffffff",
    backdrop: "#ffffff",
    highlight: "#1a1a1c",
    tone: "#f4f4f4",
    colorText: "#1a1a1c",
    borderColor: "#f0f0f0",
  },
  carbon: {
    accent: "#1a1a1c",
    backdrop: "#1a1a1c",
    highlight: "#ffffff",
    tone: "#2d2d2d",
    colorText: "#f0f0f0",
    borderColor: "#333333",
  },
  cyber: {
    accent: "#0d0d15",
    backdrop: "#07070b",
    highlight: "#00f3ff",
    tone: "#301649",
    colorText: "#ffffff",
    borderColor: "#2a2a4a",
  },
  phosphor: {
    accent: "#020602",
    backdrop: "#010401",
    highlight: "#76ff03",
    tone: "#1a1f1a",
    colorText: "#00e676",
    borderColor: "#00e676",
  },
  midnight: {
    accent: "#141721",
    backdrop: "#1e2333",
    highlight: "#3559e0",
    tone: "#252a3d",
    colorText: "#ffffff",
    borderColor: "#2d3246",
  },
  sandstone: {
    accent: "#1c1a17",
    backdrop: "#24211c",
    highlight: "#e3ae5c",
    tone: "#332f28",
    colorText: "#fdfbf7",
    borderColor: "#3d372e",
  },
  mintblue: {
    accent: "#ffffff",
    backdrop: "#f8f9fc",
    highlight: "#60d276",
    tone: "#eaedf4",
    colorText: "#171827",
    borderColor: "#eef0f5",
  },
  larosa: {
    accent: "#ffffff",
    backdrop: "#dbd8e0",
    highlight: "#d65d91",
    tone: "#e5e1e9",
    colorText: "#2d2a32",
    borderColor: "#cfcbd4",
  },
  snowstorm: {
    accent: "#ffffff",
    backdrop: "#e2e5e9",
    highlight: "#3a60d6",
    tone: "#eceff4",
    colorText: "#2e3440",
    borderColor: "#d8dee9",
  },
  solar: {
    accent: "#ffffff",
    backdrop: "#d8cf9a",
    highlight: "#a5994b",
    tone: "#e4dbab",
    colorText: "#433f26",
    borderColor: "#c9c08d",
  },
  dracula: {
    accent: "#1a0f0f",
    backdrop: "#1c1111",
    highlight: "#ff5e5e",
    tone: "#341d1d",
    colorText: "#ffffff",
    borderColor: "#3d2626",
  },
  comfy: {
    accent: "#ffffff",
    backdrop: "#e9ded5",
    highlight: "#a65d3a",
    tone: "#f5ece5",
    colorText: "#6e4531",
    borderColor: "#dccfbe",
  },
};

export const mapThemeToCSS = (
  theme?: CustomThemePreset,
): Record<string, string> => {
  if (!theme) return {};

  return {
    "--cal-accent": theme.accent ?? "",
    "--cal-backdrop": theme.backdrop ?? "",
    "--cal-highlight": theme.highlight ?? "",
    "--cal-tone": theme.tone ?? "",
    "--cal-color-text": theme.colorText ?? "",
    "--cal-border-color": theme.borderColor ?? "",
  };
};

export const getThemeVars = (theme: keyof typeof CALENDAR_THEMES) => {
  const t = CALENDAR_THEMES[theme] || CALENDAR_THEMES.paper;
  return {
    "--cal-accent": t.accent,
    "--cal-backdrop": t.backdrop,
    "--cal-highlight": t.highlight,
    "--cal-tone": t.tone,
    "--cal-color-text": t.colorText,
    "--cal-border-color": t.borderColor,
  } as React.CSSProperties;
};
