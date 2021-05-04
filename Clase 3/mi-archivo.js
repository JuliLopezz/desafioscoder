alert("Hola! Bienvenido/a a GoodMedical");
nombre = prompt("Ingrese su nombre");
alert("¡Hola " + nombre + "!");


alert("Nuestras especilidades disponibles son: 1. Cardiologia | 2. Médico Clínico | 3.Traumatología | 4. Dermatología");

let numero = parseInt(prompt("Ingrese el numero deseado"));

    switch(numero){
        case 1: alert("Usted pidió un turno en Cardiología"); 
        break;
        case 2: alert("Usted pidió un turno en Médico Clínico");
        break; 
        case 3: alert("Usted pidió un turno en Traumotología");
        break;
        case 4: alert("Usted pidió un turno en Dermatología");
        break;
        default: alert("Numero incorrecto, intenta nuevamente");
        window.location.reload();
        break;
    }

    horario = prompt("Ingrese el horario en el cual quiere su turno");
    alert("¡Turno tomado! Su horario es a las " + horario + " , lo/a esperamos");