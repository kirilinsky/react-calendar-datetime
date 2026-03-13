export type CalendarTheme =
  | "light"
  | "dark"
  | "midnight"
  | "sandstone"
  | "mintblue"
  | "cyber"
  | "dracula"
  | "phosphor";

export const THEME_OPTIONS: { value: CalendarTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "mintblue", label: "Mint Blue" },
  { value: "midnight", label: "Midnight Blue" },
  { value: "sandstone", label: "Sandstone" },
  { value: "phosphor", label: "Phosphor" },
  { value: "dracula", label: "Dracula" },
  { value: "cyber", label: "Cyber" },
];
