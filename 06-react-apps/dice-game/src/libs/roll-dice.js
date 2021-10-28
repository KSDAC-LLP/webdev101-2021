function rollDice() {
  let newValue = Math.floor(Math.random() * 6) + 1;
  return `images/dice${newValue}.png`;
}

export default rollDice;