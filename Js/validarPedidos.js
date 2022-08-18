function pedir() {
    if (Formulario.querySelector('#Formulario') == '' ) {

    alert('No ha llenado todos los campos')
    Swal.fire({
        'title': 'Proceso realizado sin éxito',
        'text': 'Sus pago no se hizo adecuadamente',
        'icon': 'Error'
    });
    }
else{

    Swal.fire({
        'title': 'Proceso realizado con éxito',
        'text': 'Sus pago se hizo adecuadamente',
        'icon': 'success'
    });
}
}

function fValidarTarjeta() {
    tarjeta = document.getElementById("card").value;

    visa_error = "";
    mastercard_error = "";

    if (!tarjeta.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/))
        visa_error = "No es un número de Tarjeta correcto";


    if (!tarjeta.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
        mastercard_error = "No es un número de Tarjeta correcto";

        document.getElementById("mastercard_error").innerHTML = mastercard_error;
    }
    else {
        Formulario.expi.focus();
    }


}

function validarAño() {
    let cardMonth = /^0[1-9]|1[0-2]/.test(e.target.value); if (cardMonth === true) { setInput({ ...input, [e.target.name]: e.target.value.replace(/\D/g, "").slice(0, 2) }); setErrors({ ...errors, cardmonth: false }); } else { setErrors({ ...errors, cardmonth: true }); }


}