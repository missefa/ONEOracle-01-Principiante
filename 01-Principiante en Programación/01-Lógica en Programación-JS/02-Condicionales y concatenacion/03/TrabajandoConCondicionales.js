/*
Eres una persona recién llegada al equipo de desarrollo de Jornada Millas, 
un sitio web de compra de paquetes de viaje para los principales destinos del mundo.

Como primera tarea, tu lider te ha pedido que corrijas un error que ha estado 
ocurriendo cuando un cliente del sitio intenta utilizar sus millas de tarjeta 
de crédito para obtener un descuento en los paquetes de viaje. Cuando entras a ver 
el proyecto te encuentras con el siguiente código:
*/

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");
if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;
}

/*
Para ayudarte a comprender el origen del error tienes acceso a la documentación de las reglas 
de negocio utilizadas para las compras de paquetes de viaje con millas:

Personas con una cantidad de millas inferior a 5,000 no reciben descuento.
Personas con una cantidad de millas superior a 30,000 reciben un 20% de descuento.
Personas con una cantidad de millas superior a 5,000, pero inferior a 30,000 reciben un 10% de descuento.
Sin embargo, según los informes de los clientes, al intentar usar el descuento de 5,000 millas, 
no se aplica ningún descuento. Los clientes con más de 30,000 millas están recibiendo un descuento 
superior al que deberían recibir.

¿Cómo podrías modificar el código para que funcione correctamente? Selecciona la opción correcta:

Seleccione una alternativa:

A) Hacer con que el descuento no sea sumado, apenas definido con base en las millas, como:

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");
if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
}

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else {
    porcentajeDescuento = 0;
}


B) Removiendo el bloque ‘else’ de la estructura condicional


C) Agregando otro bloque else, referente al bloque if(cantidadMillas>5000):

if (cantidadMillas > 5000) {
    porcentajeDescuento = porcentajeDescuento + 10;
} else {
    porcentajeDescuento = porcentajeDescuento + 20;
}

if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    porcentajeDescuento = 0;
}

Alternativa correta
D) Haciendo la utilización de un bloque ‘if’ dentro del bloque else:

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");
if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    if (cantidadMillas > 5000) {
        porcentajeDescuento = porcentajeDescuento + 10;
    }
}

--La inclusión del bloque 'if' dentro del bloque 'else' garantiza que si la cantidad de millas 
es superior a 30000, el descuento será del 20%, y si no supera este valor pero es superior a 5000, 
el descuento será del 10%. En el caso de que la cantidad de millas sea inferior a 5000, 
el descuento permanecerá en cero, ya que no se cumple el requisito mínimo para obtener un descuento.--

*/
