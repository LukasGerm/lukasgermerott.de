import React from "react";
import { render } from "@testing-library/react";
import Input from "../Input";
import userEvent from "@testing-library/user-event";

describe("<Input />", () => {
  it("handles input change correctly", async () => {
    let value = "";
    const handleChange = jest.fn((event) => {
      value += event.target.value;
    });
    const { findByRole } = render(
      <Input name="testInput" value="" onChange={handleChange} />
    );
    userEvent.type(await findByRole("textbox"), "Test");
    expect(value).toEqual("Test");
  });
  it("Shows placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input
        name="testInput"
        value="Test"
        placeholder="Placeholder"
        onChange={() => {}}
      />
    );

    expect(getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });
});
