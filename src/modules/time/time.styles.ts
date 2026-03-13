import { css } from "goober";
import { interactiveBase } from "@/styles/shared.styles";

export const container = css`
  grid-area: TIME;
  display: flex;
  padding-left: 1px;
  border-left: 1px solid var(--cal-border-color);
`;

export const column = css`
  flex: 1;
  width: 50%;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  background: var(--cal-backdrop);
`;

export const cell = css`
  ${interactiveBase}

  &:is(:first-child, :last-child) {
    background: var(--cal-accent);
  }

  &:nth-child(4) {
    position: relative;
    background: var(--cal-highlight);
    color: var(--cal-accent);
    cursor: default;
    &:hover {
      background: var(--cal-highlight);
    }
  }
`;
