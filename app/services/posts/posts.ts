import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import showdown from "showdown";
import path from "path";
import { Post, PostAttributes } from "./types/Post";
import invariant from "tiny-invariant";

function isInvalidPostAttributes(attributes: unknown) {
  const casted = attributes as PostAttributes;
  // TODO Add date check
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
function filterPosts(posts: Post[], search: string) {
  return posts.filter(
    (post) => post.slug.includes(search) || post.title.includes(search)
  );
}

/**
 * Gets all posts
 * @param search the search value to filter
 */
export async function getPosts(search?: string | null): Promise<Post[]> {
  let postsPath = path.join(__dirname, "../app/posts");

  let dir = await fs.readdir(postsPath);
  const converter = new showdown.Converter();

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
        slug: filename.replace(/\.md$/, ""),
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
