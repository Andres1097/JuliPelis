import { crearCartelera, listaReadyDisponible, listaReadyInteres } from "./export.js";

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

const TAM_MAX = 8;

readTextFile("./data.json", function(text){
    const data = JSON.parse(text);
    
    const navDisponibles = document.querySelector(".disponibles_lista");
    const listaDisponibles = listaReadyDisponible(data);

    const navInteres = document.querySelector(".interes_lista");
    const listaInteres = listaReadyInteres(data);

    for(var i=0; i < TAM_MAX; i++){
        navDisponibles.appendChild(crearCartelera(listaDisponibles, i));
        navInteres.appendChild(crearCartelera(listaInteres, i));
    }
});

