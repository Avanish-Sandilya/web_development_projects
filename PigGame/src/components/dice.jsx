import { useState } from "react";
import d1 from "../img/dice-1.png";
import d2 from "../img/dice-2.png";
import d3 from "../img/dice-3.png";
import d4 from "../img/dice-4.png";
import d5 from "../img/dice-5.png";
import d6 from "../img/dice-6.png";

function DieRoll() {
  const [die, setDie] = useState(null); // Will store both src and value

  const values = [
    { src: d1, value: 1 },
    { src: d2, value: 2 },
    { src: d3, value: 3 },
    { src: d4, value: 4 },
    { src: d5, value: 5 },
    { src: d6, value: 6 },
  ];

  const handleRoll = () => {
    const randomDie = values[Math.floor(Math.random() * values.length)];
    setDie(randomDie);
  };

  return (
    <div className="diceDiv">
      <button onClick={handleRoll}>Roll Die</button>
      {die && (
        <>
          <img className="dice" src={die.src} alt={`Die face ${die.value}`} />
          <p className="rollValue">{die.value}</p>
        </>
      )}
    </div>
  );
}

export default DieRoll;
