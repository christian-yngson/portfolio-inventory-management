import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NavGroup from "./NavGroup";

vi.mock("./NavLink", () => ({
  default: ({ label, route }: never) => (
    <div data-testid="nav-link">
      {label} - {route}
    </div>
  ),
}));

describe("NavGroup", () => {
  it("renders the group name as ListSubheader", () => {
    const props = {
      id: "test-group",
      groupName: "Main Navigation",
      items: [],
    };

    render(<NavGroup {...props} />);

    expect(screen.getByText("Main Navigation")).toBeInTheDocument();
  });

  it("renders List component with correct aria-labelledby", () => {
    const props = {
      id: "test-id",
      groupName: "Test Group",
      items: [],
    };

    const { container } = render(<NavGroup {...props} />);
    const list = container.querySelector('[aria-labelledby="test-id"]');

    expect(list).toBeInTheDocument();
  });

  it("renders all NavLink items with correct props", () => {
    const props = {
      id: "group-1",
      groupName: "Settings",
      items: [
        { label: "Profile", route: "/profile", icon: "profile-icon" },
        { label: "Preferences", route: "/preferences", icon: "pref-icon" },
      ],
    };

    render(<NavGroup {...props} />);

    const navLinks = screen.getAllByTestId("nav-link");
    expect(navLinks).toHaveLength(2);
    expect(screen.getByText(/Profile/)).toBeInTheDocument();
    expect(screen.getByText(/Preferences/)).toBeInTheDocument();
  });

  it("renders empty list when no items provided", () => {
    const props = {
      id: "empty-group",
      groupName: "Empty Group",
      items: [],
    };

    const { container } = render(<NavGroup {...props} />);
    const navLinks = container.querySelectorAll('[data-testid="nav-link"]');

    expect(navLinks).toHaveLength(0);
  });
});
