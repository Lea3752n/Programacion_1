function Act1() {
    const miArreglo = []
    miArreglo.push(1, 2, 3, 4, 5)
    return miArreglo
}

function agregarElemento(arr, elem) {
    console.log("Ejercicio 2")
    return arr.push(elem);
}

function Act3() {
    const numeros = [1, 2, 3, 4, 5]
    return numeros.forEach(numero => console.log(numero))
}

function imprimirCuadrados(arr) {
    console.log("Ejercicio 4")
    return arr.forEach(cuadrado => console.log(cuadrado ** 2))
}

function act5() {
    const numeros = [1, 2, 3, 4, 5]
    const cuadrado = numeros.map(n => n * 2)
    return cuadrado
}

function duplicarElementos(arr) {
    console.log("Ejercicio 6")
    const duplicado = arr.map(n => n * 2)
    return duplicado
}

function act7() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const par = numeros.filter(par => par % 2 === 0)
    return par
}

function filtrarMayoresA(arr, limite) {
    console.log("Ejercicio 8")
    const mayorLimite = arr.filter(elm => elm > limite)
    return mayorLimite
}

function act9() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return numeros.find(n => n > 5)
}

function encontrarElemento(arr, func) {
    console.log("Ejercicio 10")
    return arr.find(func)
}

function act11() {
    const frutas = ["manzana", "banana", "cereza"]
    return frutas.includes("banana")
}

function contieneElemento(arr, elem) {
    console.log("Ejercicio 12")
    return arr.includes(elem)
}

function act13() {
    const numeros = [5, 10, 15, 20, 25, 30]
    numeros.splice(0, 3)
    return numeros
}

function act14() {
    const colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"]
    colores.splice(2, 3)
    return colores
}

function act14V2(arreglo,posicion,cantidad) {
    arreglo.splice(posicion,cantidad)
    return arreglo
}