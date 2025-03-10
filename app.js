// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.





                                //SISTEMA//


// Array para almacenar los nombres de los amigos
let amigos = [];



// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");//obtener input de amigo
    const nombreAmigo = inputAmigo.value.trim();//obtener valor del input y limpiar espacios

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");//alerta si no se ingresa un nombre
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");//alerta si el amigo ya está en la lista
        return;
    }

    amigos.push(nombreAmigo);//agregar amigo a la lista
    actualizarListaAmigos();//actualizar lista de amigos en el DOM
    inputAmigo.value = "";//limpiar input
}



// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");//obtener lista de amigos
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {//recorrer lista de amigos y agregarlos al DOM
        const li = document.createElement("li");//crear elemento li
        li.textContent = amigo;//agregar texto al li
        listaAmigos.appendChild(li);//agregar li a la lista
    });
}



// Función para sortear el amigo secreto (versión corregida)
function sortearAmigo() {
    const resultadoLista = document.getElementById("resultado");//obtener lista de resultados
    resultadoLista.innerHTML = "";//limpiar lista de resultados

    if (amigos.length < 2) {//alerta si no hay al menos 2 amigos para realizar el sorteo
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }


    // Crear una copia del array para el sorteo
    let amigosDisponibles = [...amigos];//crear copia de la lista de amigos para sorteo (para no modificar la original)
    let resultados = {};//objeto para almacenar los resultados

      // Asigna un amigo secreto a cada persona
      amigos.forEach((amigo) => {
        // Se filtra la lista 'amigosDisponibles' para evitar que la persona se asigne a sí misma
        let posibles = amigosDisponibles.filter(a => a !== amigo);//filtrar amigos disponibles para evitar que la persona se asigne a sí misma
        if (posibles.length === 0)
            return sortearAmigo(); // Si no quedan opciones (caso raro), reinicia el sorteo

        // Selecciona un amigo al azar de la lista de posibles
        const indiceAleatorio = Math.floor(Math.random() * posibles.length);//seleccionar amigo al azar de la lista de posibles
        const amigoSecreto = posibles[indiceAleatorio];//obtener amigo secreto
        resultados[amigo] = amigoSecreto; // Guarda la asignación en el objeto 'resultados'

        // Actualiza la lista de amigos disponibles eliminando al amigo ya asignado
        amigosDisponibles = amigosDisponibles.filter(a => a !== amigoSecreto);
    });



    // Mostrar los resultados
    for (let [amigo, amigoSecreto] of Object.entries(resultados)) {//recorrer objeto de resultados para mostrarlos en el DOM
        const li = document.createElement("li");//crear elemento li para mostrar el resultado
        li.textContent = `${amigo} → ${amigoSecreto}`;//agregar texto al li

        resultadoLista.appendChild(li);//agregar li a la lista de resultados en el DOM (para mostrar el resultado)
    }
    //vaciar la lista de amigos
    amigos = [];
    actualizarListaAmigos();//actualizar lista de amigos en el DOM

}



// Permitir agregar amigo con "Enter"
document.getElementById("amigo").addEventListener("keypress", function(event) {//permitir agregar amigo con la tecla "Enter"
    if (event.key === "Enter") {
        agregarAmigo();//agregar amigo a la lista de amigos (si se presiona la tecla "Enter")
    }
});