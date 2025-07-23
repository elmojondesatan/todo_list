export function header(){
    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.innerText = "✏️ Todo-List";
    header.appendChild(h1);
    
    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";
    header.appendChild(divTareas);
    
    let divLogoUser = document.createElement('div');
    divLogoUser.className = "div-logo-user";
    header.appendChild(divLogoUser);
    
    return header;
}