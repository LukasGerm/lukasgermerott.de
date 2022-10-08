import { Config } from "./types/Config";

export function getConfig(): Config {
  return {
    googleAnalyticsCode: process.env.GOOGLE_ANALYTICS_CODE!,
  };
}
