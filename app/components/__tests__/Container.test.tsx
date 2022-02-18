import { render } from "@testing-library/react";
import React from "react";
import Container from "../Container";

describe("<Container />", () => {
  it("has right padding classes 6", async () => {
    const { container } = render(<Container padding={6} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.classList).toContain("px-6");
  });
  it("has right padding classes 12", async () => {
    const { container } = render(<Container padding={12} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.classList).toContain("px-12");
  });
  it("has right padding classes 16", async () => {
    const { container } = render(<Container padding={16} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.classList).toContain("px-16");
  });
  it("has right padding classes 18", async () => {
    const { container } = render(<Container padding={18} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.classList).toContain("px-18");
  });
  it("has right padding classes 24", async () => {
    const { container } = render(<Container padding={24} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.classList).toContain("px-24");
  });
});
