import { MetaFunction } from "@remix-run/react/routeModules";
import React from "react";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ProfilePicture from "../../assets/profile.jpg";
import NewstopiaMockup from "../../assets/newstopia_mockup.png";
import MoreToCome from "../../assets/more_come.svg";
export let meta: MetaFunction = () => {
  return {
    title: "About Me | Lukas Germerott",
    description: "Welcome to the homepage of lukas",
  };
};

export default function AboutMe() {
  return (
    <div className="bg-background">
      <div className="max-w-screen-xl ml-auto mr-auto">
        <Container padding={24}>
          <Container className="lg:px-24">
            <Typography variant="h2" className="text-center">
              About Me
            </Typography>
            <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
              <img className="rounded-full max-h-52" src={ProfilePicture} />
              <div className="md:ml-24 mt-5 md:mt-0">
                <Typography className="font-semibold">
                  Lukas Germerott
                </Typography>
                <Typography className="font-light leading-relaxed">
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
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
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </div>
              <img className="max-h-96 md:mt-0 mt-5" src={NewstopiaMockup} />
            </div>
            <div className="mt-10 flex justify-center flex-col items-center pb-10">
              <img src={MoreToCome} className="max-h-36" />
              <Typography className="mt-2 font-semibold">
                More to Come
              </Typography>
              <Typography className="text-center font-light">
                This is only the beginning. <br /> Please come back later to see
                all of my projects.
              </Typography>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
}
