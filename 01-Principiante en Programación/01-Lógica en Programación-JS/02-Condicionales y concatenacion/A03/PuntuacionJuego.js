/*
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar."
*/

let puntuacion = prompt('¿Qué puntaje obtuviste?');

if (puntuacion >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intenta nuevamente para ganar');
}