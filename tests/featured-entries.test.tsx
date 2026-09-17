import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FeaturedEntries } from "@/components/marketing/featured-entries";

const neuralTitle = "Adaptive Neural Interface for Prosthetic Control";
const coralTitle = "Global Coral Reef Bleaching Dataset 2024";

describe("Featured entries", () => {
  it("filters by type and announces the matching results", async () => {
    const user = userEvent.setup();
    render(<FeaturedEntries />);
    expect(screen.getByRole("status")).toHaveTextContent("6 of 6 entries shown");

    const patents = screen.getByRole("button", { name: "Patents" });
    await user.click(patents);

    expect(patents).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("status")).toHaveTextContent("1 of 6 entries shown");
    expect(screen.getByRole("link", { name: neuralTitle })).toHaveAttribute("href", "/portfolio/SH-2024-0801");
    expect(screen.queryByRole("link", { name: coralTitle })).not.toBeInTheDocument();
  });

  it("combines type and tag filters and recovers from an empty result", async () => {
    const user = userEvent.setup();
    render(<FeaturedEntries />);
    await user.click(screen.getByRole("button", { name: "neuroscience" }));
    await user.click(screen.getByRole("button", { name: "Scientific Datasets" }));

    expect(screen.getByRole("status")).toHaveTextContent("0 of 6 entries shown");
    expect(screen.getByText("No entries match those filters.")).toBeVisible();
    expect(screen.queryByRole("link", { name: neuralTitle })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear all filters" }));
    expect(screen.getByRole("status")).toHaveTextContent("6 of 6 entries shown");
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("link", { name: coralTitle })).toBeVisible();
    expect(screen.queryByRole("button", { name: "Clear all" })).not.toBeInTheDocument();
  });

  it("requires every selected tag and allows removing a selected tag", async () => {
    const user = userEvent.setup();
    render(<FeaturedEntries />);
    const entries = screen.getByRole("list");
    await user.click(within(entries).getAllByRole("button", { name: "climate" })[0]);
    expect(screen.getByRole("status")).toHaveTextContent("2 of 6 entries shown");
    await user.click(within(entries).getByRole("button", { name: "marine" }));
    expect(screen.getByRole("status")).toHaveTextContent("1 of 6 entries shown");
    expect(screen.getByRole("link", { name: coralTitle })).toBeVisible();
    expect(screen.queryByRole("link", { name: "ClimateTrace Attribution Engine" })).not.toBeInTheDocument();

    await user.click(within(entries).getByRole("button", { name: "marine" }));
    expect(screen.getByRole("status")).toHaveTextContent("2 of 6 entries shown");
  });
});
