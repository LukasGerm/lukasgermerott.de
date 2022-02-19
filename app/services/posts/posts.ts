import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import showdown from "showdown";
import path from "path";
import { Post, PostAttributes } from "./types/Post";
import invariant from "tiny-invariant";

export function isInvalidPostAttributes(attributes: unknown) {
  const casted = attributes as PostAttributes;
  if (!casted.publishedAt || !casted.spoilerImageLink || !casted.title) {
    return true;
  }
  return false;
}

export async function getPost(slugName: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slugName);
}
/**
 * Filters posts
 * @param posts
 * @param search
 */
export function filterPosts(posts: Post[], search: string) {
  const lowercaseSearch = search.toLowerCase();
  return posts.filter(
    (post) =>
      post.slug.toLowerCase().includes(lowercaseSearch) ||
      post.title.toLowerCase().includes(lowercaseSearch)
  );
}

const classMap = {
  h1: "text-4xl pb-6 text-primaryLight",
  h2: "text-2xl pb-6 text-primaryLight",
  h3: "text-xl pb-3 font-normal",
  p: "text-base pb-12 font-light leading-7",
  li: "ui item",
  a: "text-sky-400 hover:text-sky-500 transition duration-300 ease-in-out",
  code: "bg-card text-xs p-1 rounded",
};

const bindings = Object.keys(classMap).map((key) => ({
  type: "output",
  regex: new RegExp(`<${key}>`, "g"),
  replace: `<${key} class="${classMap[key as keyof typeof classMap]}" $1>`,
}));

bindings.push({
  type: "output",
  regex: new RegExp(`<a (.*)>`, "g"),
  replace: `<a class="${classMap["a"]}" $1>`,
});

/**
 * Gets all posts
 * @param search the search value to filter
 */
export async function getPosts(search?: string | null): Promise<Post[]> {
  let postsPath = path.join(__dirname, "../app/posts");

  let dir = await fs.readdir(postsPath);
  const converter = new showdown.Converter({
    extensions: [...bindings],
    noHeaderId: true,
  });
  // filter out gitkeep
  dir = dir.filter((filename) => filename !== ".gitkeep");
  return Promise.all(
    dir.map(async (filename) => {
      let file = await fs.readFile(path.join(postsPath, filename));
      let { attributes, body } = parseFrontMatter(file.toString());
      invariant(
        !isInvalidPostAttributes(attributes),
        `${filename} includes bad metadata`
      );
      const attr = attributes as PostAttributes;
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: attr.title,
        body: converter.makeHtml(body),
        publishedAt: attr.publishedAt,
        spoilerImageLink: attr.spoilerImageLink,
      } as Post;
    })
  ).then((posts) => {
    return search ? filterPosts(posts, search) : posts;
  });
}
