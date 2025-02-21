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


    
