import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import NotFound from "../assets/not_found.svg";
const NotFoundBoundary = () => {
  return (
    <div className="flex justify-center h-full items-center flex-col">
      <img src={NotFound} className="max-h-36" alt="No content found" />

      <Typography className="mt-5">
        Oops! Looks like you tried to visit a page that does not exist.
      </Typography>
      <Button link="/" className="mt-5">
        Get Back to Home
      </Button>
    </div>
  );
};

export default NotFoundBoundary;
