import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MainContentContainer from "./MainContentContainer";
import * as SidebarHooks from "../SidebarProvider/hooks";

vi.mock("../SidebarProvider/hooks");

describe("MainContentContainer", () => {
  it("renders children correctly", () => {
    vi.mocked(SidebarHooks.useSidebar).mockReturnValue({
      expanded: true,
    } as never);
    render(<MainContentContainer>Test Content</MainContentContainer>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("sets marginLeft to 0 when sidebar is expanded", () => {
    vi.mocked(SidebarHooks.useSidebar).mockReturnValue({
      expanded: true,
    } as never);
    const { container } = render(
      <MainContentContainer>Content</MainContentContainer>
    );
    const stack = container.querySelector("[class*='MuiStack']");
    expect(stack).toHaveStyle({ marginLeft: "0" });
  });

  it("sets negative marginLeft when sidebar is collapsed", () => {
    vi.mocked(SidebarHooks.useSidebar).mockReturnValue({
      expanded: false,
    } as never);
    const { container } = render(
      <MainContentContainer>Content</MainContentContainer>
    );
    const stack = container.querySelector("[class*='MuiStack']") as HTMLElement;
    const computed = getComputedStyle(stack);
    expect(computed.marginLeft).toMatch(/-\d+px/);
  });

  it("applies transition style", () => {
    vi.mocked(SidebarHooks.useSidebar).mockReturnValue({
      expanded: true,
    } as never);
    const { container } = render(
      <MainContentContainer>Content</MainContentContainer>
    );
    const stack = container.querySelector("[class*='MuiStack']");
    expect(stack).toHaveStyle({ transition: "margin-left 0.3s" });
  });
});
