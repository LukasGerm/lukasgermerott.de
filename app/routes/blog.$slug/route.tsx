import { format, parse } from "date-fns";
import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { getPost } from "~/services/posts/posts";
import type { Post } from "~/services/posts/types/Post";
import hljs from "highlight.js";
import NotFoundBoundary from "~/components/NotFoundBoundary";
import AuthorCard from "~/components/AuthorCard";
import { useTranslation } from "react-i18next";
import { metaV1 } from "@remix-run/v1-meta";

export let meta: MetaFunction = (args) => {
  const data = args.data as Post;
  return metaV1(args, {
    title: data.title + " | Lukas Germerott",
    description: data.description,
    "og:title": data.title + " | Lukas Germerott",
    "og:description": data.description,
    "og:image": data.spoilerImageLink,
  });
};

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
  const post = useLoaderData<Post | null>();
  const { t } = useTranslation();
  useEffect(() => {
    hljs.highlightAll();
  });

  if (!post) return <NotFoundBoundary />;

  return (
    <Container padding={6} className="flex-1 w-full">
      <div className="text-gray-200 max-w-screen-sm ml-auto mr-auto mt-10 pb-10">
        <Button
          link="/blog"
          color="text"
          iconLeft={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          }
        >
          {t("Back to overview")}
        </Button>
        <img
          src={post.spoilerImageLink}
          className="object-cover rounded-2xl h-96 w-full mt-5"
          alt="Spoiler"
        />
        <Typography variant="h2" className="mt-5 font-light">
          {post.title}
        </Typography>
        <Typography className="font-extralight">
          {t("Published at")}{" "}
          {format(
            parse(post.publishedAt, "dd.MM.yyyy", new Date()),
            "dd MMMM yyyy"
          )}
        </Typography>
        <div className="mt-5" dangerouslySetInnerHTML={{ __html: post.body }} />
        <AuthorCard />
      </div>
    </Container>
  );
}
