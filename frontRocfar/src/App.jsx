import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import Prueba from "./pages/Prueba";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./Providers/LanguajeProvider";
import { ContextProvider } from "./Providers/global.context";
import ServicioCliente from "./pages/ServicioCliente";
import Radio from "./components/Radio";



export default function App() {
  return (
    <>
      <ContextProvider>
      <LanguageProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicios_cliente" element={<ServicioCliente/>} />
          <Route exact path="/radio" element={<Radio/>} />

          {/* Agrego algo com */}
            {/* <Route exact path="/" element={<Prueba/>} /> */}


        </Routes>
        <Footer/>
      </BrowserRouter>
      </LanguageProvider>
      </ContextProvider>
  
    </>
  );
}
