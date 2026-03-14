import { LocaleKey, Translation } from "@/i18n/types";

export interface PresetsProps {
  locale: LocaleKey;
  changeAction: (date: Date) => void;
}

export type PresetUnit = "day" | "week" | "month" | "year";

export interface PresetItem {
  key: keyof Translation;
  amount: number;
  unit: PresetUnit;
}

export const PRESET_CONFIG: PresetItem[] = [
  { key: "t", amount: 0, unit: "day" },
  { key: "y", amount: 1, unit: "day" },
  { key: "wa", amount: 1, unit: "week" },
  { key: "ma", amount: 1, unit: "month" },
  { key: "ya", amount: 1, unit: "year" },
];
