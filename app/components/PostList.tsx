import React from "react";
import type { Post } from "~/services/posts/types/Post";
import PostTile from "./PostTile";
import NoData from "../assets/no_data.svg";
import Typography from "./Typography";
import { useTranslation } from "react-i18next";

const PostList = (props: { posts: Post[] }) => {
  const { posts } = props;
  const { t } = useTranslation();
  if (posts.length === 0) {
    return (
      <div className="flex justify-center mt-10 flex-col">
        <img src={NoData} className="max-h-80" alt="No data available" />
        <Typography className="text-center font-light mt-5">
          {t("No posts found")}
        </Typography>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl ml-auto mr-auto mt-10">
      <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => {
          return <PostTile key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
