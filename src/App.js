import React, { useEffect, useState } from "react";
import RandomName from './RandomName';
import Search from './Search';
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
        <Search data={data} />
        <RandomName data={data} random={random} />
      </header>
    </div>
  );
}

export default App;
