import  {useContext} from 'react'
import Form from "../components/Form";
import { ContextGlobal } from "../Providers/global.context";

export default function Contacto() {

  const { theme } = useContext(ContextGlobal);

  return (
    <>
     <div className={theme}>
    <div  className="container-fluid ">
       
        <div className="row">
            <div className="col-12 pt-5 pb-5">
             <Form/>
            </div>
        </div>
        </div>
    </div>
        
    </>
  )
}
