import React from "react";

interface ContainerProps {
  className?: string;
  padding?: 6 | 12 | 16 | 18 | 24;
}

const getContainerPadding = (props: ContainerProps) => {
  switch (props.padding) {
    case 6:
      return "px-6";
    case 12:
      return "px-12";
    case 16:
      return "px-16";
    case 18:
      return "px-18";
    case 24:
      return "px-24";
    default:
      return "";
  }
};

/**
 * Adds padding
 * @param props
 * @returns
 */
const Container = (props: React.PropsWithChildren<ContainerProps>) => {
  const padding = getContainerPadding(props);
  return (
    <div className={padding + " " + (props.className ? props.className : "")}>
      {props.children}
    </div>
  );
};

export default Container;
