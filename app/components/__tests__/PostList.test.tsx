import React from "react";
import { render } from "@testing-library/react";
import PostList from "../PostList";
jest.mock("../../assets/no_data.svg");
describe("<PostList />", () => {
  it("Renders nothing found if no post found", async () => {
    const { findByText } = render(<PostList posts={[]} />);

    expect(await findByText(/No posts found/i)).toBeInTheDocument();
  });
});
