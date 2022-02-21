import Card from "./Card";
import Typography from "./Typography";
import ProfilePicture from "../assets/profile.jpg";
import Button from "./Button";

interface AuthorCardProps {
  className?: string;
}

/**
 * Card which gets shown under every blog article which enables the user
 * to subscribe to the newsletter and read some informations about the author
 * @returns
 */
const AuthorCard = (props: AuthorCardProps) => {
  return (
    <Card className={props.className}>
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="col-span-6 md:col-span-1">
          <img
            src={ProfilePicture}
            alt="Lukas Germerott"
            className="rounded-full w-32"
          />
        </div>
        <div className="col-span-6 md:col-span-3">
          <Typography variant="h3" className="font-light">
            About the author
          </Typography>
          <Typography className="font-light pt-4 leading-7">
            Lukas Germerott is a Frontend Developer from germany with years of
            experience in creating software primarily in the b2b sector.
          </Typography>
        </div>
        <div className="col-span-6 md:col-span-2 flex justify-end">
          <Button className="rm-open-popup" color="primary" large>
            Subscribe
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuthorCard;
