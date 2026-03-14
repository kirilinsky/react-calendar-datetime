import { css, keyframes } from "goober";

export const textSm = `font-size: 13px;`;
export const textXs = `font-size: 12px;`;
export const textMd = `font-size: 14px;`;
export const textLg = `font-size: 20px;`;

export const interactiveBase = `
  border: none;
  background: transparent;
  color: var(--c-c);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:hover:not([disabled]) {
    background: var(--c-t);
  }
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  & svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
    stroke-width: 1.4;
    flex-shrink: 0;
    display: block;
  }
`;

export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const activeItem = css`
  background: var(--c-h) !important;
  color: var(--c-a) !important;
`;

export const jumpInKeyframes = keyframes`
  0% {
    opacity: 0.8;
     transform: translateY(2px) scaleY(1.01) ; 
     z-index:1;
  }
  100% {
    opacity: 1; z-index:1;
    transform: translateY(0)  ;
  }
`;
