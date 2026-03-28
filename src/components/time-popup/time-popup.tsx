import { useState, useRef, useCallback } from "react";
import styles from "./time-popup.module.css";

interface TimePopupProps {
  date: Date;
  onConfirm: (date: Date) => void;
  onClose: () => void;
  hour12?: boolean;
}

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
  const drumRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startIdx = useRef(0);

  const getItemH = useCallback(
    () => (drumRef.current ? drumRef.current.clientHeight / VISIBLE : 40),
    [],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
    startIdx.current = values.indexOf(selected);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!(e.buttons & 1)) return;
    const delta = Math.round((e.clientY - startY.current) / getItemH());
    const next = clamp(startIdx.current - delta, 0, values.length - 1);
    onChange(values[next]);
  };

  const idx = values.indexOf(selected);
  const itemH = getItemH();
  const translateY = Math.floor(VISIBLE / 2) * itemH - idx * itemH;

  return (
    <div
      ref={drumRef}
      className={styles.drum}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div
        className={styles.drumTrack}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {values.map((v) => (
          <div
            key={v}
            className={`${styles.drumItem} ${v === selected ? styles.drumItemActive : ""}`}
            onClick={() => onChange(v)}
          >
            {String(v).padStart(2, "0")}
          </div>
        ))}
      </div>
      <div className={styles.drumHighlight} />
      <div className={styles.drumFadeTop} />
      <div className={styles.drumFadeBottom} />
    </div>
  );
};

export const TimePopup = ({
  date,
  onConfirm,
  onClose,
  hour12 = false,
}: TimePopupProps) => {
  const raw = date.getHours();
  const [hours, setHours] = useState(hour12 ? raw % 12 || 12 : raw);
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [period, setPeriod] = useState<"AM" | "PM">(raw >= 12 ? "PM" : "AM");

  const hourValues = hour12
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 24 }, (_, i) => i);

  const minuteValues = Array.from({ length: 60 }, (_, i) => i);

  const handleConfirm = () => {
    const next = new Date(date);
    const h = hour12
      ? period === "AM"
        ? hours % 12
        : (hours % 12) + 12
      : hours;
    next.setHours(h, minutes, 0, 0);
    onConfirm(next);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>SET TIME</span>
          {hour12 && (
            <div className={styles.periodToggle}>
              {(["AM", "PM"] as const).map((p) => (
                <button
                  key={p}
                  className={`${styles.periodBtn} ${period === p ? styles.periodActive : ""}`}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.drums}>
          <Drum values={hourValues} selected={hours} onChange={setHours} />
          <span className={styles.colon}>:</span>
          <Drum
            values={minuteValues}
            selected={minutes}
            onChange={setMinutes}
          />
        </div>

        <button className={styles.confirm} onClick={handleConfirm}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};
