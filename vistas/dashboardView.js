import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";


export async function dashboard() {

    try {

        const resultado = await fetch("https://backend-todo-list-4w47.onrender.com/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);

    
        let dashboard = document.createElement('section');
        dashboard.className ="dashboard";
    
        //header
        dashboard.appendChild(header());
    
        //Seccion Numero 1
        let secccion1 = document.createElement('section');
        secccion1.className = "seccion-1"
        secccion1.appendChild(tareas(tareasDb));
        secccion1.appendChild(informacion(tareasDb[0]));
        dashboard.appendChild(secccion1);
    
        //footer
        dashboard.appendChild(footer());
        
        return dashboard;
    } catch (error) {
        console.log("Error: ", error)
    }
}


dashboard().then(elemento =>{
    document.body.appendChild(elemento);
});
