import React from "react";
import { Link } from "remix";
import Typography from "./Typography";

interface ButtonProps {
  color?: "primary" | "text";
  large?: boolean;
  link?: string;
  className?: string;
  iconLeft?: JSX.Element;
}

/**
 * Helperfunction to determine buttoncolor
 * @param props
 * @returns
 */
const getButtonColor = (props: ButtonProps) => {
  switch (props.color) {
    case "primary":
      return "bg-primary hover:bg-primaryHover focus:outline-primaryHover";
    case "text":
      return "bg-none hover:bg-card focus:outline-primaryHover";
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
  const padding = props.large ? "py-4 px-6" : "py-2 px-4";

  const className = padding + " rounded " + color + " " + props.className;
  if (props.link) {
    return (
      <Link
        to={props.link}
        className={"inline-flex items-center   " + className}
      >
        {props.iconLeft && props.iconLeft}
        <Typography className={props.iconLeft ? " ml-2.5" : ""}>
          {props.children}
        </Typography>
      </Link>
    );
  }
  return (
    <button className={className + " flex"}>
      {props.iconLeft && props.iconLeft}
      <Typography className={props.iconLeft ? " ml-2.5" : ""}>
        {props.children}
      </Typography>
    </button>
  );
};

export default Button;
