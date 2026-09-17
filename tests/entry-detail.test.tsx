import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { EntryCard } from "@/components/marketing/entry-card";
import { EntryDetail } from "@/components/marketing/entry-detail";
import { PORTFOLIO_ENTRIES } from "@/lib/content";

const neural = PORTFOLIO_ENTRIES.find((entry) => entry.id === "SH-2024-0801")!;
const battery = PORTFOLIO_ENTRIES.find((entry) => entry.id === "SH-2024-0812")!;

describe("IP entry detail", () => {
  it("shows entry-specific details and changes tabs, gallery figures, and related links", async () => {
    const user = userEvent.setup();
    render(<EntryDetail entry={neural} related={[battery]} />);

    expect(screen.getByRole("heading", { level: 1, name: neural.title })).toBeVisible();
    expect(screen.getByText(/multi-channel electrode array/)).toBeVisible();
    expect(screen.getByRole("button", { name: "Download / Access" })).toBeDisabled();
    expect(screen.getByRole("link", { name: battery.title })).toHaveAttribute("href", `/portfolio/${battery.id}`);

    await user.click(screen.getByRole("button", { name: "View figure 2" }));
    expect(screen.getByRole("button", { name: "View figure 2" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByText("Figure 2").length).toBeGreaterThan(1);

    await user.click(screen.getByRole("tab", { name: "Inventors" }));
    expect(screen.getByText("Dr. Anya Kowalski")).toBeVisible();
    expect(screen.queryByText(/multi-channel electrode array/)).not.toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Licensing" }));
    expect(within(screen.getByRole("tabpanel")).getByText(/Full terms are unavailable/)).toBeVisible();

    await user.click(screen.getByRole("tab", { name: "Attachments" }));
    expect(screen.getByText("Neural_Interface_Patent_Draft.pdf")).toBeVisible();
    expect(screen.getByText("Electrode_Array_CAD_Files.zip")).toBeVisible();
    expect(screen.getByText(/Files cannot be accessed/)).toBeVisible();
  });

  it("uses each card's own description and keeps unknown sample data explicit", async () => {
    const user = userEvent.setup();
    render(<EntryDetail entry={battery} related={[]} />);
    expect(screen.getByText(battery.description)).toBeVisible();
    expect(screen.queryByText(/adaptive neural interface designed/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contact IP holder" })).toBeDisabled();
    expect(screen.getByText("SH-2024-0812")).toBeVisible();

    await user.click(screen.getByRole("tab", { name: "Inventors" }));
    expect(screen.getByText(/Inventor or author details are not available/)).toBeVisible();
    await user.click(screen.getByRole("tab", { name: "Attachments" }));
    expect(screen.getByText("Sample document 1")).toBeVisible();
  });

  it("supports keyboard navigation between tabs", async () => {
    const user = userEvent.setup();
    render(<EntryDetail entry={neural} related={[]} />);
    screen.getByRole("tab", { name: "Description" }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Inventors" })).toHaveFocus();
    expect(screen.getByRole("tab", { name: "Inventors" })).toHaveAttribute("aria-selected", "true");
  });
});

it("makes the card a detail link while keeping tag filters separate", async () => {
  const user = userEvent.setup();
  const onToggleTag = vi.fn();
  render(<ul><EntryCard entry={neural} selectedTags={new Set()} onToggleTag={onToggleTag} /></ul>);
  const card = screen.getByRole("listitem");
  const link = within(card).getByRole("link", { name: neural.title });
  const tag = within(card).getByRole("button", { name: "neuroscience" });
  expect(link).toHaveAttribute("href", `/portfolio/${neural.id}`);
  expect(link.contains(tag)).toBe(false);
  await user.click(tag);
  expect(onToggleTag).toHaveBeenCalledWith("neuroscience");
});
