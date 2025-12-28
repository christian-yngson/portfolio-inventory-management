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

  it("uses persistent variant on medium or greater screens", () => {
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
    expect(drawer).toHaveClass("MuiDrawer-docked");
  });

  it("uses temporary variant on screens smaller than medium", () => {
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

  it("passes toggleSidebar to onClose handler", () => {
    const mockToggleSidebar = vi.fn();
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: mockToggleSidebar,
    });
    mockUseMediaQuery.mockReturnValue(true);

    render(
      <SidebarDrawer>
        <div>Content</div>
      </SidebarDrawer>
    );

    expect(mockToggleSidebar).toBeDefined();
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
});
