import { dirname } from "path";
import { fileURLToPath } from "url";

export const getCurrentPath = () => {
  // @ts-ignore
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
};
