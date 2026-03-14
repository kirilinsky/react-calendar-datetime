import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import "./calendar.css";
import { CalendarTheme, DARK_THEMES, LIGHT_THEMES } from "../types/themes";
import { LocaleKey } from "../i18n/types";
import { i18nData } from "../i18n";

const LOCALE_LABELS: Record<LocaleKey, string> = {
  en: "English",
  pt: "Português",
  ru: "Русский",
  it: "Italiano",
  ua: "Українська",
  de: "Deutsch",
  "zh-cn": "中文",
  fr: "Français",
  es: "Español",
  sr: "Srpski",
};

const THEME_LABELS: Record<CalendarTheme, string> = {
  paper: "Paper",
  carbon: "Carbon",
  mintblue: "Mint Blue",
  midnight: "Midnight Blue",
  sandstone: "Sandstone",
  phosphor: "Phosphor",
  dracula: "Dracula",
  cyber: "Cyber",
  comfy: "Comfy",
  larosa: "La Rosa",
  snowstorm: "Snow Storm",
  solar: "Solar",
};
const LOCALE_OPTIONS = (Object.keys(i18nData) as LocaleKey[]).map((key) => ({
  value: key,
  label: LOCALE_LABELS[key],
}));

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

export const ThemePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mintblue");
  const [light, setLight] = useState<boolean>(true);

  const renderThemeButtons = (
    themes: readonly CalendarTheme[],
    light: "light" | "dark",
  ) => (
    <div className="theme-group">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => {
            setActiveTheme(theme);
            setLight(light === "light");
          }}
          className={`story-button ${activeTheme === theme ? "active-blue" : ""}`}
        >
          {THEME_LABELS[theme]}
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
          {renderThemeButtons(DARK_THEMES, "dark")}
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
          {renderThemeButtons(LIGHT_THEMES, "light")}
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
        width="85vh"
      />
    </StoryWrapper>
  );
};

export const BuilderPlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [config, setConfig] = useState({
    years: true,
    months: true,
    time: false,
    presets: false,
  });

  const toggle = (key: keyof typeof config) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <StoryWrapper
      title="Calendar Builder"
      subtitle="Toggle modules to see dynamic grid adjustments"
    >
      <div className="story-controls">
        {Object.keys(config).map((key) => (
          <button
            key={key}
            onClick={() => toggle(key as keyof typeof config)}
            className={`story-button ${config[key as keyof typeof config] ? "active-green" : ""}`}
            style={{ textTransform: "capitalize" }}
          >
            {key}: {config[key as keyof typeof config] ? "ON" : "OFF"}
          </button>
        ))}
      </div>

      <Calendar
        date={date}
        onChangeDate={setDate}
        years={config.years}
        months={config.months}
        time={config.time}
        presets={config.presets}
      />
    </StoryWrapper>
  );
};
