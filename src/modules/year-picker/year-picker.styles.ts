import { css } from "goober";
import { interactiveBase, textSm } from "@/styles/shared.styles";

export const container = css`
  background: var(--c-b);
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr) 50px;
  grid-template-rows: repeat(5, 1fr);
`;

export const arrow = css`
  ${interactiveBase}
  z-index: 2;
  &:first-child {
    grid-area: 1/1/6/2;
  }
  &:last-child {
    grid-area: 1/7/6/7;
  }
  border-radius: 0;
`;

export const yearItem = css`
  ${interactiveBase}
  ${textSm}
  background: var(--c-b);
  padding: 4px;
  margin: 5px;
`;
