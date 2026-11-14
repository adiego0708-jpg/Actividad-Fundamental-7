document.addEventListener("DOMContentLoaded", function() {
    
    // Variables para las pestañas de becas
    const btnUANL = document.getElementById("btn-uanl");
    const btnFIME = document.getElementById("btn-fime");
    const seccionUANL = document.getElementById("seccion-uanl");
    const seccionFIME = document.getElementById("seccion-fime");
    
    // Variable para el botón del Footer
    const btnInfo = document.getElementById("btnInfo");

    // Lógica para cuando el usuario hace clic en "Becas UANL"
    btnUANL.addEventListener("click", function() {
        seccionUANL.style.display = "block"; // Muestra la sección UANL
        seccionFIME.style.display = "none";  // Oculta la sección FIME
        
        // Cambia el diseño del botón para mostrar que está seleccionado
        btnUANL.classList.add("active");
        btnFIME.classList.remove("active");
    });

    // Lógica para cuando el usuario hace clic en "Becas FIME"
    btnFIME.addEventListener("click", function() {
        seccionUANL.style.display = "none";  // Oculta la sección UANL
        seccionFIME.style.display = "block"; // Muestra la sección FIME
        
        // Cambia el diseño del botón para mostrar que está seleccionado
        btnFIME.classList.add("active");
        btnUANL.classList.remove("active");
    });

});