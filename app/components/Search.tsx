import React, { useState } from "react";
import { Form, useSearchParams, useSubmit } from "remix";
import Input from "./Input";

/**
 * Search component for the blog page
 * @returns
 */
const Search = (props: { categories: string[] }) => {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  return (
    <div className="max-w-sm mr-auto ml-auto mt-10">
      <Form method="get">
        <Input
          name="search"
          value={search}
          placeholder="Search"
          onChange={(e) => {
            submit(e.currentTarget.form);
            setSearch(e.target.value);
          }}
        />
      </Form>
    </div>
  );
};

export default Search;
