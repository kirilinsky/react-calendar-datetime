import React from "react";

const Icon: React.FC<{ d: string; size?: number }> = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

export const Left = () => (
  <Icon d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
);
export const Right = () => (
  <Icon d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
);
export const Up = () => (
  <Icon d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
);
export const Down = () => (
  <Icon d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
);
