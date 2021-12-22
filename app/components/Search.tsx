import React from "react";
import { Form, useFetcher, useSubmit } from "remix";
import Input from "./Input";

/**
 * Search component for the blog page
 * @returns
 */
const Search = () => {
  const posts = useFetcher();

  return (
    <div className="flex justify-center mt-10">
      <Form method="get">
        <Input
          name="search"
          placeholder="Search"
          className="max-w-sm"
          onChange={(e) => {
            posts.submit(e.currentTarget.form);
          }}
        />
      </Form>
    </div>
  );
};

export default Search;
