export function informacion(datos) {
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-info";

    // Div de botones
    let contenedorBotones = document.createElement('div');
    contenedorBotones.className = "contenedor-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.textContent = "+ tarea";

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.textContent = "Archivados";

    contenedorBotones.appendChild(btnTarea);
    contenedorBotones.appendChild(btnArchivados);

    // Div de información
    let tarjeta = document.createElement('div');
    tarjeta.className = "tarjeta-informacion";

    // Estado
    let estado = document.createElement('span');
    estado.className = "estado";
    estado.textContent = datos.estado;

    // Título
    let titulo = document.createElement('h3');
    titulo.className = "titulo-tarea";
    titulo.textContent = datos.titulo;

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-tarea";
    descripcion.textContent = datos.descripcion;

    // Integrantes
    let textoIntegrantes = document.createElement('p');
    textoIntegrantes.textContent = "Integrantes";

    let contenedorIntegrantes = document.createElement('div');
    contenedorIntegrantes.className = "contenedor-integrantes";

    datos.integrantes.forEach(integrante => {
        let spanEmoji = document.createElement('span');
        spanEmoji.className = "emoji-integrante";
        spanEmoji.textContent = integrante;
        contenedorIntegrantes.appendChild(spanEmoji);
    });

    // Añadir todo a la tarjeta
    tarjeta.appendChild(estado);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(textoIntegrantes);
    tarjeta.appendChild(contenedorIntegrantes);

    // Añadir al contenedor principal
    divInformacion.appendChild(contenedorBotones);
    divInformacion.appendChild(tarjeta);

    return divInformacion;
}
