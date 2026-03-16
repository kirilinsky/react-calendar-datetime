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
  grid-template-rows: 23px repeat(6, 1fr);
  align-content: center;
  padding: 8px 15px;
  gap: 3px;
  min-height: 297px;
  box-sizing: border-box;
  &.animating {
    animation: ${jumpInKeyframes} 0.2s ease-out forwards;
  }
`;

export const header = css`
  ${flexCenter}
  ${textXs} 
  opacity: 0.5;
  text-transform: uppercase;
  user-select: none;
  font-weight: 600;
  color: var(--c-c);
`;

export const dayItem = css`
  ${interactiveBase}
  padding: 8px 4px;
  position: relative;
  z-index: 1;

  &:disabled {
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 4px,
      var(--c-t) 2px,
      var(--c-t) 5px
    );
  }
`;
