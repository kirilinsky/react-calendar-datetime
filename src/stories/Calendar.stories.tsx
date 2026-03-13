import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import "./calendar.css";
import dayjs from "dayjs";
import { THEME_OPTIONS, CalendarTheme } from "../types/themes";
import { LocaleKey } from "../i18n";

export default {
  title: "Components/Calendar",
};

const LOCALE_OPTIONS: { value: LocaleKey; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "ua", label: "Українська" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
  { value: "sr", label: "Srpski" },
  { value: "zh-cn", label: "中文" },
];

const StoryWrapper = ({ children, title, subtitle, theme = "light" }: any) => (
  <div className="story-wrapper" data-theme={theme}>
    <div className="story-header">
      <h2 className="story-title">{title}</h2>
      <p className="story-subtitle">{subtitle}</p>
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
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mintblue");

  return (
    <StoryWrapper
      theme={activeTheme}
      title="Theme Playground"
      subtitle="Switch between all our custom tokens"
    >
      <div className="story-controls">
        {THEME_OPTIONS.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setActiveTheme(theme.value)}
            className={`story-button ${activeTheme === theme.value ? "active-blue" : ""}`}
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
      <div className="story-controls">
        {LOCALE_OPTIONS.map((loc) => (
          <button
            key={loc.value}
            onClick={() => setActiveLocale(loc.value)}
            className={`story-button ${activeLocale === loc.value ? "active-green" : ""}`}
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
