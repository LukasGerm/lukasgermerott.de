import Typography from "./Typography";

type TextProps = React.PropsWithChildren<{ type?: "dark" | "light" }>;

export const Heading = (props: TextProps) => {
  return (
    <Typography
      variant="h1"
      className={
        "font-light leading-tight text-5xl " +
        (props.type === "dark" && "text-gray-800")
      }
    >
      {props.children}
    </Typography>
  );
};
