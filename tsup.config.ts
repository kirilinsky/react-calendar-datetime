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
  esbuildPlugins: [
    {
      name: "minify-css-literals",
      setup(build) {
        build.onLoad({ filter: /\.styles\.ts$/ }, async (args) => {
          const fs = await import("node:fs/promises");
          const source = await fs.readFile(args.path, "utf8");
          const contents = source
            .replace(/\s+/g, " ")
            .replace(/\s*([:;{}])\s*/g, "$1")
            .trim();
          return { contents, loader: "ts" };
        });
      },
    },
  ],
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
