import React from "react";
import { Post } from "~/services/posts/types/Post";
import Grid from "./Grid";
import PostTile from "./PostTile";
import NoData from "../assets/no_data.svg";
import Typography from "./Typography";

const PostList = (props: { posts: Post[] }) => {
  const { posts } = props;

  if (posts.length === 0) {
    return (
      <div className="flex justify-center mt-10 flex-col">
        <img src={NoData} className="max-h-80" alt="No data available" />
        <Typography className="text-center font-light mt-5">
          No posts found
        </Typography>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl ml-auto mr-auto mt-10">
      <Grid cols="grid-cols-4" className="gap-8">
        {posts.map((post) => {
          return <PostTile key={post.slug} post={post} />;
        })}
      </Grid>
    </div>
  );
};

export default PostList;
