import { defineConfig } from "tsdown";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  clean: true,
  minify: true,
  treeshake: true,
  target: "esnext",
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  css: {
    inject: true,
    minify: true,
  },
});
