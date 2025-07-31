import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";


export function dashboard(){
    
    let dashboard = document.createElement('section');
    dashboard.className ="dashboard";

    //header
    dashboard.appendChild(header());

    //Seccion NUmero 1
    let secccion1 = document.createElement('section');
    secccion1.className = "seccion-1"
    secccion1.appendChild(tareas());
    secccion1.appendChild(informacion());
    dashboard.appendChild(secccion1);

    //footer
    dashboard.appendChild(footer());

    

    return dashboard;
}

document.body.appendChild(dashboard());