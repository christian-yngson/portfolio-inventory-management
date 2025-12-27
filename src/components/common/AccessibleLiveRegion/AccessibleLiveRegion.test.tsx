import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AccessibleLiveRegion from "./AccessibleLiveRegion";

describe("AccessibleLiveRegion", () => {
  it("renders the message text", () => {
    render(<AccessibleLiveRegion message="Test message" />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("has aria-live polite attribute", () => {
    render(<AccessibleLiveRegion message="Test" />);
    const element = screen.getByText("Test");
    expect(element).toHaveAttribute("aria-live", "polite");
  });

  it("has aria-atomic true attribute", () => {
    render(<AccessibleLiveRegion message="Test" />);
    const element = screen.getByText("Test");
    expect(element).toHaveAttribute("aria-atomic", "true");
  });

  it("has screen reader only styles", () => {
    render(<AccessibleLiveRegion message="Test" />);
    const element = screen.getByText("Test");
    expect(element).toHaveStyle({
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0px",
      overflow: "hidden",
    });
  });

  it("renders with empty message", () => {
    const { container } = render(<AccessibleLiveRegion message="" />);
    expect(container.querySelector("[aria-live]")).toBeInTheDocument();
  });
});
