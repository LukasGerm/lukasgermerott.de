import { render } from "@testing-library/react";
import React from "react";
import Typography from "../Typography";

describe("<Typography />", () => {
  it("shows right classes for h1", async () => {
    const { findByText } = render(<Typography variant="h1">Hello</Typography>);

    expect((await findByText(/Hello/i)).classList).toContain("text-7xl");
  });
  it("shows right classes for h2", async () => {
    const { findByText } = render(<Typography variant="h2">Hello</Typography>);

    expect((await findByText(/Hello/i)).classList).toContain("text-4xl");
  });
  it("shows right classes for h3", async () => {
    const { findByText } = render(<Typography variant="h3">Hello</Typography>);

    expect((await findByText(/Hello/i)).classList).toContain("text-2xl");
  });
  it("shows right classes for h4", async () => {
    const { findByText } = render(<Typography variant="h4">Hello</Typography>);

    expect((await findByText(/Hello/i)).classList).toContain("text-xl");
  });
  it("shows right classes for p", async () => {
    const { findByText } = render(<Typography>Hello</Typography>);

    expect((await findByText(/Hello/i)).tagName).toContain("P");
  });
});
