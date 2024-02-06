import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import showdown from "showdown";
import { dirname, join } from "path";
import { Post, PostAttributes } from "./types/Post";
import invariant from "tiny-invariant";
import { fileURLToPath } from "url";
import { getCurrentPath } from "../utils/utils";

export function isInvalidPostAttributes(attributes: unknown) {
  const casted = attributes as PostAttributes;
  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

  if (
    !casted.publishedAt ||
    !casted.spoilerImageLink ||
    !casted.title ||
    !casted.description ||
    !dateRegex.test(casted.publishedAt)
  ) {
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
export function filterPosts(
  posts: Post[],
  search: string | null,
  categories: string[]
) {
  const lowercaseSearch = search ? search.toLowerCase() : "";
  return posts.filter(
    (post) =>
      (post.slug.toLowerCase().includes(lowercaseSearch) ||
        post.title.toLowerCase().includes(lowercaseSearch)) &&
      categories?.every((category) => post.categories.includes(category))
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
export async function getPosts(
  search?: string | null,
  categories?: string[]
): Promise<Post[]> {
  const postsPath = join(getCurrentPath() + "/../app/posts");

  let dir = await fs.readdir(postsPath);
  const converter = new showdown.Converter({
    extensions: [...bindings],
    noHeaderId: true,
  });
  // filter out gitkeep
  dir = dir.filter((filename) => filename !== ".gitkeep");
  return Promise.all(
    dir.map(async (filename) => {
      let file = await fs.readFile(join(postsPath, filename));
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
        description: attr.description,
        categories: attr.categories
          ? attr.categories.split(",").map((cat) => cat.trim())
          : [],
      } as Post;
    })
  ).then((posts) => {
    return filterPosts(posts, search || "", categories || []);
  });
}
