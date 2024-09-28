import  { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { LanguageContext } from "../Providers/LanguajeProvider";
import { ContextGlobal } from "../Providers/global.context";
import { FaReact } from "react-icons/fa";
import { SiSpringboot} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { CiCloudOn } from "react-icons/ci";
import { RiTeamFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";

import ButtonProp from "../components/ButtonProp";

import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";

export default function ServicioCliente() {

    const navigate = useNavigate();

    const handleCancel = () => {
      navigate("/");
    };

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
  


  return (
    <>  <div className={theme}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="titleSerCli">{messages.titleServiceClient}</h3>
                </div>
                <div className="col-12">
                    <p className="parrafo1SerCli ">{messages.parrafo1ServCli}</p>
                </div>

                <div className="col-9 pb-5">
                    <ul>
                        <li className="liSerCli">
                            <FaReact className="ico"/> {messages.reactServCli}
                        </li>

                        <li className="liSerCli">
                            <SiSpringboot className="ico"/> {messages.springServCli}
                        </li>
                        <li className="liSerCli">
                            <SiMysql className="ico"/> {messages.sqlServCli}
                        </li>
                        <li className="liSerCli">
                            <DiNginx className="ico"/> {messages.nginxServCli}
                        </li>
                        <li className="liSerCli">
                            <CiCloudOn className="ico"/> {messages.hostingerServCli}
                        </li>
                        <li className="liSerCli">
                            <RiTeamFill className="ico"/> {messages.teamServCli}
                        </li>
                    </ul>
                </div>
                <div className="col-3">

                </div>
                <div className="col-12">
                <p className="cierreServCli">
                <FcBusinessman className="ico"/> {messages.cierreServCli}
                </p>
                </div>
                <div className="col-12 pt-3 pb-5">
                    <ButtonProp
                          text="Atras" size="medium" onClick={handleCancel}
                    />
                </div>
            </div>
        </div>
        </div>
    
    </>
  )
}
