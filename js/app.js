let clear = document.getElementById('clear');
let btnPunto = document.getElementById('punto');
let btn0 = document.getElementById('cero');
let btn1 = document.getElementById('uno');
let btn2 = document.getElementById('dos');
let btn3 = document.getElementById('tres');
let btn4 = document.getElementById('cuatro');
let btn5 = document.getElementById('cinco');
let btn6 = document.getElementById('seis');
let btn7 = document.getElementById('siete');
let btn8 = document.getElementById('ocho');
let btn9 = document.getElementById('nueve');
let btnSuma = document.getElementById('suma');
let btnResta = document.getElementById('resta');
let btnIgual = document.getElementById('igual');
let btnMultiplicacion = document.getElementById('multiplicacion');
let btnDivision = document.getElementById('division');
let display = document.getElementById('display');
let num1, num2 = 0;
let resultado, operacion = " ";
let accion, contienePunto = false;

//Limpiar el contenido del display
clear.addEventListener('click', () => {
    limpiar();
});

const limpiar = () =>{
    resultado = " ";
    display.innerHTML = resultado;
}


//Botones
btnPunto.addEventListener('click', ()=> {
    if(display.textContent.indexOf('.')<0 ){ //evitar poner mas de un punto   
        display.innerHTML += ".";
    }
    
});

btn0.addEventListener('click', () => {
    display.innerHTML += 0;
});

btn1.addEventListener('click', () => {
    display.innerHTML += 1;
});

btn2.addEventListener('click', () => {
    display.innerHTML += 2;
});

btn3.addEventListener('click', () => {
    display.innerHTML += 3;
});

btn4.addEventListener('click', () => {
    display.innerHTML += 4;
});

btn5.addEventListener('click', () => {
    display.innerHTML += 5;
});

btn6.addEventListener('click', () => {
    display.innerHTML += 6;
});

btn7.addEventListener('click', () => {
    display.innerHTML += 7;
});

btn8.addEventListener('click', () => {
    display.innerHTML += 8;
});

btn9.addEventListener('click', () => {
    display.innerHTML += 9;
});

btnSuma.addEventListener('click', () => {
    num1 = display.textContent;
    operacion = "+";
    limpiar();
    accion = true;
});

btnResta.addEventListener('click', () => {
    num1 = display.textContent;
    operacion = "-";
    limpiar();
    accion = true;
});

btnMultiplicacion.addEventListener('click', () => {
    num1 = display.textContent;
    operacion = "*";
    limpiar();
    accion = true;
});

btnDivision.addEventListener('click', () => {
    num1 = display.textContent;
    operacion = "/";
    limpiar();
    accion = true;
});

const resolver = () => {
    switch (operacion){
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        
        case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        
        case '*':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        
        case '/':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        
        default:
            console.log('Algo salio mal');
    }    
}


btnIgual.addEventListener('click', () => {
    if(accion){ //Evitar darle dos veces seguidas al boton igual
        num2 = parseFloat(display.textContent);
        resolver();
        display.innerHTML = resultado;
        accion = false;
    }
});


