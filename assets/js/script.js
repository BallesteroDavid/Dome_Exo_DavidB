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

// si on appuie sur le bouton btnStyle, on récupère l'information (la valeur) contenu dans l'input (age) 

function getValue(){
    // je recupère la valeur dans mon input
    const age = document.getElementById('age').value;
    // je génère un élément span
    const span = document.createElement('span');
    // déclare une variable type (vide)
    let type;
    // si age est sup ou égal à 18
    if (age >= 18 ) {
        // je rappel ma var type pour lui enrengistré une string
        type = "majeur";
        // si on rentre pas dans la 1ère condition on éxecute le else    //  
    }else{
        // je rappel ma var type pour lui enrengistré une string
        type = "mineur";
    }
    // genere un element html qui contient le message "A [age], tu es [mineur/adult]."
    // je modifie textContent de mon élément span que j'ai généré précedement
    span.textContent = "A "+ age + " ans, tu es " + type + ".";
    // dans mon je cible le document html ou injecter mon element span
    document.getElementById("alerteContainer").appendChild(span);
}

sendButton.addEventListener("click", getValue);