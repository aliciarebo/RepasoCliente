
  let div = document.getElementById("container");
  createTable(div);


//Creamos el Array de Películas
function listaPeliculas() {
  let ArrayPeliculas = [
    {
      titulo: 'Uno de los nuestros',
      director: 'Martin Scorsese',
      nota: '9,5',
    },

    {
      titulo: 'Casino',
      director: 'Martin Scorsese',
      nota: '9,2',
    },

    {
      titulo: 'Taxi Driver',
      director: 'Martin Scorsese',
      nota: '10',
    },
  ];
  return ArrayPeliculas;
}

//Las funciones
function createTr(){
    let tr = document.createElement('tr');
    return tr;
}

function createTh(){
    let th = document.createElement('th');
    return th;
}

function createTd(){
    let td = document.createElement('td');
    return td;
}

function createTextNode(text){
    let textNode = document.createTextNode(text);
    return textNode;
}

//La función que crea la tabla
function createTable(){
    let peliculas = listaPeliculas();
    let table = document.createElement('table');
    
    table.appendChild(createTh()).appendChild(createTextNode('Película'));
    table.appendChild(createTh()).appendChild(createTextNode('Director'));
    table.appendChild(createTh()).appendChild(createTextNode('Calificación'));
    table.appendChild(createTr());

    for(let pelicula of peliculas ){
        table.appendChild(createTd()).appendChild(createTextNode(pelicula.titulo));
        table.appendChild(createTd()).appendChild(createTextNode(pelicula.director));
        table.appendChild(createTd()).appendChild(createTextNode(pelicula.nota));
        table.appendChild(createTr());
    }
div.appendChild(table);

}
