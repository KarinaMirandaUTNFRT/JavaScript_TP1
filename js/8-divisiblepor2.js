const numero = parseInt(prompt("Ingresa un número entero para saber si es divisible por 2:"));

if (numero % 2 === 0) {
    document.writeln(`El número ${numero} es divisible por 2.`);
} else {
    document.writeln(`El número ${numero} no es divisible por 2.`);
}