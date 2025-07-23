// exo 1
const mainBtn = document.getElementById("mainBtn");
console.log(mainBtn);
const mainContainer = document.getElementById("mainElement")
console.log(mainContainer);

function redColor() {
    mainContainer.classList.toggle("redColor")
}

mainBtn.addEventListener("click", redColor)

// function white() {
//     main.classList.add(classWhite);
// }

// function redOrWhite() {
//     main.classList.toggle("white");
// }

// redOrWhite()
// mainBtn.addEventListener("click", redOrWhite)

// exo 2

const mainBtn2 = document.getElementById("mainBtn2");
// console.log(mainBtn2);
const exo2Container = document.getElementById("exo2Container");
// console.log(mainContainerContent2);

function hereNotHere() {
    exo2Container.classList.toggle("displayNone");

}

mainBtn2.addEventListener("click", hereNotHere);

