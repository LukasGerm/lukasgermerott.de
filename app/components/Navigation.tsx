import React, { useState } from "react";
import Typography from "./Typography";
import Favicon from "../assets/favicon.png";
import Divider from "./Divider";

import { Link } from "@remix-run/react";

import LogoBanner from "../assets/Banner.png";
import { useTranslation } from "react-i18next";

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

const NavigationElements = (props: { activateBlog?: boolean }) => {
  const { t } = useTranslation();
  return (
    <>
      <li>
        <Link to="/">
          <Typography hover>{t("Home")}</Typography>
        </Link>
      </li>
      {props.activateBlog && (
        <li>
          <Link to="/blog">
            <Typography hover>{t("Blog")}</Typography>
          </Link>
        </li>
      )}
      <li>
        <Link to="/contact">
          <Typography hover>{t("Contact")}</Typography>
        </Link>
      </li>
      <li>
        <Link to="https://github.com/LukasGerm" target="_blank">
          <Typography hover>{t("GitHub")}</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/lukas-germerott-39ba6516b/"
          target="_blank"
        >
          <Typography hover>{t("LinkedIn")}</Typography>
        </Link>
      </li>
    </>
  );
};

const Navigation = (props: { activateBlog?: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => {
    setMobileOpen(false);
  };
  return (
    <div className="bg-card px-8 py-4 w-full md:w-auto">
      <nav aria-label="Main navigation">
        <div className="md:hidden cursor-pointer flex justify-between items-center">
          <Link to="/">
            <img
              src={Favicon}
              className="max-h-10"
              alt="Lukas Germerott Favicon"
            />
          </Link>
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
        <ul className="items-center hidden md:flex justify-between">
          <div>
            <Link to="/">
              <img
                src={LogoBanner}
                className="max-h-14"
                alt="Lukas Germerott Logo"
              />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <NavigationElements activateBlog={props.activateBlog} />
          </div>
        </ul>
        <div className={(!mobileOpen ? "hidden" : "") + " md:hidden"}>
          <ul className="flex flex-col gap-3 pt-3">
            <NavigationElements activateBlog={props.activateBlog} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
