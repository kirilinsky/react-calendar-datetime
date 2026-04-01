import { PresetItem } from "@/types/presets";
import { PRESET_CONFIG } from "./presets";
import { DisabledRule, StartOfWeek } from "@/types/calendar";

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const rtfCache: Record<string, Intl.RelativeTimeFormat> = {};
const i18nCache: Record<string, string[]> = {};

/** Creates a new Date instance to avoid mutating the original object */
const clone = (d: Date) => new Date(d.getTime());

/** Helper to cleanly mutate a cloned Date object and return it */
const mutate = (d: Date, fn: (n: Date) => void): Date => {
  const n = clone(d);
  fn(n);
  return n;
};

/** Normalizes min/max dates to the start (00:00:00) or end (23:59:59) of the day */
const getLimit = (d?: Date | string | null, isMax?: boolean) =>
  d
    ? new Date(d).setHours(
        isMax ? 23 : 0,
        isMax ? 59 : 0,
        isMax ? 59 : 0,
        isMax ? 999 : 0,
      )
    : null;

/** Safely extracts the year from a Date or string, returning null if invalid */
const getYearSafe = (d?: Date | string | null) =>
  d ? new Date(d).getFullYear() : null;

/** Returns the number of days in a specific month, accounting for leap years */
const _getDaysInMonth = (year: number, month: number): number =>
  month === 1 && isLeap(year) ? 29 : DAYS[month];

/** Sets the month of a date, handling edge cases like Jan 31 -> Feb 28. */
export const setMonth = (date: Date, v: number) =>
  mutate(date, (d) => {
    const maxDays = _getDaysInMonth(d.getFullYear(), v);
    if (d.getDate() > maxDays) d.setDate(maxDays);
    d.setMonth(v);
  });

/** Adds or subtracts months/years from a date, clamping to startDate/endDate bounds */
export const addDate = (
  date: Date,
  v: number,
  unit: "month" | "year",
  startDate?: Date | null,
  endDate?: Date | null,
) =>
  mutate(date, (d) => {
    if (unit === "month") {
      const maxDays = _getDaysInMonth(
        d.getFullYear(),
        (d.getMonth() + v + 12) % 12,
      );
      if (d.getDate() > maxDays) d.setDate(maxDays);
      d.setMonth(d.getMonth() + v);
    } else {
      d.setFullYear(d.getFullYear() + v);
    }

    if (endDate && d.getTime() > endDate.getTime()) d.setTime(endDate.getTime());
    if (startDate && d.getTime() < startDate.getTime()) d.setTime(startDate.getTime());
  });

/** Hard-sets the year of a given date */
export const setYear = (date: Date, v: number) =>
  mutate(date, (d) => d.setFullYear(v));

/**
 * Updates hours or minutes using a circular drum logic (e.g., 23h + 1h = 00h)
 */
export const addTime = (date: Date, amount: number, unit: "h" | "m") =>
  mutate(date, (d) => {
    if (unit === "h") {
      d.setHours(getDrumValue(d.getHours(), amount, 24));
    } else {
      d.setMinutes(getDrumValue(d.getMinutes(), amount, 60));
    }
  });

/**
 * Calculates how many empty cells to render before the 1st day of the month
 * based on the user's preferred start of the week (0=Sun, 1=Mon, etc.)
 */
export const getFirstDayOffset = (
  date: Date,
  startOfWeek: StartOfWeek,
): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return (firstDay - startOfWeek + 7) % 7;
};

/** Generates an array of years around a central year for the Year Selector */
export const getYearsRange = (center: number, len = 25): number[] =>
  Array.from({ length: len }, (_, i) => center - Math.floor(len / 2) + i);

/** Retrieves an array of localized month names (e.g., ["January", "February", ...]) */
export const getMonthNames = (locale: string, short?: boolean): string[] => {
  const key = `${locale}M${short ? "s" : "l"}`;
  if (!i18nCache[key]) {
    const f = new Intl.DateTimeFormat(locale, {
      month: short ? "short" : "long",
    }).format;
    const year = new Date().getFullYear();
    i18nCache[key] = Array.from({ length: 12 }, (_, i) =>
      f(new Date(year, i, 1)),
    );
  }
  return i18nCache[key];
};

/** Retrieves an array of localized short weekday names, shifted by startOfWeek */
export const getWeekdaysNames = (
  locale: string,
  startOfWeek: StartOfWeek,
): string[] => {
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
  const defaultDays = i18nCache[key];

  const shift = startOfWeek === 0 ? 6 : startOfWeek - 1;
  if (shift === 0) return defaultDays;
  return [...defaultDays.slice(shift), ...defaultDays.slice(0, shift)];
};

/** Pads a number with a leading zero (e.g., 9 -> "09") */
export const padTime = (n: number) => n.toString().padStart(2, "0");

/** Evaluates a preset configuration to return its actual target Date */
export const getPresetDate = (preset: PresetItem): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  preset.calc(d);
  return d;
};

/** Helper for Time component: circular math to wrap time values (23 + 1 = 0) */
export const getDrumValue = (
  current: number,
  offset: number,
  max: number,
): number => {
  const val = (current + offset) % max;
  return val < 0 ? val + max : val;
};

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const checkDisabledRule = (d: Date, rule: DisabledRule): boolean => {
  if (typeof rule === "boolean") return rule;
  if (rule instanceof Date) return isSameDay(d, rule);
  if (Array.isArray(rule)) return rule.some((r) => isSameDay(d, r));
  if ("dayOfWeek" in rule) return rule.dayOfWeek.includes(d.getDay());
  if ("from" in rule) return d >= rule.from && d <= rule.to;
  return (rule.before ? d < rule.before : false) || (rule.after ? d > rule.after : false);
};

/** Checks if a specific day should be disabled based on startDate/endDate and the `disabled` rule. */
export const checkIsDateDisabled = (
  viewDate: Date,
  startDate?: Date | null,
  endDate?: Date | null,
  disabled?: DisabledRule,
): boolean => {
  if (disabled !== undefined && checkDisabledRule(viewDate, disabled)) return true;
  if (!startDate && !endDate) return false;
  const t = viewDate.getTime();
  const minT = getLimit(startDate);
  const maxT = getLimit(endDate, true);
  return (minT !== null && t < minT) || (maxT !== null && t > maxT);
};

/**
 * Generates data for the Month List view, checking if entire months
 * are out of bounds based on min/max dates.
 */
export const getMonthListData = (
  locale: string,
  year: number,
  startDate?: Date | null,
  endDate?: Date | null,
  short?: boolean,
) => {
  const names = getMonthNames(locale, short);
  if (!startDate && !endDate) return names.map((label) => ({ label, disabled: false }));

  const minT = getLimit(startDate);
  const maxT = getLimit(endDate, true);

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
  startDate?: Date | null,
  endDate?: Date | null,
): boolean => {
  const minY = getYearSafe(startDate);
  const maxY = getYearSafe(endDate);
  return (minY !== null && year < minY) || (maxY !== null && year > maxY);
};

export const getYearListData = (
  centerYear: number,
  startDate?: Date | null,
  endDate?: Date | null,
  rangeLen: number = 25,
) => {
  const years = getYearsRange(centerYear, rangeLen);
  return years.map((y) => ({
    value: y,
    disabled: checkIsYearDisabled(y, startDate, endDate),
  }));
};

export const checkYearNavigation = (
  payload: number | { value: number }[],
  startDate?: Date | null,
  endDate?: Date | null,
  currentDate?: Date | null,
) => {
  const ABSOLUTE_MIN = 1900;
  const ABSOLUTE_MAX = 2100;

  const minYear = getYearSafe(startDate) ?? ABSOLUTE_MIN;
  const maxYear = getYearSafe(endDate) ?? ABSOLUTE_MAX;

  const startYear = Array.isArray(payload) ? payload[0].value : payload;
  const endYear = Array.isArray(payload)
    ? payload[payload.length - 1].value
    : payload;

  const monthNav = currentDate
    ? (() => {
        const cur = currentDate.getFullYear() * 12 + currentDate.getMonth();
        const min = startDate
          ? startDate.getFullYear() * 12 + startDate.getMonth()
          : null;
        const max = endDate
          ? endDate.getFullYear() * 12 + endDate.getMonth()
          : null;
        return {
          canGoPrevMonth: min === null || cur > min,
          canGoNextMonth: max === null || cur < max,
        };
      })()
    : { canGoPrevMonth: true, canGoNextMonth: true };

  return {
    canGoPrev: startYear > Math.max(minYear, ABSOLUTE_MIN),
    canGoNext: endYear < Math.min(maxYear, ABSOLUTE_MAX),
    ...monthNav,
  };
};

export const isYearFixed = (
  curYear: number,
  startDate?: Date | null,
  endDate?: Date | null,
  curMonth?: number,
): boolean => {
  if (!startDate || !endDate) return false;
  const minYear = getYearSafe(startDate)!;
  const maxYear = getYearSafe(endDate)!;
  if (minYear !== maxYear) return false;
  if (curMonth === undefined) return minYear === curYear;
  return (
    minYear === curYear &&
    startDate.getMonth() === curMonth &&
    endDate.getMonth() === curMonth
  );
};

export const getFilteredPresets = (
  showYears: boolean,
  showMonths: boolean,
  startDate?: Date | null,
  endDate?: Date | null,
): (PresetItem & { targetDate: Date })[] => {
  const fUnits = [
    ...(!showMonths ? ["month", "week"] : []),
    ...(!showYears ? ["year"] : []),
  ];

  const basePresets = PRESET_CONFIG.filter((p) => !fUnits.includes(p.unit));
  const minT = getLimit(startDate);
  const maxT = getLimit(endDate, true);

  return basePresets
    .map((p) => ({ ...p, targetDate: getPresetDate(p) }))
    .filter(({ targetDate }) => {
      const t = targetDate.getTime();
      return !(minT !== null && t < minT) && !(maxT !== null && t > maxT);
    });
};

/** Formats relative time (e.g., "In 2 days", "Yesterday") using Intl API */
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

/**
 * Calculates the next or previous month based on a swipe gesture delta,
 * ensuring the resulting month respects min/max date bounds.
 */
export const getNextMonthFromSwipe = (
  deltaX: number,
  currentDate: Date,
  startDate?: Date,
  endDate?: Date,
  threshold = 50,
): Date | null => {
  if (Math.abs(deltaX) < threshold) return null;

  const isNext = deltaX > 0;
  const dir = isNext ? 1 : -1;
  const newDate = new Date(currentDate);

  const expectedMonth = (newDate.getMonth() + dir + 12) % 12;
  newDate.setMonth(newDate.getMonth() + dir);
  if (newDate.getMonth() !== expectedMonth) newDate.setDate(0);

  const newYearMonth = newDate.getFullYear() * 12 + newDate.getMonth();

  if (startDate) {
    const minYearMonth = startDate.getFullYear() * 12 + startDate.getMonth();
    if (newYearMonth < minYearMonth) return null;
  }

  if (endDate) {
    const maxYearMonth = endDate.getFullYear() * 12 + endDate.getMonth();
    if (newYearMonth > maxYearMonth) return null;
  }

  return newDate;
};
export const getWeekNumber = (date: Date): number => {
  const target = clone(date);
  const dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);

  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const dayDiff = (target.getTime() - firstThursday.getTime()) / 86400000;
  return 1 + Math.ceil(dayDiff / 7);
};

export const getCalendarData = (
  currentYear: number,
  currentMonth: number,
  offset: number,
  selectedDates: Date[],
  startDate?: Date | null,
  endDate?: Date | null,
  disabled?: DisabledRule,
) => {
  const DAY_MS = 86400000;
  const selectedTimes = new Set(
    selectedDates.map((d) =>
      new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(),
    ),
  );

  const weeks = [];
  for (let i = 0; i < 6; i++) {
    const days = [];
    for (let j = 0; j < 7; j++) {
      const dayOfMonth = i * 7 + j - offset + 1;
      const fullDate = new Date(currentYear, currentMonth, dayOfMonth);
      const isCurrentMonth = fullDate.getMonth() === currentMonth;
      const day = fullDate.getDate();
      const t = fullDate.getTime();
      const isSelected = selectedTimes.has(t);
      const connectLeft = isSelected && j > 0 && selectedTimes.has(t - DAY_MS);
      const connectRight = isSelected && j < 6 && selectedTimes.has(t + DAY_MS);
      days.push({
        day,
        fullDate,
        isCurrentMonth,
        isDisabled: checkIsDateDisabled(fullDate, startDate, endDate, disabled),
        isSelected,
        connectLeft,
        connectRight,
      });
    }
    weeks.push({
      weekNumber: String(getWeekNumber(days[0].fullDate)).padStart(2, "0"),
      days,
    });
  }
  return weeks;
};

export const getTimeString = (date: Date, hour12: boolean = false): string => {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    hour12,
  }).format(date);
};
