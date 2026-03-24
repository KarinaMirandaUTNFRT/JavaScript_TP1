let numero = Number(prompt("Ingrese un número:"));
let resultado = "";

if (numero % 2 === 0) {
    resultado += "2 ";
}

if (numero % 3 === 0) {
    resultado += "3 ";
}

if (numero % 5 === 0) {
    resultado += "5 ";
}

if (numero % 7 === 0) {
    resultado += "7 ";
}

if (resultado !== "") {
    alert("El " + numero + " es divisible por: " + resultado);
} else {
    alert("No es divisible por 2, 3, 5 ni 7");
}