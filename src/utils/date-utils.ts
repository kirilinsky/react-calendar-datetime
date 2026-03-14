const i18nCache: Record<string, string[]> = {};

const clone = (d: Date) => new Date(d.getTime());

const mutate = (d: Date, fn: (n: Date) => void): Date => {
  const n = clone(d);
  fn(n);
  return n;
};

export const isValidDate = (d: any): d is Date =>
  d instanceof Date && !isNaN(d.getTime());

export const isSameDay = (d1: Date, d2: Date): boolean =>
  d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getFullYear() === d2.getFullYear();

export const addMonth = (date: Date, v: number) =>
  mutate(date, (d) => d.setMonth(d.getMonth() + v));

export const setMonth = (date: Date, v: number) =>
  mutate(date, (d) => {
    const targetDays = new Date(d.getFullYear(), v + 1, 0).getDate();
    if (d.getDate() > targetDays) {
      d.setDate(targetDays);
    }
    d.setMonth(v);
  });

export const addYears = (date: Date, v: number) =>
  mutate(date, (d) => d.setFullYear(d.getFullYear() + v));
export const setYear = (date: Date, v: number) =>
  mutate(date, (d) => d.setFullYear(v));
export const setDateValue = (date: Date, v: number) =>
  mutate(date, (d) => d.setDate(v));

export const addTime = (date: Date, amount: number, unit: "h" | "m") =>
  mutate(date, (d) =>
    unit === "h"
      ? d.setHours(d.getHours() + amount)
      : d.setMinutes(d.getMinutes() + amount),
  );

export const getDaysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const getFirstDayOffset = (date: Date): number =>
  (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;

export const getYearsRange = (center: number, len: number = 25): number[] => {
  const start = center - ((len / 2) | 0);
  return Array.from({ length: len }, (_, i) => start + i);
};

export const getMonthNames = (locale: string): string[] => {
  const key = locale + "M";
  if (!i18nCache[key]) {
    const f = new Intl.DateTimeFormat(locale, { month: "long" }).format;
    const year = new Date().getFullYear();
    i18nCache[key] = Array.from({ length: 12 }, (_, i) =>
      f(new Date(year, i, 1)),
    );
  }
  return i18nCache[key];
};

export const getWeekdaysNames = (locale: string): string[] => {
  const key = locale + "W";
  if (!i18nCache[key]) {
    const f = new Intl.DateTimeFormat(locale, { weekday: "short" }).format;
    const baseDate = new Date(2024, 0, 1);
    i18nCache[key] = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      return f(d);
    });
  }
  return i18nCache[key];
};

export const padTime = (n: number) => (n < 10 ? "0" + n : n);

export const getPresetDate = (
  amount: number,
  unit: "day" | "week" | "month" | "year",
): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);

  if (unit === "day") d.setDate(d.getDate() - amount);
  else if (unit === "week") d.setDate(d.getDate() - amount * 7);
  else if (unit === "month") d.setMonth(d.getMonth() - amount);
  else d.setFullYear(d.getFullYear() - amount);

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
