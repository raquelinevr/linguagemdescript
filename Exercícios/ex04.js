// Verificação do Triângulo

function verTriangulo(a, b, c) {
  if ((a + b) > c && (b + c) > a && (c + a) > b{
    if (a === b && b === c) {
      console.log("equilateral");
  } else if (a !== b && b !== c && c !== a) {
    console.log("scalene");
  } else if (a == b || b == c || a == c ){
  	console.log("isosceles");
  } else{
  	console.log("null")
    }
  }
}

verTriangulo(2, 2, 2); // => equilateral
verTriangulo(10, 10, 10); // => equilateral
verTriangulo(3, 4, 4); // => isosceles
verTriangulo(4, 3, 4); // => isosceles
verTriangulo(4, 4, 3); // => isosceles
verTriangulo(10, 10, 2); // => isosceles
verTriangulo(3, 4, 5); // => scalene
verTriangulo(10, 11, 12); // => scalene
verTriangulo(5, 4, 2); // => scalene
verTriangulo(0, 0, 0); // => null
verTriangulo(3, 4, -5); // => null
verTriangulo(1, 1, 3); // => null
verTriangulo(2, 4, 2); // => null
