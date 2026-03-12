export type CalendarTheme =
  | "light"
  | "dark"
  | "midnight"
  | "sandstone"
  | "mint_blue";

export const THEME_OPTIONS: { value: CalendarTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "mint_blue", label: "Mint Blue" },
  { value: "midnight", label: "Midnight Blue" },
  { value: "sandstone", label: "Sandstone" },
];
