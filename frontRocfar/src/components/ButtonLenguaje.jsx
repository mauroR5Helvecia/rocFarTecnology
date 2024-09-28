import { useState, useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import esFlag from '../assets/flagLenguajes/flagEs.png';
import enFlag from '../assets/flagLenguajes/flagEN.png';
import frFlag from '../assets/flagLenguajes/flagFR.png';

function LanguageSelector() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsExpanded(false);
  };

  return (
    <div className="language-selector container-lang">
      <button className="language-toggle" onClick={handleToggle}>
        {isExpanded ? (
          <img
            src={getFlagImage(language)}
            alt={language}
            className="flag-icon"
            style={{ width: "25px", height: "26px" }}
          />
        ) : (
          <img
            src={getFlagImage(language)}
            alt={language}
            className="flag-icon"
            style={{ width: "25px", height: "26px", marginRight: "5px" }}
          />
        )}
        {language.toUpperCase()} ▼
      </button>
      {isExpanded && (
        <div className="language-options">
          <img
            src={esFlag}
            alt="Spanish"
            className="flag-icon option"
            onClick={() => handleLanguageChange("es")}
          />
          <img
            src={enFlag}
            alt="English"
            className="flag-icon option"
            onClick={() => handleLanguageChange("en")}
          />
          <img
            src={frFlag}
            alt="French"
            className="flag-icon option fr-flag"
            onClick={() => handleLanguageChange("fr")}
          />
          {/* Agrega más imágenes de banderas según sea necesario */}
        </div>
      )}
    </div>
  );
}

function getFlagImage(language) {
  switch (language) {
    case "es":
      return esFlag;
    case "en":
      return enFlag;
    case "fr":
      return frFlag;
   
    default:
      return null;
  }
}

export default LanguageSelector;
