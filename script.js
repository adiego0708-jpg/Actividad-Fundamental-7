document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. SISTEMA DE PESTAÑAS CON ANIMACIÓN SUAVE
    // ==========================================
    const btnUANL = document.getElementById("btn-uanl");
    const btnFIME = document.getElementById("btn-fime");
    const seccionUANL = document.getElementById("seccion-uanl");
    const seccionFIME = document.getElementById("seccion-fime");
    const seccionContacto = document.getElementById("contacto"); 
    const contenedorVolver = document.getElementById("contenedor-volver"); // <-- Nueva variable
    
    // Lógica para cuando el usuario hace clic en "Becas UANL"
    btnUANL.addEventListener("click", function() {
        seccionFIME.style.display = "none"; 
        
        seccionUANL.style.display = "block"; 
        seccionUANL.classList.remove("animacion-suave"); 
        void seccionUANL.offsetWidth; 
        seccionUANL.classList.add("animacion-suave");

        // Mostrar el contacto con animación
        seccionContacto.style.display = "block";
        seccionContacto.classList.remove("animacion-suave");
        void seccionContacto.offsetWidth;
        seccionContacto.classList.add("animacion-suave");
        
        // Mostrar el botón de volver al inicio
        contenedorVolver.style.display = "block";

        btnUANL.classList.add("active");
        btnFIME.classList.remove("active");
    });

    // Lógica para cuando el usuario hace clic en "Becas FIME"
    btnFIME.addEventListener("click", function() {
        seccionUANL.style.display = "none";  
        
        seccionFIME.style.display = "block"; 
        seccionFIME.classList.remove("animacion-suave");
        void seccionFIME.offsetWidth; 
        seccionFIME.classList.add("animacion-suave");

        // Mostrar el contacto con animación
        seccionContacto.style.display = "block";
        seccionContacto.classList.remove("animacion-suave");
        void seccionContacto.offsetWidth;
        seccionContacto.classList.add("animacion-suave");
        
        // Mostrar el botón de volver al inicio
        contenedorVolver.style.display = "block";

        btnFIME.classList.add("active");
        btnUANL.classList.remove("active");
    });

    // ==========================================
    // 2. BOTÓN DE VOLVER AL INICIO Y ALERTA
    // ==========================================
    const btnVolver = document.getElementById("btnVolverArriba");
    
    if(btnVolver) {
        btnVolver.addEventListener("click", function() {
            alert("¡Gracias por visitar nuestra página!");
            
            // Esta línea hace que la pantalla suba suavemente hasta el inicio
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});