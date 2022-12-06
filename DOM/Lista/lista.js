//document.body.appendChild para añadirlo directamente al body
let h1 = document.createElement('h1');
let h1Text= document.createTextNode('Lista de comidas');
h1.appendChild(h1Text);
document.body.appendChild(h1);

let ul = document.createElement('ul');
createListComida()
function ArrayComidas(){
    let Acomidas = ['Macarrones con tomates', 'Arroz a la cubana', 'Burritos'];
    return Acomidas;
}


function createLi(){
    let li = document.createElement('li');
    return li;
}

function createTextNode(text){
    let textNode = document.createTextNode(text);
    return textNode;
}
function createListComida(){
    let comidas = ArrayComidas();
    for (let i = 0; i<comidas.length; i++){
        ul.appendChild(createLi()).appendChild(createTextNode(comidas[i]));
    }
    document.body.appendChild(ul);
}

