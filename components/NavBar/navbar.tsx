import React from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  A_STYLE,
  NAVBAR,
  NAV_TITLE_CONTIANER,
  NAV_TITLE,
  BUTTON_CONTAINER,
} from "./styles";

export const Navbar = () => {
  const { t } = useTranslation("common");

  const handleScrollClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className={NAVBAR}>
      <div className={NAV_TITLE_CONTIANER}>
        <span className={NAV_TITLE}>Jorge Ignacio Garay</span>
      </div>
      <div className={BUTTON_CONTAINER}>
        <div>
          <button
            onClick={() => handleScrollClick("about")}
            className={A_STYLE}
          >
            {t("about")}
          </button>
        </div>
        <div>
          <button
            onClick={() => handleScrollClick("portafolio")}
            className={A_STYLE}
          >
            {t("portfolio")}
          </button>
        </div>
        <div>
          <button
            onClick={() => handleScrollClick("skills")}
            className={A_STYLE}
          >
            {t("skills")}
          </button>
        </div>

        <div>
          <button
            onClick={() => handleScrollClick("contact")}
            className={A_STYLE}
          >
            {t("contact")}
          </button>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
