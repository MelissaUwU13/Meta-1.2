//ejercicio 1
const titulo = document.getElementById("titulo");
titulo.textContent="¡Manipulación del DOM!";

//ejercicio 2
const azul = document.querySelectorAll(".parrafo");
azul.forEach(p =>{
    p.style.color="blue";
});

//ejercicio 3
const lista = document.querySelector("#lista li");
lista.textContent = "Elemento Modificado";

//ejercicio 4
const NuevoElemento = document.createElement("li");
NuevoElemento.textContent = "Elemento 3";

const lista2 = document.getElementById("lista");
lista2.appendChild(NuevoElemento);

//ejercicio 5
const NuevoParrafo = document.createElement("p");
NuevoParrafo.textContent = "Este es el tercer parrafo";
NuevoParrafo.style.color = "blue";

const parrafo2 = document.querySelectorAll(".parrafo")[1];
parrafo2.appendChild(NuevoParrafo);

//ejercicio 6
const elementoLista = document.querySelectorAll("li")[1];
lista2.removeChild(elementoLista);

//ejercicio 7
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Boton = document.getElementById("boton");
Boton.onclick = function(){
      document.body.style.backgroundColor = getRandomColor();
}

