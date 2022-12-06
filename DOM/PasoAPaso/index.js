let div= document.getElementById('container');

//Creamos un título de forma dinámica
let h3 = document.createElement('h3');
let h3Text = document.createTextNode('Esto es un título creado dinámicamente');

//Lo insertamos en el DOM del más concreto al más genérico
h3.appendChild(h3Text)
div.appendChild(h3);

//Vamos a crear una tabla con un array de películas

function listaPeliculas(){
    let peliculas = [ 
        { titulo   : 'Pesadilla en Elm Street',
          director : 'Wes Craven'},

        { titulo   : 'Scream',
          director : 'Wes Craven'},

        { titulo   : 'El Cuervo',
          director : 'Alex Proyas'},

        { titulo   : 'Casino',
          director : 'Martin Scorsese' }
    ]
    return peliculas;    
}

let peliculas = listaPeliculas();
let tabla = document.createElement("table");
let trCabecera = document.createElement("tr")//<tr></tr>
let th1 = document.createElement("th")//<th></th>
let th2 = document.createElement("th")//<th></th>
let txt1 = document.createTextNode("Título")//Titulo
let txt2 = document.createTextNode("Director")//Director

th1.appendChild(txt1)//<th>Titulo</th>
th2.appendChild(txt2)//<th>Director</th>
trCabecera.appendChild(th1)//<tr><th>Titulo</th></tr>
trCabecera.appendChild(th2)//<tr><th>Titulo</th><th>Director</th></tr>
tabla.appendChild(trCabecera)

for(let pelicula of peliculas){
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let txt4 = document.createTextNode(pelicula.titulo)
    let txt5 = document.createTextNode(pelicula.director)
    td1.appendChild(txt4)
    td2.appendChild(txt5)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tabla.appendChild(tr)
    div.appendChild(tabla);
}

//Pero esto es mucho código y puff pesado así que vamos a refactorizar el codigo jejeje





