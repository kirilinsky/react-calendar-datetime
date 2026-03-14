/**
 * Map of theme keys to CSS variable suffixes.
 * This order must strictly match THEMES_DATA arrays.
 * a: accent       (--c-a)
 * b: backdrop     (--c-b)
 * h: highlight    (--c-h)
 * t: tone         (--c-t)
 * c: colorText    (--c-c)
 * s: borderColor  (--c-s) (stroke)
 */
const THEME_MAP = ["a", "b", "h", "t", "c", "s"] as const;

export const THEMES_DATA: Record<string, string[]> = {
  paper: ["#ffffff", "#ffffff", "#1a1a1c", "#f4f4f4", "#1a1a1c", "#f0f0f0"],
  carbon: ["#1a1a1c", "#1a1a1c", "#ffffff", "#2d2d2d", "#f0f0f0", "#333333"],
  cyber: ["#0d0d15", "#07070b", "#00f3ff", "#301649", "#ffffff", "#2a2a4a"],
  phosphor: ["#020602", "#010401", "#76ff03", "#1a1f1a", "#00e676", "#00e676"],
  midnight: ["#141721", "#1e2333", "#3559e0", "#252a3d", "#ffffff", "#2d3246"],
  sandstone: ["#1c1a17", "#24211c", "#e3ae5c", "#332f28", "#fdfbf7", "#3d372e"],
  mintblue: ["#ffffff", "#f8f9fc", "#60d276", "#eaedf4", "#171827", "#eef0f5"],
  larosa: ["#ffffff", "#dbd8e0", "#d65d91", "#e5e1e9", "#2d2a32", "#cfcbd4"],
  snowstorm: ["#ffffff", "#e2e5e9", "#3a60d6", "#eceff4", "#2e3440", "#d8dee9"],
  solar: ["#ffffff", "#d8cf9a", "#a5994b", "#e4dbab", "#433f26", "#c9c08d"],
  dracula: ["#1a0f0f", "#1c1111", "#ff5e5e", "#341d1d", "#ffffff", "#3d2626"],
  comfy: ["#ffffff", "#e9ded5", "#a65d3a", "#f5ece5", "#6e4531", "#dccfbe"],
};

export const getThemeVars = (themeKey: string) => {
  const values = THEMES_DATA[themeKey] || THEMES_DATA[0];
  return values.reduce(
    (acc, value, i) => {
      acc[`--c-${THEME_MAP[i]}`] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
};
