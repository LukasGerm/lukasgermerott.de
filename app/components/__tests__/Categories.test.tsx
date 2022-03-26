import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Post } from "~/services/posts/types/Post";
import Categories from "../Categories";

describe("<Categories />", () => {
  const dummyPostList: Post[] = [
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "test-post",
      spoilerImageLink: "http://test.post/image.png",
      title: "Test post",
      description: "Test description",
      categories: ["Remix"],
    },
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "very-important",
      spoilerImageLink: "http://test.post/image.png",
      title: "Very important post speecial",
      description: "Test description",
      categories: ["React", "Remix"],
    },
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "funny-post",
      spoilerImageLink: "http://test.post/image.png",
      title: "Funny post freaky",
      description: "Test description",
      categories: ["SSR", "Webdevelopment"],
    },
  ];

  it("shows all the available categories", async () => {
    const { findByText } = render(
      <Categories posts={dummyPostList} handleChange={jest.fn} />
    );

    expect(await findByText(/SSR/i)).toBeInTheDocument();
    expect(await findByText(/Webdevelopment/i)).toBeInTheDocument();
    expect(await findByText(/React/i)).toBeInTheDocument();
    expect(await findByText(/Remix/i)).toBeInTheDocument();
  });

  it("adds correct category and removes it again by second click", async () => {
    const handleChange = jest.fn();

    const { findByText } = render(
      <Categories posts={dummyPostList} handleChange={handleChange} />
    );

    fireEvent.click(await findByText(/SSR/i));
    fireEvent.click(await findByText(/SSR/i));

    expect(handleChange.mock.calls.length).toEqual(2);
    expect(handleChange.mock.calls[0][0]).toEqual({
      type: "ADD",
      value: "SSR",
    });
    expect(handleChange.mock.calls[1][0]).toEqual({
      type: "REMOVE",
      value: "SSR",
    });
  });
});
