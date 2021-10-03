import axios from "axios";
import React, { useEffect, useState } from "react";
import Line from "./Line";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ data: { name, capital, population, flags, languages } }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data);
      });
    return () => setWeather({});
  }, [capital]);

  const langs = Object.values(languages);
  const srcImg = flags.png ? flags.png : flags.svg;

  function langShow() {
    const data = langs.map((element, index) => {
      return <Line key={index} data={element} />;
    });
    return <ul>{data}</ul>;
  }

  return (
    <div>
      <h1>{name.common}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>Spoken languages</h3>
      {langShow()}
      <img src={srcImg} alt={name} width="150px" />
      <h3>Weather in {capital}</h3>
      {Object.keys(weather).length !== 0 ? (
        <>
          <p>
            <strong>temperature:</strong> {weather.temperature} Celcius
          </p>
          <img
            src={weather.weather_icons[0]}
            alt={weather.weather_descriptions}
          />
          <p>
            <strong>wind:</strong> {weather.wind_speed} mph direction{" "}
            {weather.wind_dir}
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Country;
