import React from "react";

import { useState } from "react";
import PostReducerAction from "~/services/posts/types/PostReducerAction";

export const CategoryChip = (props: {
  name: string;
  onChange: (value: PostReducerAction) => void;
}) => {
  const [active, setActive] = useState(false);
  const inactiveClasses = "border-2 border-primary text-gray-200";
  const activeClasses = "bg-primary text-card";

  const handleClick = () => {
    props.onChange({ type: !active ? "ADD" : "REMOVE", value: props.name });
    setActive(!active);
  };

  return (
    <div
      onClick={handleClick}
      className={
        "flex items-center rounded-lg px-3 py-1  cursor-pointer mx-2 " +
        (active ? activeClasses : inactiveClasses)
      }
    >
      <p>{props.name}</p>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 12H6"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      )}
    </div>
  );
};
