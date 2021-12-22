import { format, parse } from "date-fns";
import React from "react";
import { Post } from "~/services/posts/types/Post";
import { GridItem } from "./Grid";
import Typography from "./Typography";

interface PostTileProps {
  post: Post;
}

/**
 * Tile which shows one post in the blog list
 * @param props
 * @returns
 */
const PostTile = (props: PostTileProps) => {
  const { post } = props;

  return (
    <GridItem className="col-span-4 sm:col-span-2 lg:col-span-1">
      <article>
        <div className="bg-card rounded-2xl cursor-pointer">
          <div className="hover:blur-sm ">
            <img
              className="h-96 object-cover rounded-2xl select-none"
              src={post.spoilerImageLink}
            />
          </div>

          <div className="p-3">
            <Typography variant="h4">{post.title}</Typography>
            <Typography className="font-light">
              Published at{" "}
              {format(
                parse(post.publishedAt, "dd.MM.yyyy", new Date()),
                "dd MMMM yyyy"
              )}
            </Typography>
          </div>
        </div>
      </article>
    </GridItem>
  );
};

export default PostTile;
