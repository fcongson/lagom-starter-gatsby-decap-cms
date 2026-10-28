import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders the svg for a known icon type", () => {
    const { container } = render(<Icon type="github" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "GitHub");
  });

  it("returns nothing for an unknown icon type", () => {
    const { container } = render(<Icon type="unknown" />);
    expect(container).toBeEmptyDOMElement();
  });
});
