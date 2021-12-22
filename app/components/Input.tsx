import React from "react";

interface InputProps {
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  className?: string;
  name: string;
}

/**
 * Generic input element
 * @returns
 */
const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      name={props.name}
      className={
        "relative rounded-3xl py-4 px-3 w-full border border-grey-200 focus:border-primary focus:ring-1 focus:ring-opacity-50 focus:ring-primary bg-background shadow text-base text-gray-200 placeholder-gray-400 " +
        props.className
      }
      placeholder={props.placeholder || "Type text"}
      onChange={props.onChange}
    />
  );
};

export default Input;
