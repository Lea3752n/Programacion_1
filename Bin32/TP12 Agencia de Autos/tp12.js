class Vehiculo {
    constructor(marca, modelo, ano, precio, color) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.precio = precio
        this.color = color
    }
    calcularAntiguedad() {
        let ant = 2025 - this.ano
        if (ant > 1) {
            console.log(`${this.modelo} tiene ${ant} años de antigüedad`)
            return ant
        }
        console.log(`${this.modelo} tiene ${ant} año de antigüedad`)
        return ant
    }
    aplicarDescuento(porcentaje) {
        const conf = confirm(`¿Esta seguro de aplicar ${porcentaje}% al precio final?`)
        if (conf) {
            this.precio = this.precio - (this.precio * porcentaje / 100)
            return `Se aplico el descuento al precio. Total: $${this.precio.toFixed(2)}`
        }
        return `Cancelado por el usuario`
    }
    info() {
        return `Marca: ${this.marca} - Modelo: ${this.modelo} - Año: ${this.ano} - Precio: ${this.precio} - Color: ${this.color}`
    }
}
const v1 = new Vehiculo("Audi", "R8", 2006, 10000, "negro");
const v2 = new Vehiculo("Porsche", "911 Carrera", 1964, 327700, "Gris");
const v3 = new Vehiculo("Mazda", "Rx-7", 1978, 85810, "Rojo");
const v4 = new Vehiculo("Volkswagen", "Beetle", 1938, 20000, "Amarillo");
const v5 = new Vehiculo("Ford", "Fiesta", 1976, 10770, "Naranja");
const v6 = new Vehiculo("Ford", "Ficus", 1998, 12454, "Rojo");
class Agencia {
    constructor(nombre, direccion) {
        this.nombre = nombre
        this.direccion = direccion
        this.vehiculos = []
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo)
        return `Se ha agregado el vehiculo a la agencia ${this.nombre}`
    }
    buscarPorMarca(marca) {
        const busca = this.vehiculos.filter(veh => veh.marca.toLowerCase().includes(marca.toLowerCase()))
        if (busca.length === 0) {
            return `Marca no encontrada`
        }
        if (busca.length < 1) {
            busca.forEach((au) => console.log(`Se ha encontrado un vehiculo: ${au.info()}`))
        } else {
            console.log(`Se han encontrado ${busca.length} vehiculos:`)
            busca.forEach((au, i) => console.log(`${i + 1} - ${au.info()}`))
        }
        return busca
    }
    buscarVehiculo(marca, modelo) {
        const busca = this.vehiculos.find(au => au.marca.toLowerCase().includes(marca.toLowerCase()) && au.modelo.toLowerCase().includes(modelo.toLowerCase()))
        if (busca) {
            return `Vehiculo encontrado: ${busca.info()}`
        }
        return `No se encontro el vehiculo`
    }
    antiguedadPromedio() {
        let prom = 0
        this.vehiculos.forEach(au => prom+=au.calcularAntiguedad().ant)
        prom=prom/this.vehiculos.length
        return `La antiguedad promedio es de ${prom.toFixed(2)} años`
    }
}
const losSantos = new Agencia("Los Santos", "Vinewood");
losSantos.agregarVehiculo(v1)
losSantos.agregarVehiculo(v2)
losSantos.agregarVehiculo(v3)
losSantos.agregarVehiculo(v4)
losSantos.agregarVehiculo(v5)
losSantos.agregarVehiculo(v6)