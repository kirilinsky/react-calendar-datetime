import { useState } from "react";
import { Calendar } from "../components/calendar/calendar";
import "./calendar.css";
import { CalendarTheme, DARK_THEMES, LIGHT_THEMES } from "../types/themes";
import { ButtonGroup } from "./story.components";

const LOCALES_LIST = [
  { locale: "en", label: "English" },
  { locale: "de", label: "Deutsch" },
  { locale: "fr", label: "Français" },
  { locale: "es", label: "Español" },
  { locale: "it", label: "Italiano" },
  { locale: "pt", label: "Português" },
  { locale: "ua", label: "Українська" },
  { locale: "pl", label: "Polski" },
  { locale: "ru", label: "Русский" },
  { locale: "zh-CN", label: "中文" },
  { locale: "ja", label: "日本語" },
  { locale: "sr", label: "Srpski" },
] as const;

const THEME_LABELS: Record<CalendarTheme, string> = {
  paper: "Paper",
  carbon: "Carbon",
  mint: "Mint",
  midnight: "Midnight",
  industrial: "Industrial",
  graphite: "Graphite",
  sandstone: "Sandstone",
  phosphor: "Phosphor",
  dracula: "Dracula",
  cyber: "Cyber",
  comfy: "Comfy",
  temporal: "Temporal",
  neon: "Neon",
  rosa: "Rosa",
  amethyst: "Amethyst",
  crimson: "Crimson",
  snow: "Snow",
  solar: "Solar",
};

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
    <div className="story-content">{children}</div>
  </div>
);

export const ASimple = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper
      title="Standard Calendar"
      subtitle={`Selected: ${formatSubtitle(date)}`}
    >
      <div className="calendar-fixed-container">
        <Calendar
          date={date}
          width="290px"
          theme="graphite"
          brutalism
          onChangeDate={setDate}
          highlightWeekends
        />
      </div>
    </StoryWrapper>
  );
};

export const minMaxDates = () => {
  const getOffsetDay = (days: number) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + days);
    return d;
  };

  const [hour12, sethour12] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [disableWeekends, setDisableWeekends] = useState<boolean>(false);
  const [showWeekNumber, setshowWeekNumber] = useState<boolean>(false);
  const [minDate, setMinDate] = useState<Date>(() => getOffsetDay(-11));
  const [maxDate, setMaxDate] = useState<Date>(() => getOffsetDay(11));
  const toISODate = (d: Date) => d.toISOString().split("T")[0];

  return (
    <StoryWrapper
      title="With date limits"
      subtitle={`Selected: ${formatSubtitle(date)} | Min: ${formatSubtitle(minDate)} | Max: ${formatSubtitle(maxDate)}`}
    >
      <div className="unified-controls">
        <div className="control-group">
          <label>Min Date</label>
          <input
            type="date"
            value={toISODate(minDate)}
            onChange={(e) => setMinDate(new Date(e.target.value))}
          />
        </div>
        <div className="control-group">
          <label>Max Date</label>
          <input
            type="date"
            value={toISODate(maxDate)}
            onChange={(e) => setMaxDate(new Date(e.target.value))}
          />
        </div>
      </div>
      <div className="calendar-fixed-container">
        <Calendar
          date={date}
          onChangeDate={setDate}
          minDate={minDate}
          maxDate={maxDate}
          theme="sandstone"
          years
          presets
          hour12={hour12}
          monthsGrid
          showWeekNumber={showWeekNumber}
          disableWeekends={disableWeekends}
        />
      </div>
      <div className="control-group">
        <button
          onClick={() => setDisableWeekends(!disableWeekends)}
          className={`story-button ${disableWeekends ? "active" : ""}`}
          style={{ textTransform: "capitalize" }}
        >
          disableWeekends: {disableWeekends ? "ON" : "OFF"}
        </button>
        <button
          onClick={() => setshowWeekNumber(!showWeekNumber)}
          className={`story-button ${showWeekNumber ? "active" : ""}`}
          style={{ textTransform: "capitalize" }}
        >
          show week numbers: {showWeekNumber ? "ON" : "OFF"}
        </button>
        <button
          onClick={() => sethour12(!hour12)}
          className={`story-button ${hour12 ? "active" : ""}`}
          style={{ textTransform: "capitalize" }}
        >
          hour 12: {hour12 ? "ON" : "OFF"}
        </button>
      </div>
    </StoryWrapper>
  );
};

export const JellyPlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [containerWidth, setContainerWidth] = useState(580);

  return (
    <StoryWrapper
      title="Container Queries Playground"
      subtitle={`Current Width: ${containerWidth}px (Drag slider to test adaptation)`}
    >
      <div className="control-group" style={{ width: "100%" }}>
        <input
          type="range"
          min="250"
          max="900"
          value={containerWidth}
          className="width-slider"
          onChange={(e) => setContainerWidth(Number(e.target.value))}
        />
      </div>

      <div
        className="resize-container"
        style={{ width: `${containerWidth}px` }}
      >
        <Calendar
          jellyMode
          monthsGrid
          years
          locale="de"
          presets
          date={date}
          time
          onChangeDate={setDate}
        />
      </div>
    </StoryWrapper>
  );
};

export const ThemePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mint");
  const [light, setLight] = useState<boolean>(true);
  const [gradient, setGradient] = useState<boolean>(false);
  const [brutal, setbrutal] = useState<boolean>(false);

  const renderThemeButtons = (
    themes: readonly CalendarTheme[],
    isLight: boolean,
  ) => (
    <ButtonGroup
      items={themes.map((theme) => ({
        id: theme,
        label: THEME_LABELS[theme],
        isActive: activeTheme === theme,
        onClick: () => {
          setActiveTheme(theme);
          setLight(isLight);
        },
      }))}
    />
  );

  return (
    <StoryWrapper
      light={light}
      title="Theme Playground"
      subtitle="Switch between all our custom tokens"
    >
      <div className="control-group">
        <h4>🌙 Dark Themes</h4>
        {renderThemeButtons(DARK_THEMES, false)}
      </div>
      <div className="calendar-fixed-container">
        <Calendar
          theme={activeTheme}
          date={date}
          onChangeDate={setDate}
          presets
          time
          monthsGrid
          years
          compactMonths
          highlightWeekends
          brutalism={brutal}
          gradient={gradient}
        />
      </div>

      <div className="control-group">
        <h4>☀️ Light Themes</h4>
        {renderThemeButtons(LIGHT_THEMES, true)}
        <button
          onClick={() => setGradient(!gradient)}
          className={`story-button ${gradient ? "active" : ""}`}
          style={{ textTransform: "capitalize" }}
        >
          Gradient: {gradient ? "ON" : "OFF"}
        </button>
        <button
          onClick={() => setbrutal(!brutal)}
          className={`story-button ${brutal ? "active" : ""}`}
          style={{ textTransform: "capitalize" }}
        >
          brutalism: {brutal ? "ON" : "OFF"}
        </button>
      </div>
    </StoryWrapper>
  );
};

export const LocalePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeLocale, setActiveLocale] = useState<string>("en");

  const renderLocaleButtons = (locales: (typeof LOCALES_LIST)[number][]) => (
    <ButtonGroup
      items={locales.map((loc) => ({
        id: loc.locale,
        label: loc.label,
        isActive: activeLocale === loc.locale,
        onClick: () => setActiveLocale(loc.locale),
      }))}
    />
  );

  return (
    <StoryWrapper
      title="Interactive Playground"
      subtitle={`Selected in ${activeLocale}: ${formatSubtitle(date, activeLocale)}`}
    >
      <p
        style={{
          fontSize: "14px",
          opacity: 0.7,
          maxWidth: "600px",
          textAlign: "center",
          marginTop: "-16px",
          marginBottom: "8px",
        }}
      >
        *These 12 locales are just a showcase. Thanks to the native Intl API,
        the calendar automatically supports all 400+ BCP 47 language tags out of
        the box (e.g., "nl", "sv", "ko").
      </p>
      {renderLocaleButtons(LOCALES_LIST.slice(0, 6))}
      <div className="calendar-fixed-container">
        <Calendar
          locale={activeLocale}
          date={date}
          onChangeDate={setDate}
          presets
          monthsGrid
        />
      </div>
      {renderLocaleButtons(LOCALES_LIST.slice(6))}
    </StoryWrapper>
  );
};

export const BuilderPlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [config, setConfig] = useState({
    years: true,
    monthsGrid: true,
    time: false,
    months: true,
    timeGrid: false,
    presets: false,
    compactMonths: false,
    compactYears: false,
  });

  const toggle = (key: keyof typeof config) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <StoryWrapper
      title="Calendar Builder"
      subtitle="Toggle modules to see dynamic grid adjustments"
    >
      <div className="unified-controls">
        {Object.keys(config).map((key) => (
          <button
            key={key}
            onClick={() => toggle(key as keyof typeof config)}
            className={`story-button ${config[key as keyof typeof config] ? "active" : ""}`}
            style={{ textTransform: "capitalize" }}
          >
            {key}: {config[key as keyof typeof config] ? "ON" : "OFF"}
          </button>
        ))}
      </div>
      <div className="calendar-fixed-container">
        <Calendar
          date={date}
          onChangeDate={setDate}
          years={config.years}
          months={config.months}
          monthsGrid={config.monthsGrid}
          time={config.time}
          timeGrid={config.timeGrid}
          presets={config.presets}
          compactMonths={config.compactMonths}
          compactYears={config.compactYears}
          theme="mint"
        />
      </div>
    </StoryWrapper>
  );
};
