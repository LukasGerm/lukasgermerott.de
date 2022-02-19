import React from "react";

interface ExternalLinkProps {
  href: string;
  className?: string;
}
/**
 * Is used to show external links
 * @param props
 */
const ExternalLink = (props: React.PropsWithChildren<ExternalLinkProps>) => {
  const className = "text-sky-400 hover:text-sky-500 " + props.className;
  return (
    <a href={props.href} className={className} target="_blank">
      {props.children}
    </a>
  );
};

export default ExternalLink;
