import { PresetItem } from "@/types/presets";
import { PRESET_CONFIG } from "./presets";
import { StartOfWeek } from "@/types/calendar";

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

/**
 * Ensures the target date does not fall on a weekend if disableWeekends is true.
 * If it does, pushes the date forward to the nearest Monday.
 */
const ensureValidDay = (date: Date, disableWeekends?: boolean): Date => {
  if (!disableWeekends) return date;

  const newDate = new Date(date);
  while (newDate.getDay() === 0 || newDate.getDay() === 6) {
    newDate.setDate(newDate.getDate() + 1);
  }
  return newDate;
};

/**
 * Sets the month of a date, handling edge cases like Jan 31 -> Feb 28.
 * Also skips weekends if disableWeekends is enabled.
 */
export const setMonth = (date: Date, v: number, disableWeekends?: boolean) =>
  mutate(date, (d) => {
    const maxDays = _getDaysInMonth(d.getFullYear(), v);
    if (d.getDate() > maxDays) d.setDate(maxDays);

    d.setMonth(v);
    if (disableWeekends) {
      const dayOfWeek = d.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        const offset = dayOfWeek === 6 ? 2 : 1;
        d.setDate(d.getDate() + offset);
      }
    }
  });

/** Adds or subtracts years from a date, ensuring valid weekend behavior */
export const addDate = (
  date: Date,
  v: number,
  unit: "month" | "year",
  disableWeekends?: boolean,
  minDate?: Date | null,
  maxDate?: Date | null,
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

    d.setTime(ensureValidDay(d, disableWeekends).getTime());

    if (maxDate && d.getTime() > maxDate.getTime())
      d.setTime(maxDate.getTime());
    if (minDate && d.getTime() < minDate.getTime())
      d.setTime(minDate.getTime());
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
  const key = `${locale}M`;
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
  let defaultDays = i18nCache[key];

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

/**
 * Checks if a specific day should be disabled based on min/max limits
 * and weekend constraints.
 */
export const checkIsDateDisabled = (
  viewDate: Date,
  min?: Date | string | null,
  max?: Date | string | null,
  disableWeekends?: boolean,
): boolean => {
  if (disableWeekends && viewDate.getDay() % 6 === 0) {
    return true;
  }
  if (!min && !max) return false;

  const t = viewDate.getTime();

  const minT = getLimit(min);
  const maxT = getLimit(max, true);

  return (minT !== null && t < minT) || (maxT !== null && t > maxT);
};

/**
 * Generates data for the Month List view, checking if entire months
 * are out of bounds based on min/max dates.
 */
export const getMonthListData = (
  locale: string,
  year: number,
  min?: Date | null,
  max?: Date | null,
  short?: boolean,
) => {
  const names = getMonthNames(locale, short);
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

/** Validates if a specific year falls completely outside min/max bounds */
export const checkIsYearDisabled = (
  year: number,
  min?: Date | null,
  max?: Date | null,
): boolean => {
  const minY = getYearSafe(min);
  const maxY = getYearSafe(max);
  return (minY !== null && year < minY) || (maxY !== null && year > maxY);
};

/** Generates the list of years for the Year Grid, applying disabled flags */
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

/**
 * Determines if the navigation arrows in the Year Grid should be active
 * based on whether the next/prev pages contain valid years.
 */
export const checkYearNavigation = (
  payload: number | { value: number }[],
  minDate?: Date | null,
  maxDate?: Date | null,
  currentDate?: Date | null,
) => {
  const ABSOLUTE_MIN = 1900;
  const ABSOLUTE_MAX = 2100;

  const minYear = getYearSafe(minDate) ?? ABSOLUTE_MIN;
  const maxYear = getYearSafe(maxDate) ?? ABSOLUTE_MAX;

  const startYear = Array.isArray(payload) ? payload[0].value : payload;
  const endYear = Array.isArray(payload)
    ? payload[payload.length - 1].value
    : payload;

  const monthNav = currentDate
    ? (() => {
        const cur = currentDate.getFullYear() * 12 + currentDate.getMonth();
        const min = minDate
          ? minDate.getFullYear() * 12 + minDate.getMonth()
          : null;
        const max = maxDate
          ? maxDate.getFullYear() * 12 + maxDate.getMonth()
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

/** Checks if the min and max dates fall in the exact same year,
 * if curMonth argument - for months as well */
export const isYearFixed = (
  curYear: number,
  min?: Date | null,
  max?: Date | null,
  curMonth?: number,
): boolean => {
  if (!min || !max) return false;
  const minYear = getYearSafe(min)!;
  const maxYear = getYearSafe(max)!;
  if (minYear !== maxYear) return false;
  if (curMonth === undefined) return minYear === curYear;
  return (
    minYear === curYear &&
    min.getMonth() === curMonth &&
    max.getMonth() === curMonth
  );
};

/**
 * Filters the preset list based on active calendar features (e.g., hiding 'Next Year'
 * if years are disabled) and min/max date boundaries.
 */
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
export const getWeekNumber = (date: Date): number => {
  const target = new Date(date.valueOf());
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
  selectedDate: Date,
  minDate?: Date | null,
  maxDate?: Date | null,
  disableWeekends?: boolean,
) => {
  const selectedTime = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
  ).getTime();

  const weeks = [];
  for (let i = 0; i < 6; i++) {
    const days = [];
    for (let j = 0; j < 7; j++) {
      const dayOfMonth = i * 7 + j - offset + 1;
      const fullDate = new Date(currentYear, currentMonth, dayOfMonth);
      const isCurrentMonth = fullDate.getMonth() === currentMonth;
      const day = fullDate.getDate();
      days.push({
        day,
        fullDate,
        isCurrentMonth,
        isDisabled: checkIsDateDisabled(
          fullDate,
          minDate,
          maxDate,
          disableWeekends,
        ),
        isSelected: isCurrentMonth && fullDate.getTime() === selectedTime,
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
