const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));
const num3 = parseInt(prompt("Ingresa el tercer número:"));

document.writeln(
  `El mayor de los tres números (${num1}, ${num2}, ${num3}) es: ${Math.max(num1, num2, num3)}`,
);
