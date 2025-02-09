document.addEventListener('DOMContentLoaded', function(){
    const contactForm = document.getElementById('contact');

    contactForm.addEventListener('submit', function(event){
        event.preventDefault(); //evitar el comportamiento por defecto
        alert("¡Guardado con Exito!")
    })
})