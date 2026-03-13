export interface YearsProps {
  date: Date;
  toggleYearPicker: () => void;
  changeAction: (date: Date) => void;
}

export interface YearsPickerProps {
  toggleYearPicker: () => void;
  date: Date;
  changeAction: (date: Date) => void;
}
