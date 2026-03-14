import { css } from "goober";
import {
  fadeInKeyframes,
  interactiveBase,
  textMd,
} from "@/styles/shared.styles";

export const container = css`
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr) 50px;
  grid-template-rows: repeat(5, 1fr);
  animation: ${fadeInKeyframes} 0.2s linear forwards;
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
  ${textMd}
  background: var(--cal-backdrop);
  opacity: 0;

  &.animating {
    animation: ${fadeInKeyframes} 0.3s forwards;
  }
`;

export const active = css`
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
`;
