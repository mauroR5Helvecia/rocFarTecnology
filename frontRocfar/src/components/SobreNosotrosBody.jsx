import  { useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
// import { ContextGlobal } from "../Providers/global.context";
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";

import imagenMano from "../assets/sobreNosotros/manoColaborativa.jpg";
import imagenIdea from "../assets/sobreNosotros/proyectIdea.jpg";

export default function SobreNosotrosBody() {

  //contexto theme, para cambio de modo oscuro o claro
  // const { theme } = useContext(ContextGlobal);

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
        <div className="styles-about">
        <div className="container-fluid">
            <div className="row">

                <div className="col-12">
                    
                    <h3 className="titleSobreNosotros title-resalt">{messages.aboutme}</h3>
                    <p className="jus">{messages.p1}</p>
                    <p className="jus">{messages.p2}</p>
                    <p className="jus">{messages.p3}</p>

                </div>
                <div className="col-12 text-center segundaParteBodiSN">

                  <img src={imagenMano} alt="Soluciones digitales" className="img-fluid w-50 imgMano"/>

                  <p className="jus">{messages.p4a}<span className="title-resalt rocfar"> rocFar </span>{messages.p4b}</p>


                  <img src={imagenIdea} alt="Soluciones digitales" className="img-fluid w-50 imgMano"/>


                </div>
                

            </div>
        </div>
      </div>
    </>
  )
}
