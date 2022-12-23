import defaults from "../../defaults.json";

type FeatureFlag = typeof defaults;

export function isFeatureActive(feature: keyof FeatureFlag) {
  const isEnabledInEnv =
    process.env["FEATURE_" + feature.toUpperCase()] === "true";

  return defaults[feature].defaultValue || isEnabledInEnv;
}
