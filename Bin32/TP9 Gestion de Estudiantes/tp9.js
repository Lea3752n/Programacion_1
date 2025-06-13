class Estudiante {
    constructor(nombre, edad, curso, division) {
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
        this.division = division
    }
    mostrarInformacion() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nCurso: ${this.curso}° ${this.division}°`
    }
    pasarDeAnio() {
        return this.curso < 1 ? "Curso no valido" : this.curso === 6 ? console.log(`No se puede. ${this.nombre} ya ha egresado.`) : console.log(`Felicidades pasaste a ${this.curso += 1}°`)
    }
}
const estudiante1 = new Estudiante("Ramirez Leandro Daniel", 18, 5, 3);
const estudiante2 = new Estudiante("Diaz Luis Emiliano", 17, 5, 3);
const estudiante3 = new Estudiante("Sandoval Luciano", 17, 4, 4);
const estudiante4 = new Estudiante("Cabrera Javier Emilio", 14, 2, 3);
const estudiante5 = new Estudiante("Lochbaum Zacarias", 14, 2, 1);
class Escuela {
    constructor() {
        this.estudiantes = []
    }
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante)
    }
    listarEstudiantes() {
        this.estudiantes.forEach(est => console.log(est.nombre))
    }
    buscarPorNombre(nombre) {
        const busqueda = this.estudiantes.find(est => est.nombre.toLowerCase().includes(nombre.toLowerCase()))
        return busqueda ? busqueda : "Estudiante no encontrado"
    }
    estudiantesPorCurso(curso, division) {
        const busqueda = this.estudiantes.filter(est => est.curso === curso && est.division === division)
        return busqueda.length>0 ? "No se encontraron estudiantes de este curso" : busqueda
    }
    eliminarEstudiante(nombre) {
        const indice = this.estudiantes.findIndex(nom => nom.nombre.toLowerCase().includes(nombre.toLowerCase()))
        let confirmar
        indice < 0 ? `Usuario no encontrado` : confirmar = confirm(`Desea eliminar al estudiante ${this.estudiantes[indice].nombre}`)
        if (confirmar) {
            let aux = this.estudiantes[indice].mostrarInformacion()
            this.estudiantes.splice(indice, 1)
            return `Estudiante eliminado: ${aux}`
        } else {
            return `Cancelado por el usuario`
        }
    }
}
const cet30 = new Escuela();
cet30.agregarEstudiante(estudiante1)
cet30.agregarEstudiante(estudiante2)
cet30.agregarEstudiante(estudiante3)
cet30.agregarEstudiante(estudiante4)
console.log(cet30.estudiantes.push(estudiante5))
cet30.estudiantes.forEach(est => est.mostrarInformacion())
console.log(cet30.estudiantes.find(est => est.nombre === "Diaz Luis Emiliano"))
cet30.estudiantes.forEach(est => console.log(est.nombre.includes("Leandro")))
console.log(cet30.estudiantes.filter(est => est.curso === 2))
console.log(cet30.estudiantes.splice(4, 1))
function promoverAno(escuela,nombre) {
    const estudiante = escuela.buscarPorNombre(nombre)
    if (estudiante!=="Estudiante no encontrado") {
        const mensaje = estudiante.pasarDeAnio()
        return mensaje
    }
    return `No se encontro estudiante`
}