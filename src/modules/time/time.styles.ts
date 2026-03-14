import { css } from "goober";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  gap: 3px;
  background: var(--cal-backdrop);
`;

export const timeSelectionIndicator = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40px;
  background: var(--cal-highlight);
  border-radius: 8px;
  z-index: 0;
  pointer-events: none;
`;

export const column = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const separator = css`
  font-size: 20px;
  font-weight: 700;
  color: var(--cal-color-text);
  margin-top: -4px;
  z-index: 1;
`;

export const cell = css`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  color: var(--cal-color-text);
`;

export const activeCell = css`
  color: var(--cal-accent);
`;
