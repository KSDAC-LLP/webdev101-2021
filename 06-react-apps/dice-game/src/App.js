import { useState } from "react";
import rollDice from "./libs/roll-dice";

function TitleComponent() {
  return <h1 className="title">Dice Game</h1>;
}

function Dice({ id }) {
  const [imgSrc, setImgSrc] = useState(rollDice());

  const _handleOnClick = () => {
    setImgSrc(rollDice());
  };

  return (
    <div className="col">
      <img id={id} src={imgSrc} alt={imgSrc} onClick={_handleOnClick} />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <TitleComponent />
      <div className="row">
        <Dice id="dice1"/>
        <Dice id="dice2"/>
      </div>
      <button id="rollBtn">Roll All</button>
    </div>
  );
}

export default App;
