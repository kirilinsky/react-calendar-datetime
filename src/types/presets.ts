import { LocaleKey } from "./calendar";

export interface PresetsProps {
  locale: LocaleKey;
  years: boolean;
  months: boolean;
  changeAction: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

export type PresetUnit = "day" | "week" | "month" | "year";

export interface PresetItem {
  id: string;
  calc: (d: Date) => void;
  amount: number;
  unit: PresetUnit;
}

export const PRESET_CONFIG: PresetItem[] = [
  { id: "t", amount: 0, unit: "day", calc: (d) => d },
  { id: "tm", amount: 1, unit: "day", calc: (d) => d.setDate(d.getDate() + 1) },
  { id: "y", amount: -1, unit: "day", calc: (d) => d.setDate(d.getDate() - 1) },
  {
    id: "wa",
    amount: -1,
    unit: "week",
    calc: (d) => d.setDate(d.getDate() - 7),
  },
  {
    id: "ma",
    amount: -1,
    unit: "month",
    calc: (d) => d.setMonth(d.getMonth() - 1),
  },
  {
    id: "ya",
    amount: -1,
    unit: "year",
    calc: (d) => d.setFullYear(d.getFullYear() - 1),
  },
];
