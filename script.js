// Esperar a que todo el documento cargue
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón por su ID
    let botonInfo = document.getElementById("btnInfo");

    // Agregar un evento de clic
    botonInfo.addEventListener("click", function() {
        alert("¡Recuerda revisar las fechas de convocatoria en el SIASE para que no se te pase el registro!");
    });
});