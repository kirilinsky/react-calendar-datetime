import { css } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

export { interactiveBase };

export const calendarContainer = ({
  time,
  presets,
  years,
  months,
  yearsPicker,
}: {
  time: boolean;
  presets: boolean;
  months: boolean;
  years: boolean;
  yearsPicker: boolean;
}) => {
  const cols = !months
    ? time
      ? "5fr 2fr"
      : "1fr"
    : time
      ? "2fr 5fr 2fr"
      : "2fr 5fr";

  let rows = "auto";
  if (years) rows = `60px ${rows}`;
  if (presets) rows = `${rows} 50px`;

  const areas = (() => {
    if (yearsPicker) return '"."';

    const baseRow = !months
      ? time
        ? '"DD TIME"'
        : '"DD"'
      : time
        ? '"MM DD TIME"'
        : '"MM DD"';

    let matrix = baseRow;

    if (years) {
      const yyRow = !months
        ? time
          ? '"YY YY"'
          : '"YY"'
        : time
          ? '"YY YY YY"'
          : '"YY YY"';
      matrix = `${yyRow} ${matrix}`;
    }

    if (presets) {
      const presetRow = !months
        ? time
          ? '"PRESETS PRESETS"'
          : '"PRESETS"'
        : time
          ? '"PRESETS PRESETS PRESETS"'
          : '"PRESETS PRESETS"';
      matrix = `${matrix} ${presetRow}`;
    }

    return matrix;
  })();

  return css`
    min-width: 450px;
    min-height: 10vh;
    max-height: 100vh;
    background: var(--cal-accent);
    color: var(--cal-color-text);
    display: grid;
    user-select: none;
    box-sizing: border-box;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    border-radius: 16px;
    border: 1px solid var(--cal-border-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    overflow: hidden;

    grid-template-columns: ${yearsPicker ? "1fr" : cols};
    grid-template-rows: ${yearsPicker ? "1fr" : rows};
    grid-template-areas: ${areas};
  `;
};
