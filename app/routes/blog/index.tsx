import {
  useCatch,
  Link,
  json,
  useLoaderData,
  Outlet,
  MetaFunction,
} from "remix";

import type { LoaderFunction } from "remix";
import { getPosts } from "~/services/posts/posts";
import { Post } from "~/services/posts/types/Post";
import Typography from "~/components/Typography";
import Input from "~/components/Input";
import PostTile from "~/components/PostTile";
import Grid from "~/components/Grid";
import Search from "~/components/Search";

export let meta: MetaFunction = () => {
  return {
    title: "Blog | Lukas Germerott",
    description: "Lukas Blog",
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  console.log(url.searchParams);
  return getPosts();
};

export default function BlogList() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="bg-background px-10">
      <Typography variant="h2" className="text-center">
        Blog
      </Typography>
      <section>
        <Search />
      </section>
      <div className="max-w-screen-xl ml-auto mr-auto mt-10">
        <Grid cols="grid-cols-4" className="gap-8">
          {posts.map((post) => {
            return <PostTile key={post.slug} post={post} />;
          })}
        </Grid>
      </div>
    </div>
  );
}
