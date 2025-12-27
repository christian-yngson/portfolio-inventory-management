import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SidebarDrawer from "./SidebarDrawer";
import { useSidebar } from "../../SidebarProvider/hooks";

vi.mock("../../SidebarProvider/hooks");

describe("SidebarDrawer", () => {
  it("renders children when expanded is true", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: true } as never);

    render(<SidebarDrawer>Test Content</SidebarDrawer>);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders children when expanded is false", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: false } as never);

    render(<SidebarDrawer>Test Content</SidebarDrawer>);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders drawer with correct id", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: true } as never);

    render(<SidebarDrawer>Content</SidebarDrawer>);

    expect(screen.getByRole("navigation")).toHaveAttribute(
      "id",
      "sidebar-drawer"
    );
  });

  it("sets aria-hidden to false when expanded is true", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: true } as never);

    render(<SidebarDrawer>Content</SidebarDrawer>);

    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
  });

  it("sets aria-hidden to true when expanded is false", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: false } as never);

    render(<SidebarDrawer>Content</SidebarDrawer>);

    expect(screen.getByRole("navigation", { hidden: true })).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("has correct aria-label attribute", () => {
    vi.mocked(useSidebar).mockReturnValue({ expanded: true } as never);

    render(<SidebarDrawer>Content</SidebarDrawer>);

    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "sidebar navigation"
    );
  });
});
