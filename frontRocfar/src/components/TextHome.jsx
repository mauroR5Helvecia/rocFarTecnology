import  { useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import { ContextGlobal } from "../Providers/global.context";
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";

export default function TextHome(){

  const { theme } = useContext(ContextGlobal);

    const { language } = useContext(LanguageContext);
    let messages = {};
  
    if (language === "es") {
      messages = messagesES;
    } else if (language === "en") {
      messages = messagesEN;
    } else if (language === "fr") {
      messages = messagesFR;
    }

    return<>
            <div className={theme}>
            <div className="container-fluid ">
                <div className="row  ">
                    <div className="col-md-5 col-12 mt-5 serviciosLista d-flex justify-content-center">
                        <div>
                        <h5 className="title-resalt">{messages.servicios}</h5>
                        <ul>
                            <li>{messages.textLi1}</li>
                            <li>{messages.textLi2}</li>
                            <li>{messages.textLi3}</li>
                            <li>{messages.textLi4}</li>
                            <li>{messages.textLi5}</li>
                           
                        </ul>
                        </div>
                   

                    </div>
                    <div className="col-md-7 col-12 mt-5 text-j d-flex justify-content-center">
                        <div>
                        <p>{messages.prestador}</p>
                        </div>
                          
                    </div>
                </div>
            </div>
            </div>
    
    </>
}