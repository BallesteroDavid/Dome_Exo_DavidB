// exo 1

const mainBtn = document.getElementById("mainBtn");
console.log(mainBtn);
const mainElement = document.getElementById("mainElement")
console.log(mainElement);

function redColor() {
    mainElement.classList.toggle("redColor")
}

mainBtn.addEventListener("click", redColor)

// exo 2

const mainBtn2 = document.getElementById("mainBtn2");
// console.log(mainBtn2);
const exo2Container = document.getElementById("exo2Container");
// console.log(mainContainerContent2);

function hereNotHere() {
    exo2Container.classList.toggle("displayNone");

}

mainBtn2.addEventListener("click", hereNotHere);

// exo 3
// chemin d'accès pour id => btnStyle de button
const sendButton = document.getElementById("sendButton");
console.log(sendButton);
// chemin d'accès pour id =>age de l'input
let age = document.getElementById("age");
// console.log(age);

function getValue(){
    // recuperer la valeur (value), dans l'input
    let value = age.value
    console.log(value);
    // alert qui donne aussi la valeur de age
    alert(value)
}
// si on appuie sur le bouton btnStyle, on récupère l'information (la valeur) contenu dans l'input (age) 
sendButton.addEventListener("click", getValue);




