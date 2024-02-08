import type { MetaFunction } from "@remix-run/react/dist/routeModules";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import Container from "~/components/Container";
import ProfilePicture from "../assets/profile.avif";

import { isFeatureActive } from "~/services/featureFlags/featureFlags";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { t } from "i18next";

import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";
import { TrackContentView } from "~/components/TrackContentView";
import { useTrackEvent } from "~/components/hooks/useTrackEvent";

export let meta: MetaFunction = (args) => {
  return [
    {
      title: "Home | Lukas Germerott",
    },
    {
      name: "description",
      content: t("Web enthusiast from germany"),
    },
    {
      property: "og:title",
      content: "Lukas Germerott",
    },
    {
      property: "og:description",
      content: t("Web enthusiast from germany"),
    },

    {
      property: "og:image",
      content: ProfilePicture,
    },
  ];
};

export let loader: LoaderFunction = () => {
  return {
    activateBlog: isFeatureActive("blog"),
  };
};

interface LoaderData {
  activateBlog: boolean;
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { t } = useTranslation();
  const { activateBlog } = useLoaderData<LoaderData>();
  const trackEvent = useTrackEvent();
  return (
    <Container
      padding={6}
      className="max-w-screen-lg ml-auto mr-auto flex items-center py-8"
    >
      <div className="flex justify-center items-center gap-16 flex-col-reverse md:flex-row ">
        <div>
          <Heading type="light">{t("Hi, i'm Lukas")}</Heading>
          <div className="pt-10">
            <Text type="light">
              {t(
                "I am a web developer currently working at about you. I write software that many people can use. I am passionate about react, nodejs and typescript. This site mainly aims to show what I've been up to and write about things that are important to me."
              )}
            </Text>
          </div>

          <div className="pt-10 flex">
            <TrackContentView contentName="button_contact_top">
              <Button
                large
                link="/contact"
                color="primary"
                onClick={() => {
                  trackEvent("navigate_contact");
                }}
              >
                {t("Contact")}
              </Button>
            </TrackContentView>
            {activateBlog && (
              <Button large link="/blog" className="ml-8">
                {t("Read my blog")}
              </Button>
            )}
          </div>
        </div>
        <div className=" flex-none">
          <img
            src={ProfilePicture}
            alt="Thats Lukas Germerott"
            className="rounded-full h-64 w-64 object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
