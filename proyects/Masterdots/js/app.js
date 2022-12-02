/*
*  js comrpbation of the data of input
*/ 
// Inicializadores de var, objetos, DOM
const formEntrada = document.getElementById("formEntrada");
const nickInput = document.getElementById("nick");
const emailInput = document.getElementById("email");
const sizeInput = document.getElementById("size");
const errorDisplay = document.getElementById("error")

// Comprobar si hay algun error en el juego.html
if(sessionStorage.getItem('error')){
    errorDisplay.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}

// Funciones de eventos
function comprobarFurmulario(event){
    // Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/)){
        console.log("Introduce un nick");
        nickInput.focus();
        event.preventDefault();
        errorDisplay.innerText = "El nick no puede comenzar con un número";
        return false; // para que no se envie el formulario
    }else if(sizeInput.value=="0"){
        console.log("Introduce un tamaño");
        sizeInput.focus();
        event.preventDefault();
        errorDisplay.innerText = "Selecciona un tamaño";
        return false; // para que no se envie el formulario
    }
    errorDisplay.innerText = "";
    //Información de usuario es correcta podre utilizar la función de almacenamiento de datos
    userData(nickInput);
    historicalUsers(nickInput);
    return true; // para que se envie el formulario
} // fin de comprobarFurmulario

// Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarFurmulario);
