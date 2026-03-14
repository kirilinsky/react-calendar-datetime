import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import "./calendar.css";
import { THEME_OPTIONS, CalendarTheme } from "../types/themes";
import { LocaleKey } from "../i18n/types";
import { LOCALE_OPTIONS } from "../i18n";

export default {
  title: "Calendar",
};

const formatSubtitle = (
  date: Date,
  locale: string = "en",
  showTime: boolean = false,
) => {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...(showTime ? { hour: "2-digit", minute: "2-digit", hour12: false } : {}),
  }).format(date);
};

const StoryWrapper = ({ children, title, subtitle, light = true }: any) => (
  <div className="story-wrapper" data-light={light}>
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
      subtitle={`Selected: ${formatSubtitle(date)}`}
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
      subtitle={`Time: ${formatSubtitle(date, "en", true)}`}
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
  const [light, setLight] = useState<boolean>(true);

  const darkThemes = THEME_OPTIONS.filter((t) => !t.light);
  const lightThemes = THEME_OPTIONS.filter((t) => t.light);

  const renderThemeButtons = (themes: typeof THEME_OPTIONS) => (
    <div className="theme-group">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => {
            setActiveTheme(theme.value);
            setLight(theme.light);
          }}
          className={`story-button ${activeTheme === theme.value ? "active-blue" : ""}`}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );

  return (
    <StoryWrapper
      light={light}
      title="Theme Playground"
      subtitle="Switch between all our custom tokens"
    >
      <div className="playground-layout">
        <div className="controls-sidebar">
          <h4>🌙 Dark Themes</h4>
          {renderThemeButtons(darkThemes)}
        </div>

        <div className="calendar-preview">
          <Calendar
            theme={activeTheme}
            date={date}
            onChangeDate={setDate}
            presets
            time
          />
        </div>

        <h4 style={{ marginTop: "20px" }}>☀️ Light Themes</h4>
        <div className="controls-sidebar">
          {renderThemeButtons(lightThemes)}
        </div>
      </div>
    </StoryWrapper>
  );
};

export const LocalePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeLocale, setActiveLocale] = useState<LocaleKey>("en");

  return (
    <StoryWrapper
      title="Interactive Playground"
      subtitle={`Selected in ${activeLocale}: ${formatSubtitle(date, activeLocale)}`}
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
        width="80vh"
      />
    </StoryWrapper>
  );
};
