import React from "react";
import {
  A_STYLE,
  NAVBAR,
  NAV_TITLE_CONTIANER,
  NAV_TITLE,
  BUTTON_CONTAINER,
  BUTTON_LENGUAGE,
} from "./styles";

export const Navbar = ({ isEnglish, setIsEnglish }: any) => {
  const handleScrollClick = (sectionId) => {
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
            onClick={() => {
              handleScrollClick("about");
            }}
            className={A_STYLE}
          >
            {isEnglish ? "About" : "Sobre mí"}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleScrollClick("portafolio");
            }}
            className={A_STYLE}
          >
            Portafolio
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleScrollClick("skills");
            }}
            className={A_STYLE}
          >
            Skills
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              handleScrollClick("contact");
            }}
            className={A_STYLE}
          >
            {isEnglish ? "Contact" : "Contacto"}
          </button>
        </div>
        <div>
          <button
            className={BUTTON_LENGUAGE}
            onClick={() => setIsEnglish(!isEnglish)}
          >
            {isEnglish ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};
