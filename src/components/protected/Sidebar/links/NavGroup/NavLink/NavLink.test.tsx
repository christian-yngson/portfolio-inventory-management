import { describe, it, expect, vi, MockedFunction } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavLink from "./NavLink";
import useIsActive from "./hooks/useIsActive";
import useNavigate from "./hooks/useNavigate/useNavigate";

vi.mock("./hooks/useIsActive", () => ({
  default: vi.fn(),
}));
const mockedUseIsActive = useIsActive as MockedFunction<typeof useIsActive>;

vi.mock("./hooks/useNavigate/useNavigate", () => ({
  default: vi.fn(),
}));
const mockedUseNavigate = useNavigate as MockedFunction<typeof useNavigate>;

describe("NavLink", () => {
  const mockIcon = <span data-testid="test-icon">Icon</span>;
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseNavigate.mockReturnValue(mockNavigate);
  });

  it("renders label and icon", () => {
    mockedUseIsActive.mockReturnValue(false);

    render(<NavLink label="Dashboard" route="/dashboard" icon={mockIcon} />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("sets aria-current to page when active", () => {
    mockedUseIsActive.mockReturnValue(true);

    render(<NavLink label="Dashboard" route="/dashboard" icon={mockIcon} />);

    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "page");
  });

  it("does not set aria-current when inactive", () => {
    mockedUseIsActive.mockReturnValue(false);

    render(<NavLink label="Dashboard" route="/dashboard" icon={mockIcon} />);

    expect(screen.getByRole("button")).not.toHaveAttribute("aria-current");
  });

  it("calls onClick handler when clicked", async () => {
    mockedUseIsActive.mockReturnValue(false);
    const user = userEvent.setup();

    render(<NavLink label="Dashboard" route="/dashboard" icon={mockIcon} />);

    await user.click(screen.getByRole("button"));
    expect(mockNavigate).toHaveBeenCalled();
  });

  it("passes route to useIsActive hook", () => {
    mockedUseIsActive.mockReturnValue(false);
    const testRoute = "/settings";

    render(<NavLink label="Settings" route={testRoute} icon={mockIcon} />);

    expect(useIsActive).toHaveBeenCalledWith(testRoute);
  });

  it("passes route to useNavigate hook", () => {
    mockedUseIsActive.mockReturnValue(false);
    const testRoute = "/settings";

    render(<NavLink label="Settings" route={testRoute} icon={mockIcon} />);

    expect(useNavigate).toHaveBeenCalledWith(testRoute);
  });
});
