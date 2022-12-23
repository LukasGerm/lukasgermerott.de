import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import NotFound from "../assets/not_found.svg";
import { useTranslation } from "react-i18next";
const NotFoundBoundary = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center h-full items-center flex-col">
      <img src={NotFound} className="max-h-36" alt="No content found" />

      <Typography className="mt-5">
        {t("Oops! Looks like you tried to visit a page that does not exist.")}
      </Typography>
      <Button link="/" className="mt-5">
        {t("Go back to the homepage")}
      </Button>
    </div>
  );
};

export default NotFoundBoundary;
