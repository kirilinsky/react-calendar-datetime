import { THEME_MAP, THEMES_DATA } from "../themes/themes";
import { writeFileSync } from "fs";
import { defineThemes } from "var-th";

const { toCSS } = defineThemes({
  prefix: "c",
  tokens: THEME_MAP,
  themes: THEMES_DATA,
});

writeFileSync("./src/themes.css", toCSS());
