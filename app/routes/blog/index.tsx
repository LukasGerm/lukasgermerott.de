import { useCatch, Link, json, useLoaderData, Outlet } from "remix";

import type { LoaderFunction } from "remix";
import { getPosts, Post } from "~/services/posts/posts";
export let loader: LoaderFunction = () => {
  return getPosts();
};

export default function BlogList() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
