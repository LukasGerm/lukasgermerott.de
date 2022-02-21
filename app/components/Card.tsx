interface CardProps {
  className?: string;
}
/**
 * Card which just shows a card
 * (Floor is made of floor)
 * @param props
 * @returns
 */
const Card = (props: React.PropsWithChildren<CardProps>) => {
  return (
    <div className={"bg-card px-8 py-6 rounded " + props.className}>
      {props.children}
    </div>
  );
};

export default Card;
