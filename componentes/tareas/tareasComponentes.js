import { itemTarea } from "../../modulos/itemTarea/itemTarea.js";

let tareasDb = [
    {
        indice: 1,
        titulo: "Título de la asignación",
        estado: "completado",
        fechaAsignacion: "17/05/2025",
        fechaEntrega: "30/07/2025",
        integrantes: ["🧑🏻‍🎓", "👩🏼‍🎓", "👨🏽‍🎓"]
    },

    {
        indice: 2,
        titulo: "Trabajo de Ciencias",
        estado: "pendiente",
        fechaAsignacion: "25/07/2025",
        fechaEntrega: "05/08/2025",
        integrantes: ["👨🏾‍🎓", "🧑🏽‍🎓"]
    }
];

export function tareas() {
    let divtareas = document.createElement('div');
    divtareas.className = "div-tareas";

    tareasDb.forEach((e) => {
        let tarea = itemTarea(e.indice, e.titulo, e.estado, e.fechaAsignacion, e.fechaEntrega, e.integrantes);
        divtareas.appendChild(tarea);
    });

    return divtareas;
}
