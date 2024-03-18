//1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludoConsola() {
    console.log("¡Hola, mundo!");
}
saludoConsola();


//2. Crear una función que reciba un nombre como parámetro y muestre 
//"¡Hola, [nombre]!" en la consola.

function saludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludoNombre("Albus");


//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleNumero(num) {
    return num * 2;
}
let resultadoDoble = dobleNumero(4);
    console.log(resultadoDoble);


//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedioNumero(num1,num2,num3) {
    return (num1 + num2 + num3) / 3;
    }
let resultadoPromedio = promedioNumero(3,4,2);
    console.log(resultadoPromedio);


//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayorNumero(num1,num2) {
    return num1 > num2 ? num1 : num2;
    }
let resultadoMayor = mayorNumero(20,25);
    console.log(resultadoMayor);


//6. Crear una función que reciba un número como parámetro 
//y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadradoNumero(num) {
    return num * num;
    }
let resultadoCuadrado = cuadradoNumero(4);
    console.log(resultadoCuadrado);
