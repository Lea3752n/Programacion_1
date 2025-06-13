class Prenda {
    constructor(nombre,tipo,talla,color,precio,stock) {
        this.nombre=nombre
        this.tipo=tipo
        this.talla=talla
        this.color=color
        this.precio=precio
        this.stock=stock
    }
    describir(){
        return `${this.nombre} - Tipo: ${this.tipo} - Talla: ${this.talla} - Color: ${this.color} - Precio: $${this.precio}`
    }
}
const prenda1 = new Prenda("Nike Tech","Campera","L","Verde",500,20);
const prenda2 = new Prenda("Kobe","Buzo","M","Violeta",150,30);
const prenda3 = new Prenda("THIS IS A BANGER!!!","Remera","L","Blanco",30,15);
const prenda4 = new Prenda("Denim","Gorra","S","Azul",20,40);
const prenda5 = new Prenda("Check-5 Baggy","Pantalon","M","Negro",110,20);
const inventario = []
inventario.push(prenda1,prenda2,prenda3,prenda4,prenda5)
function mostrarPrendas() {
    inventario.forEach(pren=>console.log(pren.describir()))
}
function buscarPorTipo(tipo) {
    const busca = inventario.filter(pren=>pren.tipo.includes(tipo.toUpperCase()))
    return busca.length<1?`Resultados de la busqueda ${busca}`:`Objeto no encontrado`
}
function buscarPorNombre(nombre) {
    const busca = inventario.find(pren=>pren.nombre.toLowerCase().includes(nombre.toLowerCase()))
    return busca? busca : `Prenda no encontrada`
}
function existeColor(color) {
    const colores = inventario.map(pren=>pren.color.toLowerCase())
    return colores.includes(color.toLowerCase()) ? `Hay prendas de color ${color}` : `No se encontraron prendas de color ${color}`
}
function actualizarPrecio(nom,precioNuevo) {
    const indice = inventario.findIndex(pren=>pren.nombre.toLowerCase()===nom.toLowerCase())
    if (indice===-1) {
        return `Prenda no encontrada`
    }
    const conf = confirm(`¿Desea actualizar el precio de la prenda ${inventario[indice].nombre}?`)
    if (conf) {
        inventario[indice].precio=precioNuevo
        return `Precio actualizado ${inventario[indice].describir()}`
    } else {
        return `Cancelado por el usuario`
    }
}
function eliminarPrenda(nom) {
    const indice = inventario.findIndex(pren=>pren.nombre.toLowerCase()===nom.toLowerCase())
    if (indice===-1) {
        return `Prenda no encontrada`
    }
    const conf = confirm(`¿Desea eliminar la prenda ${inventario[indice].nombre}?`)
    if (conf) {
        inventario.splice(indice,1)
        return `Prenda eliminada`
    } else {
        return `Cancelado por el usuario`
    }
}
nomPren=inventario.map(pren=>pren.nombre)