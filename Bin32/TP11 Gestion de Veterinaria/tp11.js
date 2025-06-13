class Mascota {
    constructor(nombre, especie, edad) {
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.vacunas = []
    }
    agregarVacuna(vacuna) {
        const vacs = this.vacunas.map(vac => vac.toLowerCase())
        if (!vacs.includes(vacuna.toLowerCase())) {
            this.vacunas.push(vacuna)
            return `Vacuna agregada`
        }
        return `La ${vacuna} ya ha sido agregada`
    }
    mostrarEdadFormato() {
        return this.edad > 1 ? `${this.edad} años` : `${this.edad} año`
    }
}
const mascota1 = new Mascota("Larry", "Gato", 3);
const mascota2 = new Mascota("Ollie", "Perro", 5);
const mascota3 = new Mascota("Pelusa", "Gato", 2);
const mascota4 = new Mascota("Poli", "Loro", 1);
const mascota5 = new Mascota("Kira", "Gato", 5);
mascota1.agregarVacuna("Moquillo")
mascota2.agregarVacuna("Rabia")
mascota3.agregarVacuna("Parvovirus")
mascota4.agregarVacuna("Moquillo")
mascota5.agregarVacuna("Rabia")
mascota1.agregarVacuna("Parvovirus")
class Veterinaria {
    constructor(nombre) {
        this.nombre = nombre
        this.mascotas = []
    }
    agregarMascota(mascota) {
        const nom = this.mascotas.map(mas => mas.nombre.toLowerCase())
        if (!nom.includes(mascota.nombre.toLowerCase())) {
            this.mascotas.push(mascota)
            return `Mascota agregada`
        }
        return `${mascota.nombre} ya esta dentro de la veterinaria`
    }
    buscarMascotaPorEspecie(esp) {
        const busca = this.mascotas.filter(masc => masc.especie.toLowerCase().includes(esp.toLowerCase()))
        if (busca.length < 1) {
            return `No hay mascotas de esa especie`
        } else {
            if (busca.length === 1) {
                busca.forEach(masc => console.log(`Se ha encontrado una mascota: ${masc.nombre}`))
            } else {
                console.log(`Mascotas encontradas de la especie ${esp.toLowerCase()}:`)
                busca.forEach((masc, i) => console.log(`${i + 1} - ${masc.nombre}`))
            }
            return busca
        }
    }
    eliminarMascotaPorNombre(nom) {
        const indice = this.mascotas.findIndex(masc => masc.nombre.toLowerCase().includes(nom.toLowerCase()))
        if (indice !== -1) {
            const conf = confirm(`¿Desea eliminar la mascota ${this.mascotas[indice].nombre}?`)
            if (conf) {
                const aux = this.mascotas[indice].nombre
                this.mascotas.splice(indice, 1)
                return `Se ha eliminado la mascota "${aux}"`
            }
            return `Cancelado por el usuario`
        }
        return `No se ha encontrado la mascota`
    }
    listarNombresMascotas() {
        const nombres = this.mascotas.map(masc => masc.nombre)
        nombres.forEach((nom, i) => console.log(`${i + 1} - ${nom}`))
        return nombres
    }
    calcularPromedioEdad() {
        if (this.mascotas===0) {
            return `No hay mascotas`
        }
        let prom = null
        this.mascotas.forEach((masc) => prom += masc.edad)
        prom = prom / this.mascotas.length
        return prom > 1 ? `La edad promedio son ${prom.toFixed(2)} años` : `La edad promeido es ${prom} año`
    }
}
const perritaLinda = new Veterinaria("La Perrita Linda")
perritaLinda.agregarMascota(mascota1)
perritaLinda.agregarMascota(mascota2)
perritaLinda.agregarMascota(mascota3)
perritaLinda.agregarMascota(mascota4)
perritaLinda.buscarMascotaPorEspecie("Gato")
console.log("-------------------------------------------------------------------------")
perritaLinda.buscarMascotaPorEspecie("Loro")
console.log("-------------------------------------------------------------------------")
perritaLinda.listarNombresMascotas()
class Mascota2 {
    constructor(nombre, especie, edad,vacunas=[]) {
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.vacunas = vacunas
    }
}