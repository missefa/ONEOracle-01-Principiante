/*
4. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número
 hasta 0 utilizando un bucle 'while' en la consola del navegador.
*/

let numero = prompt('Por favor, decime un número del 1 al 20');
let contador = 0;

while(numero >= 0) {
    console.log(`contamos desde ${numero} hasta ${contador}`);
    numero--;
}