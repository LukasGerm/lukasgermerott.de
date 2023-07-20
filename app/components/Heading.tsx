import Typography from "./Typography";

type TextProps = React.PropsWithChildren<{ type?: "dark" | "light" }>;

export const Heading = (props: TextProps) => {
  return (
    <Typography
      variant="h1"
      overrideSize
      className={
        "font-light leading-tight md:text-5xl text-3xl " +
        (props.type === "dark" && "text-gray-800")
      }
    >
      {props.children}
    </Typography>
  );
};
