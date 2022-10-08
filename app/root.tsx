import * as React from "react";

import LogoBanner from "./assets/Banner.png";
import styles from "./styles/app.css";
import Navigation from "./components/Navigation";
import Favicon from "./assets/favicon.png";
import highlight from "highlight.js/styles/atom-one-dark.css";
import NotFoundBoundary from "./components/NotFoundBoundary";
import { Config } from "./services/config/types/Config";
import { getConfig } from "./services/config/config";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { LoaderFunction, LinksFunction } from "@remix-run/node";

export let loader: LoaderFunction = () => {
  return getConfig();
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: highlight },
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: Favicon },
  ];
};

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  const loaderData = useLoaderData<Config>();

  return (
    <Document googleAnalyticsCode={loaderData.googleAnalyticsCode}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
  googleAnalyticsCode,
}: {
  children: React.ReactNode;
  title?: string;
  googleAnalyticsCode?: string;
}) {
  return (
    <html lang="en">
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
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <script
          src="https://t6ed4be50.emailsys1a.net/form/174/3747/4f16a0069a/popup.js?_g=1640262952"
          async
        ></script>
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <header className="z-50 fixed w-full flex justify-between items-center px-6 py-4 pointer-events-none">
        <div className="hidden md:block">
          <img
            src={LogoBanner}
            className="max-h-16"
            alt="Lukas Germerott Logo"
          />
        </div>

        <Navigation />
      </header>
      <main>
        <div className="bg-background h-screen pt-32">{children}</div>
      </main>
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = <NotFoundBoundary />;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>{message}</Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div className="max-w-screen-md mr-auto ml-auto">
          <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              There was an error
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{error.message}</p>
              <p>We are working hard on it to fix it. Please come back later</p>
            </div>
          </div>
        </div>
      </Layout>
    </Document>
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
