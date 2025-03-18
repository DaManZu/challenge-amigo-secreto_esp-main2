// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//hola
// Declaramos un array vacío para almacenar los nombres de los amigos
let amigos = [];
// Función para agregar un amigo al array
function agregarAmigo(nombre) {
    amigos.push(nombre); // Agrega el nombre al array
    console.log(`${nombre} ha sido agregado a la lista de amigos.`);
}

// Ejemplo de uso
agregarAmigo("Juan");
agregarAmigo("Ana");
agregarAmigo("Carlos");

// Mostrar el array completo
console.log("Lista de amigos:", amigos);