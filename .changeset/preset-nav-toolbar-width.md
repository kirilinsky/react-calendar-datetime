---
"@dateforge/react-calendar": patch
---

Fix preset navigation and toolbar width jitter.

- **Presets move the view**: clicking a preset committed the value but left the grid on the month you were already on — the selection landed off-screen. It now navigates to the preset's first date.
- **Month trigger keeps one width**: `CalendarToolbarMonthTrigger` reserved no width at all, so a long month name ("September") resized the button and shoved the rest of the toolbar sideways. Both name variants now reserve their own widest month. The labels' sizers moved off the longest-by-character-count heuristic (character count is not width — every English short month is 3 chars, yet "May" renders wider than "Jan") and their text rides in CSS `content`, so it stays out of `textContent`, DOM queries and the a11y tree.
- Toolbar month text no longer clips descenders (the y in "May", g in "Aug").
- Thinner default toolbar button border (`0.5px`); named appearances that set `--cal-control-border` are unchanged.
