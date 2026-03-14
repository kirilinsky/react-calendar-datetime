import { css, keyframes } from "goober";

export const textSm = `font-size: 13px;`;
export const textXs = `font-size: 12px;`;
export const textMd = `font-size: 14px;`;
export const textLg = `font-size: 20px;`;

export const interactiveBase = `
  border: none;
  background: transparent;
  color: var(--cal-color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:hover:not([disabled]) {
    background: var(--cal-tone);
  }
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  & svg {
    width: 23px;
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
  background: var(--cal-highlight) !important;
  color: var(--cal-accent) !important;
`;

export const fadeInKeyframes = keyframes`
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
`;
