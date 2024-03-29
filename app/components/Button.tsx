import { Link } from "@remix-run/react";
import React from "react";

interface ButtonProps {
  color?: "primary" | "text";
  large?: boolean;
  link?: string;
  className?: string;
  iconLeft?: JSX.Element;
  onClick?(): void;
  type?: "submit" | "button";
  disabled?: boolean;
}

/**
 * Helperfunction to determine buttoncolor
 * @param props
 * @returns
 */
const getButtonColor = (props: ButtonProps) => {
  if (props.disabled) return "bg-gray-500 text-gray-200 cursor-not-allowed";
  switch (props.color) {
    case "primary":
      return "bg-primary hover:bg-primaryHover focus:outline-primaryHover text-card";
    case "text":
      return "bg-none hover:bg-card focus:outline-primaryHover text-gray-200";
    default:
      return "bg-card hover:bg-cardHover text-gray-200";
  }
};

/**
 * General button component
 * @returns
 */
const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const color = getButtonColor(props);
  const padding = props.large ? "py-4 px-6" : "py-2 px-4";

  const className = padding + " rounded " + color + " " + props.className;
  if (props.link) {
    return (
      <Link
        to={props.link}
        className={"inline-flex items-center   " + className}
        onClick={props.onClick}
      >
        {props.iconLeft && props.iconLeft}
        <p className={props.iconLeft ? " ml-2.5" : ""}>{props.children}</p>
      </Link>
    );
  }

  return (
    <button
      className={className + " flex"}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.iconLeft && props.iconLeft}
      <p className={props.iconLeft ? " ml-2.5" : ""}>{props.children}</p>
    </button>
  );
};

export default Button;
