import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import RandomName from './RandomName';
import './App.css';

function App(props) {
  const {
    random
  } = props;
  const [data, setData] = useState([]);
  const url = './data.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <RandomName data={data} random={random} />
      </header>
    </div>
  );
}

export default App;
