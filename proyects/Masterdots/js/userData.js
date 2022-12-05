// JS Para la generación de los datos de usuario

/*
* @autor: Fernando Leon Franco <leon@leonesfrancos.com>
* {@link https://github.com/Seikened/Seikened.github.io GitHub}
*/

var nick;
var size;
var email;
var geolocalizacionTxt;
var avatarImg;

//sessionStorage
/**
 * Alamacena los datos del usuario en el sessionStorage
 * @param  {HTMLElement} nick nick del usuario
 * @param  {HTMLElement} size tamaño del panel
 * @param  {HTMLElement} email email del usuario
 * @param  {HTMLElement} avatarContainer imagen del avatar
 */
function userData(nick,size,email,avatarContainer){
    sessionStorage.setItem('nick',nick.value); // Guarda el nick en el sessionStorage en un formato lista
    sessionStorage.setItem('size',size.value); // Guarda el size en el sessionStorage en un formato lista
    sessionStorage.setItem('email',email.value); // Guarda el email en el sessionStorage en un formato lista
    sessionStorage.setItem('geolocalizacionTxt',geolocalizacionTxt); // Guarda la geolocalizacion en el sessionStorage en un formato lista
    sessionStorage.setItem('avatarImg',avatarContainer.src); // Guarda el avatar en el sessionStorage en un formato lista
}
/**
 * Obtiene los datos del usuario del sessionStorage
 */
function getUserData(){
    nick = sessionStorage.getItem('nick');
    size = sessionStorage.getItem('size');
    email = sessionStorage.getItem('email');
    geolocalizacionTxt = sessionStorage.getItem('geolocalizacionTxt');
    avatarImg = sessionStorage.getItem('avatarImg');
    
}

function checkUserData(){
    if(nick == null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}
function dataGeolocaization(){
    if(!navigator.geolocation){
        geolocalizacionTxt = "No esposible o el navegador no es compatible";
    }else{
        navigator.geolocation.getCurrentPosition(
            // Exitoso
            (position)=>{geolocalizacionTxt='Latitud: '+ position.coords.latitude+' , Longitud: '+position.coords.longitude},
            // Error
            ()=>{geolocalizacionTxt="La geolocalización no se ha podido realizar";}
        )
    }
}
//  localStorage
function historicalUsers(nick){
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if(historicoStorage == null){
        historico=[];
    }else{
        historico=JSON.parse(historicoStorage);
    }
    let registeredUsers ={
        user: nick.value,
        fecha:Date.now()
    }
    historico.push(registeredUsers);
    localStorage.setItem('historico',JSON.stringify(historico)); // Guarda el nick en el localStorage en un formato lista
}