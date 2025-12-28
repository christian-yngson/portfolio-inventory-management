import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionCardLabel from "./SectionCardLabel";

describe("SectionCardLabel", () => {
  it("renders children text", () => {
    render(<SectionCardLabel>Total Items</SectionCardLabel>);

    expect(screen.getByText("Total Items")).toBeInTheDocument();
  });

  it("renders with Typography component", () => {
    const { container } = render(
      <SectionCardLabel>Test Label</SectionCardLabel>
    );

    const typography = container.querySelector(".MuiTypography-root");
    expect(typography).toBeInTheDocument();
  });

  it("uses body2 variant", () => {
    render(<SectionCardLabel>Test Label</SectionCardLabel>);

    const label = screen.getByText("Test Label");
    expect(label).toHaveClass("MuiTypography-body2");
  });

  it("renders with different children", () => {
    const { rerender } = render(<SectionCardLabel>Label 1</SectionCardLabel>);

    expect(screen.getByText("Label 1")).toBeInTheDocument();

    rerender(<SectionCardLabel>Label 2</SectionCardLabel>);

    expect(screen.queryByText("Label 1")).not.toBeInTheDocument();
    expect(screen.getByText("Label 2")).toBeInTheDocument();
  });

  it("renders ReactNode children", () => {
    render(
      <SectionCardLabel>
        <span data-testid="custom-element">Custom Content</span>
      </SectionCardLabel>
    );

    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });
});
