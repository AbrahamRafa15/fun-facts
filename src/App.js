import { animals } from "./animals";
import React, { useState } from "react";


const App = () => {
  const [fact, setFact] = useState("");
  const [showBackground, setShowBackGround] = useState(true);
  const title = "Click an animal for a fun fact";

  const displayFact = (animal) => {
    const facts = animals[animal].facts;
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };

  return (
    <div>
      <h1>{title}</h1>
      {showBackground && (
        <img className="background" alt="ocean" src="/images/ocean.jpg" />
      )}
      <p id="fact">{fact}</p>
      <div className="animals">
        {Object.entries(animals).map(([name, { image }]) => (
          <img
            key={name}
            className="animal"
            alt={name}
            src={image}
            aria-label={name}
            role="button"
            onClick={() => displayFact(name)}
          />
        ))}
      </div>
      <button className="toggle-background" onClick={() => setShowBackGround(!showBackground)}>
          Toogle background
      </button>
    </div>
  );
};

export default App;