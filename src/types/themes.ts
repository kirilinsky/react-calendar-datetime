export const THEME_OPTIONS = [
  { value: "paper", label: "Paper", light: true },
  { value: "carbon", label: "Carbon", light: false },
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
] as const;

export type CalendarTheme = (typeof THEME_OPTIONS)[number]["value"];

export interface CustomTheme {
  accent: string;
  backdrop: string;
  highlight: string;
  tone: string;
  colorText: string;
  borderColor: string;
}

export type CustomThemePreset = Partial<CustomTheme>;
