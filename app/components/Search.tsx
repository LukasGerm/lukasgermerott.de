import React from "react";
import { Form, useSubmit } from "remix";
import Input from "./Input";

/**
 * Search component for the blog page
 * @returns
 */
const Search = () => {
  const submit = useSubmit();

  return (
    <div className="max-w-sm mr-auto ml-auto mt-10">
      <Form method="get">
        <Input
          name="search"
          placeholder="Search"
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        />
      </Form>
    </div>
  );
};

export default Search;
