import { css } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

export const container = css`
  grid-area: PRESETS;
  display: flex;
  border-top: 1px solid var(--cal-border-color);
  padding: 5px 7px;
  gap: 5px;
  background: var(--cal-accent);
`;

export const presetItem = css`
  ${interactiveBase}
  flex: 1;
  text-align: center;
  font-size: 13px;
  padding: 3px;
  background: var(--cal-tone);

  &:hover {
    filter: brightness(0.95);
  }
`;
