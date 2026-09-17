import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SiteNav } from "@/components/site/nav";

vi.mock("next/navigation", () => ({ usePathname: () => "/learning-hub" }));

describe("Mobile navigation", () => {
  it("marks the learning hub as the active tab", () => {
    render(<SiteNav />);
    expect(screen.getByRole("link", { name: "IP Learning Hub" })).toHaveAttribute("aria-current", "page");
  });
  it("opens with the keyboard and Escape restores focus to the toggle", async () => {
    const user = userEvent.setup();
    render(<SiteNav />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();

    toggle.focus();
    await user.keyboard("{Enter}");
    const menu = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(menu).toHaveAttribute("id", toggle.getAttribute("aria-controls"));
    within(menu).getByRole("link", { name: "IP Portfolio" }).focus();
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("provides the submission destination and closes after link selection", async () => {
    const user = userEvent.setup();
    render(<SiteNav />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = screen.getByRole("navigation", { name: "Mobile navigation" });
    const submit = within(menu).getByRole("link", { name: "Add your Technology" });
    expect(submit).toHaveAttribute("href", "/submit");
    // JSDOM cannot navigate; prevent only the browser default, not the click handler.
    submit.addEventListener("click", (event) => event.preventDefault());
    await user.click(submit);
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });
});
