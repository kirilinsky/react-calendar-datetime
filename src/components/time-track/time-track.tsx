import { useState, useRef, useEffect } from "react";
import styles from "./time-track.module.css";
import { getDrumValue, padTime } from "@/utils/date-utils";

interface TimeTrackProps {
  date: Date;
  hour12?: boolean;
  onChange: (date: Date) => void;
}

const OFFSETS = Array.from({ length: 7 }, (_, i) => i - 3);
const SCROLL_THRESHOLD = 40;

const Drum = ({
  val,
  max,
  onMove,
}: {
  val: number;
  max: number;
  onMove: (delta: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const moveRef = useRef(onMove);
  const accum = useRef(0);

  useEffect(() => {
    moveRef.current = onMove;
  }, [onMove]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accum.current += e.deltaY;
      if (Math.abs(accum.current) < SCROLL_THRESHOLD) return;
      const dir = accum.current > 0 ? 1 : -1;
      accum.current = 0;
      moveRef.current(dir);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className={styles.drum}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          onMove(-1);
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          onMove(1);
        }
      }}
    >
      <div className={styles.highlight} />
      {OFFSETS.map((o) => {
        const isActive = o === 0;
        const dist = Math.abs(o);
        const opacity =
          dist === 0 ? 1 : dist === 1 ? 0.6 : dist === 2 ? 0.35 : 0.15;
        return (
          <div
            key={o}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
            style={!isActive ? { opacity } : undefined}
            onClick={isActive ? undefined : () => onMove(o)}
          >
            {padTime(getDrumValue(val, o, max))}
          </div>
        );
      })}
    </div>
  );
};

export const TimeTrack = ({
  date,
  hour12 = false,
  onChange,
}: TimeTrackProps) => {
  const raw = date.getHours();
  const hours = hour12 ? raw % 12 || 12 : raw;
  const minutes = date.getMinutes();
  const period: "AM" | "PM" = raw >= 12 ? "PM" : "AM";

  const hourMax = hour12 ? 12 : 24;

  const emit = (h: number, m: number, p: "AM" | "PM") => {
    const next = new Date(date);
    next.setHours(hour12 ? (p === "AM" ? h % 12 : (h % 12) + 12) : h, m, 0, 0);
    onChange(next);
  };

  const moveHours = (delta: number) =>
    emit(getDrumValue(hours, delta, hourMax), minutes, period);
  const moveMinutes = (delta: number) =>
    emit(hours, getDrumValue(minutes, delta, 60), period);

  return (
    <div className={styles.root}>
      {hour12 && (
        <div className={styles.period}>
          {(["AM", "PM"] as const).map((p) => (
            <button
              key={p}
              className={`${styles.periodBtn} ${period === p ? styles.periodActive : ""}`}
              onClick={() => emit(hours, minutes, p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
      <div className={styles.drums}>
        <Drum val={hours} max={hourMax} onMove={moveHours} />
        <span className={styles.colon}>:</span>
        <Drum val={minutes} max={60} onMove={moveMinutes} />
      </div>
    </div>
  );
};
