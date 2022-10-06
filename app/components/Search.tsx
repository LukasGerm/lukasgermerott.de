import React from "react";
import { Form } from "remix";
import {
  PostReducerActionType,
  PostReducerAction,
} from "~/services/posts/types/PostReducerAction";
import Input from "./Input";

/**
 * Search component for the blog page
 * @returns
 */
const Search = (props: {
  dispatch(action: PostReducerAction): void;
  query: string;
}) => {
  return (
    <div className="max-w-sm mr-auto ml-auto mt-10">
      <Form method="get">
        <Input
          name="search"
          value={props.query}
          placeholder="Search"
          onChange={(e) => {
            props.dispatch({
              type: PostReducerActionType.SET_QUERY,
              value: e.target.value,
            });
          }}
        />
      </Form>
    </div>
  );
};

export default Search;
