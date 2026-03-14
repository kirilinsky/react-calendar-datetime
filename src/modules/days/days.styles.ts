import { css } from "goober";
import {
  interactiveBase,
  flexCenter,
  fadeInKeyframes,
  textXs,
} from "@/styles/shared.styles";

export const container = css`
  grid-area: DD;
  background: var(--cal-backdrop);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 15px;
  gap: 5px;
  &.animating {
    animation: ${fadeInKeyframes} 0.2s ease-out forwards;
  }
`;

export const header = css`
  ${flexCenter}
  ${textXs}  opacity: 0.5;
  text-transform: uppercase;
  user-select: none;
  font-weight: 600;
  color: var(--cal-color-text);
`;

export const dayItem = css`
  ${interactiveBase}
  ${flexCenter}
`;

export const active = css`
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
`;
