import { useTranslation } from "react-i18next";
import { Text } from "./Text";
import { Link } from "@remix-run/react";
import Typography from "./Typography";
import ExternalLink from "./ExternalLink";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="bg-card px-8 md:px-20 py-12 w-full">
        <Text bold type="light">
          {t("Weiterführende Links")}
        </Text>
        <Link to="/imprint">
          <Typography hover>{t("Impressum")}</Typography>
        </Link>
        <ExternalLink href="https://github.com/LukasGerm">
          <Typography hover>{t("GitHub")}</Typography>
        </ExternalLink>
      </div>
    </footer>
  );
};
