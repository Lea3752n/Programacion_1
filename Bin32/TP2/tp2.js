function act1a() {
    let num1 = parseInt(prompt("Ingrese un numero"));
    if (num1 % 2 === 0) {
        alert(num1 + " es par");
    } else {
        alert(num1 + " es impar");
    }
}

function act1b() {
    let num = parseInt(prompt("Ingrese un numero"));
    alert(num % 2 === 0 ? "El numero es par" : "El numero es impar");
}

function act2() {
    let num1 = parseFloat(prompt("Ingrese un numero"));
    if (num1 >= 0) {
        alert(num1 + " es positivo");
    } else {
        alert(num1 + " es negativo");
    }
}

function act3a() {
    let num1 = parseFloat(prompt("Ingrese un numero"));
    let num2 = parseFloat(prompt("Ingrese otro numero"));
    if (num2 !== 0) {
        let cociente = num1 / num2;
        alert("El cociente de la division es " + cociente.toFixed(2));
    } else {
        alert("Error no se puede dividir entre cero");
    }
}

function act3b() {
    let num1 = parseFloat(prompt("Ingrese un numero"));
    let num2 = parseFloat(prompt("Ingrese otro numero"));
    alert(num2 !== 0 ? `El resultado es ${num1 / num2}` : "Error: No se puede dividir entre cero");
}

function act4() {
    let letra = prompt("Eliga una letra entre A,B,C y D").toUpperCase();
    if (letra === "A") {
        alert("Usted ha acertado");
    } else {
        alert("Usted se equivoco");
    }
}
function act5() {
    let num1 = parseFloat(prompt("Ingrese un numero"));
    let num2 = parseFloat(prompt("Ingrese otro numero"));
    if (num1 > num2) {
        let resultado = num1 - num2;
        alert("La diferencia es de " + resultado);
    } else {
        let resultado = num2 - num1;
        alert("La diferencia es de " + resultado);
    }
}

function act6() {
    let pedido = prompt("Ingrese lo que desea").toLowerCase();
    if (pedido === "cerveza" || pedido === "vino") {
        alert("Te dirigiras a la barra");
    } else {
        alert("Te dirigiras a la tienda");
    }
}

function act7() {
    let vehiculo = prompt("Ingrese en que viajara").toLowerCase();
    if (vehiculo === "tren" || vehiculo === "colectivo") {
        alert("Recuerda llevar dinero para el pasaje");
    }
}

function act8() {
    let tramo = parseFloat(prompt("Ingrese cuantos km son del tramo"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo empleado"))
    let velocidad = tramo / tiempo;
    if (velocidad >= 40 && velocidad <= 60) {
        alert("Pasaste la prueba");
    } else {
        alert("Estas descalificado");
    }
}

function act9() {
    let articulo = parseInt(prompt("Ingrese cuantos articulos lleva"));
    let precio = parseFloat(prompt("¿Cuanto vale uno de esos?"));
    if (articulo > 10 && precio > 40) {
        let pago = (articulo * precio) * 0.15
        alert("El pago es de " + pago.toFixed(2));
    } else {
        let pago = (articulo * precio)
        alert("El pago es de " + pago.toFixed(2));
    }
}

function act10() {
    let nota1 = parseInt(prompt("Ingrese la primer nota"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota"));
    let nota3 = parseInt(prompt("Ingrese la tercer nota"));
    if (nota1 && nota2 && nota3) { //Validacion por truthy
        let promedio = (nota1 + nota2 + nota3) / 3
        if (promedio > 7) {
            alert("Notable");
        } else {
            if (promedio >= 5) {
                alert("Aprobado");
            } else {
                alert("Suspendido");
            }
        }
    } else {
        alert("No se han introducidos los datos correctamente")
    }

}

