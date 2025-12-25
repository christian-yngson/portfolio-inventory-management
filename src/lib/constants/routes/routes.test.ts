import { describe, it, expect } from "vitest";
import Routes from "./routes";

describe("Routes", () => {
  it('should have a home route that returns "/"', () => {
    expect(Routes.home()).toBe("/");
  });

  it('should have a login route that returns "/login"', () => {
    expect(Routes.login()).toBe("/login");
  });

  describe("Protected routes", () => {
    describe("Dashboard routes", () => {
      it('should have a dashboard root route that returns "/dashboard"', () => {
        expect(Routes.protected.dashboard.root()).toBe("/dashboard");
      });
    });
  });
});
