/*
Aline está dando sus primeros pasos en la programación utilizando JavaScript y 
recientemente descubrió una funcionalidad que le pareció fascinante: el operador ternario.

Ella encontró muy interesante la posibilidad que el operador ofrece para reducir la cantidad 
de código escrito en algunas ocasiones y decidió aplicarlo en la práctica, 
en uno de sus proyectos personales. Sin embargo, al intentar hacer esta refactorización, 
se olvidó de la sintaxis del operador ternario.

Sabiendo que tú has estudiado sobre el operador recientemente, ella te pidió ayuda y te mostró 
el código que quiere refactorizar:

let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
}

¿Cómo podrías mostrarle a Aline un ejemplo de cómo transformar este fragmento 
de código en otro que tenga el mismo comportamiento, pero utilice el operador ternario?

Seleccione una alternativa

INCORRECTA
A) let palabraPersona = if(cantidadPersonas == 1) ? "persona" : "personas";

--Ocurrirá un error de sintaxis, porque el operador ternario no utiliza la palabra clave if en su sintaxis, 
simplemente sigue la fórmula: condicion ? valor si es verdadero : valor si es falso.--


B) let palabraPersona = cantidadPersonas == 1 ? "persona" ; "personas";

CORRECTA
C) let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

--Con la utilización de este código con el operador ternario, 
Aline podrá reemplazar varias líneas de código con solo una.--


D) let palabraPersona = cantidadPersonas ? "persona" : "personas";

*/


let cantidadPersonas = prompt('indica una cantidad de personas');
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

alert(`${cantidadPersonas} ${palabraPersona}`);
