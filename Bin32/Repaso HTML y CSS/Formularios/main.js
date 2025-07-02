const estudiantes = []
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    console.log("Nombre: ",nombre)
    console.log("Edad: ",edad)
    alert(`Nombre: ${nombre} \nEdad: ${edad}`)
    return estudiantes.push({nombre: nombre,edad: edad})
}
