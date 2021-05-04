function solicitarNombre (){
    let nombreIngresado = prompt("Ingrese nombre");
    alert("El nombre ingresado es: " + nombreIngresado);
}

solicitarNombre();

function solicitarNombre (){
    let nombreIngresado = prompt("Ingrese nombre");
    alert("El nombre ingresado es: " + nombreIngresado);
}

solicitarNombre();

alert("Recurra a la consola");
console.log("Calculemos el promedio de tus notas escolares");

function calcularPromedio(){
    let suma = 0 
    let cantidadNotas = parseInt(prompt(("Ingrese la cantidad de notas obtenidas")));
        for (let i = 0; i < cantidadNotas; i++){
            let nota = parseInt(prompt("Ingrese las notas obtenidas " + i));
            let promedio = suma + nota;
        }
        return promedio;
}

let promedioFinal = calcularPromedio();
console.log("El promedio de sus notas es de: " + promedioFinal);
