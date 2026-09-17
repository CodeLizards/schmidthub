import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LearningHub } from "@/components/learning/learning-hub";
import InsightPage from "@/app/insights/[slug]/page";
import WhatIsIPPage from "@/app/topics/what-is-ip/page";
import GlossaryPage from "@/app/glossary/page";

vi.mock("next/navigation", () => ({ notFound: () => { throw new Error("NEXT_NOT_FOUND"); }, usePathname: () => "/insights/patents-101-for-researchers" }));

describe("IP Learning Hub", () => {
  it("links the topic cards and six sample resources", () => {
    render(<LearningHub />);
    expect(screen.getByRole("heading", { level: 1, name: "Everything about intellectual property in one place" })).toBeVisible();
    expect(screen.getByRole("link", { name: /What is IP\?/ })).toHaveAttribute("href", "/topics/what-is-ip");
    expect(screen.getByRole("link", { name: /Licensing options/ })).toHaveAttribute("href", "/licensing");
    expect(screen.getByRole("link", { name: /IP Glossary/ })).toHaveAttribute("href", "/glossary");
    expect(screen.getByRole("status")).toHaveTextContent("6 resources");
    expect(screen.getAllByRole("article")).toHaveLength(6);
    expect(within(screen.getAllByRole("article")[0]).getByRole("link")).toHaveAttribute("href", "/insights/ip-licensing-trends-report-2026");
  });

  it("searches on submit and combines category filters", async () => {
    const user = userEvent.setup();
    render(<LearningHub />);
    await user.type(screen.getByRole("searchbox", { name: /Search guides/ }), "patent");
    expect(screen.getByRole("status")).toHaveTextContent("6 resources");
    await user.click(screen.getByRole("button", { name: "Search" }));
    expect(screen.getByRole("status")).toHaveTextContent("1 resource · filtered");
    expect(screen.getByRole("heading", { name: "Patents 101 for researchers" })).toBeVisible();
    await user.click(screen.getByRole("checkbox", { name: "Report" }));
    expect(screen.getByRole("status")).toHaveTextContent("0 resources · filtered");
    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("status")).toHaveTextContent("6 resources");
  });

  it("renders a linked article and rejects unknown resources", async () => {
    render(await InsightPage({ params: Promise.resolve({ slug: "patents-101-for-researchers" }) }));
    expect(screen.getByRole("heading", { level: 1, name: "Patents 101 for researchers" })).toBeVisible();
    expect(screen.getByRole("link", { name: /Back to the IP Learning Hub/ })).toHaveAttribute("href", "/learning-hub");
    await expect(InsightPage({ params: Promise.resolve({ slug: "missing" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("does not recommend an article as its own related resource", async () => {
    render(await InsightPage({ params: Promise.resolve({ slug: "ip-licensing-trends-report-2026" }) }));
    const related = screen.getByRole("region", { name: "Relevant topics" });
    expect(within(related).queryByRole("link", { name: /IP Licensing Trends Report 2026/ })).not.toBeInTheDocument();
    expect(within(related).getByRole("link", { name: /Academic IP Impact Study/ })).toHaveAttribute("href", "/insights/academic-ip-impact-study");
  });

  it("renders the What is IP topic", () => {
    render(<WhatIsIPPage />);
    expect(screen.getByRole("heading", { level: 1, name: "What is Intellectual Property?" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Trade Secrets" })).toBeVisible();
  });

  it("opens all fifteen glossary terms from the hub", () => {
    render(<GlossaryPage />);
    expect(screen.getByRole("heading", { level: 1, name: "IP Glossary" })).toBeVisible();
    expect(screen.getAllByRole("article")).toHaveLength(15);
    expect(screen.getByRole("link", { name: "Licensing" })).toHaveAttribute("href", "#licensing");
  });
});
