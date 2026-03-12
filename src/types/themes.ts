export type CalendarTheme = "light" | "dark" | "midnight" | "sandstone";

export const THEME_OPTIONS: { value: CalendarTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "midnight", label: "Midnight Blue" },
  { value: "sandstone", label: "Sandstone" },
];
