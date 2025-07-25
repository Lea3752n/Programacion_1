let cont = 0
function Calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    let resultado

    document.getElementById('num1').value = ""
    document.getElementById('num2').value = ""
    cont++
    const resultadoDiv = document.createElement('div')
    resultadoDiv.classList.add('resultado');
    switch (operacion) {
        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            if (num2 === 0) {
                resultado="Error"
                break;
            }
            resultado = num1 / num2
            break;
        default:
            break;
    }
    resultadoDiv.textContent = `Operacion ${cont} resultado de ${num1} ${operacion} ${num2} = ${resultado}`;
    document.getElementById('resultados').appendChild(resultadoDiv)
}

if (cont===5) {
    document.querySelectorAll("resultado").remove()
    cont=0
}