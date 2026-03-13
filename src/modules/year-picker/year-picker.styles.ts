import { css, keyframes } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const container = css`
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr) 50px;
  grid-template-rows: repeat(5, 1fr);
  animation: ${fadeIn} 0.2s linear forwards;
`;

export const arrow = css`
  ${interactiveBase}
  background: var(--cal-accent) !important;
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
  background: var(--cal-backdrop);
  opacity: 0;
  font-size: 14px;

  &.animating {
    animation: ${fadeIn} 0.3s forwards;
  }
`;

export const active = css`
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
`;
