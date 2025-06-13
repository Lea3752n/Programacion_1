//Objeto literal
const estudiante = {
    nombre: `Leandro`,
    edad: 17,
    curso: `5to`,
    division: `C`,
    estudiar: function () {
        console.log(`${this.nombre} esta estudiando`)
    }
}
console.log(estudiante)
console.log(estudiante.nombre)
estudiante.estudiar()

//Clase y constructor
class Estudiante {
    constructor(nombre, edad, curso, division) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso=curso;
        this.division=division;
    }
    estudiar() {
        console.log(`${this.nombre} esta estudiando`)
    }
}

//Objeto instancia de la clase Estudiante
const estudiante1 = new Estudiante("Saucedo Leandro",17,"5to","3ra")
console.log(estudiante1)
estudiante1.estudiar()