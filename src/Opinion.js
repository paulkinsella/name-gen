import React from "react";
import './App.css';

const Opinion = (props) => {
  const {
    random,
    randomFact
  } = props;

  let opinion;

  if (random.popularity > 80) {
    opinion = 'Not a bad name';
  } else if (random.popularity > 50 && random.popularity <= 80) {
    opinion = 'Average name';
  } else if (random.popularity <= 50) {
    opinion = 'Shit name';
  } else {
    opinion = '';
  }

  const getRandomfact = () => {
    return random.length !== 0 ?
      <><div>{randomFact.fact}</div>
        <div>{opinion}</div>
        <div className="symbol">{randomFact.symbol}</div>
      </> : '';
  };

  return (
    <>
      {getRandomfact()}
    </>
  );
};

export default Opinion;