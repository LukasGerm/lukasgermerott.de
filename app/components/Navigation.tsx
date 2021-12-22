import React, { useState } from "react";
import { Link } from "remix";
import Typography from "./Typography";
import Favicon from "../assets/favicon.png";
import Divider from "./Divider";

interface IconProps {
  onClick?(): void;
}

const BurgerMenuIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      className="hover:cursor-pointer"
      onClick={() => {
        props.onClick?.();
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const CloseIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      className="hover:cursor-pointer"
      onClick={() => {
        props.onClick?.();
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => {
    setMobileOpen(false);
  };

  return (
    <div className="bg-card px-8 py-4 rounded-2xl w-full md:w-auto">
      <nav aria-label="Main navigation">
        <div className="md:hidden cursor-pointer flex justify-between items-center">
          <img
            src={Favicon}
            className="max-h-10"
            alt="Lukas Germerott Favicon"
          />
          <div className="h-8 w-8 md:hidden">
            {mobileOpen ? (
              <CloseIcon onClick={handleClose} />
            ) : (
              <BurgerMenuIcon
                onClick={() => {
                  setMobileOpen(!mobileOpen);
                }}
              />
            )}
          </div>
        </div>
        <ul className="items-center hidden md:flex">
          <li className="mr-10">
            <Link to="/">
              <Typography hover>Home</Typography>
            </Link>
          </li>
          <li className="mr-10">
            <Link to="/blog">
              <Typography hover>Blog</Typography>
            </Link>
          </li>
          <li className="mr-10 ">
            <Link to="/work">
              <Typography hover>My Work</Typography>
            </Link>
          </li>
          <li className="">
            <Link to="/imprint">
              <Typography hover>Imprint</Typography>
            </Link>
          </li>
        </ul>
        <div className={(!mobileOpen ? "hidden" : "") + " md:hidden"}>
          <ul className="flex flex-col">
            <li className="p-2" onClick={handleClose}>
              <Link to="/">
                <Typography hover>Home</Typography>
              </Link>
            </li>
            <Divider />
            <li className="p-2" onClick={handleClose}>
              <Link to="/blog">
                <Typography hover>Blog</Typography>
              </Link>
            </li>
            <Divider />

            <li className="p-2" onClick={handleClose}>
              <Link to="/work">
                <Typography hover>My Work</Typography>
              </Link>
            </li>
            <Divider />

            <li className="p-2" onClick={handleClose}>
              <Link to="/imprint">
                <Typography hover>Imprint</Typography>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
