import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import MainContentContainer from "./MainContentContainer";
import { useSidebar } from "../SidebarProvider/hooks";
import * as useMediaQueryModule from "@mui/material/useMediaQuery";

vi.mock("../SidebarProvider/hooks");
vi.mock("@mui/material/useMediaQuery");
vi.mock("@/lib/constants/ui", () => ({
  default: { sidebarWidth: 250 },
}));

const mockUseSidebar = vi.mocked(useSidebar);
const mockUseMediaQuery = vi.mocked(useMediaQueryModule.default);

describe("MainContentContainer", () => {
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
      <MainContentContainer>
        <div>Test Content</div>
      </MainContentContainer>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("sets marginLeft to 0 when sidebar is expanded", () => {
    mockUseSidebar.mockReturnValue({
      expanded: true,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    const { container } = render(
      <MainContentContainer>
        <div>Content</div>
      </MainContentContainer>
    );

    const stack = container.firstChild;
    expect(stack).toHaveStyle({ marginLeft: "0" });
  });

  it("sets marginLeft to 0 on phone regardless of expanded state", () => {
    mockUseSidebar.mockReturnValue({
      expanded: false,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(true);

    const { container } = render(
      <MainContentContainer>
        <div>Content</div>
      </MainContentContainer>
    );

    const stack = container.firstChild;
    expect(stack).toHaveStyle({ marginLeft: "0" });
  });

  it("sets marginLeft to negative sidebar width when desktop and collapsed", () => {
    mockUseSidebar.mockReturnValue({
      expanded: false,
      toggleSidebar: vi.fn(),
    });
    mockUseMediaQuery.mockReturnValue(false);

    const { container } = render(
      <MainContentContainer>
        <div>Content</div>
      </MainContentContainer>
    );

    const stack = container.firstChild;
    expect(stack).toHaveStyle({ marginLeft: "-250px" });
  });
});
