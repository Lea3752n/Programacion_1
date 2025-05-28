class Producto {
    constructor(nombre, marca, precio, categoria, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
    estadoDeStock() {
        let Estado = ""
        if (this.stock <= 0) {
            Estado = "No hay stock"
        } else {
            if (this.stock > 100) {
                Estado = "Alto"
            } else {
                if (this.stock > 50) {
                    Estado = "Medio"
                } else {
                    Estado = "Bajo"
                }
            }
        }
        return `El estado de ${this.nombre} es: ${Estado}`
    }
    verDetalles() {
        return `Nombre: ${this.nombre} Marca: ${this.marca} Precio: ${this.precio} Categoria: ${this.categoria} Stock: ${this.stock} ${this.estadoDeStock()}`
    }
}

const producto1 = new Producto("Hamburguesas", "Paty", 5000, "Alimento", 120)
const producto2 = new Producto("Patas de pollo", "Pollolin", 7000, "Alimento", 80)
const producto3 = new Producto("Salchichas", "Swift", 4000, "Alimento", 50)
const producto4 = new Producto("Pan lactal", "Bimbo", 6500, "Alimento", 300)

const inventario = []

function agregarProd(producto) {
    inventario.push(producto)
}
agregarProd(producto1)
agregarProd(producto2)
agregarProd(producto3)
agregarProd(producto4)

function listarProd() {
    inventario.forEach((prod, i) => console.log(i, prod))
}

function buscarProd(busqueda) {
    return inventario.find(prod => prod===busqueda)
}

function actualizarStock(nombre,nuevoStock) {
    const nombreProd = buscarProd(nombre)
    return nombreProd.stock=nuevoStock
}

function actualizarPrecio(nombre,nuevoPrecio) {
    const nombreProd = buscarProd(nombre)
    return nombreProd.precio=nuevoPrecio
}
