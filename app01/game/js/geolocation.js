
function getLocation(){
    navigator.geolocation.getCurrentPosition(onSucces);
}

function onSucces(position){
    let name = prompt("Hola soy el Programa de Geolicalización, por favor dame un nombre: ");
    document.getElementById("output").innerHTML = "Hola " + name + " Esta es tu ubicación actual: " + "Lat: " + position.coords.latitud + " Long: " + position.coords.longitud;
}