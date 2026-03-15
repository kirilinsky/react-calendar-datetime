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


