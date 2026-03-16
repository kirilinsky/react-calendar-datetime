import React from "react";
import styles from "./days.module.css";

export const DaysComponent: React.FC = () => { 

   const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

   const dummyDays = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <div className={styles.dayGridContainer}>
       <div className={styles.weekDaysRow}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.weekDayCell}>
            {day}
          </div>
        ))}
      </div> 
      <div className={styles.daysMatrix}>
        {dummyDays.map((day, index) => (
          <button key={index} className={styles.dayCell}>
            {day > 31 ? "" : day} 
          </button>
        ))}
      </div>
    </div>
  );
};
