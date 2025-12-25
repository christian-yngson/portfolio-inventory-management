import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderLabel from "./HeaderLabel";

describe("HeaderLabel", () => {
  it("renders the component", () => {
    render(<HeaderLabel />);
    expect(screen.getByText("Inventory Management")).toBeInTheDocument();
  });

  it("renders Typography with h6 variant", () => {
    const { container } = render(<HeaderLabel />);
    const heading = container.querySelector("h6");
    expect(heading).toBeInTheDocument();
  });
});
