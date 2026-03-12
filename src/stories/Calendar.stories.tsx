import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import "./calendar.css";
import dayjs from "dayjs";
import { THEME_OPTIONS, CalendarTheme } from "../types/themes";

export default {
  title: "Components/Calendar",
};

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
        theme === "light" || theme === "mint_blue" ? "#f3f4f6" : "#0f111a",
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
          color:
            theme === "light" || theme === "mint_blue" ? "#111827" : "#fff",
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

export const ThemePlayground = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mint_blue");

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
                  : "1px solid #d1d5db",
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

export const International = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <StoryWrapper
      title="Localization (zh-cn)"
      subtitle={dayjs(date).locale("zh-cn").format("DD.MM.YYYY")}
    >
      <Calendar date={date} locale="zh-cn" onChangeDate={setDate} presets />
    </StoryWrapper>
  );
};
