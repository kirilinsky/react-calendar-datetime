import { flexCenter, textLg } from "@/styles/shared.styles";
import { css } from "goober";

export const container = css`
  ${flexCenter}
  position: relative;
  padding: 8px 6px;
  gap: 3px;
  background: var(--c-b);
`;

export const timeSelectionIndicator = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40px;
  background: var(--c-h);
  border-radius: 8px;
  z-index: 0;
  pointer-events: none;
  box-shadow: 0 0 10px var(--c-x);
`;

export const column = css`
  ${flexCenter}
  flex-direction: column;
  z-index: 1;
`;

export const separator = css`
  ${textLg}
  font-weight: 700;
  color: var(--c-a);
  margin-top: -5px;
  z-index: 1;
`;

export const cell = css`
  ${flexCenter}
  height: 32px;
  cursor: pointer;
  user-select: none;
  color: var(--c-c);
  transition: transform 0.1s ease-out;
  &:active {
    transform: scale(1.14);
  }
`;

export const active = css`
  color: var(--c-a) !important;
`;
