/*
3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.
*/
let numero = prompt('Por favor, decime un número del 1 al 10');

let contador = 0;

while (contador <= numero) {
    console.log(`contamos desde ${contador} hasta ${numero}`);
    contador++;
}
