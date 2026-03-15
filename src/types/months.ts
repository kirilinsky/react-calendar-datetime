type MonthsListItem = {
  label: string;
  disabled: boolean;
};

export interface MonthsProps {
  date: Date;
  changeAction: (date: Date) => void;
  monthsNames: MonthsListItem[];
}
