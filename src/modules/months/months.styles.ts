import { css } from "goober";
import { interactiveBase, textSm } from "@/styles/shared.styles";

export const container = css`
  grid-area: MM;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 12px 8px;
  gap: 5px;
  border-right: 1px solid var(--c-s);
  background: var(--c-b);
`;

export const item = css`
  ${interactiveBase}
  ${textSm}
  padding: 9px 5px;
`;
