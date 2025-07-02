const estudiantes = []

function enviarFormulario() {
    //captura los valores desde los inputs por id
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const curso = document.getElementById("curso").value

    //obtener gustos seleccionados (checkbox)
    const gustosSeleccionados = [];
    document.querySelectorAll(`input[name="gustos"]:checked`).forEach((el) => {
        gustosSeleccionados.push(el.value);
    })

    //obtener opcion de vacaciones (radio)
    const vacaciones = document.querySelector(`input[name="vacaciones"]:checked`);
    const planVacaciones = vacaciones ? vacaciones.value : "No Seleccionado"

    //mostramos los datos por consola o alerta
    console.log("nombre:", nombre);
    console.log("edad:", edad);
    console.log("curso:", curso)
    console.log("gustos:", gustosSeleccionados)
    console.log("vacaciones:", planVacaciones)

    alert(`✔nombre: ${nombre}
        \n✔edad: ${edad} 
        \n✔curso: ${curso} 
        \n✔gustos: ${gustosSeleccionados.join(", ")} 
        \n✔vacaciones: ${planVacaciones}`)


    //subir al Array
    return estudiantes.push({
        nombre: nombre,
        edad: edad,
        curso: curso,
        gustos: gustosSeleccionados,
        vacaciones: planVacaciones,
    })

}