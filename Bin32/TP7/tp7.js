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
                if (this.stock >= 50) {
                    Estado = "Medio"
                } else {
                    Estado = "Bajo"
                }
            }
        }
        return `El estado del stock de ${this.nombre} es: ${Estado}`
    }
    verDetalles() {
        return `Nombre: ${this.nombre} Marca: ${this.marca} Precio: ${this.precio} Categoria: ${this.categoria} Stock: ${this.stock} ${this.estadoDeStock()}`
    }
}

const producto1 = new Producto("Hamburguesas", "Paty", 5000, "Alimento", 120)
const producto2 = new Producto("Patas de pollo", "Pollolin", 7000, "Carniceria", 80)
const producto3 = new Producto("Salchichas", "Swift", 4000, "Alimento", 40)
const producto4 = new Producto("Pan lactal", "Bimbo", 6500, "Alimento", 30)

const inventario = []

function agregarProd(producto) {
    inventario.push(producto)
}
agregarProd(producto1)
agregarProd(producto2)
agregarProd(producto3)
agregarProd(producto4)

function listarProd() {
    inventario.forEach((prod, i) => console.log(`${i + 1}- ${prod.verDetalles()}`))
}

function buscarProd(busqueda) {
    const buscado = inventario.find(prod => prod.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    return buscado ? buscado : `Producto no encontrado` //Validacion por truly
}

function actualizarStock(nombre, nuevoStock) {
    const nombreProd = buscarProd(nombre)
    if (nombreProd === `Producto no encontrado`) {
        return `No se pudo actualizar el stock`
    }
    const confirmar = confirm(`Seguro que desea actualizar el stock de ${nombreProd.nombre}`)
    if (confirmar) {
        nombreProd.stock = nuevoStock
        return `Stock actualizado de: ${nombreProd.nombre}`
    } else {
        return `Cancelado por el usuario`
    }
}

function actualizarPrecio(nombre, nuevoPrecio) {
    const nombreProd = buscarProd(nombre)
    if (nombreProd === `Producto no encontrado`) {
        return `No se pudo actualizar el precio`
    }
    const confirmar = confirm(`Seguro que desea actualizar el precio de ${nombreProd.nombre}`)
    if (confirmar) {
        nombreProd.precio = nuevoPrecio
        return `Precio actualizado de: ${nombreProd.nombre}`
    } else {
        return `Cancelado por el usuario`
    }
}
function filtrarPorCategoria(categoria) {
    const filtro = inventario.filter(prod => prod.categoria === categoria)
    if (filtro.length > 0) {
        console.log(cat)
    }
    return
}

function eliminarProducto(nom) {
    const indice = inventario.findIndex(i => i.nombre === nom)
    if (indice === -1) {
        return `Producto no encontrado`
    } else {
        const confirmar = confirm(`¿Desea eliminar el producto ${inventario[indice].nombre}?`)
        if (confirmar) {
            inventario.splice(indice, 1)
            console.log(`Producto eliminado ${nom}`)
            return inventario
        } else {
            return `Cancelado por el usuario`
        }
    }
}

function obtenerNombres() {
    return inventario.map(prod => prod.nombre)
}

function valorTotalYPromedio() {
    let total = 0, prom = 0
    inventario.forEach((prod) => {
        total += (prod.stock * prod.precio)
        prom += prod.precio
    })
    return `Valor total de productos: $${total}       Valor promedio por producto: $${(prom / inventario.length)}`
}

function incrementarPrecios(porcentaje) {
    if (typeof porcentaje === "string" || porcentaje <= 0) {
        return `Porcentaje invalido`
    }
    const confirmar = confirm(`¿Desea incrementar el precio en un ${porcentaje}%?`)
    if (confirmar) {
        inventario.forEach(prod => {
            prod.precio += ((prod.precio / 100) * porcentaje)
            console.log(`Se incremento el precio del producto ${prod.nombre} un ${porcentaje}%. Precio final: $${prod.precio}`)
        })
    } else {
        return `Cancelado por el usuario`
    }

}

function reporteDeStockBajo_forEach() {
    inventario.forEach(prod => prod.stock < 50 ? console.log(`Stock de ${prod.nombre} es bajo, reponer.`) : null)
}

function reporteDeStockBajo_filter() {
    const stockBajo = inventario.filter(prod => prod.stock < 50)
    if (stockBajo.length > 0) {
        return stockBajo
    }
    return `No se encontraron productos con stock bajo`
}

function filtrarPorStock(stock) {
    const filtro = inventario.filter(prod => prod.stock <= stock)
    if (filtro.length > 0) {
        filtro.forEach(prod => console.log(`El producto ${prod.nombre} tienen ${prod.stock} unidades de stock`))
        return
    }
    return `No se encontraron productos con stock menor o igual a ${stock}`
}