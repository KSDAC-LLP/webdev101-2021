let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let rollBtn = document.querySelector("#rollBtn");

function rollDice(diceEle) {
  let newValue = Math.floor(Math.random() * 6) + 1;
  diceEle.src = `images/dice${newValue}.png`;
}

function handleDiceClick(event) {
  rollDice(event.target);
}

// dice1.addEventListener("click", handleDiceClick);
// dice2.addEventListener("click", handleDiceClick);
// rollBtn.addEventListener("click", () => {
//   rollDice(dice1);
//   rollDice(dice2);
// });
