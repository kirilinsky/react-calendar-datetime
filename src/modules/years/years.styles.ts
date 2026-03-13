import { css } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

export const container = css`
  grid-area: YY;
  display: flex;
  align-items: center;
  background: var(--cal-accent);
  border-bottom: 1px solid var(--cal-border-color);
  justify-content: space-between;
  padding: 0 8px;
  height: 60px;
  box-sizing: border-box;
`;

export const currentYear = css`
  ${interactiveBase}
  flex: 1;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 700;
  height: 44px;
  &:active {
    transform: scale(0.98);
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
