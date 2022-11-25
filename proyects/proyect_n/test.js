const container = document.getElementById('container');


let Ids = [];
let i=0;
let lastid = 0;

function addElement(){
    let newElement = document.createElement('div');
    newElement.setAttribute('id',i);
    newElement.setAttribute('class','element');
    newElement.innerHTML = i;
    console.log(newElement);
    container.appendChild(newElement);
    Ids.push(i);
    console.log(Ids);
    i++;
    console.log(i);
}

function removeElement(){
    let id = Ids.pop();
    let element = document.getElementById(id);
    container.removeChild(element);
}


// const container = document.getElementById("container") 
// let cardId = []
// let i = 0
// let lastId = 0

// function addCard(){
//     cardId.push(i)
//     console.log(cardId)
//     i++
//     container.innerHTML += 
//     `<div class="element" id=${cardId[i]}>
//     <h2>Card</h2>
//     <p>El día de hoy es bueno</p>
//     </div>`
// }



// function removeCard(){
//     let id = cardId.pop()
//     let element = document.getElementById(id)
//     container.removeChild(element)
// }