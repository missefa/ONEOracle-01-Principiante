/*1. Crea una función que calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

function calcularImc(altura, peso) {
  return peso / (altura * altura);
}
let imc = calcularImc(1.50, 60);
console.log(imc);


/*2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);


/*3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.*/

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 100;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


/*4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/

function calcularAreaYPerimetroRectangular(alto, ancho) {
  var area = alto * ancho;
  var perimetro = 2 * (alto + ancho);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let alto = 3; // en metros
let ancho = 5; // en metros
calcularAreaYPerimetroRectangular(alto, ancho);


/*5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);


/*6. Crea una función que muestre en pantalla la tabla de multiplicar 
de un número dado como parámetro.*/

function calcularTablaMultip(num) {
  for (var i = 1; i <= 10; i++){
      var resultado = num * i;
      console.log(num + " x " + i + " = " + resultado);
  }
  }

// Ejemplo de uso
let num = 5;
calcularTablaMultip(num);