# Amgio-Secreto

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Se crea para la lista de amigos

// aqui se agragaran los amigos de la lista, los cuales se almacenaran en la cadena creada previamente
function agregarAmigo () {
    let ingresaAmigo = document.getElementById('amigo').value; //
       if (ingresaAmigo === ''){ // si no se ingresa ningun nombre, se solicita que se agrege alguno
        alert ('Insertar nombre.');
        return;
       } 
amigos.push(ingresaAmigo); // indica que cada nombre agregado se añadirá a la cadena creada con "amigos"
document.getElementById('amigo').value = '';
actualizarLista();

}

function actualizarLista(){ //Función creada para ir aumentando la lista de amigos.
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i ++){
        lista.innerHTML += `${i + 1}. ${amigos[i]}<br>`;
    }
}

function sortearAmigo(){
    

    if (amigos.length == 0){
        alert('Favor de ingresar nombres de amigos.');
        return;
    
        
    }
    let numeroAleatorio = Math.floor (Math.random()* amigos.length);
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = amigos [numeroAleatorio];
}
