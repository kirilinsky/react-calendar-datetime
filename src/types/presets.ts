import { LocaleKey, Translation } from "@/i18n";
import { Dayjs, ManipulateType } from "dayjs";

export interface PresetsProps {
  locale: LocaleKey;
  changeAction: (date: Dayjs) => void;
}

export const PRESET_CONFIG: {
  key: keyof Translation;
  amount: number;
  unit: ManipulateType;
}[] = [
  { key: "t", amount: 0, unit: "day" },
  { key: "y", amount: 1, unit: "day" },
  { key: "wa", amount: 1, unit: "week" },
  { key: "ma", amount: 1, unit: "month" },
  { key: "ya", amount: 1, unit: "year" },
];
