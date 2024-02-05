import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ProfilePicture from "../../assets/profile.avif";
import NewstopiaMockup from "../../assets/newstopia_mockup.png";
import MoreToCome from "../../assets/more_come.svg";
import ExternalLink from "~/components/ExternalLink";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Text } from "~/components/Text";
import { metaV1 } from "@remix-run/v1-meta";

export let meta: MetaFunction = (args) => {
  return metaV1(args, {
    title: t("About Me") + " | Lukas Germerott",
    description: t("About Lukas. Learn more about him and his craft."),
    "og:title": t("About Me") + " | Lukas Germerott",
    "og:description": t("About Lukas. Learn more about him and his craft."),
    "og:image": ProfilePicture,
  });
};

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="bg-background">
      <div className="max-w-screen-lg ml-auto mr-auto">
        <Container padding={6}>
          <Typography variant="h2" className="text-center">
            {t("About Me")}
          </Typography>
          <div className="flex justify-between mt-10 flex-col md:flex-row md:items-start items-center">
            <img
              className="rounded-xl max-h-52 object-cover max-w-md"
              alt="Lukas Germerott"
              src={ProfilePicture}
            />
            <div className="md:ml-24 mt-5 md:mt-0">
              <Typography className="font-semibold">
                {t("Hey ich bin Lukas")}
              </Typography>
              <Text>
                {t(
                  "Als Softwareentwickler bei AboutYou habe ich die Möglichkeit gehabt, an einer Vielzahl von Projekten zu arbeiten und wertvolle Erfahrungen bei der Erstellung hochwertiger Software für Millionen von Benutzern zu sammeln. Mit Schwerpunkt auf Frontend-Entwicklung und einem starken Hintergrund im Fullstack verfüge ich über die Fähigkeiten und das Know-how, um erstklassige Produkte zu liefern, die den Bedürfnissen einer breiten Kundenbasis gerecht werden."
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "Ich bin bekannt für meine Aufmerksamkeit für Details und mein Engagement für hervorragende Arbeit. Ich nehme mir die Zeit, die einzigartigen Anforderungen meiner Kunden zu verstehen und arbeite mit ihnen zusammen, um eine Lösung zu erstellen, die ihren Bedürfnissen entspricht. Meine technische Kompetenz in Kombination mit meinen starken Kommunikations- und Teamfähigkeiten machen mich zu einem wertvollen Bestandteil jedes Projekts."
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "In meiner aktuellen Rolle bei AboutYou habe ich ein tiefes Verständnis des Softwareentwicklungsprozesses erlangt und meine Fähigkeiten in verschiedenen Technologien geschärft. Ob Sie eine neue Website, eine App oder eine benutzerdefinierte Softwarelösung suchen, ich bin hier, um zu helfen. Ich bin immer bereit, noch ein Stückchen weiter zu gehen, um sicherzustellen, dass meine Kunden mit dem endgültigen Produkt zufrieden sind."
                )}
              </Text>
            </div>
          </div>
          <Typography variant="h2" className="text-center mt-10">
            {t("My Work")}
          </Typography>
          <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
            <div className="md:mr-24">
              <Typography className="font-semibold">Newstopia</Typography>
              <Text>
                {t(
                  "Newstopia ist eine Flutter-App, die es Benutzern ermöglicht, die neuesten Nachrichtenartikel aus der ganzen Welt zu durchsuchen. Es nutzt eine offene API, um die neuesten Nachrichtenartikel abzurufen und stellt sie in einem benutzerfreundlichen Feed dar, mit einem Fokus auf Einfachheit und Benutzerfreundlichkeit."
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "Newstopia wurde als Lernprojekt erstellt, um mir ein tieferes Verständnis von Flutter und den Fähigkeiten im App-Entwicklungsbereich zu vermitteln. Obwohl es nicht für den weit verbreiteten Einsatz bereit ist, zeigt die App meine Fähigkeit, mich in neue Themen einzuarbeiten und produktive Software zu erstelen."
                )}
              </Text>
              <ExternalLink
                href="https://github.com/LukasGerm/newstopia"
                className="mt-5"
              >
                {t("Visit Github")}
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
              {t("This is only the beginning.")}
            </Typography>
            <Typography className="text-center font-light">
              {t("Please come back later to see all of my projects!")}
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  );
}
