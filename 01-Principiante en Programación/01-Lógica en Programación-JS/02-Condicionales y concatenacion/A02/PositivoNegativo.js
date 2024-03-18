/*
2. Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/

let nroIngresado = prompt('por favor, ingrese un número');

if (nroIngresado > 0) {
    alert('el número ingresado es positivo');
} else if (nroIngresado < 0) {
    alert('el númeror ingesado es negativo');
} else {
    alert('el número ingresado es cero');
}

