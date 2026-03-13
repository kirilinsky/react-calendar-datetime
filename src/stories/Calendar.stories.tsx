import React, { useState } from "react";
import dayjs from "dayjs";
import clsx from "clsx";

import { Calendar } from "../Calendar/Calendar";
import { THEME_OPTIONS, CalendarTheme } from "../types/themes";
import { LocaleKey } from "../i18n";

// Наши новые стили
import * as s from "./StoryWrapper.css";
import { themes } from "../styles/styles.css";

export default {
  title: "Components/Calendar",
};

const LOCALE_OPTIONS: { value: LocaleKey; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
  { value: "sr", label: "Srpski" },
];

const StoryWrapper = ({ children, title, subtitle, theme = "light" }: any) => (
  <div className={clsx(s.wrap, themes[theme as CalendarTheme] || themes.light)}>
    <div className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
    {children}
  </div>
);

export const Base = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper
      title="Standard Calendar"
      subtitle={`Selected: ${dayjs(date).format("DD MMMM YYYY")}`}
    >
      <Calendar date={date} onChangeDate={setDate} />
    </StoryWrapper>
  );
};

export const WithTimePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper
      title="Time & Date Picker"
      subtitle={`Time: ${dayjs(date).format("DD.MM.YYYY HH:mm")}`}
    >
      <Calendar date={date} onChangeDate={setDate} time />
    </StoryWrapper>
  );
};

export const WithPresets = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper
      title="Quick Presets"
      subtitle="Jump to specific dates instantly"
    >
      <Calendar date={date} onChangeDate={setDate} presets />
    </StoryWrapper>
  );
};

export const WithoutMonths = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper title="No Months" subtitle="Just days">
      <Calendar date={date} onChangeDate={setDate} months={false} />
    </StoryWrapper>
  );
};

export const ThemePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mint_blue");

  return (
    <StoryWrapper
      theme={activeTheme}
      title="Theme Playground"
      subtitle="Switch between all our custom tokens"
    >
      <div className={s.buttonGroup}>
        {THEME_OPTIONS.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setActiveTheme(theme.value)}
            className={clsx(s.baseButton, {
              [s.buttonActive]: activeTheme === theme.value,
            })}
          >
            {theme.label}
          </button>
        ))}
      </div>
      <Calendar
        theme={activeTheme}
        date={date}
        onChangeDate={setDate}
        presets
        time
      />
    </StoryWrapper>
  );
};

export const LocalePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeLocale, setActiveLocale] = useState<LocaleKey>("en");

  return (
    <StoryWrapper
      title="Interactive Playground"
      subtitle="Switch between locales"
    >
      <div className={s.buttonGroup}>
        {LOCALE_OPTIONS.map((loc) => (
          <button
            key={loc.value}
            onClick={() => setActiveLocale(loc.value)}
            className={clsx(s.baseButton, {
              [s.buttonActive]: activeLocale === loc.value,
            })}
          >
            {loc.label}
          </button>
        ))}
      </div>
      <Calendar
        locale={activeLocale}
        date={date}
        onChangeDate={setDate}
        presets
      />
    </StoryWrapper>
  );
};
