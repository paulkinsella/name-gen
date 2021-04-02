import React, { useState } from "react";
import './App.css';
import Opinion from './Opinion';
import { fact } from './Constants';

const RandomName = (props) => {
  const [random, setRandom] = useState([]);

  const {
    data,
  } = props;


  const getRandomName = (random) => {
    setRandom(data[Math.floor(Math.random() * data.length)]);
    return random;
  };

  const randomFact = fact[Math.floor(Math.random() * fact.length)];

  return (
    <>
      <div className="buttonContainer">
        <button
          className="bigButton"
          onClick={getRandomName}>Get Random Male Name
        </button>
      </div>
      <div className="cardContainer">
        <div className={random.name ? "card" : "noCard"}>
          <div className="details">
            <div className="name">{random.name}</div>
            <div className="fact">
              <Opinion random={random} randomFact={randomFact} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomName;