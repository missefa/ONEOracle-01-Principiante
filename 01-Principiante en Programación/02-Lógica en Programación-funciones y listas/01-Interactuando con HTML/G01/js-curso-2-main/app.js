let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

function botonConsole(){
  console.log('El botón fue clicado');  
}

function botonPrompt(){
    let ciudadBrasil = prompt('Por favor, decime el nombre de una ciudad de Brasil');
    alert('Estuve en ' + ciudadBrasil + ' y me acordé de vos.');
}

function botonAlert(){
  alert('Amo JS');
}

function botonSuma(){
  let num1 = parseInt(prompt('Vamos a hacer una suma de dos números. Por favor ingresá el primer número'));
  let num2 = parseInt(prompt('Por favor, ingresá el segundo número'));
  let resSuma = num1 + num2;
  alert(`${num1} + ${num2} = ${resSuma}`); 
}