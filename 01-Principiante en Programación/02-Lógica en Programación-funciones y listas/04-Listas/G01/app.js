/*1. Crea una lista vacía llamada "listaGenerica".*/

let listaGenerica = [];

/*2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes 
elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/*3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/

function mostrarListaLenguajesSeparados(){
  for (let i = 0; i < lenguagesDeProgramacion.length; i++){
    console.log(lenguagesDeProgramacion[i]);
  }
}
  mostrarListaLenguajesSeparados();
  
 
/*5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion 
en orden inverso.*/

function mostrarListaLenguajesSeparadosInvert(){
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--){
    console.log(lenguagesDeProgramacion[i]);
  }
}
  mostrarListaLenguajesSeparadosInvert();


/*6. Crea una función que calcule el promedio de los elementos en una lista de números.*/

function calcularPromedio(listaNum) {
  let suma = 0;
  for (let i = 0; i < listaNum.length; i++) {
    suma += listaNum[i];
  }
  return suma / listaNum.length;
}

let num = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(num);
console.log('Promedio:', promedio);



/*7. Crea una función que muestre en la consola el número más grande y el número más pequeño 
en una lista.*/

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numb = [15, 8, 25, 5, 12];
encontrarMayorMenor(numb);



/*8. Crea una función que devuelva la suma de todos los elementos en una lista.*/

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);



/*9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como 
parámetro, o -1 si no existe en la lista.*/

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}



/*10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
con la suma de los elementos uno a uno.*/


/*11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado 
de cada número.*/

