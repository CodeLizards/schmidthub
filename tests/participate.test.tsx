import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SubmitPage from "@/app/submit/page";
import SignUpPage from "@/app/sign-up/page";
import { Hero } from "@/components/marketing/hero";
import PortfolioPage from "@/app/portfolio/page";

describe("Landing paths", () => {
  it("routes the license choices to filtered portfolio views", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Get started/ })).toHaveAttribute("href", "/submit");
    expect(screen.getByRole("link", { name: /Open Licenses/ })).toHaveAttribute("href", "/portfolio?licenseGroup=open");
    expect(screen.getByRole("link", { name: /Free Academic/ })).toHaveAttribute("href", "/portfolio?licenseGroup=academic");
    expect(screen.getByRole("link", { name: /Commercial Licenses/ })).toHaveAttribute("href", "/portfolio?licenseGroup=commercial");
  });

  it("offers the gateway and marks unavailable account actions", () => {
    render(<SubmitPage />);
    expect(screen.getByRole("heading", { name: "Request a submitter account" })).toBeVisible();
    expect(screen.getByRole("link", { name: /Request to join/ })).toHaveAttribute("href", "/sign-up");
    expect(screen.getByRole("link", { name: /submission criteria/ })).toHaveAttribute("href", "/submission-criteria");
    expect(screen.getByRole("button", { name: /Continue/ })).toBeDisabled();
  });

  it("does not imply the interest request can be submitted", () => {
    render(<SignUpPage />);
    expect(screen.getByRole("heading", { name: "Register Your Interest" })).toBeVisible();
    expect(screen.getByRole("button", { name: /Submit interest/ })).toBeDisabled();
    expect(screen.getByText(/Your details are not sent or saved/)).toBeVisible();
  });

  it("applies each landing license family to the portfolio page", async () => {
    const { unmount } = render(await PortfolioPage({ searchParams: Promise.resolve({ licenseGroup: "academic" }) }));
    expect(screen.getByRole("status")).toHaveTextContent("3 sample entries found");
    unmount();
    render(await PortfolioPage({ searchParams: Promise.resolve({ licenseGroup: "commercial" }) }));
    expect(screen.getByRole("status")).toHaveTextContent("2 sample entries found");
  });

  it("restores a customized license selection from the URL", async () => {
    render(await PortfolioPage({ searchParams: Promise.resolve({ licenseGroup: "open", license: ["MIT", "CC BY 4.0"] }) }));
    expect(screen.getByRole("status")).toHaveTextContent("5 sample entries found");
    expect(screen.queryByRole("button", { name: "Remove Apache 2.0 filter" })).not.toBeInTheDocument();
  });
});
