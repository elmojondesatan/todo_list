import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";

export async function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    try {
        const resultado = await fetch("https://backend-todo-list-4w47.onrender.com/tareas");
        
        if (!resultado.ok) {
            throw new Error(`Error HTTP: ${resultado.status}`);
        }
        
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);

        // Header
        dashboard.appendChild(header());

        // Sección Numero 1
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";
        seccion1.appendChild(tareas(tareasDb));
        
        // Solo agregar información si hay tareas disponibles
        if (tareasDb && tareasDb.length > 0) {
            seccion1.appendChild(informacion(tareasDb[0]));
        }
        
        dashboard.appendChild(seccion1);

    } catch (error) {
        console.error("Error al cargar el dashboard: ", error);
        
        // Crear un mensaje de error para el usuario
        const errorMessage = document.createElement('div');
        errorMessage.className = "error-message";
        errorMessage.innerHTML = `
            <h2>Error al cargar las tareas</h2>
            <p>${error.message}</p>
            <button onclick="location.reload()">Reintentar</button>
        `;
        
        dashboard.appendChild(header());
        dashboard.appendChild(errorMessage);
    }

    // Footer (siempre se agrega)
    dashboard.appendChild(footer());
    
    return dashboard;
}

// Llamar a la función
dashboard().then(elemento => {
    if (elemento && elemento.nodeType === Node.ELEMENT_NODE) {
        document.body.appendChild(elemento);
    } else {
        console.error("El elemento retornado no es válido");
        // Crear un fallback básico
        const fallback = document.createElement('div');
        fallback.innerHTML = '<h1>Error crítico al cargar la aplicación</h1>';
        document.body.appendChild(fallback);
    }
}).catch(error => {
    console.error("Error inesperado: ", error);
});