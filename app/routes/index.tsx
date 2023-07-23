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
import type { LoaderFunction } from "@remix-run/node";
import { t } from "i18next";

import { Heading } from "~/components/Heading";
import { Subheading } from "~/components/Subheading";
import { Text } from "~/components/Text";
import { TrackContentView } from "~/components/TrackContentView";
import { useTrackEvent } from "~/components/hooks/useTrackEvent";

export let meta: MetaFunction = () => {
  return {
    title: "Home | Lukas Germerott",
    description: t(
      "Web Development und Beratung für Unternehmen und Privatpersonen."
    ),
    "og:title": "Lukas Germerott Softwareengineering",
    "og:description": t(
      "Web Development und Beratung für Unternehmen und Privatpersonen."
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
  const trackEvent = useTrackEvent();
  return (
    <Container padding={6} className="max-w-screen-lg ml-auto mr-auto">
      <div className="flex justify-center items-center gap-16 flex-col md:flex-row">
        <div>
          <Heading type="light">
            {t("Professionelle Softwareentwicklung: Vision, Idee, Umsetzung ")}
          </Heading>
          <div className="pt-12">
            <Text>
              {t(
                "In meiner Karriere als Softwareentwickler wurde mir eine besonders wichtige Erkenntnis zuteil: Neben viel Erfahrung und hoher fachlicher Kompetenz stellt die exzellente Zusammenarbeit zwischen mir und meinen Auftraggebern letztendlich immer den entscheidenden, unabdingbaren und daher unverrückbaren Erfolgsfaktor dar, um Hand in Hand wirklich Großartiges zu erschaffen."
              )}
            </Text>
            <br />
            <Text>
              {t(
                "So bildet die enge und intensive Zusammenarbeit seit je her den absoluten Grundbaustein meiner Tätigkeit, welche sowohl die hochwertige Frontend-Entwicklung als auch die akribische Backend-Entwicklung sowie das maßgeschneiderte Consulting umfasst."
              )}
            </Text>
            <br />
            <Text>
              {t(
                "Daher gelingt es mir mit meinem sehr scharfsinnig durchdachtem Full Stack Development, meinen Auftraggebern, die einer Vielzahl von Branchen entspringen, regelmäßig ausgeklügelte Web-, App- und Softwarelösungen von allerhöchsten Qualitätsstandards bereitzustellen."
              )}
            </Text>
            <br />
            <Text>
              {t(
                "Nehmen Sie gerne jederzeit Kontakt zu mir auf, um im Rahmen eines unkomplizierten Erstkontakts in Erfahrung zu bringen, wie ich Ihnen mit meiner individuell maßgeschneiderten Softwareentwicklung bei der Erreichung Ihrer Ziele behilflich sein kann. "
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
                {t("Kontakt")}
              </Button>
            </TrackContentView>
            {activateBlog && (
              <Button large link="/blog" className="ml-8">
                {t("To my Blog")}
              </Button>
            )}
          </div>
        </div>
        <div className="hidden md:block flex-none">
          <img
            src={DeskImage}
            alt="Desktop"
            className="rounded-2xl h-96 object-cover w-64 "
          />
        </div>
      </div>
      <TrackContentView contentName="aboutme">
        <div className="flex justify-center items-center gap-16 mt-24 md:flex-row flex-col">
          <div className="flex-none">
            <img
              src={ProfilePicture}
              alt="Desktop"
              className="rounded-2xl md:w-48 md:h-52 object-cover"
            />
          </div>
          <div className="flex-row md:flex-col">
            <Heading variant="h2">
              {t("Softwareentwickler aus Leidenschaft!")}
            </Heading>
            <div className="pt-12">
              <Text>
                {t(
                  "Mein Name ist Lukas Germerott. Ich bin Softwareentwickler aus Osterode am Harz. "
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "Ich kann wirklich nur von Glück sprechen, meine große Leidenschaft für die Entwicklung besonders Mehrwert stiftender Anwendungen tagtäglich im Full Stack Development besonders anspruchsvoller Lösungen zum Ausdruck bringen zu können."
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "So konnte ich meinen Schwerpunkt bereits früh auf das professionelle Frontend Development verlagern. Im Rahmen dessen habe ich für verschiedene Geräte optisch ansprechende (Responsive Design), in ihrer Handhabbarkeit intuitiv sehr einfach bedienbare (Usability), für jegliche Personen völlig barrierefrei (Accessibility) nutzbare Lösungen geschaffen. "
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "Mittlerweile kann ich als Full Stack Developer mit weitreichender Expertise in der Entwicklung von Software für Millionen von Benutzern und entsprechend großem Repertoire an Fähigkeiten auf einen überaus großen Fundus an Erfahrungen zurückgreifen. "
                )}
              </Text>
              <br />
              <Text>
                {t(
                  "Ich bin als Softwareentwickler von dem Bestreben getrieben, meinen Auftraggebern mit hervorragend ineinandergreifenden Arbeitsprozessen ein derart herausragendes Ergebnis zu liefern, dass es in jeder Hinsicht von besonders großer Leidenschaft und exzellenten Fähigkeiten zeugt."
                )}
              </Text>
            </div>
            <div className="pt-10 flex">
              <TrackContentView contentName="button_learn_more_about_me">
                <Button large link="/aboutme" color="primary">
                  {t("Erfahre mehr")}
                </Button>
              </TrackContentView>
            </div>
          </div>
        </div>
      </TrackContentView>

      <TrackContentView contentName="services">
        <div className="flex bg-gray-100 px-10 md:px-16 py-8 md:py-14 mt-24 flex-col">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
            <Heading variant="h2" type="dark">
              {t("Mein Leistungsspektrum")}
            </Heading>
            <div className="max-w-xl">
              <Text type="dark">
                {t(
                  "Als Softwareentwickler bediene ich ein relativ weites Tätigkeitsfeld, welches in seiner Gesamtheit stark darauf zugeschnitten ist, meine Auftraggeber durch hoch effektive Lösungen zur effizienten Zielerreichung zu verhelfen."
                )}
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-screen-md ml-auto mr-auto mt-14 gap-28">
            <div className="flex flex-col gap-5 items-center flex-1">
              <img
                src={DevelopmentPicture}
                alt="Development"
                className="w-44 h-44 object-cover break-words"
              />
              <Subheading type="dark">{t("Development")}</Subheading>
              <Text type="dark">
                {t(
                  "Mit meiner auf größtmöglichen Kundennutzen fokussierten Backend- und Frontend-Entwicklung bin ich Ihnen gerne beim Aufbau Ihrer Webseite, der Veröffentlichung Ihrer Mobile-App oder der Entwicklung Ihrer benutzerdefinierten Software behilflich. Dabei kann ich als Full Stack Developer in diversen Bereichen auf einen sehr breiten Erfahrungsfundus zurückgreifen. Dazu gehören u. a. Themen wie Bildung, Freizeit, Unterhaltung, Kommunikation, Finanzen, Mobilität, Gesundheit, Sicherheit, Umwelt und vieles mehr. Viel Expertise und ein hohes Maß an Akribie gepaart mit einer ordentlichen Portion Raffinesse und einer guten Prise Antizipation: Das ist mein sehr erfolgreiches Rezept, um im Backend- und Frontend Development bis ins kleinste Detail durchdachte, äußerst hochwertige Web- und App-Entwicklungen zu erschaffen."
                )}
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-center flex-1">
              <img
                src={ConsultingPicture}
                alt="Consulting"
                className="w-44 h-44 object-cover"
              />
              <Subheading type="dark">{t("Consulting")}</Subheading>
              <Text type="dark">
                {t(
                  "Darüber hinaus werde ich im Consulting regelmäßig beratend tätig, um meine Kunden rund um Softwarelösungen in diversen Angelegenheiten mit starkem Businessbezug bei der systematischen Optimierung von Geschäftsprozessen zu unterstützen.  Meine beratenden Tätigkeiten im Consulting reichen von der Vereinfachung, Implementierung und Automatisierung komplexer Arbeitsprozesse bis zur systematischen Erarbeitung neuer Führungs- und Management Strategien über unterschiedlichste Aspekte der Personalbeschaffung, Personalentwicklung, Mitarbeiter- und Kundenbindung bis hin zur optimalen Vermarktung, Absatzsteigerung und vieles mehr. Im Rahmen des Consultings verschaffe ich mir gerne einen ersten Überblick, um die von Ihnen an mich gestellten Projektanforderungen, den vorgegebenen Zeitplan sowie das uns zur Verfügung stehende Budget in Erfahrung zu bringen. "
                )}
              </Text>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <TrackContentView contentName="button_learn_more_services">
              <Button
                large
                color="primary"
                link="/services"
                onClick={() => {
                  trackEvent("navigate_services");
                }}
              >
                {t("Erfahre mehr")}
              </Button>
            </TrackContentView>
          </div>
        </div>
      </TrackContentView>
      <div className="flex mt-24 items-center flex-col text-center">
        <Subheading>{t("Jetzt Angebot anfordern")}</Subheading>
        <div className="flex">
          <TrackContentView contentName="button_contact">
            <Button
              large
              color="primary"
              link="/contact"
              onClick={() => {
                trackEvent("navigate_contact");
              }}
            >
              {t("Kontakt")}
            </Button>
          </TrackContentView>
        </div>
      </div>
    </Container>
  );
}
