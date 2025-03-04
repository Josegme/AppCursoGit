function calculateMortgage(event){

    event.preventDefault();

    let cuota = document.forms["imortgage"]["fcuota"].value;
    let costoTotal = document.forms["imortgage"]["fvalortotal"].value;
    let intereses = document.forms["imortgage"]["finteres"].value;
    let plazoAnios = document.forms["imortgage"]["fplazo"].value;
    const MONTHS_ON_YEAR = 12;

    const morgage = {
        costoTotalInmueble : 0,
        totalPrestamo : 0,
        totalIntereses : 0,
        cuotaMensual : 0,
    };
    
    morgage.costoTotalInmueble = costoTotal;
    morgage.totalPrestamo = costoTotal - cuota;
    morgage.totalIntereses =  morgage.totalPrestamo * intereses/100;
    morgage.cuotaMensual = (morgage.totalPrestamo + morgage.totalIntereses) / (plazoAnios * MONTHS_ON_YEAR);

    outputMortgage(morgage);
}

function outputMortgage(finalMorgage){
    document.getElementById("omontoprestamo").innerHTML = ValueToDollar(finalMorgage.totalPrestamo);
    document.getElementById("ocuotamensual").innerHTML = ValueToDollar(finalMorgage.cuotaMensual);
    var totalPrestamoPorcentaje = 0;
    totalPrestamoPorcentaje = finalMorgage.totalPrestamo * 100 / finalMorgage.costoTotalInmueble;
    alert(totalPrestamoPorcentaje);

    if(totalPrestamoPorcentaje > 90){
        document.getElementById("omontoprestamo").className += " alertaPorcentaje";
    }else{
        document.getElementById("omontoprestamo").className = " form-control";
    }
}

function resetForm(){
    document.forms["imortgage"].reset();
    document.getElementById("omontoprestamo").innerHTML = "0";
    document.getElementById("ocuotamensual").innerHTML = "0";
}

    
function ValueToDollar(value){
    const dollarFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
    return dollarFormatter.format(value);
}