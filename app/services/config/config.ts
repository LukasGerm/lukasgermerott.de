import type { Config } from "./types/Config";

export function getConfig(): Config {
  return {
    googleAnalyticsCode: process.env.GOOGLE_ANALYTICS_CODE!,
    turnstileSiteKey: process.env.TURNSTILE_SITE_KEY!,
  };
}
