let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarListaAmigos();
    alert(`${nombre} ha sido agregado correctamente.`);
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "<h2>Lista de amigos:</h2>";

    let ul = document.createElement("ul");
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });

    listaAmigos.appendChild(ul);
}
function sortearAmigosSecretos() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    let amigosSecretos = [...amigos].sort(() => Math.random() - 0.5);
    let resultados = [];

    for (let i = 0; i < amigos.length; i++) {
        resultados.push(`${amigos[i]} -> ${amigosSecretos[i]}`);
    }

    alert("Sorteo realizado:\n" + resultados.join("\n"));
}