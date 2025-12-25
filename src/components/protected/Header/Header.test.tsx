import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

vi.mock("./SidebarToggle", () => ({
  default: () => <div data-testid="sidebar-toggle">SidebarToggle</div>,
}));

vi.mock("./HeaderLabel", () => ({
  default: () => <div data-testid="header-label">HeaderLabel</div>,
}));

vi.mock("./HeaderIconButtons", () => ({
  default: () => <div data-testid="header-icon-buttons">HeaderIconButtons</div>,
}));

vi.mock("./AvatarButton", () => ({
  default: () => <div data-testid="avatar-button">AvatarButton</div>,
}));

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders SidebarToggle component", () => {
    render(<Header />);
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
  });

  it("renders HeaderLabel component", () => {
    render(<Header />);
    expect(screen.getByTestId("header-label")).toBeInTheDocument();
  });

  it("renders HeaderIconButtons component", () => {
    render(<Header />);
    expect(screen.getByTestId("header-icon-buttons")).toBeInTheDocument();
  });

  it("renders AvatarButton component", () => {
    render(<Header />);
    expect(screen.getByTestId("avatar-button")).toBeInTheDocument();
  });

  it("renders all child components in correct order", () => {
    const { container } = render(<Header />);
    const toolbar = container.querySelector("[class*='MuiToolbar']");
    const children = toolbar?.children;
    expect(children?.length).toBe(4);
  });
});
