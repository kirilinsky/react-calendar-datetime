import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
} from "react";
import {
  CalendarContextValue,
  CalendarProps,
  CalendarView,
} from "@/types/calendar";

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
  const [view, setView] = useState<CalendarView>("calendar");

  const contextValue = useMemo(() => {
    const rawDate = props.date ? new Date(props.date) : new Date();
    const safeDate = isNaN(rawDate.getTime()) ? new Date() : rawDate;

    return {
      ...props,
      view,
      setView,
      date: safeDate,
      onChangeDate: (d: Date) => props.onChangeDate?.(d),
    } as CalendarContextValue;
  }, [props, view]);

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
