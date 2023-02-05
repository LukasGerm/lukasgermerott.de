import type { MetaFunction } from "@remix-run/react/dist/routeModules";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import Container from "~/components/Container";
import ProfilePicture from "../assets/profile.avif";
import DevelopmentPicture from "../assets/development.svg";
import ConsultingPicture from "../assets/consulting.svg";
import { isFeatureActive } from "~/services/featureFlags/featureFlags";
import DeskImage from "../assets/desktop.avif";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { t } from "i18next";

import { Heading } from "~/components/Heading";
import { Subheading } from "~/components/Subheading";
import { Text } from "~/components/Text";

export let meta: MetaFunction = () => {
  return {
    title: "Home | Lukas Germerott",
    description: t(
      "Hi, welcome to my website. Check it out for interesting articles and other cool new projects every week."
    ),
    "og:title": "Lukas Germerott Softwareengineering",
    "og:description": t(
      "Hi, welcome to my website. Check it out for interesting articles and other cool new projects every week."
    ),
    "og:image": ProfilePicture,
  };
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
  return (
    <Container padding={12} className="max-w-screen-xl ml-auto mr-auto">
      <div className="flex justify-center items-center gap-16">
        <div className="w-full md:w-2/4">
          <Heading type="light">
            {t("Lass uns etwas großartiges vollbringen")}
          </Heading>
          <div className="pt-12">
            <Text>
              {t(
                "Zusammenarbeit ist der Schlüssel zur Schaffung von Großartigem. Lass uns zusammenarbeiten und mit unseren einzigartigen Fähigkeiten und Perspektiven einen echten Einfluss ausüben. Kontaktieren Sie uns, um zu besprechen, wie wir Ihnen helfen können, Ihre Ziele zu erreichen."
              )}
            </Text>
          </div>
          <div className="pt-10 flex">
            <Button large link="/contact" color="primary">
              {t("Kontakt")}
            </Button>
            {activateBlog && (
              <Button large link="/blog" className="ml-8">
                {t("To my Blog")}
              </Button>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={DeskImage}
            alt="Desktop"
            className="rounded-2xl w-72 h-96 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 mt-24 md:flex-row flex-col">
        <div>
          <img
            src={ProfilePicture}
            alt="Desktop"
            className="rounded-2xl md:w-48 md:h-52 object-cover"
          />
        </div>
        <div className="w-auto md:w-2/4">
          <Heading type="light">{t("Schön dich kennenzulernen!")}</Heading>
          <div className="pt-12">
            <Text>
              {t(
                "Hey, ich bin Lukas! Ich bin ein Softwareentwickler aus Osterode am Harz mit Schwerpunkt auf Frontend-Entwicklung und einem starken Hintergrund in Fullstack. Mit Erfahrung im Erstellen von Software für Millionen von Benutzern habe ich die Fähigkeiten und das Know-how, um Spitzenprodukte zu liefern, die den Bedürfnissen einer breiten Klientel gerecht werden. Meine Aufmerksamkeit für Details und mein Engagement für Exzellenz machen mich zu einem wertvollen Plus für jedes Projekt. Lass uns gemeinsam Großartiges schaffen - kontaktiere mich, um deine Bedürfnisse zu besprechen."
              )}
            </Text>
          </div>
          <div className="pt-10 flex">
            <Button large link="/aboutme" color="primary">
              {t("Erfahre mehr")}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 px-10 md:px-16 py-8 md:py-14 mt-24 flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
          <Heading type="dark">{t("Meine Dienste")}</Heading>
          <div className="max-w-xl">
            <Text type="dark">
              {t(
                "Ich biete eine Reihe von Dienstleistungen an, um meinen Kunden bei der Erreichung ihrer Ziele zu helfen, ob sie eine neue Website, eine App oder eine andere benutzerdefinierte Softwarelösung suchen. Ich bin stolz darauf, erstklassige Arbeit zu liefern und nehme mir die Zeit, die einzigartigen Anforderungen meiner Kunden zu verstehen."
              )}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-screen-md ml-auto mr-auto mt-14 gap-28">
          <div className="flex flex-col gap-5 items-center">
            <img
              src={DevelopmentPicture}
              alt="Development"
              className="w-44 h-44 object-cover"
            />
            <Subheading type="dark">{t("Development")}</Subheading>
            <Text type="dark">
              {t(
                "Ich biete hochwertige Web- und App-Entwicklungsdienstleistungen mit Fokus auf Fullstack-Entwicklung an. Ob Sie eine neue Website aufbauen, eine Mobile-App starten oder eine benutzerdefinierte Software entwickeln möchten, ich verfüge über die Fähigkeiten und das Know-how, um Ihnen bei Ihrem Erfolg zu helfen. Kontaktieren Sie mich, um mehr darüber zu erfahren, wie ich Sie bei Ihrem Entwicklungsprojekt unterstützen kann."
              )}
            </Text>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={ConsultingPicture}
              alt="Consulting"
              className="w-44 h-44 object-cover"
            />
            <Subheading type="dark">{t("Consulting")}</Subheading>
            <Text type="dark">
              {t(
                "Ich biete Beratungsdienstleistungen an, um meinen Kunden bei der Erreichung ihrer Ziele zu unterstützen. Ob Sie Ihre Geschäftsprozesse verbessern, Ihre Betriebsabläufe optimieren oder eine neue Strategie entwickeln möchten, ich verfüge über die Fähigkeiten und das Know-how, um Ihnen bei Ihrem Erfolg zu helfen. Kontaktieren Sie mich, um mehr darüber zu erfahren, wie ich Sie bei Ihren Beratungsanforderungen unterstützen kann."
              )}
            </Text>
          </div>
        </div>
        <div className="flex mt-24 items-center flex-col text-center">
          <Subheading type="dark">{t("Jetzt Angebot anfordern")}</Subheading>
          <div className="pt-8 flex">
            <Button large color="primary" link="/contact">
              {t("Kontakt")}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
