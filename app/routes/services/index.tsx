import type { MetaFunction } from "@remix-run/node";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ProfilePicture from "../../assets/profile.avif";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Text } from "~/components/Text";
import { Subheading } from "~/components/Subheading";
import Button from "~/components/Button";
import ConsultingPicture from "../../assets/consulting.svg";
import PerformancePicture from "../../assets/performance.svg";
import DevelopmentPicture from "../../assets/development2.svg";
import PairprogrammingPicture from "../../assets/pairprogramming.svg";
export let meta: MetaFunction = () => {
  return {
    title: t("Dienstleistungen") + " | Lukas Germerott",
    description: t("Dienstleistungen von Lukas Germerott"),
    "og:title": t("Dienstleistungen") + " | Lukas Germerott",
    "og:description": t("Dienstleistungen von Lukas Germerott"),
    "og:image": ProfilePicture,
  };
};

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="bg-background">
      <div className="px-6 h-full max-w-screen-lg ml-auto mr-auto">
        <Container padding={6}>
          <Typography variant="h2" className="text-center">
            {t("Meine Dienstleistungen")}
          </Typography>
        </Container>
        <div className="flex bg-gray-100 px-10 md:px-16 py-8 md:py-14 mt-24 justify-center items-center gap-16 flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <Subheading type="dark">
              Fachkundige Beratung für Web- und JavaScript-Lösungen
            </Subheading>
            <Text type="dark">
              Als ein erfahrener Softwareentwickler bringe ich umfassende
              Kenntnisse und praktische Fertigkeiten im Bereich der Web- und
              JavaScript-Technologien mit. Ich biete individuelle, auf Ihre
              speziellen Bedürfnisse und Ziele abgestimmte Beratung an. Egal, ob
              Sie ein großes oder kleines Projekt planen, ich helfe Ihnen dabei,
              die richtigen Technologieentscheidungen zu treffen und optimale
              Lösungen für Ihre Web-Projekte zu finden. Durch die Verbindung von
              technischer Expertise und einer klaren Kommunikation kann ich
              Ihnen helfen, Ihre digitalen Visionen in greifbare Ergebnisse
              umzusetzen.
            </Text>
          </div>
          <img
            src={ConsultingPicture}
            alt="Consulting"
            className="w-full md:w-2/5 flex-1"
          />
        </div>
        <div className="flex mt-24 justify-center items-center gap-16 flex-col md:flex-row">
          <img
            src={PerformancePicture}
            alt="Performance"
            className="w-full md:w-2/5 flex-1"
          />
          <div className="w-full md:w-3/5">
            <Subheading>
              Fachkundige Beratung für Web- und JavaScript-Lösungen
            </Subheading>
            <Text>
              Eine performante, schnelle und reaktionsschnelle Webseite ist von
              entscheidender Bedeutung für das Nutzererlebnis und die allgemeine
              Akzeptanz Ihrer Web-Anwendung. Als erfahrener Webentwickler mit
              einem spezialisierten Fokus auf Performance-Optimierung biete ich
              umfassende Analysen und Verbesserungsvorschläge für Ihre
              Web-Projekte.
            </Text>
            <br />

            <Text>
              Mit meinem Verständnis von Aspekten wie Bundle Size bei
              Single-Page Applications (SPAs), Web Vitals und anderen wichtigen
              Metriken identifiziere ich gezielt Leistungseinbußen und arbeite
              effektive Lösungen aus. Ich analysiere und optimiere Ihren Code,
              reduziere überflüssige oder redundante Daten, verbessere
              Ladezeiten und stelle sicher, dass Ihre Webseite ein optimales
              Nutzererlebnis bietet.
            </Text>
            <br />

            <Text>
              Von der ersten Leistungsdiagnose bis hin zur endgültigen
              Optimierung begleite ich Sie durch den gesamten Prozess. Meine
              spezialisierte Performance-Analyse wird dazu beitragen, dass Ihre
              Web-Anwendung stets zuverlässig und effizient läuft und die
              Nutzerzufriedenheit erhöht.
            </Text>
          </div>
        </div>
        <div className="flex bg-gray-100 px-10 md:px-16 py-8 md:py-14 mt-24 justify-center items-center gap-16 flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <Subheading type="dark">
              Innovative Neuentwicklung von maßgeschneiderten Anwendungen
            </Subheading>
            <Text type="dark">
              Egal, ob Sie eine einfache Anwendung zur Verbesserung Ihrer
              Geschäftsabläufe oder eine komplexe Softwarelösung zur
              Realisierung Ihrer innovativen Ideen benötigen, ich bin bereit,
              Ihre Vision in die Realität umzusetzen. Mit einem starken Fokus
              auf Qualität, Performance und Benutzerfreundlichkeit entwickle ich
              maßgeschneiderte Softwarelösungen, die Ihre spezifischen
              Anforderungen erfüllen. Mit einem Auge für Details und einem
              Verständnis für die neuesten Technologietrends erstelle ich
              Anwendungen, die nicht nur Ihre aktuellen Bedürfnisse erfüllen,
              sondern auch zukunftssicher sind.
            </Text>
          </div>
          <img
            src={DevelopmentPicture}
            alt="Development"
            className="w-full md:w-2/5 flex-1"
          />
        </div>
        <div className="flex mt-24 justify-center items-center gap-16 flex-col md:flex-row">
          <img
            src={PairprogrammingPicture}
            alt="Performance"
            className="w-full md:w-2/5 flex-1"
          />
          <div className="w-full md:w-3/5">
            <Subheading>Erfahrene Mitarbeit in Ihren Projekten</Subheading>
            <Text>
              Als versierter Webentwickler mit breitgefächertem technischem
              Wissen und umfassender Erfahrung in Architektur und
              Entwicklungsbest Practices, biete ich meine Expertise für Ihre
              Softwareprojekte an.
            </Text>
            <br />
            <Text>
              Ich helfe dabei, entscheidende Architekturentscheidungen zu
              treffen, um eine robuste, skalierbare und wartbare
              Softwarearchitektur zu entwerfen und umzusetzen. Dabei liegt mein
              Fokus nicht nur auf den Bedürfnissen der Endbenutzer, sondern
              ebenso auf der Verbesserung der Developer Experience. Ich arbeite
              daran, die Entwicklungsprozesse effizienter und klarer zu
              gestalten und ein produktives und kreatives Umfeld für Entwickler
              zu schaffen.
            </Text>
            <br />

            <Text>
              Mit meiner Erfahrung und meinem Engagement für qualitativ
              hochwertige Arbeit können Sie sicher sein, dass Ihre Projekte
              erfolgreich und zeitgerecht umgesetzt werden. Ich biete nicht nur
              technische Expertise, sondern auch einen engagierten Partner, der
              sich für den Erfolg Ihres Projekts einsetzt.
            </Text>
          </div>
        </div>
        <div className="flex mt-24 items-center flex-col text-center">
          <Subheading>{t("Jetzt Kontakt aufnehmen")}</Subheading>
          <div className="pt-8 flex">
            <Button large color="primary" link="/contact">
              {t("Kontakt")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
