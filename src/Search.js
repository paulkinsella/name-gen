import React, { useState } from "react";
import './App.css';

const Search = (props) => {
  const {
    data
  } = props;

  const [search, setSearch] = useState('');
  let resultsArray = [];
  const results = data.filter(item => item.name === search);
  resultsArray = results;
  const getSearchResults = () => {
    return resultsArray.map((item) => (
      <div className="cardContainer">
        <div className={item.name ? "card" : "noCard"}>
          <div className="details">
            <div className="name">{item.name}</div>
            <div className="fact">{item.fact}< br />
            </div>
            <div className="symbol">{item.symbol}</div>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Search your name!"
          onChange={(event) =>
            event.target.value === " "
              ? setSearch("")
              :
              setSearch(event.target.value)
          }
        />
      </div>
      {getSearchResults()}
    </>


  );
};

export default Search;