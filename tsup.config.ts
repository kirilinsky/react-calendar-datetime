import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: "terser",
  terserOptions: {
    compress: {
      passes: 3,
      unsafe: false,
      pure_getters: true,
      drop_console: true,
    },
    mangle: {
      toplevel: true,
    },
  }, 
  esbuildOptions(options) {
    options.minifyIdentifiers = true;
    options.minifySyntax = true;
    options.minifyWhitespace = true;
  },
  splitting: false,
  sourcemap: false,
  bundle: true,
  external: ["react", "react-dom"],
  noExternal: ["goober"],
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
