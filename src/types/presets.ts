export interface PresetItem {
  id: string;
  calc: (d: Date) => void;
  amount: number;
  unit: "day" | "week" | "month" | "year";
}
