import * as React from "react";

import Navigation from "./components/Navigation";
import Favicon from "./assets/favicon.png";
import highlight from "highlight.js/styles/atom-one-dark.css";
import NotFoundBoundary from "./components/NotFoundBoundary";
import type { Config } from "./services/config/types/Config";
import tailwind from "./styles/app.css";
import { getConfig } from "./services/config/config";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { isFeatureActive } from "./services/featureFlags/featureFlags";
import { Footer } from "./components/Footer";

export let loader: LoaderFunction = () => {
  return {
    config: getConfig(),
    locale: process.env.LANGUAGE,
    activateBlog: isFeatureActive("blog"),
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: highlight },

  { rel: "icon", href: Favicon },
];

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};
/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  const loaderData = useLoaderData<{
    config: Config;
    locale: string;
    activateBlog: boolean;
  }>();
  return (
    <Document
      language={loaderData.locale}
      googleAnalyticsCode={loaderData.config.googleAnalyticsCode}
    >
      <Layout activateBlog={loaderData.activateBlog}>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
  googleAnalyticsCode,
  language,
}: {
  children: React.ReactNode;
  title?: string;
  googleAnalyticsCode?: string;
  language?: string;
}) {
  return (
    <html lang={language || "en"}>
      <head>
        {googleAnalyticsCode && (
          <>
            <script
              async
              src={
                "https://www.googletagmanager.com/gtag/js?id=" +
                googleAnalyticsCode
              }
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            <!-- Google tag (gtag.js) -->
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${googleAnalyticsCode}');
        `,
              }}
            />
          </>
        )}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
          async
          defer
        ></script>
      </head>
      <body>
        {children}

        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({
  children,
  activateBlog,
}: React.PropsWithChildren<{ activateBlog?: boolean }>) {
  return (
    <div>
      <header className="absolute w-full">
        <Navigation activateBlog={activateBlog} />
      </header>
      <main>
        <div className="bg-background py-32 min-h-screen">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  return (
    <div>
      <NotFoundBoundary />
    </div>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(function RouteChangeAnnouncement() {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
    >
      {innerHtml}
    </div>
  );
});
