import Card from "./Card";
import Typography from "./Typography";
import ProfilePicture from "../assets/profile.jpg";
import Button from "./Button";
import { useTranslation } from "react-i18next";

interface AuthorCardProps {
  className?: string;
}

/**
 * Card which gets shown under every blog article which enables the user
 * to subscribe to the newsletter and read some informations about the author
 * @returns
 */
const AuthorCard = (props: AuthorCardProps) => {
  const { t } = useTranslation();
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
            {t("About the Author")}
          </Typography>
          <Typography className="font-light pt-4 leading-7">
            {t(
              "Lukas Germerott is a Frontend Developer from germany with years of experience in creating software primarily for customers."
            )}
          </Typography>
        </div>
        <div className="col-span-6 md:col-span-2 flex justify-end">
          <Button className="rm-open-popup" color="primary" large>
            {t("Subscribe")}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuthorCard;
