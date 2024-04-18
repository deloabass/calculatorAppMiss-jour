let inputScreen = document.getElementById("screen");
let numberButton = document.querySelectorAll(".number");
let nombre1 = 0;
let operateur = "";
let nombre2 = 0;
let multiplication = document.getElementById("multiplication");
function valeurScreen(chiffre) {
  inputScreen.value += chiffre;
  nombre1 = inputScreen.value;
}
//function boutton delete
function del() {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
}
// function nombre à screen
function number() {
  let numberButton = document.querySelectorAll(".number");
  for (let n = 0; n < numberButton.length; n++) {
    numberButton[n].addEventListener("click", function () {
      inputScreen.value += numberButton[n].getAttribute("nombre");
      if (operateur === "") {
        nombre1 = inputScreen.value;
        console.log("nombre1 : ", nombre1);
      } else {
        nombre2 = inputScreen.value;
        console.log("nombre2 : ", nombre2);
      }
    });
  }
}
number();
// function symbole à screen
function symbole() {
  let btn_Symbole = document.querySelectorAll(".symbole");
  for (let s = 0; s < btn_Symbole.length; s++) {
    btn_Symbole[s].addEventListener("click", function () {
      inputScreen.value = btn_Symbole[s].getAttribute("symbol");
      operateur = btn_Symbole[s].getAttribute("symbol");
      console.log(operateur);
    });
  }
}
symbole();
//function bouton reset click
function reset() {
  inputScreen.value = "";
  nombre1 = 0;
  nombre2 = 0;
  operateur = "";
}

let boutonPoint = document.getElementById("boutonpoint");
boutonPoint.addEventListener("click", function (a) {
  if (inputScreen.value === "") {
    inputScreen.value = "0.";
    console.log("bonjour");
  }

  // test si y'a un point sur l'ecran d'affichage
  if (inputScreen.value.includes(".")) {
    console.log("je contient deja un point(.)");
    return;
  } else {
    //si non rajoute le point
    valeurScreen(a.target.textContent);
    console.log("je rajoute le point");
    console.log(inputScreen.value);
  }
});

function ajouterOperateur(operateur) {
  if (operateur === "+") {
    console.log("nombre1: ", nombre1);
    console.log("nombre2: ", nombre2);
    inputScreen.value = parseInt(parseInt(nombre1) + parseInt(nombre2));
  } else if (operateur === "-") {
  } else if (operateur === "/") {
    inputScreen.value = parseFloat(nombre1) / parseFloat(nombre2);
  }
  if (operateur === "*") {
    inputScreen.value = parseInt(parseInt(nombre1) * parseInt(nombre2));
  }
}
ajouterOperateur();
// function egale
function egale() {
  const result = parseInt(nombre1) + parseInt(nombre2);
  inputScreen.value = result;
  nombre1 = result;
}
egale();
// //reset Suprime les nombre des button.
