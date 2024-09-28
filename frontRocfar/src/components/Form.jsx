import { useState, useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import axios from 'axios';
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";


const Form = () => {

  const { language } = useContext(LanguageContext);
  let messages = {};

  if (language === "es") {
    messages = messagesES;
  } else if (language === "en") {
    messages = messagesEN;
  } else if (language === "fr") {
    messages = messagesFR;
  }

  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para controlar el envío

  // este useState es para manejar el div de formulario enviado con exito
  const [isSubmitted, setIsSubmitted] = useState(false);

  //campos vacios

  const [camposVacios, setCamposVacios] = useState(false);

  //email formato incorrecto

  const [validEmail, setValidEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      consulta.trim() === ""
    ) {
      setCamposVacios(true);
      setTimeout(() => {
        setCamposVacios(false);
      }, 2000);
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidEmail(true);
      setTimeout(() => {
        setValidEmail(false);
      }, 2000);
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
  
    const formData = new URLSearchParams();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("consulta", consulta);

    axios.post("/rocfar/consulta/saveConsulta", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(response => {
      console.log(response.data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4500);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });
  };

  
  return (
    <>
      <div className="div">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <form onSubmit={handleSubmit} className="text-center">
                {/* nombre completo */}
                <label>{messages.ingresName}</label>

                <div>
                  <input
                    id="nombreCompleto"
                    type="string"
                    placeholder={messages.ingresName}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="inputForm"
                  />
                </div>
                {/* email */}
                <label>{messages.ingresEmail}</label>
                <div>
                  <input
                    id="email"
                    type="string"
                    placeholder={messages.ingresEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputForm"
                  />
                </div>
                {/* consulta */}

                <label>{messages.ingresConsul}</label>

                <div>
                  <textarea
                    id="consulta"
                    type="text"
                    placeholder={messages.ingresConsul}
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    className="consulForm"
                  />
                </div>
                <div>
                  <button type="submit" disabled={isSubmitting}>{messages.enviar}</button>
                </div>
              </form>
            </div>
            <div className="col-12">
              {/* si se envia con exito */}
              {isSubmitted && (
                <div className="bg-exito text-white text-center pb-3 mt-2">
                {messages.sendExit}
                </div>
              )}

              {/* si los campos estan vacios */}

              {camposVacios && (
                <div className="bg-fail text-white text-center pb-3 mt-2">
                  {messages.camposVacios}
                </div>
              )}

              {validEmail && (
                <div className="bg-fail text-white text-center pb-3 mt-2">
                 {messages.validEmail}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
