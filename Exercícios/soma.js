function soma(x, y) {
    return x + y;
  }
  
  let valor1 = parseInt(prompt("Primeiro valor:  "));
  let valor2 = parseInt(prompt("Segundo valor: "));
  let resultado = soma(valor1, valor2);
  
  console.log(soma(1, 2)); // => 3
  console.log(soma(3, 2)); // => 5 