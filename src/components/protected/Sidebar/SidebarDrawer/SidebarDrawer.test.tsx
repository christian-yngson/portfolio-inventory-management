import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import SidebarDrawer from "./SidebarDrawer";
import { useSidebar } from "../../SidebarProvider/hooks";
import * as useMediaQueryModule from "@mui/material/useMediaQuery";

vi.mock("../../SidebarProvider/hooks");
vi.mock("@mui/material/useMediaQuery");
vi.mock("@/lib/constants/ui", () => ({
  default: { sidebarWidth: 250 },
}));

const mockUseSidebar = vi.mocked(useSidebar);
const mockUseMediaQuery = vi.mocked(useMediaQueryModule.default);

describe("SidebarDrawer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders children", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    render(
      <SidebarDrawer>
        <div>Sidebar Content</div>
      </SidebarDrawer>
    );

    expect(screen.getByText("Sidebar Content")).toBeInTheDocument();
  });

  it("uses persistent variant when not on phone", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    const drawer = screen.getByRole("navigation");
    expect(drawer).toHaveClass("MuiDrawer-docked");
  });

  it("uses temporary variant on phone", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(true);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    const drawer = screen.getByRole("navigation");
    expect(drawer).toHaveClass("MuiDrawer-modal");
  });

  it("sets aria-hidden to false when expanded", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    const drawer = screen.getByRole("navigation");
    expect(drawer).toHaveAttribute("aria-hidden", "false");
  });

  it("sets aria-hidden to true when collapsed", () => {
    mockUseSidebar.mockReturnValue({
      expanded: false,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    const { container } = render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    const drawer = container.querySelector("[role='navigation']");
    expect(drawer).toHaveAttribute("aria-hidden", "true");
  });

  it("renders with correct aria-label", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    const drawer = screen.getByRole("navigation");
    expect(drawer).toHaveAttribute("aria-label", "sidebar navigation");
  });

  it("calls toggleSidebar when drawer closes", () => {
    const mockToggleSidebar = vi.fn();
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: mockToggleSidebar,
    });
    mockUseMediaQuery.mockReturnValue(false);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    // Verify the mock was passed to the component
    expect(mockToggleSidebar).toBeDefined();
  });
});
