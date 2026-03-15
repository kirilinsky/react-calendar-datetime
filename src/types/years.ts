export interface YearsProps {
  date: Date;
  toggleYearPicker: () => void;
  changeAction: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}
