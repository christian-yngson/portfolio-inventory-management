import { describe, it, expect, vi } from "vitest";
import useNavigate from "./useNavigate";
import mockRouter from "@/__tests__/utils/createMockRouter";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("useNavigate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return a function", () => {
    const navigate = useNavigate("/test");
    expect(typeof navigate).toBe("function");
  });

  it("should call router.push with the provided route", () => {
    const mockPush = vi.fn();
    mockRouter({ push: mockPush });

    const route = "/dashboard";
    const navigate = useNavigate(route);
    navigate();

    expect(mockPush).toHaveBeenCalledWith(route);
    expect(mockPush).toHaveBeenCalledTimes(1);
  });

  it("should push different routes correctly", () => {
    const mockPush = vi.fn();
    mockRouter({ push: mockPush });

    const route1 = "/home";
    const navigate1 = useNavigate(route1);
    navigate1();

    const route2 = "/settings";
    const navigate2 = useNavigate(route2);
    navigate2();

    expect(mockPush).toHaveBeenNthCalledWith(1, route1);
    expect(mockPush).toHaveBeenNthCalledWith(2, route2);
  });
});
