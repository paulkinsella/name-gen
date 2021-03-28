import React from "react";
import './App.css';

const Opinion = (props) => {
  const {
    random
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

  return (
    <><div>{opinion}</div>
      <div className="symbol">{random.symbol}</div></>
  );
};

export default Opinion;