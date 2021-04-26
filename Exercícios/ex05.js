// Operações em Vetores

function soma(vetor) {
    var total = 0;
    for (var x = 0; x < vetor.length; x++) {
        if (vetor[x] >= 1) {
            total += vetor[x];
        }
    }
    return total;
}

var vetor1 = [2, 2, 2] // => 6
var vetor = [1, 2, 3, 4, 5, 6] // => 21
console.log(soma(vetor1));
console.log(soma(vetor));


function somaImpar(vetorImpar){
  var resultImpar = 0;
  for (var y = 0; y < vetorImpar.length; y++){
    if (vetorImpar[y] % 2 != 0){
      resultImpar += vetorImpar[y];
    }
  }
  return resultImpar
}

var vetorImpar1 = [1, 2, 3] // => 4
var vetorImpar = [1, 3, 2, 4, 5, 6] // => 9
console.log(somaImpar(vetorImpar1))
console.log(somaImpar(vetorImpar))


function produto(vetorProduto){
  var result = 1;
  for (var v = 0; v < vetorProduto.length; v++){
    if(vetorProduto[v] >= 1 ) {
      result *= vetorProduto[v];
  
    }
  }
  return result
}
var vetorProduto1 = [1, 2, 3] // => 6
var vetorProduto = [1, 2, 3, 4, 5, 6] // => 720
console.log(produto(vetorProduto1))
console.log(produto(vetorProduto))
