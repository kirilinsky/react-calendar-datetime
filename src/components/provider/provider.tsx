import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { CalendarContextValue, CalendarProps } from "@/types/calendar";

const CalendarContext = createContext<CalendarContextValue | undefined>(
  undefined,
);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error("useCalendarContext must be used within Provider");
  return context;
};

 
export const CalendarProvider: React.FC<
  CalendarProps & { children: ReactNode }
> = ({ children, ...props }) => {
  const contextValue = useMemo(() => {
    const rawDate = props.date ? new Date(props.date) : new Date();
    const safeDate = isNaN(rawDate.getTime()) ? new Date() : rawDate;

    return {
      ...props,  
      date: safeDate,
      onChangeDate: (d: Date) => props.onChangeDate?.(d),
    } as CalendarContextValue;
  }, [props]);

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
