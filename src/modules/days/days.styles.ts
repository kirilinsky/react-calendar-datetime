import { css } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

export const container = css`
  grid-area: DD;
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 15px;
  gap: 5px;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--cal-color-text);
  opacity: 0.5;
  text-transform: uppercase;
  user-select: none;
`;

export const dayItem = css`
  ${interactiveBase}
`;

export const active = css`
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
`;
