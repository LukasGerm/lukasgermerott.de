import i18next from "i18next";
import Backend from "i18next-http-backend";
import { hydrate } from "react-dom";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { RemixBrowser } from "@remix-run/react";
import { getInitialNamespaces } from "remix-i18next";
import i18n from "./i18n";

fetch("/locale")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Failed to fetch locale");
  })
  .then((json) => {
    i18next
      .use(initReactI18next) // Tell i18next to use the react-i18next plugin
      .use(Backend) // Setup your backend
      .init({
        ...i18n, // spread the configuration
        // This function detects the namespaces your routes rendered while SSR use
        ns: getInitialNamespaces(),
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        lng: json.locale,
        detection: {
          // Here only enable htmlTag detection, we'll detect the language only
          // server-side with remix-i18next, by using the `<html lang>` attribute
          // we can communicate to the client the language detected server-side
          order: ["htmlTag"],
          // Because we only use htmlTag, there's no reason to cache the language
          // on the browser, so we disable it
          caches: [],
        },
      })
      .then(() => {
        // After i18next has been initialized, we can hydrate the app
        // We need to wait to ensure translations are loaded before the hydration
        // Here wrap RemixBrowser in I18nextProvider from react-i18next
        return hydrate(
          <I18nextProvider i18n={i18next}>
            <RemixBrowser />
          </I18nextProvider>,
          document
        );
      });
  });
