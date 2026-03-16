/**
 * Map of theme keys to CSS variable suffixes.
 * This order must strictly match THEMES_DATA arrays.
 * a: accent (--c-a)
 * b: backdrop (--c-b)
 * h: highlight (--c-h)
 * t: tone (--c-t)
 * c: colorText (--c-c)
 * s: borderColor (--c-s) (stroke)
 * x: boxShadow (--c-x)
 */
const THEME_MAP = ["a", "b", "h", "t", "c", "s", "x"] as const;

const W = "#ffffff";
const B = "#1a1a1c";

export const THEMES_DATA: Record<string, string[]> = {
  paper: ["#ffffff", W, B, "#f4f4f4", B, "#f0f0f0", "#0001"],
  carbon: [B, B, W, "#2d2d2d", "#f0f0f0", "#333333", "#fff1"],
  cyber: [
    "#0d0d15",
    "#07070b",
    "#00f3ff",
    "#301649",
    W,
    "#303050",
    "#00f3ff33",
  ],
  phosphor: [
    "#020602",
    "#010401",
    "#76ff03",
    "#1a1f1a",
    "#00e676",
    "#00994d",
    "#74ff031b",
  ],
  midnight: [
    "#141721",
    "#1a1e2b",
    "#3559e0",
    "#212638",
    W,
    "#444b68",
    "#3559e033",
  ],
  sandstone: [
    "#1c1a17",
    "#1f1c18",
    "#e3ae5c",
    "#2f2b24",
    "#fdfbf7",
    "#5d5448",
    "#0000002a",
  ],
  mintblue: [
    W,
    "#f8f9fc",
    "#60d276",
    "#eaedf4",
    "#171827",
    "#b8c0d1",
    "#00000a1a",
  ],
  larosa: [
    W,
    "#dbd8e0",
    "#d65d91",
    "#e5e1e9",
    "#2d2a32",
    "#a8a1af",
    "#d4639422",
  ],
  snowstorm: [
    W,
    "#e2e5e9",
    "#3a60d6",
    "#eceff4",
    "#212630",
    "#acb9cb",
    "#04042c25",
  ],
  solar: [
    W,
    "#d8cf9a",
    "#e67e22",
    "#e4dbab",
    "#2b2718",
    "#9d9365",
    "#2e28212e",
  ],
  dracula: [
    "#1a0f0f",
    "#1c1111",
    "#ff5e5e",
    "#341d1d",
    W,
    "#614040",
    "#ff5e5e20",
  ],
  comfy: [
    W,
    "#e9ded5",
    "#a65d3a",
    "#f5ece5",
    "#6e4531",
    "#b49e8a",
    "#6e45311a",
  ],
  neonlight: [
    "#fcfcf5",
    "#f7f8f9",
    "#80ec27",
    "#e9f3eb",
    "#1f2937",
    "#bed3c3",
    "#80ec2722",
  ],
  temporal: [
    "#122127",
    "#14252e",
    "#27d1f4",
    "#242f52",
    "#f1f5f9",
    "#6366f1",
    "#27d1f433",
  ],
};

export const getThemeVars = (themeKey: string) => {
  const values = THEMES_DATA[themeKey] || THEMES_DATA.paper;
  return values.reduce(
    (acc, value, i) => {
      acc[`--c-${THEME_MAP[i]}`] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
};
