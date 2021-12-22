import { LoaderFunction, useLoaderData } from "remix";
import { getPost } from "~/services/posts/posts";
import { Post } from "~/services/posts/types/Post";

/**
 * Gets a single post
 * @param param0
 * @returns
 */
export let loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) return null;
  const post = await getPost(params.slug);
  if (!post) return null;

  return post;
};

export default function BlogArticle() {
  const post = useLoaderData<Post>();
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}
