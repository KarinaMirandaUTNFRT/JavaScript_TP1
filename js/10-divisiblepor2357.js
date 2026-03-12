const numero = parseInt(
  prompt("Ingresa un número entero para saber si es divisible por 2,3,5, o 7:"),
);

if (numero % 2 === 0) {
  document.writeln(`El número ${numero} es divisible por 2.`);
} else {
  document.writeln(`El número ${numero} no es divisible por 2.`);
}
if (numero % 3 === 0) {
  document.writeln(`El número ${numero} es divisible por 3.`);
} else {
  document.writeln(`El número ${numero} no es divisible por 3.`);
}
if (numero % 5 === 0) {
  document.writeln(`El número ${numero} es divisible por 5.`);
} else {
  document.writeln(`El número ${numero} no es divisible por 5.`);
}
if (numero % 7 === 0) {
  document.writeln(`El número ${numero} es divisible por 7.`);
} else {
  document.writeln(`El número ${numero} no es divisible por 7.`);
}
