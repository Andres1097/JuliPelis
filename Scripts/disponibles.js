import { crearCartelera, listaReadyDisponible } from "./export.js";

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

readTextFile("./data.json", function(text){
    const data = JSON.parse(text);

    const nav = document.querySelector(".disponibles_lista");
    const lista = listaReadyDisponible(data);

    for(var i=0; i < lista.length; i++){
        nav.appendChild(crearCartelera(lista, i));
    }
});