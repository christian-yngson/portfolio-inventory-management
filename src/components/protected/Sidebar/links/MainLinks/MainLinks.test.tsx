import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MainLinks from "./MainLinks";
import NavGroup from "../NavGroup";

type NavGroupType = Parameters<typeof NavGroup>[0];
vi.mock("../NavGroup", () => ({
  default: ({ id, groupName, items }: NavGroupType) => (
    <div data-testid="nav-group" data-id={id} data-group-name={groupName}>
      {items.map((item) => (
        <div key={item.label} data-testid="nav-item">
          {item.label}
        </div>
      ))}
    </div>
  ),
}));

vi.mock("@/lib/constants/routes", () => ({
  default: {
    protected: {
      dashboard: {
        root: () => "/dashboard",
      },
    },
  },
}));

describe("MainLinks", () => {
  it("renders NavGroup with correct props", () => {
    render(<MainLinks />);
    const navGroup = screen.getByTestId("nav-group");
    expect(navGroup).toBeInTheDocument();
    expect(navGroup).toHaveAttribute("data-id", "main-links");
    expect(navGroup).toHaveAttribute("data-group-name", "Main");
  });

  it("renders Dashboard item with correct label", () => {
    render(<MainLinks />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("passes single item to NavGroup", () => {
    render(<MainLinks />);
    const navItems = screen.getAllByTestId("nav-item");
    expect(navItems).toHaveLength(1);
  });
});
