import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";

export function dashboard(){
    
    let seccion = document.createElement('section');
    

    //header
    seccion.appendChild(header());

    //footer
    seccion.appendChild(footer());

    return seccion;
}

document.body.appendChild(dashboard());