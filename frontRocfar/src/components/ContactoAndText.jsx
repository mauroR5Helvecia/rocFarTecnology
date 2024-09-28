import  { useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";
import {BsFillEmojiSmileFill} from "react-icons/bs";
import {AiOutlineWhatsApp} from "react-icons/ai";


export default function ContactoAndText() {

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
        <div className="container-fluid bg-v">
            <div className="row">
               <div className="col-sm-4"></div>
               <div className="col-12 col-sm-4 mt-4">
                <h5 className="textContact text-white">
                    {messages.texto1andwsap}<BsFillEmojiSmileFill/>
                </h5>
               </div>
                
         
          <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <a  href="https://wa.me/543405405315?Contactame%20por%20WhattSap" target="blank"> <AiOutlineWhatsApp className="wsap mb-3"/></a>
          </div>
        </div>
    
        </div>
    </>
  )
}
