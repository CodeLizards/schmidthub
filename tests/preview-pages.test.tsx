import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PreviewPage from "@/app/[...preview]/page";
import EntryPage from "@/app/portfolio/[id]/page";

vi.mock("next/navigation", () => ({
  notFound: () => { throw new Error("NEXT_NOT_FOUND"); },
}));

// Resolve these simple page functions before rendering. This tests their data
// selection and returned content, not Next.js async rendering or HTTP routing.
describe("Preview page contracts", () => {
  it("clearly identifies unbuilt destinations as a POC", async () => {
    render(await PreviewPage({ params: Promise.resolve({ preview: ["dashboard"] }) }));
    expect(screen.getByRole("heading", { level: 1, name: "Your dashboard" })).toBeVisible();
    expect(screen.getByText(/Accounts, submissions, and downloads are not enabled/)).toBeVisible();
    expect(screen.getByRole("link", { name: /Explore the wireframes/ })).toHaveAttribute("href", "https://ship-wireframes-v5.netlify.app/");
    expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute("href", "/");
  });

  it("rejects unknown destinations", async () => {
    await expect(PreviewPage({ params: Promise.resolve({ preview: ["not-a-ship-page"] }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("selects the requested entry without implying files can be downloaded", async () => {
    render(await EntryPage({ params: Promise.resolve({ id: "SH-2024-0803" }) }));
    expect(screen.getByRole("heading", { level: 1, name: "Global Coral Reef Bleaching Dataset 2024" })).toBeVisible();
    expect(screen.getByText(/Satellite-derived thermal stress/)).toBeVisible();
    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("button", { name: "Download / Access" })).toBeDisabled();
    expect(screen.queryByRole("link", { name: /download/i })).not.toBeInTheDocument();
  });

  it("rejects an unknown entry ID", async () => {
    await expect(EntryPage({ params: Promise.resolve({ id: "missing-entry" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("shows related entries for a featured card", async () => {
    render(await EntryPage({ params: Promise.resolve({ id: "SH-2024-0801" }) }));
    const related = screen.getByRole("region", { name: "Related entries" });
    expect(within(related).getAllByRole("link")[0]).toHaveAttribute("href", "/portfolio/SH-2024-0808");
  });
});
