import Typography from "./Typography";

type TextProps = React.PropsWithChildren<{ type?: "dark" | "light" }>;

export const Subheading = (props: TextProps) => {
  return (
    <Typography
      overrideSize
      variant="h2"
      className={
        "font-light mb-4 leading-tight text-3xl " +
        (props.type === "dark" && "text-gray-800")
      }
    >
      {props.children}
    </Typography>
  );
};
