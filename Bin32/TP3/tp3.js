function act1a() {
    let tproducidos = parseInt(prompt("Ingrese los tornillos producidos"))
    let tdefectuosos = parseInt(prompt("Ingrese los tornillos defectuosos"))
    if (tdefectuosos < 200 || tproducidos > 10000) {
        if (tdefectuosos < 200 && tproducidos > 10000) {
            alert("Usted es grado 8")
        } else {
            if (tdefectuosos < 200) {
                alert("Usted es grado 6")
            } else {
                alert("Usted es grado 7")
            }
        }
    } else {
        alert("Usted es grado 5")
    }
}

function act1b() {
    let tproducidos = parseInt(prompt("Ingrese los tornillos producidos"))
    let tdefectuosos = parseInt(prompt("Ingrese los tornillos defectuosos"))
    let grado
    if (tdefectuosos < 200) {
        if (tproducidos > 1000) {
            grado = 8
        } else {
            grado = 6
        }
    } else {
        if (tproducidos > 1000) {
            grado = 7
        } else {
            grado = 5
        }
    }
    alert(`El operario es grado ${grado}`)
}

function act2() {
    let manzanas = parseInt(prompt("Ingrese cuantos kg compra"))
    let precio = parseFloat(prompt("Ingrese el precio por kg"))
    let descuento;
    if (manzanas > 10) {
        descuento = precio * 0.20
    } else {
        if (manzanas > 5) {
            descuento = precio * 0.15
        } else {
            if (manzanas > 2) {
                descuento = precio * 0.10
            } else {
                descuento = 0
            }
        }
    }
    alert(`Su pago es de ${descuento / (precio * manzanas)}`)
}

function act3og() {
    let tp1 = parseInt(prompt("Ingrese la nota del primer tp"))
    let tp2 = parseInt(prompt("Ingrese la nota del segundo tp"))
    let tp3 = parseInt(prompt("Ingrese la nota del tercer tp"))
    let tp4 = parseInt(prompt("Ingrese la nota del cuarto tp"))
    let promedio;
    if (tp1 <= tp2 && tp1 <= tp3 && tp1 <= tp4) {
        promedio = (tp2 + tp3 + tp4) / 3
    } else {
        if (tp2 <= tp3 && tp2 <= tp4 && tp2 <= tp1) {
            promedio = (tp1 + tp3 + tp4) / 3
        } else {
            if (tp3 <= tp4 && tp3 <= tp1 && tp3 <= tp2) {
                promedio = (tp1 + tp2 + tp4) / 3
            } else {
                promedio = (tp1 + tp2 + tp3) / 3
            }
        }
    }
    alert("Su promedio es " + promedio.toFixed(2));
}

function act3profe() {
    let tp1 = parseInt(prompt("Ingrese la nota del primer tp"))
    let tp2 = parseInt(prompt("Ingrese la nota del segundo tp"))
    let tp3 = parseInt(prompt("Ingrese la nota del tercer tp"))
    let tp4 = parseInt(prompt("Ingrese la nota del cuarto tp"))
    let eliminar = 0;
    if (tp1 < tp2 && tp1 < tp3 && tp1 < tp4) {
        eliminar = tp1
    } else {
        if (tp2 < tp3 && tp2 < tp4 && tp2 < tp1) {
            eliminar = tp2
        } else {
            if (tp3 < tp4 && tp3 < tp1 && tp3 < tp2) {
                eliminar = tp3
            } else {
                eliminar = tp4
            }
        }
    }
    alert("Su promedio es " + (tp1 + tp2 + tp3 + tp4 - eliminar) / 3);
}

function act4() {
    let nh = parseFloat(prompt("Ingrese su nivel de hemoglobina"))
    let edad = parseFloat(prompt("Ingrese su edad en años"))
    let resultado = "Negativo"
    if (edad <= 0.083 && nh < 13) {
        resultado = "Positivo"
    } else {
        if (edad <= 0.5 && nh < 10) {
            resultado = "Positivo"
        } else {
            if (edad <= 1 && nh < 11) {
                resultado = "Positivo"
            } else {
                if (edad<=5 && nh < 11.5) {
                    resultado = "Positivo"
                } else {
                    if (edad<=10 && nh<12.6) {
                        resultado = "Positivo"
                    } else {
                        if (edad<=15 && nh<13) {
                            resultado = "Positivo"
                        } else {
                            if (edad>15) {
                                resultado = "No hay valores de diagnostico"
                            }
                        }
                    }
                }
            }
        }
    }
    alert(resultado+" para anemia")
}

function act5() {
    let km = parseInt(prompt("Ingrese cuantos kilometros corrio"));
    let pago = 0
    if (km<=300) {
        pago = 300000
    } else {
        if (km>300 && km<=1000) {
            pago = (km-300)*15000+300000
        } else {
            if (km>1000) {
                pago = (km-1000)*10000+300000+(700*15000)
            }
        }
    }
    alert(`El monto final es ${pago}\nEl monto con impuestos es ${pago*1.21}`)
}

function act6() {
    let horas = parseInt(prompt("Ingrese las horas trabajadas"))
    let tarifa = parseFloat(prompt("Ingrese su tarifa por horas"))
    let salario = 0
    if (horas>40) {
        salario = (40*tarifa)+(horas-40)*(tarifa*1.5)
    } else {
        salario = horas*tarifa
    }
    alert(`Su salario ${salario.toFixed(2)}`)
}

function act7() {
    let sueldo = parseFloat(prompt("Ingrese su sueldo"))
    let descuento = 0
    if (sueldo<=1000) {
        descuento = 0.1
    } else {
        if (sueldo<=2000) {
            descuento = 0.15
        } else {
            descuento = 0.18
        }
    }
    alert(`Su sueldo es ${sueldo-(sueldo*descuento)}`)
}

function act8a() {
    let moto = prompt("Ingrese la marca de la moto").toLowerCase()
    let precio = parseFloat(prompt("Ingrese su precio"))
    let descuento = 0
    if (moto==="susuki") {
        descuento = 10
    } else {
        if (moto==="yamaha") {
            descuento = 8
        } else {
            if (moto==="honda") {
                descuento = 5
            } else {
                descuento = 2
            }
        }
    }
    alert(`El precio de la moto es ${precio} y con un descuento del ${descuento}% \nEl precio final es ${precio-(precio*descuento/100)}`)
}

function act8b() {
    let moto = prompt("Ingrese una opcion:\n1.Susuki\n2.Yamaha\n3.Honda\n4.Otra marca")
    let precio = parseFloat(prompt("Ingrese su precio"))
    let descuento = 0
    switch (moto) {
        case 1:
             descuento = 10
            break;
        case 2:
             descuento = 8
            break;
        case 3:
             descuento = 5
            break;
        case 4:
             descuento = 2
            break;    
        default:
            alert("Opcion no valida")
            return;
    }
    alert(`El precio de la moto es ${precio} y con un descuento del ${descuento}% \nEl precio final es ${precio-(precio*descuento/100)}`)
}

function act9() {
    let nombre = prompt("Ingrese su nombre")
    let llantas = parseInt(prompt("Ingrese la cantidad de llantas que va llevar"))
    let precio = 25000
    if (llantas<4) {
        precio = (precio*llantas)-(precio*llantas*0.2)
    } else {
        precio = (precio*llantas)-(precio*llantas*0.25)
    }
    alert(`${nombre} el precio de su compra es $${precio}`)
}

function act10() {
    let monto = parseFloat(prompt("Ingrese el monto de la compra"))
    let metodo = prompt("Ingrese el metodo de pago").toLowerCase()
    let pago = 0
    if (metodo==="credito") {
        pago = monto*1.25
    } else {
        if (metodo==="efectivo") {
            pago = monto-(monto*0.15)
        } else {
            if (metodo==="debito") {
                 pago = monto-(monto*0.03)
            } else {
                alert("No aceptamos ese metodo de pago")
                return;
            }
        }
    }
    alert(`Su total a pagar es $${pago}`)
}
