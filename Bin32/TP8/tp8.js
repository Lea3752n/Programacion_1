//Parte 1
const libro = {
    titulo: "Peanuts",
    autor: "Charles M. Schulz",
    ano: 1950,
    genero: "Humor",
    disponible: true,
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nAño: ${this.ano}\nGenero: ${this.genero}\n${this.disponible ? "Disponible" : "No disponible"}`)
    },
    prestarLibro() {
        this.disponible ? this.disponible = false : console.log("El libro ya fue prestado")
    },
    devolverLibro() {
        !this.disponible ? this.disponible = true : console.log("El libro ya fue devuelto")
    },
    estadoDelLibro() {
        this.disponible ? console.log(`El libro ${libro.titulo} esta disponible`) : console.log(`El libro ${libro.titulo} no esta disponible`);
    }
}

//Parte 2
class Libro {
    constructor(titulo, autor, ano, genero, disponible) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero
        this.disponible = disponible
    }
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nAño: ${this.ano}\nGenero: ${this.genero}\n ${this.disponible ? "Disponible" : "No disponible"}`)
    }
    prestarLibro() {
        this.disponible ? this.disponible = false : console.log("El libro ya fue prestado")
    }
    devolverLibro() {
        !this.disponible ? this.disponible = true : console.log("El libro ya fue devuelto")
    }
}

//Parte 3 
class Biblioteca {
    constructor() {
        this.libros=[]
    }
}