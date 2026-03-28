import { THEMES_DATA } from '../themes/themes';
import { writeFileSync } from "fs";
import { defineThemes } from "var-th";

const { toCSS } = defineThemes({
  prefix: "c",
  tokens: ["a", "b", "h", "t", "c", "s", "x"] as const,
  themes: THEMES_DATA,
});

writeFileSync("./src/themes.css", toCSS());
