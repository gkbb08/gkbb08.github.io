const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
  if(player == computer){
    return "Draw!"; 
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "You Win!" : "You Lose!"
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "You Win!" : "You Lose!"
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "You Win!" : "You Lose!"
  }
}
function bb08(){
  document.querySelector('body').style.background = "url('gif.gif')"
  document.querySelector('body').style.backgroundImage = no-repeat

  var h1 = document.getElementById('playerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('computerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('resultText');
  h1.style.color = 'white';
}
function bb09(){
  document.querySelector('body').style.background = "url('gif3.gif')"

  var h1 = document.getElementById('playerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('computerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('resultText');
  h1.style.color = 'white';
}
function bb07(){
  document.querySelector('body').style.background = "url('gif4.gif')"

  var h1 = document.getElementById('playerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('computerText');
  h1.style.color = 'white';

  var h1 = document.getElementById('resultText');
  h1.style.color = 'white';
}
window.addEventListener('load', () => {
  document.getElementById("erika").play();
});