import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { vi } from "vitest";

const mockRouter = (
  overrides: Partial<AppRouterInstance> = {}
): AppRouterInstance => {
  return vi.mocked(useRouter).mockReturnValue({
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    push: vi.fn(),
    ...overrides,
  }) as unknown as AppRouterInstance;
};

export default mockRouter;
