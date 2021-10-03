import "./App.css";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Country from "./Country";
import axios from "axios";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filterCountries =
    countries.filter((country) =>
      country.name.common.toUpperCase().includes(searchQuery.toUpperCase())
    ) || [];

  const showOne = filterCountries && filterCountries.length === 1;

  const showList = filterCountries && filterCountries.length <= 10;

  const search = (event) => {
    setSearchQuery(event.target.value);
  };

  const showCountries = (name) => {
    setSearchQuery(name);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled", response.data);
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Filter onChange={search} value={searchQuery}></Filter>
      <div>
        {showOne ? (
          <Country data={filterCountries[0]} />
        ) : showList ? (
          <Countries
            countries={filterCountries}
            handleShowCountry={showCountries}
          />
        ) : (
          <div>Too many matches, specify another </div>
        )}
      </div>
    </div>
  );
};

export default App;
