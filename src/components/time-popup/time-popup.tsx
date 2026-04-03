import { useState } from "react";
import styles from "./time-popup.module.css";
import { TimeTrack } from "../time-track/time-track";

interface TimePopupProps {
  date: Date;
  onConfirm: (date: Date) => void;
  onClose: () => void;
  hour12?: boolean;
  gestures?: boolean;
}

export const TimePopup = ({
  date,
  onConfirm,
  onClose,
  hour12 = false,
  gestures,
}: TimePopupProps) => {
  const [current, setCurrent] = useState(date);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <TimeTrack date={current} hour12={hour12} gestures={gestures} onChange={setCurrent} />
        <button className={styles.confirm} onClick={() => onConfirm(current)}>
          ✓
        </button>
      </div>
    </div>
  );
};
