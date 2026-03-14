import { css } from "goober";
import { interactiveBase, textSm } from "@/styles/shared.styles";

export const container = css`
  grid-area: PP;
  display: flex;
  border-top: 1px solid var(--c-s);
  padding: 6px;
  gap: 5px;
  background: var(--c-a);
  z-index: 2;
`;

export const presetItem = css`
  ${interactiveBase}
  ${textSm}
  flex: 1;
  text-align: center;
  background: var(--c-t);
  transition: transform 0.1s ease-out;
  &:active {
    transform: scale(0.98);
  }
`;
