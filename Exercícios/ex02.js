// Calculadora 

// 1

let valor1 = parseInt(prompt("Primeiro valor:  "));
let valor2 = parseInt(prompt("Segundo valor: "));
let operador = prompt("Operador: [+, -, *, /] ");
let soma;

if (operador === '+'){
  soma = valor1 + valor2;
} else if (operador === '-') {
  soma = valor1 - valor2;
} else if (operador === '*') {
    soma = valor1 * valor2;
} else {
    soma = valor1 / valor2;
} 

console.log(soma);

// 2
