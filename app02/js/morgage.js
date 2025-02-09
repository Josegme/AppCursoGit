function calculateMorgage(event){

    event.preventDefault();

    let cuota = document.forms["imorgage"]["fcuota"].value;
    let costoTotal = document.forms["imorgage"]["fvalortotal"].value;
    let intereses = document.forms["imorgage"]["finteres"].value;
    let plazoAnios = document.forms["imorgage"]["fplazo"].value;
    const MONTHS_ON_YEAR = 12;

    const morgage = {
        totalPrestamo : 0,
        totalIntereses : 0,
        cuotaMensual : 0
    };

    morgage.totalPrestamo = costoTotal - cuota;
    morgage.totalIntereses =  morgage.totalPrestamo * intereses/100;
    morgage.cuotaMensual = (morgage.totalPrestamo + morgage.totalIntereses) / (plazoAnios * MONTHS_ON_YEAR);

    outputMorgage(morgage);
}

function outputMorgage(finalMorgage){
    document.getElementById("omontoprestamo").innerHTML = finalMorgage.totalPrestamo;
    document.getElementById("ocuotamensual").innerHTML = finalMorgage.cuotaMensual;
}

function resetForm(){
    document.forms["imorgage"].reset();
    
}

