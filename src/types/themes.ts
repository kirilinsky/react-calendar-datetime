export const LIGHT_THEMES = [
  "paper",
  "mintblue",
  "comfy",
  "neonlight",
  "larosa",
  "snowstorm",
  "solar",
  "amethyst",
] as const;
export const DARK_THEMES = [
  "carbon",
  "midnight",
  "sandstone",
  "phosphor",
  "dracula",
  "cyber",
  "temporal",
  "crimson",
] as const;

export type CalendarTheme =
  | (typeof LIGHT_THEMES)[number]
  | (typeof DARK_THEMES)[number];
