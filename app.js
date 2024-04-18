let display = document.getElementById("display");
let clear = true;
let operator = "";
let operand1 = "";
let operand2 = "";
function appendNumber(number) {
  if (clear) {
    display.value = number;
    clear = false;
  } else {
    display.value += number;
  }
}
function addOperator(op) {
  if (!operator) {
    operand1 = display.value;
    clear = true;
  }
  operator = op;
}
function addDecimal(decimal) {
  if (clear === "") {
    
    display.value = decimal;
    clear = false;
  } else if (!display.value.includes(decimal)) {
    display.value += decimal;
    display.value = "0.";
  }
}
function deleteChar() {
  display.value = display.value.slice(0, -1);
}
function clearDisplay() {
  display.value = "";
  clear = true;
  operator = "";
  operand1 = "";
  operand2 = "";
}

function calculateResult() {
  operand2 = display.value;
  if (operator === "+") {
    display.value = parseFloat(operand1) + parseFloat(operand2);
  } else if (operator === "-") {
    display.value = parseFloat(operand1) - parseFloat(operand2);
  } else if (operator === "*") {
    display.value = parseFloat(operand1) * parseFloat(operand2);
  } else if (operator === "/") {
    display.value = parseFloat(operand1) / parseFloat(operand2);
  }
  clear = true;
  operator = "";
  operand1 = "";
  operand2 = "";
}
//circle
let point_un = document.querySelector(".type_1");
let point_deux = document.querySelector(".type_2");
let point_trois = document.querySelector(".type_3");
let point = document.querySelector(".point");
let point2 = document.querySelector(".point2");
let point3 = document.querySelector(".point3");
let body = document.querySelector(".bod");
let btn = document.querySelector(".btn");
let btnEgale = document.querySelector(".egale");
let btnReset = document.querySelector(".reset");
let btnDel = document.querySelector(".del");
let btn_Circle = document.querySelector(".circle");
let titre = document.getElementById("titre_h3");
let control_p = document.getElementById("theme");
let btn_number = document.querySelectorAll(".number");
let btn_Symbole = document.querySelectorAll(".symbole");
let screene = document.querySelector(".screene");
//utilisation de point_1 dans le cercle du theme.
point_un.addEventListener("click", function () {
  screene.setAttribute("style", "background-color:rgb(24,32,51)");
  point.setAttribute("style", "display: block");
  point2.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: none");
  body.setAttribute("style", "background-color:hsl(222,26%,31%)");
  inputScreen.setAttribute("style", "background-color: rgb(24,32,51)");
  btn.setAttribute("style", "background-color:hsl(224, 36%, 15%)");
  btnReset.setAttribute("style", "background-color:rgb(53,119,129)");
  btnDel.setAttribute("style", "background-color:rgb(53,119,129)");
  btnEgale.setAttribute("style", "background-color:rgb(185,81,9)");
  btn_Circle.setAttribute("style", "background-color:rgb(24,32,51)");
  inputScreen.setAttribute("style", "color:#FFF");
  titre.setAttribute("style", "color:#fff");
  control_p.setAttribute("style", "color:#fff");
  point_un.setAttribute("style", "color:#fff");
  point_deux.setAttribute("style", "color:#fff");
  point_trois.setAttribute("style", "color:#fff");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "#000";
    btn_number[i].style.background = "rgb(239,239,239)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "#000";
    btn_Symbole[a].style.background = "rgb(239,239,239)";
  }
});
//utilisation de point_2 dans le cercle du theme.
point_deux.addEventListener("click", function () {
  point.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: none");
  point2.setAttribute("style", "display: block");
  screene.setAttribute("style", "background-color:#FFF");
  body.setAttribute("style", "background-color:hsl(0, 0%, 90%)");
  btn.setAttribute("style", "background-color:hsl(224, 36%, 15%)");
  inputScreen.setAttribute("style", "background-color:hsl(0, 0%, 93%)");
  btn_Circle.setAttribute("style", "background-color:rgb(214,210,211)");
  btnEgale.setAttribute("style", "background-color:rgb(185,81,9)");
  btnReset.setAttribute("style", "background-color:rgb(53,119,129)");
  btnDel.setAttribute("style", "background-color:rgb(53,119,129)");
  titre.setAttribute("style", "color:#000");
  control_p.setAttribute("style", "color:#000");
  point_un.setAttribute("style", "color:#000");
  point_deux.setAttribute("style", "color:#000");
  point_trois.setAttribute("style", "color:#000");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "#000";
    btn_number[i].style.background = "rgb(239,239,239)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "#000";
    btn_Symbole[a].style.background = "rgb(239,239,239)";
  }
});
//utilisation de point_3 dans le cercle du theme.
point_trois.addEventListener("click", function () {
  point.setAttribute("style", "display: none");
  point2.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: block !important");
  body.setAttribute("style", "background-color:hsl(268, 75%, 9%)");
  screene.setAttribute("style", "background-color:#1F083C");
  btn.setAttribute("style", "background-color:hsl(268, 71%, 12%)");
  inputScreen.setAttribute("style", "background-color:hsl(0, 0%, 93%)");
  btnEgale.setAttribute("style", "background-color:rgb(8, 199, 191)");
  btnReset.setAttribute("style", "background-color:rgb(55,26,82)");
  btnDel.setAttribute("style", "background-color:rgb(55,26,82)");
  inputScreen.setAttribute("style", "background-color:rgb(31,5,60)");
  btn_Circle.setAttribute("style", "background-color:rgb(31,5,60)");
  titre.setAttribute("style", "color:hsl(52, 100%, 62%) !importat");
  control_p.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_un.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_deux.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_trois.setAttribute("style", "color:hsl(52, 100%, 62%)");
  inputScreen.setAttribute("style", "color:hsl(52, 100%, 62%)");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "hsl(52, 100%, 62%)";
    btn_number[i].style.background = "rgb(93,5,131)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "hsl(52, 100%, 62%)";
    btn_Symbole[a].style.background = "rgb(93,5,131)";
  }
});
