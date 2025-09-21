// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();
  
  if (nombre === '') {
    alert("Por favor, ingrese un nombre para añadir a la lista.");
    return;
  }
  
  // Convertimos el nombre a minúsculas para evitar duplicados por mayúsculas/minúsculas
  const nombreNormalizado = nombre.toLowerCase();

  if (amigos.includes(nombreNormalizado)) {
    alert("Ese nombre ya ha sido agregado.");
    inputAmigo.value = '';
    return;
  }
  
  // Agregamos el nombre normalizado al array
  amigos.push(nombreNormalizado);

  // Actualizamos la lista visible en el HTML
  const listaAmigos = document.getElementById('listaAmigos');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = nombre; // Mostramos el nombre original con mayúsculas si las tiene
  listaAmigos.appendChild(nuevoElemento);

  // Limpiamos el campo de texto
  inputAmigo.value = '';
}

// let amigos = []; // Asegúrate de que este array se mantiene en el mismo archivo

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();
  
  if (nombre === '') {
    alert("Por favor, ingrese un nombre para añadir a la lista.");
    return;
  }
  
  const nombreNormalizado = nombre.toLowerCase();
  
  if (amigos.includes(nombreNormalizado)) {
    alert("Ese nombre ya ha sido agregado.");
    inputAmigo.value = '';
    return;
  }
  
  amigos.push(nombreNormalizado);

  const listaAmigos = document.getElementById('listaAmigos');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = nombre;
  listaAmigos.appendChild(nuevoElemento);

  inputAmigo.value = '';
}

function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  // Math.random() genera un número entre 0 y 1
  // Math.floor() redondea el resultado al número entero más bajo
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}