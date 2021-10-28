import { useState } from 'react';
import rollDice from "./libs/roll-dice";

function TitleComponent() {
  return <h1 className="title">Dice Game</h1>;
}

function Dice() {
  const [imageSrc, setImageSrc] = useState(rollDice());
  return (
    <div class="col">
      <img
        id="dice1"
        src={imageSrc}
        alt="dice one"
        onClick={() => setImageSrc(rollDice())}
      />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <TitleComponent />
      <div className="row">
        <Dice />
        <Dice />
      </div>
      <button id="rollBtn">Roll All</button>
    </div>
  );
}

export default App;
