import React, { useMemo } from "react";
import { Post } from "~/services/posts/types/Post";
import PostReducerAction from "~/services/posts/types/PostReducerAction";
import { CategoryChip } from "./CategoryChip";

interface CategoriesProps {
  handleChange(action: PostReducerAction): void;
  posts: Post[];
}

/**
 * Component which shows all the category badges and
 * handles calculating all the categories which will
 * be shown
 * @returns
 */
const Categories = (props: CategoriesProps) => {
  /**
   * Filter unique categories from posts
   */
  const categories = useMemo(
    () =>
      props.posts.reduce<string[]>((accumulator, currentValue) => {
        currentValue.categories.forEach((category) => {
          if (!accumulator.includes(category)) {
            accumulator.push(category);
          }
        });
        return accumulator;
      }, []),
    [props.posts]
  );

  return (
    <div className="flex justify-center">
      {categories.map((category) => (
        <CategoryChip
          key={category}
          name={category}
          onChange={props.handleChange}
        />
      ))}
    </div>
  );
};

export default Categories;
