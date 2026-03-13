import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  clean: true,
  minify: true,
  splitting: false,
  sourcemap: false,
  bundle: true,
  skipNodeModulesBundle: true,
  external: ["react", "react-dom", "dayjs", "classnames"],
  injectStyle: true,
  platform: "browser",
  onSuccess: async () => {
    console.log("🚀 Build successful! Dist is clean.");
  },
});
