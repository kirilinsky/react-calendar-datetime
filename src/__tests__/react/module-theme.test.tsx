import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { presetToday } from "@/core/preset-engine";
import { CalendarDays } from "@/modules/days/CalendarDays";
import { CalendarPresets } from "@/modules/presets/CalendarPresets";
import { CalendarToolbar } from "@/modules/toolbar/CalendarToolbar";
import { CalendarYearsTrack } from "@/modules/years-track/CalendarYearsTrack";
import { Calendar } from "@/react/calendar";
import { createTheme } from "@/styles/theme-tokens";
import { buildConfig, D } from "../fixtures/builders";

const family = createTheme({
  accent: "#14b8a6",
  light: { backdrop: "#ffffff" },
  dark: { backdrop: "#111111" },
});

function setup(ui: ReactNode) {
  return render(
    <Calendar
      config={buildConfig({ mode: "single" })}
      initialView={D(2026, 6, 1)}
    >
      {ui}
    </Calendar>,
  );
}

const days = (c: HTMLElement) =>
  c.querySelector<HTMLElement>("[data-dateforge-days]");

describe("per-module theme", () => {
  it("a built-in name rides on data-theme, with no inline vars", () => {
    const { container } = setup(<CalendarDays theme="meadow" />);
    const grid = days(container);
    expect(grid?.getAttribute("data-theme")).toBe("meadow");
    expect(grid?.style.getPropertyValue("--c-accent")).toBe("");
  });

  it("a createTheme object becomes inline light-dark vars (no data-theme)", () => {
    const { container } = setup(<CalendarDays theme={family} />);
    const grid = days(container);
    expect(grid?.getAttribute("data-theme")).toBeNull();
    expect(grid?.style.getPropertyValue("--c-accent")).toBe("#14b8a6");
    expect(grid?.style.getPropertyValue("--c-backdrop")).toBe(
      "light-dark(#ffffff, #111111)",
    );
  });

  it("theme vars never displace the module's own layout vars", () => {
    const { container } = setup(<CalendarDays theme={family} col={2} />);
    const grid = days(container);
    // Weekend strip vars and the grid slot are written after the theme spread.
    expect(grid?.style.getPropertyValue("--wknd-a-start")).not.toBe("");
    expect(grid?.style.gridColumn).toBeTruthy();
  });

  it("works on a non-Days module (presets container)", () => {
    const { container } = setup(
      <CalendarPresets theme={family} presets={[presetToday]} />,
    );
    const el = container.querySelector<HTMLElement>("[data-dateforge-presets]");
    expect(el?.style.getPropertyValue("--c-accent")).toBe("#14b8a6");
  });

  it("works on the toolbar container", () => {
    const { container } = setup(<CalendarToolbar theme={family} />);
    const el = container.querySelector<HTMLElement>("[data-dateforge-toolbar]");
    expect(el?.style.getPropertyValue("--c-accent")).toBe("#14b8a6");
  });

  it("works on tracks (VirtualTrack container)", () => {
    const { container } = setup(
      <CalendarYearsTrack theme={family} minYear={2020} maxYear={2030} />,
    );
    const el = container.querySelector<HTMLElement>(
      "[data-area='years-track']",
    );
    expect(el?.getAttribute("data-theme")).toBeNull();
    expect(el?.style.getPropertyValue("--c-accent")).toBe("#14b8a6");
  });

  it("tracks still take a built-in name on data-theme", () => {
    const { container } = setup(
      <CalendarYearsTrack theme="meadow" scheme="dark" />,
    );
    const el = container.querySelector<HTMLElement>(
      "[data-area='years-track']",
    );
    expect(el?.getAttribute("data-theme")).toBe("meadow");
    expect(el?.getAttribute("data-scheme")).toBe("dark");
  });

  it("no theme prop leaves the container untouched (inherits the root)", () => {
    const { container } = setup(<CalendarDays />);
    const grid = days(container);
    expect(grid?.getAttribute("data-theme")).toBeNull();
    expect(grid?.style.getPropertyValue("--c-accent")).toBe("");
  });
});
