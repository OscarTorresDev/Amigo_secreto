// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento de entrada
    const entrada = document.getElementById('amigo');
    const nombreAmigo = entrada.value.trim(); // Quitar espacios en blanco

    // Verificar que la entrada no esté vacía
    if (nombreAmigo === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    // Verificar que el nombre no esté ya en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista. Escribe un nombre diferente.');
        entrada.value = '';
        return;
    }

    // Añadir el nombre al arreglo de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    entrada.value = '';
    
    // Actualizar la lista en el HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Añadir cada nombre como un elemento de lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos dos amigos
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para sortear.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar solo el amigo secreto sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ` Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
}