const proyects = document.getElementById('proyect_container');

let proyectsIds = [];
let Id=0;
let lastId = 0;
const estructureProyectCard = 
`<img src="./img/812556.jpg" alt="Portfolio 4">
<h3>musica</h3>
<h4>concierto benicassim</h4>
<div class="sep"></div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
<div class="masinfo"><button type="button">MAS INFO</button></div>
`;

function addProyect(){
    let newProyect = document.createElement('div');
    newProyect.setAttribute('id',Id);
    newProyect.setAttribute('class','proyect');
    newProyect.innerHTML = estructureProyectCard;
    console.log(estructureProyectCard);
    proyects.appendChild(newProyect);
    proyectsIds.push(Id);
    console.log(proyectsIds);
    Id++;
    console.log(Id);
}

function removeProyect(){
    let idProyect = proyectsIds.pop();
    let proyect = document.getElementById(idProyect);
    proyects.removeChild(proyect);
}