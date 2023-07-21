import Typography from "./Typography";

type TextProps = React.PropsWithChildren<{
  type?: "dark" | "light";
  bold?: boolean;
}>;

export const Text = (props: TextProps) => {
  return (
    <Typography
      overrideSize
      className={
        "leading-8 text-justify " +
        (props.type === "dark" && "text-gray-800") +
        (props.bold ? " font-bold" : " font-light")
      }
    >
      {props.children}
    </Typography>
  );
};
