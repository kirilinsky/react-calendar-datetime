import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: true,
  splitting: true,
  sourcemap: false,
  bundle: true,
  skipNodeModulesBundle: true,
  external: ["react", "react-dom", "dayjs", "clsx"],
  platform: "browser",
  esbuildPlugins: [vanillaExtractPlugin()],
  onSuccess: async () => {
    console.log("🚀 Build successful! Dist is clean.");
  },
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
