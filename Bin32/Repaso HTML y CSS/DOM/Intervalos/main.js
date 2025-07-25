function intervalos() {
    const num1 = parseInt(document.getElementById('numero1').value)
    const num2 = parseInt(document.getElementById('numero2').value)

    if (isNaN(num1) || isNaN(num2)) {
        alert('Error')
        return;
    }
    if (num1 === num2 || Math.abs(num1-num2)) {
        alert('No hay intervalo')
    } else {
        if (num1 > num2) {
            let aux = num1
            num1 = num2
            num2 = aux
        }
    }
    
  

    const row=document.querySelectorAll('tr')
    row.forEach(elem=>elem.remove())


    for (i = num1 + 1; i < num2; i++) {
        console.log(i)

        const fila = document.createElement('tr')
        const div = document.createElement('td')
        div.textContent = (i)
        fila.appendChild(div)
        document.querySelector('tbody').appendChild(fila)
    }
    

}