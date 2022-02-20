import { Config } from "./types/Config";

export function getConfig(): Config {
  return {
    matomo: {
      urlBase: process.env.MATOMO_TRACKING_URL!,
      siteId: parseInt(process.env.MATOMO_SITE_ID!),
    },
  };
}
