// import { Link } from "react-router-dom";
// import rocfarsvg from "../assets/rocfarsvg.svg";
import ButtonLenguaje from "../components/ButtonLenguaje";
// import { useContext } from "react";
// import { LanguageContext } from "../Providers/LanguajeProvider";
// import messagesES from "../js/es";
// import messagesEN from "../js/en";
// import messagesFR from "../js/fr";
import ButtonMode from "./ButtonMode";

export default function Navbar() {
  //Para seleccionar el contexto de lenguaje
  // const { language } = useContext(LanguageContext);
  // let messages = {};

  // if (language === "es") {
  //   messages = messagesES;
  // } else if (language === "en") {
  //   messages = messagesEN;
  // } else if (language === "fr") {
  //   messages = messagesFR;
  // }

  //--------------------------------------------

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 bg-p d-flex justify-content-end pt-2">
           
             
                <ButtonLenguaje />
                <ButtonMode/>
            
          </div>
          {/* Title */}
          <div className="col-12 container-title d-flex text-white bg-p">
            {/* <img src={rocfarsvg} alt="" className="mt-3" /> */}
            <h2 className="titleRocfar">rocFar</h2>
          </div>
        </div>
      </div>
    </>
  );
}
