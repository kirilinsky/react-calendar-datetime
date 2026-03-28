import { useState, useRef, useEffect } from "react";
import styles from "./time-track.module.css";
import { getDrumValue } from "@/utils/date-utils";

interface TimeTrackProps {
  date: Date;
  hour12?: boolean;
  onChange: (date: Date) => void;
}

const ITEM_H = 44;
const VISIBLE = 7;
const SCROLL_THRESHOLD = 40;

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const Drum = ({
  values,
  selected,
  max,
  onChange,
}: {
  values: number[];
  selected: number;
  max: number;
  onChange: (v: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startIdx = useRef(0);
  const accum = useRef(0);
  const state = useRef({ selected, max, onChange });

  useEffect(() => {
    state.current = { selected, max, onChange };
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accum.current += e.deltaY;
      if (Math.abs(accum.current) < SCROLL_THRESHOLD) return;
      const dir = accum.current > 0 ? 1 : -1;
      accum.current = 0;
      const s = state.current;
      s.onChange(getDrumValue(s.selected, dir, s.max));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
    startIdx.current = values.indexOf(selected);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!(e.buttons & 1)) return;
    const delta = Math.round((e.clientY - startY.current) / ITEM_H);
    onChange(values[clamp(startIdx.current - delta, 0, values.length - 1)]);
  };

  const selectedIdx = values.indexOf(selected);
  const translateY = Math.floor(VISIBLE / 2) * ITEM_H - selectedIdx * ITEM_H;

  return (
    <div
      ref={ref}
      className={styles.drum}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div className={styles.highlight} />
      <div
        className={styles.track}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {values.map((v, i) => {
          const dist = Math.abs(selectedIdx - i);
          const opacity =
            dist === 0 ? 1 : dist === 1 ? 0.6 : dist === 2 ? 0.5 : 0.35;
          return (
            <div
              key={v}
              className={`${styles.item} ${v === selected ? styles.active : ""}`}
              style={v !== selected ? { opacity } : undefined}
              onClick={() => onChange(v)}
            >
              {String(v).padStart(2, "0")}
            </div>
          );
        })}
      </div>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
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

  const hourMax = hour12 ? 12 : 24;
  const hourValues = Array.from({ length: hourMax }, (_, i) =>
    hour12 ? i + 1 : i,
  );
  const minuteValues = Array.from({ length: 60 }, (_, i) => i);

  const emit = (h: number, m: number, p: "AM" | "PM") => {
    const next = new Date(date);
    next.setHours(hour12 ? (p === "AM" ? h % 12 : (h % 12) + 12) : h, m, 0, 0);
    onChange(next);
  };

  return (
    <div className={styles.root}>
      {hour12 && (
        <div className={styles.period}>
          {(["AM", "PM"] as const).map((p) => (
            <button
              key={p}
              className={`${styles.periodBtn} ${period === p ? styles.periodActive : ""}`}
              onClick={() => {
                setPeriod(p);
                emit(hours, minutes, p);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      )}
      <div className={styles.drums}>
        <Drum
          values={hourValues}
          selected={hours}
          max={hourMax}
          onChange={(v) => {
            setHours(v);
            emit(v, minutes, period);
          }}
        />
        <span className={styles.colon}>:</span>
        <Drum
          values={minuteValues}
          selected={minutes}
          max={60}
          onChange={(v) => {
            setMinutes(v);
            emit(hours, v, period);
          }}
        />
      </div>
    </div>
  );
};
