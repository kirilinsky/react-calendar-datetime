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
  <div
    data-theme={theme}
    style={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor:
        theme === "light" || theme === "mintblue" ? "#f3f4f6" : "#0f111a",
      fontFamily: "system-ui, sans-serif",
      padding: "20px",
      transition: "background 0.3s ease",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <h2
        style={{
          margin: 0,
          fontSize: "24px",
          color: theme === "light" || theme === "mintblue" ? "#111827" : "#fff",
        }}
      >
        {title}
      </h2>
      <p style={{ margin: "8px 0 0", color: "#6b7280", fontSize: "15px" }}>
        {subtitle}
      </p>
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
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        {THEME_OPTIONS.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setActiveTheme(theme.value)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border:
                activeTheme === theme.value
                  ? "2px solid #3b82f6"
                  : "2px solid #d1d5db",
              background: activeTheme === theme.value ? "#eff6ff" : "#fff",
              color: activeTheme === theme.value ? "#1d4ed8" : "#374151",
              cursor: "pointer",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
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
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {LOCALE_OPTIONS.map((loc) => (
          <button
            key={loc.value}
            onClick={() => setActiveLocale(loc.value)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "13px",
              border:
                activeLocale === loc.value
                  ? "2px solid #10b981"
                  : "2px solid var(--cal-border-color, #d1d5db)",
              background:
                activeLocale === loc.value
                  ? "#ecfdf5"
                  : "var(--cal-accent, #fff)",
              color:
                activeLocale === loc.value
                  ? "#047857"
                  : "var(--cal-color-text, #374151)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
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
