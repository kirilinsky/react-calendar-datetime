import { css } from "goober";
import { interactiveBase, textLg } from "@/styles/shared.styles";

export const container = css`
  grid-area: YY;
  display: flex;
  align-items: center;
  background: var(--c-a);
  border-bottom: 1px solid var(--c-s);
  justify-content: space-between;
  padding: 0 8px;
  height: 60px;
  box-sizing: border-box;
`;

export const currentYear = css`
  ${interactiveBase}
  ${textLg}
  flex: 1;
  margin: 0 10px;
  font-weight: 700;
  height: 44px;
  &:active {
    transform: scale(0.98);
  } 
  &.static {
    cursor: default;
    background: transparent;
    pointer-events: none; 
    &:active {
      transform: none;
    } 
    &:hover {
      background: transparent;
    }
  }
`;

export const arrow = css`
  ${interactiveBase}
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  & svg {
    margin: 0;
  }
`;
