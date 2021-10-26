import { useState } from "react";

function App() {
  const users = [
    {
      name: "Hanut",
      age: 32,
    },
    {
      name: "Tarun",
      age: 19,
    },
    {
      name: "Chirag",
      age: 21,
    },
    {
      name: "Aditya",
      age: 30,
    },
  ];
  const [timesClicked, setTimesClicked] = useState(0);

  const _handleClick = () => {
    setTimesClicked(timesClicked + 1);
  };

  const _handleReset = () => {
    setTimesClicked(0);
  };

  return (
    <div className="helloApp">
      <h1>Hello React</h1>
      <h2>Button Clicked: {timesClicked}</h2>
      <button onClick={_handleClick}>Click Me</button>
      <button onClick={_handleReset}>Reset Counter</button>
      <div className="usersList">
        
      </div>
    </div>
  );
}

export default App;
