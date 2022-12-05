/*
*  js comrpbation of the data of input
*/ 
// Inicializadores de var, objetos, DOM
var formEntrada;
var nickInput;
var emailInput;
var sizeInput;
var errorDisplay;
var avatarItems;
var itemImg;
var avatarContainer;

// Funciones de eventos
/**
 * @param  {EventObjets} event Evento que salta al realizar el submit
 */
function comprobarFurmulario(event){
    // Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/)){ // Comprueba si hay un numero en el nick
        console.log("Introduce un nick");
        nickInput.focus();
        event.preventDefault();
        errorDisplay.innerText = "El nick no puede comenzar con un número";
        return false; // para que no se envie el formulario
    }else if(sizeInput.value=="0"){
        sizeInput.focus();
        event.preventDefault();
        errorDisplay.innerText = "Selecciona un tamaño";
        return false; // para que no se envie el formulario
    }

    //Información de usuario es correcta podre utilizar la función de almacenamiento de datos
    userData(nickInput,sizeInput,emailInput,avatarContainer);
    historicalUsers(nickInput);
    return true; // para que se envie el formulario
}

function moviendoImg(event){
    itemImg=event.target;
}

function cambiarImg(){
    avatarContainer.src=itemImg.src;
}
/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 */
function DOMCargado(){
    // Captura de todos Elements necesarios
    formEntrada = document.getElementById("formEntrada");
    nickInput = document.getElementById("nick");
    emailInput = document.getElementById("email");
    sizeInput = document.getElementById("size");
    errorDisplay = document.getElementById("error");

    // Comrpbar si hay algun error de juego.html
    if(sessionStorage.getItem('error')!=null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    
    formEntrada.addEventListener('submit', comprobarFurmulario);

    avatarItems=document.getElementsByClassName("avatarImgItem");
    // Eventos del Drag an drop
    for(let item of avatarItems){
        item.addEventListener('dragstart',moviendoImg);
    }
    avatarContainer=document.getElementById("avatarImg");
    avatarContainer.addEventListener('dragover',e=>(e.preventDefault()));
    avatarContainer.addEventListener('drop',cambiarImg);
}

// Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', DOMCargado);
// GeoLocalización 
dataGeolocaization();
