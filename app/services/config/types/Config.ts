export interface Config {
  matomo: MatomoConfig;
}

interface MatomoConfig {
  siteId: number;
  urlBase: string;
}
