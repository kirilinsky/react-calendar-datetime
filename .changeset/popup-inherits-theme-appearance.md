---
"@dateforge/react-calendar": patch
---

Fix month/year popups not following the calendar's theme and appearance.

A portalled popup lives in `document.body`, so it inherits nothing from the root shell — and two things were missing there:

- The **appearance bridge** (`--cal-*` → `--c-day-radius` / `--c-radius` / `--c-gap` / `--c-day-gap` / `--c-pad`) and the type stack were declared on `[data-dateforge-root]` only. Every module inside a picker fell back to its literal defaults, so radii, gaps and padding ignored the appearance and the font stack differed from the calendar's (the popup read a `--c-font` token nothing ever set). They now cover `[data-dateforge-popup]` too.
- An appearance set on a **DOM ancestor** rather than the `appearance` prop never reached the popup at all, since theme-scope is a React context. The popup now copies the appearance contract off its anchor, which catches both routes; an explicit prop still wins.

Default popup corner radius follows `--c-radius` (12px) instead of its own 10px fallback, matching the root.

Guarded by the first play-function story (`Toolbar / PopupMatchesRootAppearance`) — it asserts the popup's computed shape vars equal the root's, and only means anything in the browser project, since happy-dom computes no cascade.
