/*
*  js comrpbation of the data of input
*/ 
// Inicializadores de var, objetos, DOM
const formEntrada = document.getElementById("formEntrada");
const nickInput = document.getElementById("nick");
const emailInput = document.getElementById("emal");
const sizeInput = document.getElementById("size");


// Funciones de eventos
function comprobarFurmulario(event){
    // Comprobar cambios
    if(nickInput.value.length==0){
        console.log("Introduce un nick");
        nickInput.focus();
        event.preventDefault();
        return false; // para que no se envie el formulario
    }else if(sizeInput.value=="0"){
        console.log("Introduce un tamaño");
        sizeInput.focus();
        event.preventDefault();
        return false; // para que no se envie el formulario
    }
    return true; // para que se envie el formulario
} // fin de comprobarFurmulario

// Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarFurmulario);
