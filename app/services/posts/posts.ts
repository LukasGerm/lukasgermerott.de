import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import showdown from "showdown";
import path from "path";
export type Post = {
  slug: string;
  title: string;
  body: string;
};

type PostAttributes = {
  title: string;
};

export async function getPost(slugName: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slugName);
}

/**
 * Gets all posts
 * @returns
 */
export async function getPosts() {
  let postsPath = path.join(__dirname, "../app/posts");

  let dir = await fs.readdir(postsPath);
  const converter = new showdown.Converter();

  return Promise.all(
    dir.map(async (filename) => {
      let file = await fs.readFile(path.join(postsPath, filename));
      let { attributes, body } = parseFrontMatter(file.toString());

      return {
        slug: filename.replace(/\.md$/, ""),
        title: (attributes as PostAttributes).title,
        body: converter.makeHtml(body),
      } as Post;
    })
  );
}
