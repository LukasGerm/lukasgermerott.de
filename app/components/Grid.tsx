import React from "react";

interface GridProps {
  className?: string;
}

/**
 * Grid component to form grids
 * @param props
 * @returns
 */
const Grid = (props: React.PropsWithChildren<GridProps>) => {
  let className = "grid grid-cols-6 ";

  if (props.className) {
    className += props.className;
  }

  return <div className={className}>{props.children}</div>;
};

interface GridItemProps {
  className?: string;
}

/**
 * Item of grid
 * @param props
 */
export const GridItem = (props: React.PropsWithChildren<GridItemProps>) => {
  const className = `${props.className}`;

  return <div className={className}>{props.children}</div>;
};
export default Grid;
