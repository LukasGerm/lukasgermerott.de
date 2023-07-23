import { useTranslation } from "react-i18next";
import type { ActionArgs, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { sendMail } from "~/services/email/emailService";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Heading } from "~/components/Heading";
import { getConfig } from "~/services/config/config";
import { useEffect, useRef, useState } from "react";
import { Toast } from "~/components/Toast";
import Input from "~/components/Input";
import Button from "~/components/Button";
import ProfilePicture from "../assets/profile.avif";

import { t } from "i18next";
import Typography from "~/components/Typography";
import Container from "~/components/Container";
import { TrackContentView } from "~/components/TrackContentView";
import { useTrackEvent } from "~/components/hooks/useTrackEvent";

export let meta: MetaFunction = () => {
  return {
    title: "Kontakt | Lukas Germerott",
    description: t("Kontaktiere mich jetzt für ein unverbindliches Angebot."),
    "og:title": "Lukas Germerott Softwareengineering",
    "og:description": t(
      "Kontaktiere mich jetzt für ein unverbindliches Angebot."
    ),
    "og:image": ProfilePicture,
  };
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const token = formData.get("cf-turnstile-response");
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");
  const number = formData.get("number");
  if (!token) {
    return json({
      success: false,
      error: "Cloudflare challange nicht erfolgreich",
    });
  }
  if (!email || !name || !number)
    return json({
      success: false,
      error: "Bitte alle Felder ausfüllen",
    });
  let cloudFlareData = new FormData();
  cloudFlareData.append("secret", process.env.TURNSTILE_SECRET!);
  cloudFlareData.append("response", token);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: cloudFlareData,
    method: "POST",
  });

  const outcome = await result.json();
  if (outcome.success) {
    try {
      await sendMail({
        email: email as string,
        name: name as string,
        number: number as string,
        subject: message ? (message as string) : undefined,
      });
      return json({ success: true, error: "" });
    } catch (error) {
      console.log("Error sending mail", error);
      return json({
        success: false,
        error: "Beim senden der E-Mail ist ein Fehler aufgetreten",
      });
    }
  }

  console.log("Challenge failed", outcome, token);

  return json({
    success: false,
    error: "Cloudflare challange nicht erfolgreich",
  });
}

export let loader: LoaderFunction = () => {
  return {
    config: getConfig(),
  };
};

export default function Contact() {
  const { config } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  return (
    <TrackContentView contentName="contact_form">
      <Container
        padding={6}
        className="flex justify-center items-center gap-16 mt-24 md:flex-row flex-col"
      >
        <div>
          <Heading type="light">{t("Jetzt kontaktieren")}</Heading>
        </div>
        <div className="w-auto md:w-2/4">
          <ContactForm turnstileSiteKey={config.turnstileSiteKey} />
        </div>
      </Container>
    </TrackContentView>
  );
}

const useRenderTurnstile = (container: string, siteKey: string) => {
  const [token, setToken] = useState<string | undefined>();
  useEffect(() => {
    // @ts-ignore
    turnstile?.render(container, {
      sitekey: siteKey,

      // @ts-ignore
      callback: function (responseToken) {
        setToken(responseToken);
      },
    });
  }, []);

  return token;
};

const ContactForm = (props: { turnstileSiteKey: string }) => {
  const { t } = useTranslation();
  const data = useActionData<typeof action>();
  const ref = useRef<HTMLFormElement>(null);
  const trackEvent = useTrackEvent();

  const token = useRenderTurnstile(
    "#turnstile-container",
    props.turnstileSiteKey
  );

  useEffect(() => {
    if (data && data.success !== undefined && ref.current) {
      ref.current.reset();
    }
  }, [data]);

  return (
    <Form method="post" ref={ref}>
      {data && data.success && (
        <Toast type="success">
          {t("Die Nachricht wurde erfolgreich versendet.")}
        </Toast>
      )}
      {data && data.success === false && (
        <Toast type="error">{t(data.error)}</Toast>
      )}
      <div className="flex gap-4 flex-col">
        <Input name="name" placeholder={t("Vollständiger Name*")!} required />
        <div className="flex gap-4">
          <Input
            name="email"
            type="email"
            placeholder={t("Email Adresse*")!}
            required
          />
          <Input
            name="number"
            type="number"
            placeholder={t("Telefonnummer*")!}
            required
          />
        </div>
        <Input name="message" placeholder={t("Betreff")!} />
        <Typography className="text-sm text-gray-500">
          {t(
            "Mit dem Absenden des Formulars stimmst du der Verarbeitung der Daten im Rahmen der Kontaktaufnahme zu."
          )}
        </Typography>
        <input type="hidden" name="cf-turnstile-response" value={token} />
        <div id="turnstile-container"></div>
        <div className="flex justify-end">
          <Button
            color="primary"
            type="submit"
            disabled={!token}
            onClick={() => {
              trackEvent("contact_form_submit");
            }}
          >
            {t("Absenden")}
          </Button>
        </div>
      </div>
    </Form>
  );
};
