const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));
document.writeln(
  `El número mayor entre ${num1} y ${num2} es: ${Math.max(num1, num2)}`,
);
