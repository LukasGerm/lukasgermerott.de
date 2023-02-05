import React from "react";

interface InputProps {
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  className?: string;
  name: string;
  value?: string;
  type?: "text" | "email" | "number";
  required?: boolean;
}

/**
 * Generic input element
 * @returns
 */
const Input = (props: InputProps) => {
  const { type = "text" } = props;
  return (
    <input
      type={type}
      name={props.name}
      value={props.value}
      className={
        "relative rounded-3xl py-4 px-3 w-full border border-grey-200 focus:border-primary focus:ring-1 focus:ring-opacity-50 focus:ring-primary bg-background shadow text-base text-gray-200 placeholder-gray-400 " +
        props.className
      }
      placeholder={props.placeholder || "Type text"}
      onChange={props.onChange}
      required={props.required}
    />
  );
};

export default Input;
