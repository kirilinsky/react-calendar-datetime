import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  ReactNode,
  useState,
  useEffect,
  useRef,
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

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const CalendarProvider: React.FC<
  CalendarProps & { children: ReactNode }
> = ({
  children,
  theme,
  date: externalDate,
  onChangeDate,
  multiselect,
  startMonth,
  ...props
}) => {
  const externalDates = Array.isArray(externalDate) ? externalDate : undefined;
  const externalSingle = Array.isArray(externalDate) ? externalDate[0] : externalDate;

  const [view, setView] = useState<CalendarView>("calendar");
  const [internalDate, setInternalDate] = useState<Date>(() => {
    if (externalSingle) return toValidDate(externalSingle);
    if (startMonth) return toValidDate(startMonth);
    return new Date();
  });
  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    if (externalDates) return externalDates.map(toValidDate);
    if (externalSingle) return [toValidDate(externalSingle)];
    return [];
  });
  const [showTimePopup, setShowTimePopup] = useState(false);

  const selectedDatesRef = useRef(selectedDates);
  selectedDatesRef.current = selectedDates;

  useEffect(() => {
    if (externalDates) {
      setSelectedDates(externalDates.map(toValidDate));
    } else {
      const parsed = toValidDate(externalSingle);
      setInternalDate(parsed);
      setSelectedDates(externalSingle ? [parsed] : []);
    }
  }, [externalDate]); // eslint-disable-line react-hooks/exhaustive-deps

  const isDark = useMemo(() => {
    if (!theme) {
      return typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;
    }
    return (DARK_THEMES as readonly string[]).includes(theme);
  }, [theme]);

  const handleChangeDate = useCallback(
    (d: Date | null) => {
      if (multiselect && d) {
        const maxCount =
          multiselect === true ? Infinity : Number(multiselect);
        const prev = selectedDatesRef.current;
        const alreadyIndex = prev.findIndex((s) => isSameDay(s, d));

        let next: Date[];
        if (alreadyIndex >= 0) {
          next = prev.filter((_, i) => i !== alreadyIndex);
        } else if (prev.length >= maxCount) {
          return;
        } else {
          next = [...prev, d];
        }

        setSelectedDates(next);
        setInternalDate(d);
        onChangeDate?.(next);
      } else {
        if (d) {
          const prev = selectedDatesRef.current[0];
          if (prev && isSameDay(prev, d)) {
            setSelectedDates([]);
            onChangeDate?.(null);
            return;
          }
          setInternalDate(d);
          setSelectedDates([d]);
        } else {
          setSelectedDates([]);
        }
        onChangeDate?.(d);
      }
    },
    [multiselect, onChangeDate],
  );

  const navigateTo = useCallback((d: Date) => {
    setInternalDate(d);
  }, []);

  const selectedDate = selectedDates[0] ?? null;

  const contextValue = useMemo<CalendarContextValue>(
    () =>
      ({
        ...props,
        multiselect,
        view,
        setView,
        dark: isDark,
        date: internalDate,
        selectedDate,
        selectedDates,
        navigateTo,
        showTimePopup,
        setShowTimePopup,
        onChangeDate: handleChangeDate,
      }) as CalendarContextValue,
    [props, multiselect, view, isDark, internalDate, selectedDate, selectedDates, handleChangeDate, navigateTo, showTimePopup],
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
