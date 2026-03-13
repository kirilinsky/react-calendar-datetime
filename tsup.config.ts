import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: true,
  splitting: true,
  sourcemap: false,
  bundle: true,
  external: ["react", "react-dom", "dayjs"],
  platform: "browser",
  treeshake: true,
  onSuccess: async () => {
    console.log("🚀 Build successful! Goober runtime is injected.");
  },
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
