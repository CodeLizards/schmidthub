import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ResourcesCatalog } from "@/components/resources/resources-catalog";

describe("Resources catalog", () => {
  it("filters the wireframe catalog by topic and search", async () => {
    const user = userEvent.setup();
    render(<ResourcesCatalog />);
    expect(screen.getByRole("status")).toHaveTextContent("19 resources · newest first");
    expect(screen.getAllByRole("article")).toHaveLength(19);

    await user.click(screen.getByRole("button", { name: /Templates 3/ }));
    expect(screen.getByRole("radio", { name: "Template" })).toBeChecked();
    expect(screen.getByRole("status")).toHaveTextContent("3 resources · newest first");

    await user.click(screen.getByRole("radio", { name: "Reference" }));
    expect(screen.getByRole("status")).toHaveTextContent("4 resources · newest first");
    await user.type(screen.getByRole("searchbox", { name: /Search templates/ }), "Google");
    await user.click(screen.getByRole("button", { name: "Search" }));
    expect(screen.getByRole("status")).toHaveTextContent("1 resource · newest first");
    expect(screen.getByRole("heading", { name: "Google Patents" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Visit Site: Google Patents" })).toHaveAttribute("href", "https://patents.google.com/");
  });

  it("explains when a wireframe download has no file yet", async () => {
    const user = userEvent.setup();
    render(<ResourcesCatalog />);
    await user.click(screen.getByRole("button", { name: "Download: IP Submission — starter template" }));
    expect(screen.getAllByRole("status").at(-1)).toHaveTextContent("unavailable for download or viewing in this preview");
    await user.click(screen.getByRole("button", { name: "Dismiss message" }));
    expect(screen.queryByText(/is unavailable for download/)).not.toBeInTheDocument();
  });

  it("clears both search and category after an empty result", async () => {
    const user = userEvent.setup();
    render(<ResourcesCatalog />);
    await user.click(screen.getByRole("radio", { name: "Template" }));
    await user.type(screen.getByRole("searchbox"), "Google");
    await user.click(screen.getByRole("button", { name: "Search" }));
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.getByRole("radio", { name: "All" })).toBeChecked();
    expect(screen.getAllByRole("article")).toHaveLength(19);
  });
});
