import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("<Button />", () => {
  it("has right color", () => {
    const { getByRole } = render(
      <Button color="primary">Primary Button</Button>
    );

    expect(getByRole("button").classList).toContain("bg-primary");
  });
  //TODO More tests like for onclick
});
