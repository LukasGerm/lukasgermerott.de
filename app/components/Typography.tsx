import React from "react";

interface TypographyProps {
  variant?: "p" | "h1" | "h2" | "h3" | "h4";
  /**
   * Classname which gets added to default one
   */
  className?: string;
  /**
   * Should a standard hover effect be applied
   */
  hover?: boolean;
}

/**
 * Typography
 * @param props
 * @returns
 */
const Typography = (props: React.PropsWithChildren<TypographyProps>) => {
  let className = "text-gray-200 " + (props.className ? props.className : "");
  if (props.hover) {
    className += " hover:text-gray-300";
  }
  // check for variants
  if (props.variant === "h1") {
    return <h1 className={className + " text-7xl"}>{props.children}</h1>;
  }
  if (props.variant === "h2") {
    return <h2 className={className + " text-4xl"}>{props.children}</h2>;
  }
  if (props.variant === "h3") {
    return <h3 className={className + " text-2xl"}>{props.children}</h3>;
  }
  if (props.variant === "h4") {
    return <h3 className={className + " text-xl"}>{props.children}</h3>;
  }

  return <p className={className}>{props.children}</p>;
};

export default Typography;
