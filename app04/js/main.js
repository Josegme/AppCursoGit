let namesAndSurnames = "José Martin"; 
var x = '0'; 
let precioProducto = 0; 
var esMayorDeEdad = true; 
let persona = [20,'Juan Perez',true,1.68];
const PROGRAM_NAME = "APLICACION DE LOGICA DE PROGRAMACION";
//vamos a hacer que cuando el programa se ejecute cambien los valores de x

var tav = document.getElementById('ouput');
tav.innerHTML = x;

function changeVariable(){
    x = prompt('Dame un nuevo valor');
    tav.innerHTML = x;
}

/* 
si(){
    //bloque true
}sino{
    //bloque false
}
operadores Booleanos:
and && - or || - not !=
*/
var edadPersona = 18;
var peso=0
let nacional = false;
const PRECIO = 20;
let estatura = 0;

function evaluarEdad(){    
    edadPersona = parseInt(prompt('Por favor, ingresal tu edad:'));
    if(edadPersona >= 18 ){
    alert('La persona es mayor de edad')
    evaluarRequisitosMinimos();
    }else{
    alert('La persona no es mayor de edad');
    return;
    }
}

function evaluarRequisitosMinimos(){
    peso = parseFloat(prompt('Dame el peso de la persona: '));
    if(edadPersona >= 16 && edadPersona <=40 && peso >= 20){
        alert('El candiato cumple con los requisitos y es admitido');
        calcularCostoInscripcion();
        evaluarCategoria();
    }else{
        alert('El candidato no cumple con los requisitos minimos');
        return;
    }
    alert('Tu proceso de seleccion ha finalizado con exito.')
}

function calcularCostoInscripcion(){
    let respuestaNacionalidad = prompt('Si eres Nacional Respoonde si, de lo contrario responde no.');
    if(respuestaNacionalidad === 'si'){
        nacional = true;
    }else{
        nacional = false;
    }
    if(edadPersona >= 20 && edadPersona <= 30 || nacional === true){
        let precioConDescuento = 20 - (20* 10/100);
        alert('El precio que vas a pagar es: ' + precioConDescuento);
    }else{
        alert('El precio a pagar por ser extranjero: ' + PRECIO);
    }
}

function evaluarCategoria(){
    estatura = parseFloat(prompt('Por favor, ingresa la estatura.'));
    if(estatura != 1.68){
        alert('Lo sentimos, solo se adminten personas igual a 1.68');
    }else{
        alert('Tu estatura es la adecuada para ser admitido. Felicidades!!')
    }
}

//calculadora básica

function sumar(numero1,numero2){
    let resultado = numero1 + numero2;
    return resultado;
}

function multiplicar(x, y){
    let z = x*y;
    return z;
}

function division(a, b){
    var c = a/b;
    return c;
}
//vamos a crear otra función para que lea los valores que queremos operar con la calculadora

function leerValores(simbolo){
    var a = 0
    let x = parseFloat(prompt('Por favor ingresa el primer número: '));
    let y = parseFloat(prompt('Ingrese el segundo número: '));
    if(simbolo != '' && (simbolo === '+' || simbolo === '*' || simbolo === '/')){
        if(simbolo === '+'){
            a = sumar(x,y);
        }
        if(simbolo === '*'){
            a = multiplicar(x, y);
        }
        if(simbolo === '/'){
            a = division(x, y);
        }
    }else{
        alert('Lo siento no podemos continuar el simbolo no puede estar vacio.');
        return;
    }
    tav.innerHTML = a; //tambien puedeo hacer tav.innerHTML = sumar(x,y)
    if(a <= 0){
        tav.className += "alertaValorNegativo";        
    }
}
//copiar una estructura de funciones iguales es una mala práctica -> hay q tratar de reutilizar
function evaluar(){
    let iterar = true; //para que ejecute almenos una vez
    while(iterar){
        var respuesta =  prompt('Quieres continuar iterando? si o no');
        if (respuesta != 'si'){
            iterar = false;
        }
    }
    alert('He salido del ciclo')

}
