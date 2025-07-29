import { header } from "../componentes/header/headerComponente.js";

export function dashboard(){
    
    let seccion = document.createElement('section');
    
    seccion.appendChild(header());

    return seccion;
}

document.body.appendChild(dashboard());