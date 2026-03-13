const mutateDate = (date: Date, mutator: (d: Date) => void): Date => {
  const next = new Date(date.getTime());
  mutator(next);
  return next;
};

export const isValidDate = (date: any): date is Date =>
  date instanceof Date && !isNaN(date.getTime());

export const isSameDay = (d1: Date, d2: Date): boolean =>
  d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getFullYear() === d2.getFullYear();

export const addMonth = (date: Date, v: number) =>
  mutateDate(date, (d) => d.setMonth(d.getMonth() + v));
export const setMonth = (date: Date, v: number) =>
  mutateDate(date, (d) => d.setMonth(v));
export const addYears = (date: Date, v: number) =>
  mutateDate(date, (d) => d.setFullYear(d.getFullYear() + v));
export const setYear = (date: Date, v: number) =>
  mutateDate(date, (d) => d.setFullYear(v));
export const setDateValue = (date: Date, v: number) =>
  mutateDate(date, (d) => d.setDate(v));

export const addTime = (date: Date, amount: number, unit: "h" | "m") =>
  mutateDate(date, (d) =>
    unit === "h"
      ? d.setHours(d.getHours() + amount)
      : d.setMinutes(d.getMinutes() + amount),
  );

export const getDaysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const getFirstDayOffset = (date: Date): number => {
  const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return day === 0 ? 6 : day - 1;
};

export const getYearsRange = (center: number, len: number = 25): number[] => {
  const start = center - Math.floor(len / 2);
  return Array.from({ length: len }, (_, i) => start + i);
};

export const getMonthNames = (locale: string): string[] => {
  const f = new Intl.DateTimeFormat(locale, { month: "long" }).format;
  return Array.from({ length: 12 }, (_, i) => f(new Date(2026, i, 1)));
};

export const getWeekdaysNames = (locale: string): string[] => {
  const f = new Intl.DateTimeFormat(locale, { weekday: "short" }).format;
  return Array.from({ length: 7 }, (_, i) => f(new Date(2026, 4, 4 + i)));
};

export const padTime = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const getPresetDate = (
  amount: number,
  unit: "day" | "week" | "month" | "year",
): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (unit === "day") d.setDate(d.getDate() - amount);
  if (unit === "week") d.setDate(d.getDate() - amount * 7);
  if (unit === "month") d.setMonth(d.getMonth() - amount);
  if (unit === "year") d.setFullYear(d.getFullYear() - amount);
  return d;
};

export const getDrumValue = (
  current: number,
  offset: number,
  max: number,
): number => {
  const val = (current + offset) % max;
  return val < 0 ? val + max : val;
};

export const getDrumStyles = (offset: number) => {
  const abs = Math.abs(offset);
  return {
    opacity: 1 - abs * 0.3,
    transform: `scale(${1 - abs * 0.1})`,
    fontWeight: offset === 0 ? "700" : "400",
  };
};
