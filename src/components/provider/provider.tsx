import { CalendarContextValue, CalendarProps } from "@/types/calendar";
import React, { createContext, useContext, useState, ReactNode } from "react";

const CalendarContext = createContext<CalendarContextValue | undefined>(
  undefined,
);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error("useCalendarContext must be used within Provider");
  return context;
};

interface ProviderProps extends Omit<
  CalendarProps,
  "presets" | "width" | "height" | "theme"
> {
  children: ReactNode;
}

export const CalendarProvider: React.FC<ProviderProps> = ({
  children,
  date,
  onChangeDate,
  ...restProps
}) => {
  const initialDate = date || new Date();

  const [selectedDate, setSelectedDateState] = useState<Date | null>(
    initialDate,
  );
  const [viewDate, setViewDate] = useState<Date>(initialDate);

  const handleSetSelectedDate = (newDate: Date) => {
    setSelectedDateState(newDate);
    if (onChangeDate) onChangeDate(newDate);
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        viewDate,
        setSelectedDate: handleSetSelectedDate,
        setViewDate,
        ...restProps,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
