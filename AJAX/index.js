const URL_DESTINO = "http://localhost:5500/AJAX/";
const RECURSO = "resources.json";
enviarPeticionAsincrona();

function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        createTabla(this.responseText); //Obtenemos el valor en texto
      } else {
        alert("ZASCA!");
      }
    }
  };

  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send();
}

//Lo vamos a insertar en el DOM y estos son los métodos

function createTr() {
  let tr = document.createElement("tr");
  return tr;
}

function createTh() {
  let th = document.createElement("th");
  return th;
}

function createTd() {
  let td = document.createElement("td");
  return td;
}

function createTextNode(text) {
  let textNode = document.createTextNode(text);
  return textNode;
}

//Aqui creamos la tabla llamando al JSON
function createTabla(jsonDoc) {
  //Convertimos un texto a un objeto JSON
  var objetoJson = JSON.parse(jsonDoc);
  let div = document.getElementById("container");
  let table = document.createElement('table')
  let peliculas = objetoJson.PELICULAS.PELICULA;
  table.appendChild(createTh()).appendChild(createTextNode("Año"));
  table.appendChild(createTh()).appendChild(createTextNode("Director"));
  table.appendChild(createTh()).appendChild(createTextNode("Titulo"));
  table.appendChild(createTr());

  for (let pelicula of peliculas) {
    table.appendChild(createTd()).appendChild(createTextNode(pelicula.ANO));
    table.appendChild(createTd()).appendChild(createTextNode(pelicula.DIRECTOR));
    table.appendChild(createTd()).appendChild(createTextNode(pelicula.TITULO));
    table.appendChild(createTr());
  }

  div.appendChild(table);
}
