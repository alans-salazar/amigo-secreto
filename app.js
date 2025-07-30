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
        //Lógica para capturar el amigo ingreso y agregarlo a la lista
        añadirAmigoLista();
        //Agrega el texto de los amigos a la vista
        mostrarListaAmigos();
    } else {
        lanzarAlerta("Por favor, ingrese un nombre válido.");
    }
}

//Función que añade el amigo a la lista
function añadirAmigoLista(){
    //Agrega el amigo ingresado al final de la lista
    listaAmigosIngresados.push(amigoIngresado.value);
    //Limpia el input del amigo para agregar uno nuevo
    amigoIngresado.value = "";
    //Si se vuelve a agregar un amigo, limpia el amigo secreto sorteado inicialmente
    resultado.innerHTML = "";
}

//Función que selecciona el amigo sorteado del total de la lista
function sortearAmigo(){
    if (listaAmigosIngresados.length > 0){
        limpiarTextoLista();
        //Genera un numero aleatorio del total de amigos ingresados
        indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length);
        //Del número aleatorio que se generó lo busca en la lista para asignarlo como amigo secreto
        amigoSorteado = listaAmigosIngresados[indiceAleatorio];
        //Muestra el resultado
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    } else {
        //Si la lista está vacía, no sortea algún amigo para evitar undefined
        lanzarAlerta("No hay amigos ingresados, ingrese al menos uno.");
    }
}

function mostrarListaAmigos(){
    //Limpia el texto de la lista para que al crear un nuevo amigo no se repita todo nuevamente
    limpiarTextoLista();
    let indicadorLista = 0;

    //Mientras el indicadorLista sea menor que el largo de la lista crea un nuevo elemento en el html
    while (indicadorLista < listaAmigosIngresados.length) {
        // Crea el nuevo elemento que se mostrará
        let li = document.createElement("li");
        //Asigna el nuevo amigo al nuevo elemento html
        li.textContent = listaAmigosIngresados[indicadorLista];
        //Agrega el elemento li dentro del elemento listaAmigos
        listaAmigos.appendChild(li);
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