function act1() {
    let trabajadores = parseInt(prompt("Ingrese la cantidad de trabajores"))
    while (isNaN(trabajadores) || trabajadores < 1) {
        alert("Valor incorrecto")
        trabajadores = parseInt(prompt("Ingrese la cantidad de trabajadores"))
    }
    let horas, precioh, sueldo_sem, impuesto, jubilacion, obra
    for (let i = 1; i <= trabajadores; i++) {
        horas = parseInt(prompt(`Ingrese las horas del ${i}° trabajador`))
        while (isNaN(horas) || horas < 1) {
            alert("Valor incorrecto")
            horas = parseInt(prompt("Ingrese la cantidad de horas"))
        }
        precioh = parseFloat(prompt(`Ingrese cuanto vale la hora`))
        while (isNaN(precioh) || precioh < 1) {
            alert("Valor incorrecto")
            precioh = parseFloat(prompt("Ingrese cuanto vale la hora"))
        }
        sueldo_sem = horas * precioh
        if (sueldo_sem <= 1500) {
            impuesto = sueldo_sem * 0.05
        } else {
            if (sueldo_sem < 3000) {
                impuesto = sueldo_sem * 0.07
            } else {
                impuesto = sueldo_sem * 0.09
            }
        }
        jubilacion = sueldo_sem * 0.11
        obra = sueldo_sem * 0.03
        console.log(`Su sueldo semanal final es ${(sueldo_sem - impuesto - jubilacion - obra).toFixed(2)} con un descuento total de $${(impuesto + jubilacion + obra).toFixed(2)}`)
    }
}

function act2() {
    let deposito = 1000000
    for (let i = 6; i <= 12; i++) {
        deposito *= 1.027534
        switch (i) {
            case 6:
                console.log(`El 1ro de junio el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 7:
                console.log(`El 1ro de julio el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 8:
                console.log(`El 1ro de agosto el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 9:
                console.log(`El 1ro de septiembre el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 10:
                console.log(`El 1ro de octubre el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 11:
                console.log(`El 1ro de noviembre el monto total es de $${deposito.toFixed(2)}`)
                break;
            case 12:
                console.log(`El 1ro de diciembre el monto total es de $${deposito.toFixed(2)}`)
                break;
        }
    }
}

function act3() {
    let num1 = parseInt(prompt("Ingresa un numero"))
    let num2 = parseInt(prompt("Ingresa otro numero"))
    let cont = 0, acum = 0
    while (isNaN(num1)) {
        alert("Valor incorrecto")
        num1 = parseInt(prompt("Ingresa un numero"))
    }
    while (isNaN(num2)) {
        alert("Valor incorrecto")
        num2 = parseInt(prompt("Ingresa un numero"))
    }
    if (num1 === num2) {
        alert("No hay un intervalo entre entre los numeros")
    } else {
        if (num1 > num2) {
            let aux = num1
            num1 = num2
            num2 = aux
        }
        for (let i = num1; i <= num2; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(i)
                cont++
                acum += i
            } 
        }
    }
    console.log(`La cantidad de multiplos de 3 y 5 que hay entre estos dos es ${cont}`)
    console.log(`Y la suma de estos da ${acum}`)
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             