// Propiedad length
const frutas = ["manzana", "banana", "cereza"]
console.log(frutas.length)

const numeros = [10, 20, 30, 40]
console.log(numeros.length)

// Metodo push()
numeros.push(50, 60)
console.log(numeros)

// Metodo find()
const edades = [12, 17, 19, 21]
const mayorEdad = edades.find(edad => edad >= 18)
console.log(mayorEdad)

const nombres = ["Ana", "Luis", "Pedro"]
const encontrado = nombres.find(nombre => nombre === "Luis")
console.log(encontrado)

// Metodo findIndex()
const valores = [3, 7, 10, 15]
const indice = valores.findIndex(num => num > 9)
console.log(indice)

const letras = ["a", "b", "c"]
const pos = letras.findIndex(l => l === "b")
console.log(pos)

// Metodo forEach()
const colores = ["rojo", "verde", "azul"]
colores.forEach(color => console.log(color))

const FEnumeros = [1, 2, 3]
FEnumeros.forEach((n, i) => console.log(`Indice ${i}: ${n}`))

// Metodo includes()
const animales = ["perro", "gato", "loro"]
console.log(animales.includes("gato"))
console.log(animales.includes("conejo"))

// Metodo map()
const dobles = numeros.map(n => n * 2)
console.log(dobles)

const saludos = nombres.map(nombre => `Hola ${nombre}`)
console.log(saludos)

// Metodo filter()
const mayores20 = numeros.filter(n => n > 20)
console.log(mayores20)

const palabras = ["sol", "luna", "estrellas"]
const largas = palabras.filter(palabra => palabra.length > 4)
console.log(largas)

// Metodo splice()
frutas.splice(1, 1)
console.log(frutas)

frutas.splice(1, 0, "kiwi")
console.log(frutas)

frutas.splice(1, 1, "mango", "pera")
console.log(frutas)
