// JS Para la generación de los datos de usuario
var nick;

//  sessionStorage
function userData(nick){
    sessionStorage.setItem('nick',nick.value); // Guarda el nick en el sessionStorage en un formato lista
}

function getUserData(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function checkUserData(){
    if(nick == null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
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