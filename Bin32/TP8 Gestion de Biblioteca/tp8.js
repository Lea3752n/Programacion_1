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
        this.libros = []
    }
    agregarLibro(libro) {
        const busca = this.libros.find(lib => lib === libro)
        if (busca) {
            return `Ya se ha añadido este libro`
        }
        this.libros.push(libro)
        return "Se añadio el libro a la biblioteca"
    }
    eliminarLibro(nom) {
        const indice = this.libros.findIndex(i => i.titulo === nom)
        if (indice === -1) {
            return `Producto no encontrado`
        } else {
            const confirmar = confirm(`¿Desea eliminar el producto ${this.libros[indice].titulo}?`)
            if (confirmar) {
                this.libros.splice(indice, 1)
                console.log(`Producto eliminado ${nom}`)
                return this.libros
            } else {
                return `Cancelado por el usuario`
            }
        }
    }
    mostrarLibros() {
        return this.libros.forEach(libro => libro.mostrarDetalles())
    }
    buscarLibroPorTitulo(titulo) {
        const resultado = this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()))
        return resultado.length < 0 ? "Libro no encontrado" : resultado.forEach(libro => libro.mostrarDetalles())
    }
}
const leturin = new Biblioteca()
const libro1 = new Libro("La Biblia", "Dios", -2025, "Religion", true)