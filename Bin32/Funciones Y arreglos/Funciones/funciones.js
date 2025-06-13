// Funcion declarada
function multiplicar(a, b) {
    return a * b
}
console.log(multiplicar(4, 3))

// Funcion expresada 
const resultado = function dividir(a, b) {
    return a / b
}
console.log(resultado(10, 2))

// Funcion anonima
let cuadrado = function (numero) {
    return numero ** 2
}
console.log(cuadrado(4))

// Funcion flecha
// Version abreviada
const sumar = (a, b) => a + b;
console.log(sumar(3, 5))

// Version completa
const saludarPersona = (nombre) => {
    console.log("Hola " + nombre)
}
saludarPersona("Juan")