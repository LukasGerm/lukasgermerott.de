import { useLoaderData, MetaFunction, useSubmit } from "remix";

import type { LoaderFunction } from "remix";
import { getPosts } from "~/services/posts/posts";
import { Post } from "~/services/posts/types/Post";
import Typography from "~/components/Typography";
import Search from "~/components/Search";
import Button from "~/components/Button";
import PostList from "~/components/PostList";
import ProfilePicture from "../../assets/profile.jpg";
import Categories from "~/components/Categories";
import { useEffect, useReducer } from "react";
import PostReducerAction from "~/services/posts/types/PostReducerAction";

export let meta: MetaFunction = () => {
  return {
    title: "Blog | Lukas Germerott",
    description: "Cool tips and tutorials all about web development.",
    "og:title": "Blog | Lukas Germerott",
    "og:description": "Cool tips and tutorials all about web development.",
    "og:image": ProfilePicture,
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  return getPosts(search);
};

function reducer(state: string[], action: PostReducerAction) {
  switch (action.type) {
    case "ADD":
      return [...state, action.value];
    case "REMOVE":
      return state.filter((value) => value !== action.value);
    default:
      return state;
  }
}

export default function BlogList() {
  const posts = useLoaderData<Post[]>();
  const submit = useSubmit();
  const [categories, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (categories.length > 0) {
      const data = new FormData();
      data.set("categories", JSON.stringify(categories));
      submit(data);
    }
  }, [categories, submit]);

  return (
    <div className="bg-background px-10">
      <Typography variant="h2" className="text-center">
        Blog
      </Typography>
      <section>
        <Search categories={categories} />
      </section>
      <section>
        <div className="max-w-screen-xl ml-auto mr-auto mt-10">
          <Categories posts={posts} handleChange={dispatch} />
        </div>
      </section>
      <PostList posts={posts} />
      <section>
        <div className="mt-10 pb-10">
          <Typography variant="h2" className="text-center">
            Newsletter
          </Typography>
          <Typography className="text-center mt-5">
            By subscribing to my newsletter, you won't miss any blogposts.
            <br />
            Click the button below to enter your data.
          </Typography>
          <div className="flex justify-center mt-5">
            <Button className="rm-open-popup" color="primary" large>
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
