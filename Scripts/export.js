export function crearCartelera(lista, index){
    var span = document.createElement("span");
    var div = document.createElement("div");    
    var legend = document.createElement("legend");    
    var p = document.createElement("p");

    span.classList.add("cartelera");
    div.classList.add("cartelera_container");
    legend.classList.add("cartelera_titulo");
    p.classList.add("cartelera_info");

    span.style.backgroundImage = "url(" + lista[index].img + ")";
    legend.textContent = lista[index].nombre;
    p.textContent = lista[index].desc;

    div.appendChild(legend);
    div.appendChild(p);
    span.appendChild(div);

    return span;
}

export function listaReadyDisponible(datos){
    var lista = [];
    for(var i=0; i< datos.length; i++){
        if(datos[i].ready) lista.push(datos[i]);
    }
    return lista;
}

export function listaReadyInteres(datos){
    var lista = [];
    for(var i=0; i< datos.length; i++){
        if(!datos[i].ready) lista.push(datos[i]);
    }
    return lista;
}