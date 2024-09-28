import  { useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import { Link } from "react-router-dom";
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";



//import dev
import {
  DiJsBadge,
  DiIllustrator,
  DiMongodb,
  DiNodejs,
  DiNpm,
  DiReact,
  DiSass,
  DiJava,
} from "react-icons/di";
import { SiApachemaven } from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";

export default function Footer() {

  //Para seleccionar el contexto de lenguaje
  const { language } = useContext(LanguageContext);
  let messages = {};

  if (language === "es") {
    messages = messagesES;
  } else if (language === "en") {
    messages = messagesEN;
  } else if (language === "fr") {
    messages = messagesFR;
  }

  //--------------------------------------------

  return (
    <>
      <div className="container-fluid bg-dark text-white footer">
        <div className="row footerTop">
          <div className="tecnologiasUso col-12 col-md-6 mt-4">
            <div className="col-12 d-flex justify-content-center">
            <Link to="servicios_cliente" className="linktecnologias">
                {/* Acceso a servicio de cliente */}
            {messages.tecnologies}
              </Link>
          
            </div>

            <div className="tecn1 container-fluid d-flex justify-content-around align-items-center">
              <DiIllustrator className="icoT" />
              <DiJava className="icoT" />
              <DiJsBadge className="icoT" />
              <DiMongodb className="icoT" />
              <DiNodejs className="icoT" />
              <DiNpm className="icoT" />
              <DiReact className="icoT" />
              <DiSass className="icoT" />
            </div>
            <div className="tecn2 container-fluid d-flex justify-content-around align-items-center">
              <SiApachemaven className="icoT" />
              <AiFillGithub className="icoT" />
              <BsGit className="icoT" />
              <AiFillHtml5 className="icoT" />
            </div>
          
       
          </div>

          <div className="redesSociales col-12 col-md-6 mt-4">
            <div className="col-12 d-flex justify-content-center">
              <span>{messages.redes}</span>
            </div>
            <div className="containerIconos container-fluid d-flex justify-content-around align-items-center">
              <AiFillFacebook className="ico" />
              <a
                href="https://www.instagram.com/rocfartecno/"
                target="_blank"
                rel="noopener noreferrer"
              ><AiFillInstagram className="ico iconWhith" />
              </a>
              <a
                href="https://www.linkedin.com/in/mauro-rosales-88516b275"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="ico iconWhith" />
              </a>
              <AiOutlineWhatsApp className="ico" />
            </div>
            <div className="col-12 mt-3 contactFooter d-flex justify-content-end align-items-end">
              <div>
                <h5 className="fotext">Santa Fe - Argentina</h5>
                <h5 className="fotext">contacto@rocfar.com</h5>
                <h5 className="fotext">{messages.tel} +543405405315</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-end justify-content-center">
            <h5 className="text-white Copyright mt-5">{messages.derechos} - 2023</h5>
          </div>
        </div>
      </div>
    </>
  );
}
