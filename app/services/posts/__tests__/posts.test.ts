import {
  filterPosts,
  getPost,
  getPosts,
  isInvalidPostAttributes,
} from "../posts";
import { Post, PostAttributes } from "../types/Post";

const testMarkdown = `---
title: Test entry
spoilerImageLink: https://i.ibb.co/FJswZTz/mountains-g3dba15faf-1920.jpg
publishedAt: 08.02.2022
---

# Sample Markdown

This is basic
`;

jest.mock("fs/promises", () => ({
  readdir: (path: string) => Promise.resolve(["test.mdx"]),
  readFile: (path: string) => Promise.resolve(testMarkdown),
}));

describe("posts service", () => {
  it("Creates correct html from markdown", async () => {
    const posts = await getPosts();
    const post = posts[0];

    expect(posts.length).toEqual(1);
    expect(post.title).toEqual("Test entry");
    expect(post.slug).toEqual("test");
  });
  it("Gets single post by slug name", async () => {
    const post = await getPost("test");

    expect(post?.title).toEqual("Test entry");
    expect(post?.slug).toEqual("test");
  });
});

describe("isInvalidPostAttributes", () => {
  it("handles correct input", () => {
    const attributes: PostAttributes = {
      publishedAt: "10.02.2000",
      spoilerImageLink: "http://test.com",
      title: "Title",
    };

    expect(isInvalidPostAttributes(attributes)).toBeFalsy();
  });

  it("handles missing title", () => {
    const attributes: Partial<PostAttributes> = {
      publishedAt: "10.02.2000",
      spoilerImageLink: "https://test.com",
    };

    expect(isInvalidPostAttributes(attributes)).toBeTruthy();
  });
  it("handles missing spoiler link", () => {
    const attributes: Partial<PostAttributes> = {
      publishedAt: "10.02.2000",
      title: "TITLE",
    };

    expect(isInvalidPostAttributes(attributes)).toBeTruthy();
  });
  it("handles missing published at", () => {
    const attributes: Partial<PostAttributes> = {
      spoilerImageLink: "https://test.com",
      title: "asd",
    };

    expect(isInvalidPostAttributes(attributes)).toBeTruthy();
  });
  it("handles wrong date format", () => {
    const attributes: Partial<PostAttributes> = {
      spoilerImageLink: "https://test.com",
      title: "asd",
      publishedAt: "10-02-2000",
    };

    expect(isInvalidPostAttributes(attributes)).toBeTruthy();
  });
});

describe("filterPosts", () => {
  const dummyPostList: Post[] = [
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "test-post",
      spoilerImageLink: "http://test.post/image.png",
      title: "Test post",
    },
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "very-important",
      spoilerImageLink: "http://test.post/image.png",
      title: "Very important post speecial",
    },
    {
      body: "<p>Test</p>",
      publishedAt: "10.02.2000",
      slug: "funny-post",
      spoilerImageLink: "http://test.post/image.png",
      title: "Funny post freaky",
    },
  ];
  it("handles title filter okay", () => {
    const list = filterPosts(dummyPostList, "freaky");

    expect(list.length).toEqual(1);
    expect(list[0]).toEqual(dummyPostList[2]);
  });

  it("handles slug filter okay", () => {
    const list = filterPosts(dummyPostList, "funny");
    expect(list.length).toEqual(1);
    expect(list[0]).toEqual(dummyPostList[2]);
  });
  it("handles title filter not case sensitive", () => {
    const list = filterPosts(dummyPostList, "frEaKy");

    expect(list.length).toEqual(1);
    expect(list[0]).toEqual(dummyPostList[2]);
  });
});
