import React, { useMemo } from "react";
import { PostReducerAction } from "~/services/posts/types/PostReducerAction";
import { Post } from "~/services/posts/types/Post";
import { CategoryChip } from "./CategoryChip";

interface CategoriesProps {
  dispatch(action: PostReducerAction): void;
  activeCategories: string[];
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
          dispatch={props.dispatch}
          active={props.activeCategories.includes(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
