import  { useContext } from "react";
import { LanguageContext } from "../Providers/LanguajeProvider";
import messagesES from "../js/es";
import messagesEN from "../js/en";
import messagesFR from "../js/fr";

import imgCarrusel1 from "../assets/imgCarru1.jpg";
import imgCarrusel2 from "../assets/imgCarru2.jpg";
// import imgCarrusel3 from "../assets/imgCarru3.jpg";



export default function Carrusel (){

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

    return<>
        <div id="carouselExampleCaptions" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgCarrusel1} className="d-block w-100 himg" alt="Soluciones Digitales"/>
      <div className="carousel-caption mb-10">
        
        <h3 className="texto-con-sombra">{messages.img1a}</h3>
        <h4 className="texto-con-sombra">{messages.img1b}</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imgCarrusel2} className="d-block w-100 himg texto-con-sombra" alt="..."/>
      <div className="carousel-caption ">
        <h3>{messages.img2a}</h3>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}
