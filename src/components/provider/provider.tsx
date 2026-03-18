import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  CalendarContextValue,
  CalendarProps,
  CalendarView,
} from "@/types/calendar";
import { DARK_THEMES } from "@/types/themes";

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
> = ({ children, theme, date: externalDate, onChangeDate, ...props }) => {
  const [view, setView] = useState<CalendarView>("calendar");

  const [internalDate, setInternalDate] = useState<Date>(() => {
    const d = externalDate ? new Date(externalDate) : new Date();
    return isNaN(d.getTime()) ? new Date() : d;
  });

  useEffect(() => {
    if (externalDate) {
      const d = new Date(externalDate);
      if (!isNaN(d.getTime())) {
        setInternalDate(d);
      }
    }
  }, [externalDate]);

  const isDark = useMemo(() => {
    if (!theme) {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return (DARK_THEMES as readonly string[]).includes(theme);
  }, [theme]);

  const contextValue = useMemo(() => {
    return {
      ...props,
      view,
      setView,
      dark: isDark,
      date: internalDate,
      onChangeDate: (d: Date) => {
        setInternalDate(d);
        onChangeDate?.(d);
      },
    } as CalendarContextValue;
  }, [props, view]);

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
