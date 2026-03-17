import { PresetItem } from "@/types/presets";
import { PRESET_CONFIG } from "./presets";
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const rtfCache: Record<string, Intl.RelativeTimeFormat> = {};

const i18nCache: Record<string, string[]> = {};

const clone = (d: Date) => new Date(d.getTime());

const mutate = (d: Date, fn: (n: Date) => void): Date => {
  const n = clone(d);
  fn(n);
  return n;
};

const getLimit = (d?: Date | string | null, isMax?: boolean) =>
  d
    ? new Date(d).setHours(
        isMax ? 23 : 0,
        isMax ? 59 : 0,
        isMax ? 59 : 0,
        isMax ? 999 : 0,
      )
    : null;

const getYearSafe = (d?: Date | string | null) =>
  d ? new Date(d).getFullYear() : null;

const _getDaysInMonth = (year: number, month: number): number =>
  month === 1 && isLeap(year) ? 29 : DAYS[month];

export const setMonth = (date: Date, v: number) =>
  mutate(date, (d) => {
    const maxDays = _getDaysInMonth(d.getFullYear(), v);
    if (d.getDate() > maxDays) d.setDate(maxDays);
    d.setMonth(v);
  });

export const addYears = (date: Date, v: number) =>
  mutate(date, (d) => d.setFullYear(d.getFullYear() + v));
export const setYear = (date: Date, v: number) =>
  mutate(date, (d) => d.setFullYear(v));

export const addTime = (date: Date, amount: number, unit: "h" | "m") =>
  mutate(date, (d) => {
    if (unit === "h") {
      d.setHours(getDrumValue(d.getHours(), amount, 24));
    } else {
      d.setMinutes(getDrumValue(d.getMinutes(), amount, 60));
    }
  });

// TODO extend logic for firstDayOfWeek prop
export const getFirstDayOffset = (date: Date): number =>
  (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;

export const getYearsRange = (center: number, len: number = 25): number[] => {
  const start = center - ((len / 2) | 0);
  return Array.from({ length: len }, (_, i) => start + i);
};

export const getMonthNames = (locale: string): string[] => {
  const key = `${locale}M`;
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
  const key = `${locale}W`;
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

export const padTime = (n: number) => n.toString().padStart(2, "0");

export const getPresetDate = (preset: PresetItem): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  preset.calc(d);
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

export const checkIsDateDisabled = (
  day: number,
  viewDate: Date,
  min?: Date | string | null,
  max?: Date | string | null,
  disableWeekends?: boolean,
): boolean => {
  if (disableWeekends) {
    if (day === 0 || day === 6) {
      return true;
    }
  }
  if (!min && !max) return false;
  const t = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    day,
  ).getTime();

  const minT = getLimit(min);
  const maxT = getLimit(max, true);

  return (minT !== null && t < minT) || (maxT !== null && t > maxT);
};

export const getMonthListData = (
  locale: string,
  year: number,
  min?: Date | null,
  max?: Date | null,
) => {
  const names = getMonthNames(locale);
  if (!min && !max) return names.map((label) => ({ label, disabled: false }));

  const minT = getLimit(min);
  const maxT = getLimit(max, true);

  return names.map((label, index) => {
    const firstDay = new Date(year, index, 1).getTime();
    const lastDay = new Date(year, index + 1, 0).getTime();
    return {
      label,
      disabled:
        (minT !== null && lastDay < minT) || (maxT !== null && firstDay > maxT),
    };
  });
};

export const checkIsYearDisabled = (
  year: number,
  min?: Date | null,
  max?: Date | null,
): boolean => {
  const minY = getYearSafe(min);
  const maxY = getYearSafe(max);
  return (minY !== null && year < minY) || (maxY !== null && year > maxY);
};

export const getYearListData = (
  centerYear: number,
  minDate?: Date | null,
  maxDate?: Date | null,
  rangeLen: number = 25,
) => {
  const years = getYearsRange(centerYear, rangeLen);

  return years.map((y) => ({
    value: y,
    disabled: checkIsYearDisabled(y, minDate, maxDate),
  }));
};

export const checkYearNavigation = (
  payload: number | { value: number }[],
  minDate?: Date | null,
  maxDate?: Date | null,
) => {
  const ABSOLUTE_MIN = 1900;
  const ABSOLUTE_MAX = 2100;

  const minYear = getYearSafe(minDate) ?? ABSOLUTE_MIN;
  const maxYear = getYearSafe(maxDate) ?? ABSOLUTE_MAX;

  const startYear = Array.isArray(payload) ? payload[0].value : payload;
  const endYear = Array.isArray(payload)
    ? payload[payload.length - 1].value
    : payload;

  return {
    canGoPrev: startYear > Math.max(minYear, ABSOLUTE_MIN),
    canGoNext: endYear < Math.min(maxYear, ABSOLUTE_MAX),
  };
};

export const isYearFixed = (
  curYear: number,
  min?: Date | null,
  max?: Date | null,
): boolean => {
  return !!(
    min &&
    max &&
    getYearSafe(min) === curYear &&
    getYearSafe(max) === curYear
  );
};

export const getFilteredPresets = (
  showYears: boolean,
  showMonths: boolean,
  min?: Date | null,
  max?: Date | null,
): (PresetItem & { targetDate: Date })[] => {
  const fUnits = [
    ...(!showMonths ? ["month", "week"] : []),
    ...(!showYears ? ["year"] : []),
  ];

  const basePresets = PRESET_CONFIG.filter((p) => !fUnits.includes(p.unit));

  const minT = getLimit(min);
  const maxT = getLimit(max, true);

  return basePresets
    .map((p) => ({
      ...p,
      targetDate: getPresetDate(p),
    }))
    .filter(({ targetDate }) => {
      const t = targetDate.getTime();
      return !(minT !== null && t < minT) && !(maxT !== null && t > maxT);
    });
};

export const getRelativeLabel = (
  locale: string,
  amount: number,
  unit: Intl.RelativeTimeFormatUnit,
) => {
  if (!rtfCache[locale]) {
    rtfCache[locale] = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  }

  const label = rtfCache[locale].format(amount, unit);
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const getNextMonthFromSwipe = (
  deltaX: number,
  currentDate: Date,
  minDate?: Date,
  maxDate?: Date,
  threshold = 50,
): Date | null => {
  if (Math.abs(deltaX) < threshold) return null;

  const isNext = deltaX > 0;
  const newDate = new Date(currentDate);

  const expectedMonth = (newDate.getMonth() + (isNext ? 1 : -1) + 12) % 12;
  newDate.setMonth(newDate.getMonth() + (isNext ? 1 : -1));
  if (newDate.getMonth() !== expectedMonth) {
    newDate.setDate(0);
  }

  const newYearMonth = newDate.getFullYear() * 12 + newDate.getMonth();

  if (minDate) {
    const minYearMonth = minDate.getFullYear() * 12 + minDate.getMonth();
    if (newYearMonth < minYearMonth) return null;
  }

  if (maxDate) {
    const maxYearMonth = maxDate.getFullYear() * 12 + maxDate.getMonth();
    if (newYearMonth > maxYearMonth) return null;
  }

  return newDate;
};
