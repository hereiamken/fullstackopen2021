import React from "react";

const Countries = ({ countries, showCountries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => showCountries(country.name.common)}>
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
