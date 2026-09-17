import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PortfolioCatalog } from "@/components/marketing/portfolio-catalog";
import { SiteFooter } from "@/components/site/footer";

describe("Portfolio catalog", () => {
  it("searches the wireframe samples and clears an empty result", async () => {
    const user = userEvent.setup();
    render(<PortfolioCatalog />);
    expect(screen.getByRole("status")).toHaveTextContent("12 sample entries found");

    await user.type(screen.getByRole("searchbox"), "reef");
    expect(screen.getByRole("status")).toHaveTextContent("2 sample entries found");
    expect(screen.getByRole("link", { name: "Global Coral Reef Bleaching Dataset 2024" })).toBeVisible();

    await user.clear(screen.getByRole("searchbox"));
    await user.type(screen.getByRole("searchbox"), "nothing matches this");
    expect(screen.getByText("No entries match those filters.")).toBeVisible();
    await user.click(screen.getByRole("button", { name: /^Clear all filters$/ }));
    expect(screen.getByRole("status")).toHaveTextContent("12 sample entries found");
    expect(screen.getByRole("searchbox")).toHaveValue("");
  });

  it("combines subject, entity, license, and tag filters", async () => {
    const user = userEvent.setup();
    render(<PortfolioCatalog />);

    await user.click(screen.getByText("Subject Matter"));
    await user.click(screen.getByRole("checkbox", { name: "Data & Computing" }));
    await user.click(screen.getByText("Entity", { exact: true }));
    await user.click(screen.getByRole("checkbox", { name: "Schmidt DataX" }));
    await user.click(screen.getByText("License types"));
    await user.click(screen.getByRole("checkbox", { name: "MIT" }));
    expect(screen.getByRole("status")).toHaveTextContent("1 sample entry found");
    expect(screen.getByRole("link", { name: "Federated Privacy-Preserving ML Framework" })).toBeVisible();

    await user.click(screen.getByText("Tags", { exact: true }));
    await user.click(screen.getByRole("checkbox", { name: "ocean" }));
    expect(screen.getByRole("status")).toHaveTextContent("0 sample entries found");
    await user.click(screen.getByRole("button", { name: "Clear all filters →" }));
    expect(screen.getByRole("status")).toHaveTextContent("12 sample entries found");
  });

  it("sorts alphabetically and switches the view", async () => {
    const user = userEvent.setup();
    render(<PortfolioCatalog />);
    await user.selectOptions(screen.getByRole("combobox", { name: "Sort" }), "az");
    const entries = screen.getByRole("list");
    expect(within(entries).getAllByRole("heading", { level: 3 })[0]).toHaveTextContent("Adaptive Neural Interface");
    await user.click(screen.getByRole("button", { name: "List" }));
    expect(screen.getByRole("button", { name: "List" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Grid" })).toHaveAttribute("aria-pressed", "false");
  });

  it("opens with license family filters from the landing card", async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, "", "/portfolio?licenseGroup=open");
    render(<PortfolioCatalog initialLicenses={["CC BY 4.0", "MIT", "Apache 2.0"]} initialLicenseGroup="open" />);
    expect(screen.getByRole("status")).toHaveTextContent("6 sample entries found");
    expect(screen.getByRole("button", { name: "Remove MIT filter" })).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Remove MIT filter" }));
    expect(screen.getByRole("status")).toHaveTextContent("5 sample entries found");
    expect(window.location.search).toContain("license=CC+BY+4.0");
    expect(window.location.search).not.toContain("MIT");
    await user.click(screen.getByRole("button", { name: "Clear all filters →" }));
    expect(window.location.pathname).toBe("/portfolio");
    expect(window.location.search).toBe("");
  });
});

it("marks legal policies unavailable instead of linking to placeholder pages", () => {
  render(<SiteFooter />);
  expect(screen.getByText("Privacy Policy (unavailable)")).toBeVisible();
  expect(screen.getByText("Terms of Use (unavailable)")).toBeVisible();
  expect(screen.getByText("Cookie Policy (unavailable)")).toBeVisible();
  expect(screen.queryByRole("link", { name: /Privacy Policy|Terms of Use|Cookie Policy/ })).not.toBeInTheDocument();
});
