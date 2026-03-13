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
