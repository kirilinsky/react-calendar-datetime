import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
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

const toValidDate = (d?: Date) => {
  const parsed = d ? new Date(d) : new Date();
  return isNaN(parsed.getTime()) ? new Date() : parsed;
};

export const CalendarProvider: React.FC<
  CalendarProps & { children: ReactNode }
> = ({ children, theme, date: externalDate, onChangeDate, ...props }) => {
  const [view, setView] = useState<CalendarView>("calendar");
  const [internalDate, setInternalDate] = useState<Date>(() =>
    toValidDate(externalDate),
  );
  const [showTimePopup, setShowTimePopup] = useState(false);

  useEffect(() => {
    setInternalDate(toValidDate(externalDate));
  }, [externalDate]);

  const isDark = useMemo(() => {
    if (!theme) {
      return typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;
    }
    return (DARK_THEMES as readonly string[]).includes(theme);
  }, [theme]);

  const handleChangeDate = useCallback(
    (d: Date) => {
      setInternalDate(d);
      onChangeDate?.(d);
    },
    [onChangeDate],
  );

  const contextValue = useMemo<CalendarContextValue>(
    () =>
      ({
        ...props,
        view,
        setView,
        dark: isDark,
        date: internalDate,
        showTimePopup,
        setShowTimePopup,
        onChangeDate: handleChangeDate,
      }) as CalendarContextValue,
    [props, view, isDark, internalDate, handleChangeDate, showTimePopup],
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
