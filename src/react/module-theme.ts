import { type CSSProperties, useMemo } from "react";
import type { ThemeFamily } from "../styles/theme-tokens";
import { resolveThemeScope } from "./theme-scope";

/**
 * Per-module theme override: a built-in family name (rides on `data-theme`,
 * resolved by the generated `cal-themes` CSS) or a `createTheme` token object
 * (applied as inline `--c-*` vars, so it needs no generated stylesheet).
 *
 * Same union as the root `Calendar theme` prop — a module can therefore be
 * handed the very object the root uses, or a different one to stand out.
 */
export type ModuleTheme = string | ThemeFamily;

export type ResolvedModuleTheme = {
  /** `data-theme` value — set only for built-in names. */
  dataTheme?: string;
  /** Inline `--c-*` vars — set only for `createTheme` objects. */
  themeStyle?: CSSProperties;
};

const NONE: ResolvedModuleTheme = Object.freeze({});

/**
 * Resolve a module's `theme` prop into what its container needs to render.
 * Token objects produce `light-dark()` vars, so a custom family flips with the
 * active `color-scheme` exactly like a built-in — no JS mode tracking.
 *
 * Spread `themeStyle` FIRST in the container's `style` so the module's own
 * layout vars (grid slot, strip offsets) always win over theme colors.
 */
export function useModuleTheme(theme?: ModuleTheme): ResolvedModuleTheme {
  return useMemo(() => {
    if (theme === undefined) return NONE;
    const { dataTheme, style } = resolveThemeScope(theme);
    return { dataTheme, themeStyle: style as CSSProperties | undefined };
  }, [theme]);
}
