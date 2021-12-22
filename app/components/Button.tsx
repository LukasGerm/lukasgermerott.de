import React from "react";
import { Link } from "remix";
import Typography from "./Typography";

interface ButtonProps {
  color?: "primary";
  large?: boolean;
  link?: string;
  className?: string;
}

/**
 * Helperfunction to determine buttoncolor
 * @param props
 * @returns
 */
const getButtonColor = (props: ButtonProps) => {
  switch (props.color) {
    case "primary":
      return "bg-primary hover:bg-primaryHover";
    default:
      return "bg-card hover:bg-cardHover";
  }
};

/**
 * General button component
 * @returns
 */
const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const color = getButtonColor(props);
  const padding = props.large ? "py-4 px-8" : "py-2 px-4";

  const className = padding + " rounded " + color + " " + props.className;
  if (props.link) {
    return (
      <Link
        to={props.link}
        className={
          "inline-flex items-center focus:outline-primaryHover  " + className
        }
      >
        <Typography>{props.children}</Typography>
      </Link>
    );
  }
  return (
    <button className={className}>
      <Typography>{props.children}</Typography>
    </button>
  );
};

export default Button;
