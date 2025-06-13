function act1() {
    let num = null
    let suma = 0
    let cont = 0
    do {
        num = parseInt(prompt("Ingrese un numero"))
        if (isNaN(num)) {
            alert("No es un numero")
        } else {
            if (num !== 0) {
                suma += num
                cont++
            }
        }

    } while (num !== 0);
    if (cont !== 0) {
        alert(`La suma es ${suma} \nEl promedio es ${(suma / cont).toFixed(2)}`)
    } else {
        alert("No ingreso ningun numero")
    }
}

function act2() {
    let pedido = parseInt(prompt("Ingrese cuantos numeros va a pedir"))
    while (isNaN(pedido) || pedido < 1) {
        alert("Valor incorrecto")
        pedido = parseInt(prompt("Ingrese cuantos numeros va a pedir"))
    }
    let num = null
    let i = 0
    let positivos = 0
    let negativos = 0
    let ceros = 0
    while (pedido !== i) {
        num = parseFloat(prompt("Ingrese un numero"))
        if (isNaN(num)) {
            alert("Valor incorrecto")

        } else {
            if (num > 0) {
                positivos++
            } else {
                if (num === 0) {
                    ceros++
                } else {
                    negativos++
                }
            }
            i++
        }
    }
    alert(`Introduciste:\n${ceros} ceros\n${positivos} numeros positivos\n${negativos} numeros negativos.`)
}

function act3() {
    let letra = null
    do {
        letra = prompt("Ingrese una letra").toLowerCase()
        if (letra !== " ") {
            if (isNaN(letra) && letra.length === 1) {
                if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
                    alert("Es vocal")
                } else {
                    alert("No es vocal")
                }
            } else {
                alert("No es una letra")
            }
        }
    } while (letra !== " ");
}

function act4() {
    let salario = 1500
    alert(`El salario del primer año es $${salario}`)
    for (let i = 2; i <= 6; i++) {
        salario *= 1.1
        alert(`En el año ${i} su salario es $${salario.toFixed(2)}`)
    }
    alert(`Su salario al cabo de 6 años es $${salario.toFixed(2)}`)
}

function act5() {
    let pedido = parseInt(prompt("¿Cuantas hamburguesas va a pedir?"))
    while (isNaN(pedido) || pedido < 1) {
        alert("Valor incorrecto")
        pedido = parseInt(prompt("¿Cuantas hamburguesas va a pedir?"))
    }
    let i = 0
    let tipoH = null
    let pago = null
    while (pedido !== i) {
        tipoH = parseInt(prompt("¿Que tipo de hamburguesa desea? \n1. Sencilla \n2. Doble \n3. Triple"))
        switch (tipoH) {
            case 1:
                pago += 20
                break;
            case 2:
                pago += 25
                break;
            case 3:
                pago += 28
                break;
            default:
                alert("Opcion incorrecta")
                i--
                break;
        }
        i++
    }
    let metodo = null
    for (let j = 0; j < 1; j++) {
        metodo = parseInt(prompt("Ingrese el metodo de pago:\n1. Credito\n2. Otro"))
        if (isNaN(metodo) || metodo > 2 || metodo < 1) {
            alert("Opcion invalida")
            j--
        } else {
            if (metodo === 1) {
                pago *= 1.05
            }
        }
    }
    alert(`El pago final es de $${pago.toFixed(2)}`)
}

function act6() {
    let focos = parseInt(prompt("Ingrese cuantos focos hay en el lote"))
    while (isNaN(focos) || focos < 1) {
        alert("Valor incorrecto")
        focos = parseInt(prompt("Ingrese cuantos focos hay en el lote"))
    }
    let verdes = 0
    let blancos = 0
    let rojos = 0
    let colorF = null
    for (let i = 1; i <= focos; i++) {
        colorF = parseInt(prompt("¿De que color es el foco? \n1. Verde \n2. Blanco \n3. Rojo"))
        switch (colorF) {
            case 1:
                verdes++
                break;
            case 2:
                blancos++
                break;
            case 3:
                rojos++
                break;
            default:
                alert("Opcion incorrecta")
                i--
                break;
        }
    }
    alert(`Focos del lote: ${focos} \nFocos verdes: ${verdes} \nFocos blancos: ${blancos} \nFocos rojos: ${rojos}`)
}

function act7() {
    let ahorro = 3
    let acum = 0
    let dia = 1
    while (dia < 10) {
        console.log(`En el dia ${dia} ahorro $${ahorro}`)
        ahorro *= 3
        acum += ahorro
        dia++
    }
    alert(`Usted en ${dia} dia/s ahorro $${acum}`)
}

function act8() {
    let num = parseInt(prompt("Ingrese un numero del 1 al 10 del cual desee saber la tabla"))
    while (isNaN(num) || num < 1 || num > 10) {
        alert("Valor incorrecto")
        num = parseInt(prompt("Ingrese un numero del 1 al 10"))
    }
    let resultado = null
    for (let i = 1; i <= 10; i++) {
        resultado = num * i
        console.log(num + "x" + i + "=" + resultado)
    }
}

function act9() {
    let articulos = parseInt(prompt("Ingrese cuantos articulos va a llevar"))
    while (isNaN(articulos) || articulos < 1) {
        alert("Valor incorrecto")
        articulos = parseInt(prompt("Ingrese cuantos articulos va a llevar"))
    }
    let precio = null
    let descuento = null
    let total = null
    for (let i = 1; i <= articulos; i++) {
        precio = parseFloat(prompt("Ingrese el precio de un articulo"))
        while (isNaN(precio) || precio < 1) {
            alert("Valor incorrecto")
            precio = parseFloat(prompt("Ingrese el precio de un articulo"))
        }
        if (precio >= 200) {
            descuento = precio * 0.15
            precio = precio - descuento
        } else {
            if (precio > 100) {
                descuento = precio * 0.12
                precio = precio - descuento
            } else {
                descuento = precio * 0.15
                precio = precio - descuento
            }
        }
        console.log(`El articulo ${i}° tiene un descuento de $${descuento.toFixed(2)} y sale $${precio.toFixed(2)}`)
        total += precio
    }
    console.log(`El total es $${total.toFixed(2)}`)
}

function act10() {
    let anios = parseInt(prompt("Ingrese cuantos años"))
    let deposito = null
    let saldo = null
    let interes = null
    for (let anio = 1; anio <= anios; anio++) {
        for (let mes = 1; mes <= 12; mes++) {
            deposito = parseFloat(prompt(`Ingrese el deposito del ${anio} y del mes ${mes}`))
            saldo += deposito
        }
        interes = saldo * 0.10
        saldo += interes
    }
    alert("El total de la inversion es $" + saldo)
}

function act11() {
    let salones = parseInt(prompt("Ingrese la cantidad de salones"))
    let edad = null
    let alumnos = null
    let totaledad = null
    let promedio = null
    let promediogeneral = null
    for (let i = 1; i <= salones; i++) {
        alumnos = parseInt(prompt(`Ingrese la cantidad de alumnos en el salon ${i}°`))
        totaledad = null
        for (let alumno = 1; alumno <= alumnos; alumno++) {
            edad = parseInt(prompt("Ingrese la edad del alumno "))
            totaledad += edad
        }
        promedio = totaledad / alumnos
        console.log(`El promedio del aula ${i}° es ${promedio}`)
        promediogeneral += promedio
    }
    alert(`El promedio general de edad en la escuela es ${promediogeneral / salones}`)
}

function act12() {
    let ventas = parseInt(prompt("Ingrese la cantidad de ventas"))
    while (isNaN(ventas) || ventas < 1) {
        alert("Valor incorrecto")
        ventas = parseInt(prompt("Ingrese la cantidad de ventas"))
    }
    let precio = null
    let i = 0
    let mas10k = null
    let montomas10k = null
    let menos10k = null
    let montomenos10k = null
    let montoglobal = null
    while (i < ventas) {
        precio = parseFloat(prompt("Ingrese el precio de la venta"))
        while (isNaN(precio) || precio < 1) {
            alert("Precio incorrecto")
            precio = parseFloat(prompt("Ingrese el precio de la venta"))
        }
        if (precio > 10000 && precio < 20000) {
            montomas10k += precio
            mas10k++
        } else {
            montomenos10k += precio
            menos10k++
        }
        montoglobal += precio
        i++
    }
    alert(`${ventas} ventas totales \n${mas10k} son por mas de $10k y el total de su monto es $${montomas10k}\n${menos10k} son por menos o igual a $10k y el total de su monto es $${montomenos10k}\nEl monto global es $${montoglobal}`)
}

function act13() {
    let alumnos = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar"))
    while (isNaN(alumnos) || alumnos < 1) {
        alert("Valor incorrecto")
        alumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))
    }
    let notas = null
    let aprobados = null
    let desaprobados = null
    for (let i = 1; i <= alumnos; i++) {
        notas = parseFloat(prompt(`Ingrese la nota del ${i}° alumno`))
        while (isNaN(notas) || notas < 1 || notas > 10) {
            alert("Valor incorrecto")
            notas = parseInt(prompt(`Ingrese la nota del ${i}° alumno`))
        }
        if (notas >= 7) {
            aprobados++
        } else {
            desaprobados++
        }
    }
    alert(`Alumnos aprobados: ${aprobados}\nAlumnos desaprobados: ${desaprobados}`)
}

function act14() {
    let trabajadores = parseInt(prompt("Ingrese la cantidad de trabajadores a determinarles el sueldo semanal"))
    while (isNaN(trabajadores) || trabajadores < 1) {
        alert("Valor incorrecto")
        trabajadores = parseInt(prompt("Ingrese la cantidad de trabajadores"))
    }
    let horas = null
    let sueldoxhora = null
    let nombre;
    let sueldo = null
    for (let i = 1; i <= trabajadores; i++) {
        horas = parseFloat(prompt("Ingrese cuantas horas trabaja"))
        while (isNaN(horas) || horas < 1) {
            alert("Valor incorrecto")
            horas = parseInt(prompt("Ingrese la cantidad de horas"))
        }
        sueldoxhora = parseFloat(prompt("Ingrese cuanto vale la hora"))
        while (isNaN(sueldoxhora) || sueldoxhora < 1) {
            alert("Valor incorrecto")
            sueldoxhora = parseInt(prompt("Ingrese cuanto vale la hora"))
        }
        nombre = prompt("Ingrese su nombre")
        if (sueldoxhora > 300 && sueldoxhora <= 450) {
            sueldo = horas * [sueldoxhora - (sueldoxhora * 0.09)]
        } else {
            if (sueldoxhora > 150) {
                sueldo = horas * [sueldoxhora - (sueldoxhora * 0.07)]
            } else {
                sueldo = horas * [sueldoxhora - (sueldoxhora * 0.05)]
            }
        }
        console.log(`${nombre} su sueldo semanal es de ${sueldo.toFixed(2)}`)
    }
}

function act15() {
    let numeros = parseInt(prompt("Ingrese a cuantos numeros quiere calcularle el cubo"))
    while (isNaN(numeros) || numeros < 1) {
        alert("Valor incorrecto")
        numeros = parseInt(prompt("Ingrese la cantidad de numeros a calcular"))
    }
    let num = null
    let cubo = null
    for (let i = 1; i <= numeros; i++) {
        num = parseInt(prompt(`Ingresa el ${i}° numero positivo`))
        while (isNaN(num) || num < 1) {
            alert("Valor incorrecto")
            num = parseInt(prompt(`Ingresa el ${i}° numero positivo`))
        }
        cubo = num ** 3
        console.log(`El cubo de ${num} es ${cubo}`)
    }
}

function act16() {
    let num = parseInt(prompt("Ingrese la tabla que desee saber"))
    while (isNaN(num)) {
        alert("Valor incorrecto")
        num = parseInt(prompt("Ingrese un numero"))
    }
    let tabla = null
    for (let i = 1; i <= 10; i++) {
        tabla = i * num
        console.log(`${num}x${i}=${tabla}`)
    }
}

function act17() {
    let inversion = 1500
    for (let i = 1962; i <= 2025; i++) {
        inversion *= 1.15
    }
    alert(`Su inversion en el 2025 sera de $${inversion.toFixed(2)} de pesos`)
}

function act18() {
    let cant_notas = parseInt(prompt("Ingrese la cantidad de notas"))
    while (isNaN(num) || num <= 0) {
        alert("Valor incorrecto")
        num = parseInt(prompt("Ingrese la cantidad de notas"))
    }
    let bandera = false
    let nota, notamax, notamin, acum_notas = 0, promedio = 0;
    for (let i = 1; i < cant_notas; i++) {
        nota = parseInt(prompt("Ingrese la nota numero" + i))
        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("Valor incorrecto")
            i--
        }
        if (bandera === false) {
            notamin = nota
            notamax = nota
            bandera = true
        } else {
            if (nota > notamax) {
                notamax = nota
            } else {
                if (nota < notamin) {
                    notamin = nota
                }
            }
        }
        acum_notas += nota
    }
    promedio = (acum_notas / cant_notas)
    console.log("La nota mas alta fue de " + notamax)
    console.log("La nota mas baja fue de " + notamin)
    console.log("El promedio fue de " + promedio)
}

function act19() {
    let autos = parseInt(prompt("Ingrese la cantidad de autos que posee"))
    while (isNaN(autos) || autos < 1) {
        alert("Valor incorrecto")
        autos = parseInt(prompt("Ingrese la cantidad de autos que posee"))
    }
    let categoria = null
    let precio = null
    let total = null
    let totalclave1 = null
    let totalclave2 = null
    let totalclave3 = null
    for (let i = 1; i <= autos; i++) {
        categoria = parseInt(prompt(`¿Que clave tiene su ${i}° auto?`))
        precio = parseFloat(prompt("Ingresa su precio"))
        while (isNaN(precio) || precio < 1) {
            alert("Valor incorrecto")
            precio = parseInt(prompt("Ingrese el precio"))
        }
        switch (categoria) {
            case 1:
                precio *= 0.10
                total += precio * 1.10
                totalclave1 += precio * 1.10
                break;
            case 2:
                precio *= 0.07
                total += precio * 1.07
                totalclave2 += precio * 1.07
                break;
            case 3:
                precio *= 0.05
                total += precio * 1.05
                totalclave3 += precio * 1.05
                break;
            default:
                alert("Clave incorrecta")
                i--
                break;
        }
        console.log(`El ${i}° auto tiene $${precio} de impuestos`)
    }
    alert(`El total de la clave 1 es: $${totalclave1}\nEl total de la clave 2 es: $${totalclave2}\nEl total de la clave 3 es: $${totalclave3}\nEl total es de $${total}`)

}

function act20() {
    suma = null
    j = null
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            suma += i
            j++
        }
    }
    alert(`La suma de los ${j} numeros pares que hay del 1 al 100 es ${suma}`)
}

function act21() {
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
            for (let i = num1; i <= num2; i++) {
                console.log(i)
                cont++
                acum += i
            }
        }
    }
}

function act22() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i}x${j}=${i * j}`)
        }
    }
}

function act23() {
    let cant_prod = parseInt(prompt("Ingrese la cantidad de productos"))
    while (isNaN(cant_prod) || cant_prod <= 0) {
        alert("Valor incorrecto")
        cant_prod = parseInt(prompt("Ingrese la cantidad de productos"))
    }
    let bandera = false
    let nombre, precio, maxp, minp, maxn, minn, total = 0;
    for (let i = 1; i <= cant_prod; i++) {
        nombre = prompt("Ingrese su nombre")
        precio = parseFloat(prompt("Ingrese el precio del producto"))
        while (isNaN(precio) || precio < 0) {
            alert("Valor incorrecto")
            precio = parseFloat(prompt("Ingrese el precio del producto"))
        }
        if (isNaN(precio) || precio < 1) {
            alert("Valor incorrecto")
            i--
        }
        if (bandera === false) {
            minp = precio
            maxp = precio
            minn = nombre
            maxn = nombre
            bandera = true
        } else {
            if (precio > maxp) {
                maxp = precio
                maxn = nombre
            } else {
                if (precio < minp) {
                    minp = precio
                    minn = nombre
                }
            }
        }
        total += precio
    }
    console.log(`El producto ${minn} es el mas barato con $${minp}`)
    console.log(`El producto ${maxn} es el mas barato con $${maxp}`)
    console.log(`El total a pagar es de $${total}`)
}

act23()