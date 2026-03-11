const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));
const num3 = parseInt(prompt("Ingresa el tercer número:"));
document.writeln(
  `El número mayor entre ${num1} y ${num2} es: ${Math.max(num1, num2)}`,
);
document.writeln(
  `El número mayor entre ${num2} y ${num3} es: ${Math.max(num2, num3)}`,
);
document.writeln(
  `El número mayor entre ${num1} y ${num3} es: ${Math.max(num1, num3)}`,
);
