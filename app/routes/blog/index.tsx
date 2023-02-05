import { useLoaderData, useSubmit, useSearchParams } from "@remix-run/react";

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getPosts } from "~/services/posts/posts";
import type { Post } from "~/services/posts/types/Post";
import Typography from "~/components/Typography";
import Search from "~/components/Search";
import Button from "~/components/Button";
import PostList from "~/components/PostList";
import ProfilePicture from "../../assets/profile.avif";
import Categories from "~/components/Categories";
import { useEffect, useReducer } from "react";
import { PostReducerActionType } from "~/services/posts/types/PostReducerAction";
import type { PostReducerAction } from "~/services/posts/types/PostReducerAction";
import Container from "~/components/Container";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export let meta: MetaFunction = () => {
  return {
    title: t("Blog") + " | Lukas Germerott",
    description: t("Cool tips and tutorials all about web development."),
    "og:title": t("Blog") + " | Lukas Germerott",
    "og:description": t("Cool tips and tutorials all about web development."),
    "og:image": ProfilePicture,
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const categories = url.searchParams.get("categories");
  const parsedCategories = categories ? JSON.parse(categories) : [];
  return getPosts(search, parsedCategories);
};

interface SearchState {
  categories: string[];
  query: string;
}

// This reducer handles all on page actions
function reducer(state: SearchState, action: PostReducerAction): SearchState {
  switch (action.type) {
    case PostReducerActionType.ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.value] };
    case PostReducerActionType.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((value) => value !== action.value),
      };
    case PostReducerActionType.SET_QUERY:
      return {
        ...state,
        query: action.value,
      };
    default:
      return state;
  }
}

// TODO move out to utilities
function getCategoriesFromSearch(categoriesParameter: string | null): string[] {
  if (categoriesParameter === null) return [];
  return JSON.parse(categoriesParameter);
}

export default function BlogList() {
  const posts = useLoaderData<Post[]>();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const [state, dispatch] = useReducer(reducer, {
    categories: getCategoriesFromSearch(searchParams.get("categories")),
    query: searchParams.get("search") || "",
  });

  // TODO Debounce
  useEffect(() => {
    const data = new URLSearchParams();
    data.set("categories", JSON.stringify(state.categories || []));
    data.set("search", state.query);
    submit(data);
  }, [state, searchParams, submit]);

  return (
    <div className="bg-background">
      <Container padding={6}>
        <Typography variant="h2" className="text-center">
          {t("Blog")}
        </Typography>
        <section>
          <Search dispatch={dispatch} query={state.query} />
        </section>
        <section>
          <div className="max-w-screen-xl ml-auto mr-auto mt-10">
            <Categories
              posts={posts}
              dispatch={dispatch}
              activeCategories={state.categories}
            />
          </div>
        </section>
        <PostList posts={posts} />
        <section>
          <div className="mt-10 pb-10">
            <Typography variant="h2" className="text-center">
              {t("Newsletter")}
            </Typography>
            <Typography className="text-center mt-5">
              {t(
                "By subscribing to my newsletter, you won't miss any blogposts."
              )}
            </Typography>
            <Typography className="text-center mt-5">
              {t("Click the button below to enter your data.")}
            </Typography>
            <div className="flex justify-center mt-5">
              <Button className="rm-open-popup" color="primary" large>
                {t("Subscribe")}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
