import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import HeaderSection from "./HeaderSection";

describe("HeaderSection", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeaderSection />);
    expect(container).toBeTruthy();
  });

  it("renders a Toolbar component", () => {
    const { container } = render(<HeaderSection />);
    const toolbar = container.querySelector(".MuiToolbar-root");
    expect(toolbar).toBeTruthy();
  });
});
