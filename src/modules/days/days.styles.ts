import { css } from "goober";
import {
  interactiveBase,
  flexCenter,
  textXs,
  jumpInKeyframes,
} from "@/styles/shared.styles";

export const container = css`
  grid-area: DD;
  background: var(--c-b);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 14px;
  gap: 3px 5px;
  &.animating {
    animation: ${jumpInKeyframes} 0.2s ease-out forwards;
  }
`;

export const header = css`
  ${flexCenter}
  ${textXs}  opacity: 0.5;
  text-transform: uppercase;
  user-select: none;
  font-weight: 600;
  color: var(--c-c);
`;

export const dayItem = css`
  ${interactiveBase}
  ${flexCenter}
  padding: 8px 4px;
`;
