import { css } from "goober";
import { interactiveBase, textSm } from "@/styles/shared.styles";

export const container = css`
  grid-area: MM;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 15px 10px;
  gap: 4px;
  border-right: 1px solid var(--cal-border-color);
  background: var(--cal-backdrop);
`;

export const item = css`
  ${interactiveBase}
  ${textSm}
  padding: 10px 5px;
`;
