export interface MonthsProps {
  date: Date;
  changeAction: (date: Date) => void;
  monthsNames: string[];
}
