import { css } from "goober";

export const calendarContainer = (p: {
  time: boolean;
  presets: boolean;
  months: boolean;
  years: boolean;
  yearsPicker: boolean;
}) => {
  const colCount = (p.months ? 1 : 0) + 1 + (p.time ? 1 : 0);
  const cols = p.yearsPicker
    ? "1fr"
    : [p.months && "2fr", "5fr", p.time && "2fr"].filter(Boolean).join(" ");

  const areas = p.yearsPicker
    ? '"."'
    : (() => {
        const row = [p.months && "MM", "DD", p.time && "TT"]
          .filter(Boolean)
          .join(" ");
        const full = (key: string) =>
          `"${new Array(colCount).fill(key).join(" ")}"`;
        return [p.years && full("YY"), `"${row}"`, p.presets && full("PP")]
          .filter(Boolean)
          .join(" ");
      })();

  return css`
    min-width: 450px;
    background: var(--c-a);
    color: var(--c-c);
    display: grid;
    user-select: none;
    box-sizing: border-box;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    border-radius: 16px;
    border: 1px solid var(--c-s);
    box-shadow: 0 6px 22px var(--c-x);
    overflow: hidden;

    grid-template-columns: ${cols};
    grid-template-rows: ${p.yearsPicker
      ? "1fr"
      : `${p.years ? "60px " : ""}auto${p.presets ? " 50px" : ""}`};
    grid-template-areas: ${areas};
  `;
};
