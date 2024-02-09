import { Link } from "@remix-run/react";
import { format, parse } from "date-fns";
import React from "react";
import { Post } from "~/services/posts/types/Post";
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
    <div>
      <Link to={"/blog/" + post.slug}>
        <article>
          <div className="bg-card rounded-2xl cursor-pointer">
            <div className="sm:hover:blur-sm transition-all ease-in-out duration-300">
              <img
                loading="lazy"
                className="h-52 md:h-96 object-cover rounded-2xl select-none"
                src={post.spoilerImageLink}
                alt={post.title + " Post"}
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
      </Link>
    </div>
  );
};

export default PostTile;
