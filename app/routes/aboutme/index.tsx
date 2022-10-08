import { MetaFunction } from "@remix-run/node";
import React from "react";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ProfilePicture from "../../assets/profile.jpg";
import NewstopiaMockup from "../../assets/newstopia_mockup.png";
import MoreToCome from "../../assets/more_come.svg";
import ExternalLink from "~/components/ExternalLink";

export let meta: MetaFunction = () => {
  return {
    title: "About Me | Lukas Germerott",
    description: "About Lukas. Learn more about him and his craft.",
    "og:title": "About Me | Lukas Germerott",
    "og:description": "About Lukas. Learn more about him and his craft.",
    "og:image": ProfilePicture,
  };
};

export default function AboutMe() {
  return (
    <div className="bg-background">
      <div className="max-w-screen-xl ml-auto mr-auto">
        <Container padding={12}>
          <Typography variant="h2" className="text-center">
            About Me
          </Typography>
          <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
            <img
              className="rounded-full max-h-52"
              alt="Lukas Germerott"
              src={ProfilePicture}
            />
            <div className="md:ml-24 mt-5 md:mt-0">
              <Typography className="font-semibold">
                Hi I'm Lukas Germerott
              </Typography>
              <Typography className="font-light leading-relaxed">
                I am a frontend engineer from germany. I work in the industry
                for about four years now. I would consider myself as a
                professional frontend and react developer. I have started my own
                business in 2018 and since 2020 I am doing fulltime software
                engineering at a company here in germany. I love User Interfaces
                and User Experience.
              </Typography>
            </div>
          </div>
          <Typography variant="h2" className="text-center mt-10">
            My Work
          </Typography>
          <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
            <div className="md:mr-24">
              <Typography className="font-semibold">Newstopia</Typography>
              <Typography className="font-light leading-relaxed">
                Newstopia is one of my more recent journeys. I started to feel
                that I am not trying out enough technologies for my wellbeing,
                so I took a look at flutter. This project is a work in progress
                and will get additional features soon. At this moment it just
                shows the latest news.
              </Typography>
              <ExternalLink
                href="https://github.com/LukasGerm/newstopia"
                className="mt-5"
              >
                Visit Github
              </ExternalLink>
            </div>
            <img
              className="max-h-96 md:mt-0 mt-5"
              src={NewstopiaMockup}
              alt="Newstopia mockup"
            />
          </div>
          <div className="mt-10 flex justify-center flex-col items-center pb-10">
            <img
              src={MoreToCome}
              className="max-h-36"
              alt="More to come placeholder"
            />
            <Typography className="mt-2 font-semibold">More to Come</Typography>
            <Typography className="text-center font-light">
              This is only the beginning. <br /> Please come back later to see
              all of my projects!
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  );
}
