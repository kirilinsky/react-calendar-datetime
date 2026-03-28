import { useState, useRef } from "react";
import styles from "./time-track.module.css";

interface TimeTrackProps {
  date: Date;
  hour12?: boolean;
  onChange: (date: Date) => void;
}

const ITEM_H = 44;
const VISIBLE = 5;

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const Drum = ({
  values,
  selected,
  onChange,
}: {
  values: number[];
  selected: number;
  onChange: (v: number) => void;
}) => {
  const startY = useRef(0);
  const startIdx = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
    startIdx.current = values.indexOf(selected);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!(e.buttons & 1)) return;
    const delta = Math.round((e.clientY - startY.current) / ITEM_H);
    const next = clamp(startIdx.current - delta, 0, values.length - 1);
    onChange(values[next]);
  };

  const idx = values.indexOf(selected);
  const translateY = Math.floor(VISIBLE / 2) * ITEM_H - idx * ITEM_H;

  return (
    <div
      className={styles.drum}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div className={styles.drumHighlight} />
      <div
        className={styles.drumTrack}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {values.map((v, i) => {
          const distance = Math.abs(values.indexOf(selected) - i);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.75 : 0.55;
          return (
            <div
              key={v}
              className={`${styles.drumItem} ${v === selected ? styles.drumItemActive : ""}`}
              style={v !== selected ? { opacity } : undefined}
              onClick={() => onChange(v)}
            >
              {String(v).padStart(2, "0")}
            </div>
          );
        })}
      </div>
      <div className={styles.drumFadeTop} />
      <div className={styles.drumFadeBottom} />
    </div>
  );
};

export const TimeTrack = ({
  date,
  hour12 = false,
  onChange,
}: TimeTrackProps) => {
  const raw = date.getHours();
  const [hours, setHours] = useState(hour12 ? raw % 12 || 12 : raw);
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [period, setPeriod] = useState<"AM" | "PM">(raw >= 12 ? "PM" : "AM");

  const hourValues = hour12
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 24 }, (_, i) => i);

  const minuteValues = Array.from({ length: 60 }, (_, i) => i);

  const emit = (h: number, m: number, p: "AM" | "PM") => {
    const next = new Date(date);
    const resolvedH = hour12 ? (p === "AM" ? h % 12 : (h % 12) + 12) : h;
    next.setHours(resolvedH, m, 0, 0);
    onChange(next);
  };

  const handleHours = (v: number) => {
    setHours(v);
    emit(v, minutes, period);
  };
  const handleMinutes = (v: number) => {
    setMinutes(v);
    emit(hours, v, period);
  };
  const handlePeriod = (p: "AM" | "PM") => {
    setPeriod(p);
    emit(hours, minutes, p);
  };

  return (
    <div className={styles.timeTrack}>
      {hour12 && (
        <div className={styles.periodToggle}>
          {(["AM", "PM"] as const).map((p) => (
            <button
              key={p}
              className={`${styles.periodBtn} ${period === p ? styles.periodActive : ""}`}
              onClick={() => handlePeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
      <div className={styles.drums}>
        <Drum values={hourValues} selected={hours} onChange={handleHours} />
        <span className={styles.colon}>:</span>
        <Drum
          values={minuteValues}
          selected={minutes}
          onChange={handleMinutes}
        />
      </div>
    </div>
  );
};
