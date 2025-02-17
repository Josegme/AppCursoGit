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

if(edadPersona <18 ){
    alert('Es mayor de edad')
}else{
    alert('no es mayor de edad')
}

if(edadPersona >= 16 && edadPersona <=40 && peso >= 20){
    alert('El candiato cumple con los requisitos y es admitido');
}else{
    alert('El candidato no cumple con los requisitos minimos');
}

if(edadPersona >= 20 && edadPersona <= 30 || nacional === true){
    let precioConDescuento = 20 - (20* 10/100);
    alert('El precio que vas a pagar es: ' + precioConDescuento);
}else{
    alert('El precio a pagar por ser extranjero: ' + PRECIO);
}

if(estatura != 1.68){
    alert('Lo sentimos, solo se adminten personas igual a 1.68');
}else{
    alert('Tu estatura es la adecuada para ser admitido.')
}
    
