// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    let ingresaAmigo = document.getElementById('amigo').value;
       if (ingresaAmigo === ''){
        alert ('Insertar nombre.');
        return;
       } 
amigos.push(ingresaAmigo);
document.getElementById('amigo').value = '';
actualizarLista();

}

function actualizarLista(){
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