import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SidebarToggle from "./SidebarToggle";
import { useSidebar } from "../../SidebarProvider/hooks";

vi.mock("../../SidebarProvider/hooks");
vi.mock("@/components/common", () => ({
  AccessibleLiveRegion: ({ message }: { message: string }) => (
    <div role="status" aria-live="polite">
      {message}
    </div>
  ),
}));

describe("SidebarToggle", () => {
  it("renders button with expand label when sidebar is collapsed", () => {
    vi.mocked(useSidebar).mockReturnValue({
      expanded: false,
      toggleSidebar: vi.fn(),
    });

    render(<SidebarToggle />);
    expect(screen.getByLabelText("expand sidebar")).toBeInTheDocument();
  });

  it("renders button with collapse label when sidebar is expanded", () => {
    vi.mocked(useSidebar).mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });

    render(<SidebarToggle />);
    expect(screen.getByLabelText("collapse sidebar")).toBeInTheDocument();
  });

  it("calls toggleSidebar when button is clicked", async () => {
    const toggleSidebar = vi.fn();
    vi.mocked(useSidebar).mockReturnValue({
      expanded: false,
      toggleSidebar,
    });

    render(<SidebarToggle />);
    await userEvent.click(screen.getByRole("button"));
    expect(toggleSidebar).toHaveBeenCalledOnce();
  });

  it("renders correct aria-expanded attribute", () => {
    vi.mocked(useSidebar).mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });

    render(<SidebarToggle />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("displays correct live region message when expanded", () => {
    vi.mocked(useSidebar).mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });

    render(<SidebarToggle />);
    expect(screen.getByText("Sidebar expanded")).toBeInTheDocument();
  });

  it("displays correct live region message when collapsed", () => {
    vi.mocked(useSidebar).mockReturnValue({
      expanded: false,
      toggleSidebar: vi.fn(),
    });

    render(<SidebarToggle />);
    expect(screen.getByText("Sidebar collapsed")).toBeInTheDocument();
  });
});
