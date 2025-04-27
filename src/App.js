import { animals } from "./animals";
import React, { useState } from "react";


const App = () => {
  const [fact, setFact] = useState("");
  const showBackground = true;
  const title = "";

  const displayFact = (animal) => {
    const facts = animals[animal].facts;
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log(randomFact);
    setFact(randomFact);
  };

  return (
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
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
    </div>
  );
};

export default App;