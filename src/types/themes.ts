export const LIGHT_THEMES = [
  "paper",
  "mintblue",
  "comfy",
  "larosa",
  "snowstorm",
  "solar",
] as const;
export const DARK_THEMES = [
  "carbon",
  "midnight",
  "sandstone",
  "phosphor",
  "dracula",
  "cyber",
] as const;

export type CalendarTheme =
  | (typeof LIGHT_THEMES)[number]
  | (typeof DARK_THEMES)[number];
