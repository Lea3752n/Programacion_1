/* Aca vemos como pegar contenido en un documento HTML con textContent,innerHtml e innerText*/

function modificacion1() {
    document.getElementById("p1").textContent = "Este parrafo es un ejemplo del uso de textContent"

    //let p1=document.getElementById("otro_parrafo")
    //p1.textContent="Este parrafo es un ejemplo del uso de textContent"

    document.getElementById("p2").innerHTML = "Este parrafo es OTRO ejemplo, uso de innerHtml"
    document.getElementById("p3").innerText = "este es el ultimo ejemplo, uso de innerText"
}

function modificacion2() {
    // Seleccionando elementos por ID, class y tag
    // Por ID
    let elementoPorID = document.getElementById(`p1`)
    elementoPorID.innerHTML = `HTML`
    // Por nombre de la clase
    let elementosPorClase = document.getElementsByClassName(`parrafos`)
    elementosPorClase[1].innerHTML = `CSS`;
    // Por etiqueta
    let elementosPorEtiquetas = document.getElementsByTagName(`p`)
    elementosPorEtiquetas[2].innerHTML = `JS`;
    // Modificando estilos
    // Por ID
    elementoPorID.style.background = `black`
    elementoPorID.style.color = `white`
    elementoPorID.style.borderRadius = `8px`
    elementoPorID.style.width = `250px`
    elementoPorID.style.textAlign = `center`
    // Por nombre de la clase
    elementosPorClase[1].style.background=`red`
    elementosPorClase[1].style.color=`white`
    elementosPorClase[1].style.borderRadius=`8px`
    elementosPorClase[1].style.width=`250px`
    elementosPorClase[1].style.textAlign=`center`
    // Por etiquetas
    elementosPorEtiquetas[2].style.background=`blue`
    elementosPorEtiquetas[2].style.color=`white`
    elementosPorEtiquetas[2].style.borderRadius=`8px`
    elementosPorEtiquetas[2].style.width=`250px`
    elementosPorEtiquetas[2].style.textAlign=`center`
}   

function modificacion3() {
    // Lectura de nodos
    // Por ID
    let elementoPorID = document.querySelector(`#p1`)
    elementoPorID.innerHTML=`Aguante la programacion`
    // Por nombre de la clase
    let elementosPorClase = document.querySelectorAll(`.parrafos`)
    elementosPorClase[1].innerHTML = 'Programacion 1'
    // Por etiqueta
    let elementosPorEtiquetas = document.querySelectorAll('p')
    elementosPorEtiquetas[2].innerHTML='JavaScript!!!'
}

function modificacion4() {
    // Creando parrafo 4
    // Crear nodos
    const parrafoCuatro = document.createElement('p')
    const textoParrafoCuatro = document.createTextNode('Parrafo 4')
    // Selecciono elemento padre
    const elementoPadre = document.querySelector('.padre')
    // Agregar nodos
    //elementoPadre.appendChild(parrafoCuatro)
    parrafoCuatro.appendChild(textoParrafoCuatro)
    // Creando parrafo 5
    // Crear nodos
    const parrafoCinco = document.createElement('p')
    parrafoCinco.innerHTML='Parrafo 5'
    // Agregar nodos
    //elementoPadre.appendChild(parrafoCinco)
    elementoPadre.append(parrafoCuatro,parrafoCinco)
}

function modificacion4b() {
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerText="5to 3ra"
    const padre = document.querySelector('.padre')
    div.appendChild(p)
    padre.appendChild(div)
}

function modificacion5() {
    // Eliminacion del parrafo 2 y 3
    // La primer forma usando el metodo remove
    document.getElementById("p2").remove()
    // La segunda forma usando el metodo removeChild
    document.getElementById("padre").removeChild(document.getElementById("p3"))
}

function modificacion6() {
    // Agrego una clase mas a los elementos de la clase parrafos
    let todosLosParrafos = document.querySelectorAll(".parrafos")
    todosLosParrafos.forEach(x=>{
        x.classList.add("parrafos2") //.remove para eliminar la clase y .contains es un includes mas
    })
}

