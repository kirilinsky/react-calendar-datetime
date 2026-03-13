export type CalendarTheme =
  | "light"
  | "dark"
  | "midnight"
  | "sandstone"
  | "mint_blue"
  | "cyber_imperial";

export const THEME_OPTIONS: { value: CalendarTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "mint_blue", label: "Mint Blue" },
  { value: "midnight", label: "Midnight Blue" },
  { value: "sandstone", label: "Sandstone" },
  { value: "cyber_imperial", label: "Cyber Imperial" },
];
