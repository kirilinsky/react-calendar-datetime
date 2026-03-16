import { THEMES_DATA, THEME_MAP } from "@/themes/themes";
import { CSSProperties } from "react";

export const getThemeVariables = (themeKey: string): CSSProperties => {
  const values = THEMES_DATA[themeKey] || THEMES_DATA.paper;

  return values.reduce(
    (acc, value, i) => {
      const key = THEME_MAP[i];
      if (key) {
        acc[`--c-${key}` as any] = value;
      }
      return acc;
    },
    {} as Record<string, string>,
  ) as CSSProperties;
};
