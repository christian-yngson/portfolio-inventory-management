import { describe, it, expect, vi } from "vitest";
import { usePathname } from "next/navigation";
import useIsActive from "./useIsActive";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("useIsActive", () => {
  it("should return true when pathname matches route", () => {
    vi.mocked(usePathname).mockReturnValue("/dashboard");
    const result = useIsActive("/dashboard");
    expect(result).toBe(true);
  });

  it("should return false when pathname does not match route", () => {
    vi.mocked(usePathname).mockReturnValue("/dashboard");
    const result = useIsActive("/settings");
    expect(result).toBe(false);
  });

  it("should return false for empty route", () => {
    vi.mocked(usePathname).mockReturnValue("/dashboard");
    const result = useIsActive("");
    expect(result).toBe(false);
  });

  it("should be case-sensitive", () => {
    vi.mocked(usePathname).mockReturnValue("/Dashboard");
    const result = useIsActive("/dashboard");
    expect(result).toBe(false);
  });
});
