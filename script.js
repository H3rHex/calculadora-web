//CALCULATOR LOGIC//

//Una variable vacia donde se almacena el numero ejemplo 123
let number = ''
//Este array almacena la operacion que despues sera calculada ejemplo ['12', '+' , '4']
let operacion = []

//añade el numero
function addNumber(event){
    numValue = event.target;
    number += numValue.innerText;
    Number(number);
    displayUpdateNumber()
}

//añade el operador
function addOperator(event){
    let operador = event.target;
    operacion.push(number, operador.innerText)
    number = ''
    //console.log(operacion)
}

//se actualiza el numero en pantalla
function displayUpdateNumber(){
    display = document.getElementById('display');
    display.value = number;
}

//muestra el resultado por pantalla
function showResultado(){
    
   if (number !== ''){ //si el numero no esta vacio se añade el numero a operacion => Para evitar errores
        operacion.push(number);
   }
   //se calcula el resultado
   try{
        var resultado = eval(operacion.join(' '));
   } catch (error) {
        alert('Error en la operacion');
   }
  
   //se compruba si el resultado es undefinded, si no lo es muestra el calculo, si lo es no devuelve nada.
   if (resultado !== undefined || isNaN(resultado) === false){
        display.value = resultado;
        operacion = [];
        number = '';
        operacion.push(resultado)
        //console.log(operacion)
    } else {
        return;
    }

}

function resetCalculator(){
    //console.log('borramos');
    number = '';
    operacion = [];
    display.value = '';
}

//display
document.querySelectorAll('#num').forEach(num => num.addEventListener('click', addNumber));
document.querySelectorAll('.Operador').forEach(op => op.addEventListener('click', addOperator));
document.getElementById('igual').addEventListener('click', showResultado);
document.getElementById('del').addEventListener('click' , resetCalculator);

//EFECTS//
document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () =>{
    btn.classList.add('clicked');
    btn.addEventListener('animationend', () => {
        btn.classList.remove('clicked');
    });
}));