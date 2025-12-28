import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionCard from "./SectionCard";

vi.mock("./SectionCardLabel", () => ({
  default: ({ children }: { children: string }) => <div>{children}</div>,
}));

describe("SectionCard", () => {
  const mockIcon = <svg data-testid="mock-icon">Icon</svg>;
  const defaultProps = {
    icon: mockIcon,
    amount: "1,234",
    label: "Total Items",
    color: "#FF5733",
  };

  it("renders the amount text", () => {
    render(<SectionCard {...defaultProps} />);

    expect(screen.getByText("1,234")).toBeInTheDocument();
  });

  it("renders the label text", () => {
    render(<SectionCard {...defaultProps} />);

    expect(screen.getByText("Total Items")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(<SectionCard {...defaultProps} />);

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("renders all props together", () => {
    render(<SectionCard {...defaultProps} />);

    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("Total Items")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("renders with different amounts and labels", () => {
    const { rerender } = render(<SectionCard {...defaultProps} />);

    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("Total Items")).toBeInTheDocument();

    rerender(
      <SectionCard
        icon={mockIcon}
        amount="5,678"
        label="Active Users"
        color="#0066FF"
      />
    );

    expect(screen.getByText("5,678")).toBeInTheDocument();
    expect(screen.getByText("Active Users")).toBeInTheDocument();
  });

  it("renders without crashing with different colors", () => {
    const { rerender } = render(
      <SectionCard {...defaultProps} color="#FF5733" />
    );

    expect(screen.getByText("1,234")).toBeInTheDocument();

    rerender(
      <SectionCard
        icon={mockIcon}
        amount="1,234"
        label="Total Items"
        color="#0066FF"
      />
    );

    expect(screen.getByText("1,234")).toBeInTheDocument();
  });
});
