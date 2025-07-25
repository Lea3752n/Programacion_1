let total = 0
function agregarProducto() {
    let cant = parseInt(document.getElementById('cant').value)
    let prod = document.getElementById('prod').value
    let precio = parseFloat(document.getElementById('precio').value)

    const imprimir = document.getElementById('imprimir')
    imprimir.disabled = false;
    let subtotal = cant * precio
    total += subtotal

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.textContent = `${cant} × $${precio}`
    p2.textContent = `${prod} $${subtotal}`

    document.getElementById('cant').value = ""
    document.getElementById('prod').value = ""
    document.getElementById('precio').value = ""

    const carrito = document.createElement('div')
    carrito.append(p1, p2)
    const tiquet = document.querySelector('#tiquet')
    tiquet.appendChild(carrito)


    const lista = document.getElementById('total')
    const elemento = document.createElement('p')
    elemento.textContent = `El total a pagar es de $${total}`
    lista.appendChild(elemento)
}

function imprimir() {

}

