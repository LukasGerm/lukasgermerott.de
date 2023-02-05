import Typography from "./Typography";

type TextProps = React.PropsWithChildren<{ type?: "dark" | "light" }>;

export const Text = (props: TextProps) => {
  return (
    <Typography
      className={
        "font-light leading-8 text-justify " +
        (props.type === "dark" && "text-gray-800")
      }
    >
      {props.children}
    </Typography>
  );
};
