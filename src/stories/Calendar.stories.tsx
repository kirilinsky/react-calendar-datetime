import { useState } from "react";
import { Calendar } from "../components/calendar/calendar";
import "./calendar.css";
import { CalendarTheme, DARK_THEMES, LIGHT_THEMES } from "../types/themes";
import { DisabledRule, StartOfWeek } from "../types/calendar";

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

export const Default = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <StoryWrapper title="Default" subtitle={formatSubtitle(date)}>
      <div className="calendar-fixed-container">
        <Calendar
          date={date}
          onChangeDate={setDate}
          theme="industrial"
          brutalism
        />
      </div>
    </StoryWrapper>
  );
};

export const KitchenSink = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeTheme, setActiveTheme] = useState<CalendarTheme>("mint");
  const [activeLocale, setActiveLocale] = useState("en");
  const [containerWidth, setContainerWidth] = useState(580);

  const getOffsetDay = (days: number) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + days);
    return d;
  };

  const [startOfWeek, setStartOfWeek] = useState<StartOfWeek>(1);

  const [startDate, setStartDate] = useState<Date>(() => getOffsetDay(-391));
  const [endDate, setEndDate] = useState<Date>(() => getOffsetDay(411));
  const toISODate = (d: Date) => d.toISOString().split("T")[0];
  const parseDate = (s: string) => new Date(s + "T00:00:00");

  type DisabledMode =
    | "none"
    | "all"
    | "date"
    | "dates"
    | "range"
    | "weekdays"
    | "before"
    | "after"
    | "outside";
  const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [disabledMode, setDisabledMode] = useState<DisabledMode>("none");
  const [disabledDate, setDisabledDate] = useState(toISODate(new Date()));
  const [disabledDates, setDisabledDates] = useState<string[]>([
    toISODate(new Date()),
  ]);
  const [disabledFrom, setDisabledFrom] = useState(toISODate(getOffsetDay(-3)));
  const [disabledTo, setDisabledTo] = useState(toISODate(getOffsetDay(3)));
  const [disabledBefore, setDisabledBefore] = useState(toISODate(new Date()));
  const [disabledAfter, setDisabledAfter] = useState(toISODate(new Date()));
  const [disabledWeekdays, setDisabledWeekdays] = useState<number[]>([]);

  const toggleWeekday = (d: number) =>
    setDisabledWeekdays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const getDisabledValue = (): DisabledRule | undefined => {
    switch (disabledMode) {
      case "all":
        return true;
      case "date":
        return parseDate(disabledDate);
      case "dates":
        return disabledDates.map(parseDate);
      case "range":
        return { from: parseDate(disabledFrom), to: parseDate(disabledTo) };
      case "weekdays":
        return disabledWeekdays.length
          ? { dayOfWeek: disabledWeekdays }
          : undefined;
      case "before":
        return { before: parseDate(disabledBefore) };
      case "after":
        return { after: parseDate(disabledAfter) };
      case "outside":
        return {
          before: parseDate(disabledBefore),
          after: parseDate(disabledAfter),
        };
      default:
        return undefined;
    }
  };

  const [config, setConfig] = useState({
    years: false,
    monthsGrid: false,
    time: true,
    timeGrid: false,
    months: true,
    presets: false,
    compactMonths: false,
    compactYears: true,
    gradient: false,
    brutalism: false,
    gestures: false,
    highlightWeekends: true,
    showWeekNumber: false,
    hideLimited: false,
    hideWeekdays: false,
    shortMonths: false,
    hour12: false,
  });

  const toggle = (key: keyof typeof config) =>
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));

  const isLight = (LIGHT_THEMES as readonly string[]).includes(activeTheme);

  return (
    <StoryWrapper
      light={isLight}
      title="Kitchen Sink"
      subtitle={`${formatSubtitle(date, activeLocale, config.time)} · ${activeTheme} · ${activeLocale}`}
    >
      <div className="kitchen-layout">
        <aside className="kitchen-panel">
          <p className="panel-label">Props</p>
          {(Object.keys(config) as (keyof typeof config)[]).map((key) => (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`panel-button ${config[key] ? "active" : ""}`}
            >
              <span className="panel-button-key">{key}</span>
              <span
                className={`panel-button-val ${config[key] ? "on" : "off"}`}
              >
                {config[key] ? "ON" : "OFF"}
              </span>
            </button>
          ))}
          <p className="panel-label" style={{ marginTop: 16 }}>
            Date limits
          </p>
          <div className="panel-date">
            <label>Start</label>
            <input
              type="date"
              value={toISODate(startDate)}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>
          <div className="panel-date">
            <label>End</label>
            <input
              type="date"
              value={toISODate(endDate)}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div>

          <p className="panel-label" style={{ marginTop: 16 }}>
            Disabled
          </p>
          <select
            className="panel-select"
            value={disabledMode}
            onChange={(e) => setDisabledMode(e.target.value as DisabledMode)}
          >
            <option value="none">none</option>
            <option value="all">all</option>
            <option value="date">date</option>
            <option value="dates">dates [ ]</option>
            <option value="range">range &#123;from,to&#125;</option>
            <option value="weekdays">weekdays</option>
            <option value="before">before</option>
            <option value="after">after</option>
            <option value="outside">outside &#123;before,after&#125;</option>
          </select>

          {disabledMode === "date" && (
            <div className="panel-date">
              <input
                type="date"
                value={disabledDate}
                onChange={(e) => setDisabledDate(e.target.value)}
              />
            </div>
          )}

          {disabledMode === "dates" && (
            <div className="panel-dates-list">
              {disabledDates.map((d, i) => (
                <div key={i} className="panel-dates-row">
                  <input
                    type="date"
                    value={d}
                    onChange={(e) =>
                      setDisabledDates((prev) =>
                        prev.map((x, j) => (j === i ? e.target.value : x)),
                      )
                    }
                  />
                  <button
                    className="panel-dates-remove"
                    onClick={() =>
                      setDisabledDates((prev) => prev.filter((_, j) => j !== i))
                    }
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                className="panel-button"
                onClick={() =>
                  setDisabledDates((prev) => [...prev, toISODate(new Date())])
                }
              >
                + Add date
              </button>
            </div>
          )}

          {disabledMode === "range" && (
            <>
              <div className="panel-date">
                <label>From</label>
                <input
                  type="date"
                  value={disabledFrom}
                  onChange={(e) => setDisabledFrom(e.target.value)}
                />
              </div>
              <div className="panel-date">
                <label>To</label>
                <input
                  type="date"
                  value={disabledTo}
                  onChange={(e) => setDisabledTo(e.target.value)}
                />
              </div>
            </>
          )}

          {disabledMode === "weekdays" && (
            <div className="panel-weekdays">
              {WEEKDAY_LABELS.map((label, i) => (
                <button
                  key={i}
                  onClick={() => toggleWeekday(i)}
                  className={`panel-weekday-btn ${disabledWeekdays.includes(i) ? "active" : ""}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {disabledMode === "before" && (
            <div className="panel-date">
              <label>Before</label>
              <input
                type="date"
                value={disabledBefore}
                onChange={(e) => setDisabledBefore(e.target.value)}
              />
            </div>
          )}

          {disabledMode === "after" && (
            <div className="panel-date">
              <label>After</label>
              <input
                type="date"
                value={disabledAfter}
                onChange={(e) => setDisabledAfter(e.target.value)}
              />
            </div>
          )}

          {disabledMode === "outside" && (
            <>
              <div className="panel-date">
                <label>Before</label>
                <input
                  type="date"
                  value={disabledBefore}
                  onChange={(e) => setDisabledBefore(e.target.value)}
                />
              </div>
              <div className="panel-date">
                <label>After</label>
                <input
                  type="date"
                  value={disabledAfter}
                  onChange={(e) => setDisabledAfter(e.target.value)}
                />
              </div>
            </>
          )}

          <>
            <p className="panel-label" style={{ marginTop: 16 }}>
              Width: {containerWidth}px
            </p>
            <input
              type="range"
              min="200"
              max="900"
              value={containerWidth}
              className="width-slider"
              onChange={(e) => setContainerWidth(Number(e.target.value))}
            />
          </>
        </aside>

        <div className="kitchen-center">
          <div style={{ width: `${containerWidth}px` }}>
            <Calendar
              date={date}
              onChangeDate={setDate}
              theme={activeTheme}
              locale={activeLocale}
              startDate={startDate}
              endDate={endDate}
              startOfWeek={startOfWeek}
              disabled={getDisabledValue()}
              {...config}
            />
          </div>
        </div>

        <aside className="kitchen-panel">
          <p className="panel-label">🌙 Dark themes</p>
          {DARK_THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`panel-button ${activeTheme === t ? "active" : ""}`}
            >
              <span className="panel-button-key">{THEME_LABELS[t]}</span>
            </button>
          ))}
          <p className="panel-label" style={{ marginTop: 16 }}>
            ☀️ Light themes
          </p>
          {LIGHT_THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`panel-button ${activeTheme === t ? "active" : ""}`}
            >
              <span className="panel-button-key">{THEME_LABELS[t]}</span>
            </button>
          ))}
          <p className="panel-label" style={{ marginTop: 16 }}>
            Locale
          </p>
          {LOCALES_LIST.map((l) => (
            <button
              key={l.locale}
              onClick={() => setActiveLocale(l.locale)}
              className={`panel-button ${activeLocale === l.locale ? "active" : ""}`}
            >
              <span className="panel-button-key">{l.label}</span>
              <span className="panel-button-val off">{l.locale}</span>
            </button>
          ))}
          <p className="panel-label" style={{ marginTop: 16 }}>Start of week</p>
          <div className="panel-weekdays">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((label, i) => (
              <button
                key={i}
                onClick={() => setStartOfWeek(i as StartOfWeek)}
                className={`panel-weekday-btn ${startOfWeek === i ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </StoryWrapper>
  );
};
