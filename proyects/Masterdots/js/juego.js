// JS Para el juego Masterdots

// VARIABLES GLOBALES
var iniciadoMarcado = false;
var adyacentes = [];
var idMarcados = [];
// ************ parseInt(size) es para convertir a numero una string 
var sizePanel;
var classMarcado;
var totalSizePanel;
var idInterval;

/**
 * Funcion que devuelve un numero aleatorio entre 0 y max
 * @param {Number} max
 */
function getRandom(max){
    return Math.floor(Math.random() * max);
}

/**
 * Funcion que rellena nick y src de avatar
 * 1.- Rellena el nick
 * 2.- Rellena el avatar
 * 3.- Pinta de forma automatica el panel de juego
 */
function rellenarFormulario(){
    document.getElementById('nick').value=nick
    document.getElementById('avatarImg').src=avatarImg;
    sizePanel = parseInt(size);
    totalSizePanel = sizePanel*sizePanel;
}

function pintarPanelJueego(){
    document.getElementById('juego').style.gridTemplateColumns = "repeat("+size+",1fr)";
    document.getElementById('juego').style.gridTemplateRows= "repeat("+size+",1fr)";

    // Pintar el panel de juego de forma automatica
    let items = "";
    let color = ["rojo","verde"]
    let colorRandom = 0;
    for (let index = 0; index < (totalSizePanel); index++) {
        if(index%2>0) colorRandom = getRandom(2);
        // color[colorRandom] es para acceder a un elemento de un array  en este caso seleccionando el color
        items+=`<div class="containerItem"><div id="${index}" class="item ${color[colorRandom]}" ></div></div>`;
    }
    document.getElementById('juego').innerHTML=items;
}

/**
 * Calcular el array de los adyacentes
 * @param  {} idMarcado
 */
function calcularAdyacentes(idMarcado){
    adyacentes=[];
    //Adyacentes de superior
    if((idMarcado-sizePanel)>=0) adyacentes.push(idMarcado-sizePanel);
    //Adyacentes de inferior
    if((idMarcado+sizePanel)<=(totalSizePanel)) adyacentes.push(idMarcado+sizePanel);
    //Adyacentes de izquierda
    if((idMarcado%sizePanel)>0) adyacentes.push(idMarcado-1);
    //Adyacentes de derecha
    if(((idMarcado+1)%sizePanel)>0) adyacentes.push(idMarcado+1);
}
/**
 * Funcion que realiza el conteo hacia atras del juego
 */
function cuentaAtras(){
    let tiempo = parseInt(document.getElementById('tmpo').value)-1;
    document.getElementById('tmpo').value=tiempo;
    if(tiempo==0){
        clearInterval(idInterval);
        // Finalizar todos los eventos
        const items = document.getElementsByClassName('item');
        for (let item of items){
            item.removeEventListener('mousedown',comenzarMarcar);
            item.removeEventListener('mouseover',continuarMarcar);
        }
        document.removeEventListener('mouseup',terminarMarcar);
    }
}

/**
 * Anadir los eventos al juego
 */
function programarEventosJuego(){
    const items = document.getElementsByClassName('item');
    for (let item of items){
        item.addEventListener('mousedown',comenzarMarcar);
        item.addEventListener('mouseover',continuarMarcar);
    }
    document.addEventListener('mouseup',terminarMarcar);
    // Cuenta atras
    // idInterval = setInterval(cuentaAtras,1000);
}

/* FUNCIONES DEL JUEGO*/

/**
 * Iniciar el marcado de los dots
 * @param {EventObject} event
 */
function comenzarMarcar(event){
    let item = event.target;
    let containerItem = event.target.parentElement;
    if (item.classList.contains('rojo')){
        classMarcado = 'rojo';
        containerItem.classList.add('rojo');
    }else{
        classMarcado = 'verde';
        containerItem.classList.add('verde');
    }
    if(!iniciadoMarcado) iniciadoMarcado = true;

    // Guardar el id del item marcado
    idMarcados.push(parseInt(item.id));
    // Calcular los adyacentes
    calcularAdyacentes(parseInt(item.id));
}

/**
 * Continuar el marcado de los dots
 * @param {EventObject} event
 */
function continuarMarcar(event){
    if(iniciadoMarcado){
        let item = event.target;
        let idNuevo=parseInt(item.id);
        // Es adyacente?
        if (adyacentes.includes(idNuevo) && item.classList.contains(classMarcado)) {
            let containerItem = item.parentElement;
            if (item.classList.contains('rojo')){
                containerItem.classList.add('rojo');
            }else{
                containerItem.classList.add('verde');
            }
            // Guardar el id del item marcado
            idMarcados.push(parseInt(item.id));
            // Calcular los adyacentes del nuevo item
            calcularAdyacentes(parseInt(item.id));
        }
    }
}
/**
 * Terminar el marcado de los dots
 * @param {EventObject} event
 */
function terminarMarcar(event){
    iniciadoMarcado = false;
    adyacentes = [];
    // Puntuacion
    const puntuacionInput = document.getElementById("puntuacion");
    if(idMarcados.length>1){
        puntuacionInput.value = parseInt(puntuacionInput.value) + idMarcados.length;
    }

    // CAMBIAR EL COLOR DE LOS MARCADOS
    for (let index =0; index < idMarcados.length; index++){
        // Capturar el objeto
        let itemMarcado = document.getElementById(idMarcados[index]); // Capturar el objeto
        itemMarcado.parentElement.classList.remove(classMarcado);
        // Cambiar el color de los objetos de forma aleatoria
        let color = ["rojo","verde"]
        let colorRandom = getRandom(2);
        itemMarcado.classList.remove(classMarcado);
        itemMarcado.classList.add(color[colorRandom]);
    }
    idMarcados = [];
    console.log(idMarcados+" "+adyacentes);
    
}

/*
* MAIN
*/
// Capturamos los datos del usuario
getUserData();
// Comprobamos si el usuario ha introducido los datos
if(!checkUserData()) location="masterdots_index.html";
// Rellenamos el formulario
rellenarFormulario();
pintarPanelJueego();
programarEventosJuego();