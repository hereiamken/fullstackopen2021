import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Content from "./Content";
import Statistics from "./Statistics";

const App = () => {
  const header = "give feedback";
  const statistics = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    setGood(newValue);
    console.log("good ", good);
  };
  const setToBad = (newValue) => {
    setBad(newValue);
    console.log("bad ", bad);
  };
  const setToNeutral = (newValue) => {
    setNeutral(newValue);
    console.log("neutral ", neutral);
  };

  return (
    <div>
      <Content content={header} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Content content={statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
