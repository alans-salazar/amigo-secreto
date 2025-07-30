let amigoIngresado = document.getElementById("amigo");
let resultado = document.getElementById("resultado");
let listaAmigos = document.getElementById("listaAmigos");
let listaAmigosIngresados = [];
let indiceAleatorio = 0;
let amigoSorteado = "";

//Función que agrega el amigo a la lista y lo muestra en la web
function agregarAmigo() {

    //Si el input no está vacío, agregalo a la lista y muestralo en la pantalla
    if (!(document.getElementById("amigo").value == "")) {
        añadirAmigoLista(); //Lógica para capturar el amigo ingreso y agregarlo a la lista
        mostrarListaAmigos(); //Agrega el texto de los amigos a la vista
    } else {
        lanzarAlerta("Por favor, ingrese un nombre válido.");
    }
}

//Función que añade el amigo a la lista
function añadirAmigoLista(){
    listaAmigosIngresados.push(amigoIngresado.value); //Agrega el amigo ingresado en el input al final de la lista
    amigoIngresado.value = ""; //Limpia el input del amigo para agregar uno nuevo
    resultado.innerHTML = ""; //Si se vuelve a agregar un amigo, limpia el amigo secreto sorteado inicialmente
}

//Función que selecciona el amigo sorteado del total de la lista
function sortearAmigo(){
    if (listaAmigosIngresados.length > 0){
        limpiarTextoLista();
        indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length); //Genera un numero aleatorio del total de amigos ingresados
        amigoSorteado = listaAmigosIngresados[indiceAleatorio]; //Del número aleatorio que se generó lo busca en la lista para asignarlo como amigo secreto
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`; //Muestra el resultado
    } else {
        lanzarAlerta("No hay amigos ingresados, ingrese al menos uno."); //Si la lista está vacía, no sortea algún amigo para evitar undefined
    }
}

function mostrarListaAmigos(){
    limpiarTextoLista();
    let indicadorLista = 0;
    //Mientras el indicadorLista sea menor que el largo de la lista crea un nuevo elemento en el html
    while (indicadorLista < listaAmigosIngresados.length) {
        let li = document.createElement("li"); // Crea el nuevo elemento que se mostrará en el html
        li.textContent = listaAmigosIngresados[indicadorLista]; //Asigna el nuevo amigo al nuevo elemento html
        listaAmigos.appendChild(li); //Agrega el elemento li dentro del elemento listaAmigos
        indicadorLista++;
    }
}

//Limpia el texto html de la lista de amigos
function limpiarTextoLista(){
    listaAmigos.innerHTML = "";
}

function lanzarAlerta(texto){
    alert(texto);
}
