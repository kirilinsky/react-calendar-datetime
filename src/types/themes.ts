export type CalendarTheme =
  | "light"
  | "dark"
  | "midnight"
  | "sandstone"
  | "mintblue"
  | "cyber"
  | "dracula"
  | "phosphor"
  | "comfy"
  | "snowstorm"
  | "solar"
  | "larosa";

export const THEME_OPTIONS: {
  value: CalendarTheme;
  label: string;
  light: boolean;
}[] = [
  { value: "light", label: "Light", light: true },
  { value: "dark", label: "Dark", light: false },
  { value: "mintblue", label: "Mint Blue", light: true },
  { value: "midnight", label: "Midnight Blue", light: false },
  { value: "sandstone", label: "Sandstone", light: false },
  { value: "phosphor", label: "Phosphor", light: false },
  { value: "dracula", label: "Dracula", light: false },
  { value: "cyber", label: "Cyber", light: false },
  { value: "comfy", label: "Comfy", light: true },
  { value: "larosa", label: "La Rosa", light: true },
  { value: "snowstorm", label: "Snow Storm", light: true },
  { value: "solar", label: "Solar", light: true },
];

export interface CustomTheme {
  accent: string;
  backdrop: string;
  highlight: string;
  tone: string;
  colorText: string;
  borderColor: string;
}

export type CustomThemePreset = Partial<CustomTheme>;
