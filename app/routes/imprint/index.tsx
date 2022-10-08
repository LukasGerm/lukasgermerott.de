import { MetaFunction } from "@remix-run/node";
import React from "react";
import Container from "~/components/Container";
import Typography from "~/components/Typography";

export let meta: MetaFunction = () => {
  return {
    title: "Imprint | Lukas Germerott",
    description: "Lukas Blog",
  };
};

export default function Imprint() {
  return (
    <div className="bg-background">
      <Container padding={6}>
        <div className="max-w-screen-sm ml-auto mr-auto ">
          <Typography variant="h2">Angaben gemäß § 5 TMG</Typography>
          <Typography className="mt-2">
            <b>Lukas Germerott Software Engineering</b>
          </Typography>
          <Typography>Lukas Germerott</Typography>
          <Typography>Schildwache 9</Typography>
          <Typography>37520 Osterode am Harz</Typography>
          <Typography>
            <b>Kontakt</b>
          </Typography>
          <Typography>Telefon: 015161228182</Typography>
          <Typography>E-Mail: hi@lukasgermerott.de</Typography>
          <Typography variant="h3" className="mt-2">
            Redaktionell Verantwortlicher
          </Typography>
          <Typography>Lukas Germerott</Typography>
          <Typography variant="h3" className="mt-2">
            Verbraucherstreitbeilegung/ Universalschlichtungsstelle
          </Typography>
          <Typography>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Typography>
          <Typography variant="h3" className="mt-2">
            Haftung für Inhalte
          </Typography>
          <Typography>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>
          <Typography variant="h3" className="mt-2">
            Haftung für Links
          </Typography>
          <Typography>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </Typography>
          <Typography variant="h3" className="mt-2">
            Urheberrecht
          </Typography>
          <Typography>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
