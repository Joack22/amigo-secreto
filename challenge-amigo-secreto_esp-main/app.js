let amigos = []; // Crear el array amigos (global)

function agregarAmigo() {
    let nombreElemento = document.getElementById("amigo");
    let nombre = nombreElemento.value; // Obtener el valor amigo

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
     //Evitar nombres iguales
     for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === nombre) {
            alert("No se pueden poner dos nombres iguales, modifica alguno para evitar confusiones.");
            return;
        }
    }

    amigos.push(nombre); // Agregar el nombre a la lista
    nombreElemento.value = ""; // Limpiar el campo
    console.log("Lista de amigos:", amigos);

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigos[i]; // Establecer el contenido del elemento de lista
        lista.appendChild(li); // Agregar el elemento de lista a la lista
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`; // Actualizar el contenido del elemento de resultado
}

function reiniciarJuego() {
    amigos = []; // Reiniciar el array de amigos
    actualizarLista(); // Limpiar la lista de amigos en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}