import React from "react";

const StatisticLine = (props) => {
  let str = "";
  const text = props.text;
  const value = props.value;
  switch (text) {
    case "good":
      str = "good " + value;
      break;
    case "neutral":
      str = "neutral " + value;
      break;
    case "bad":
      str = "bad " + value;
      break;
    case "all":
      str = "all " + value;
      break;
    case "average":
      str = "average " + value;
      break;
    case "positive":
      str = "positive " + value + " %";
      break;
    default:
      break;
  }
  return <p>{str}</p>;
};

const Statistics = (props) => {
  const average = (props) => {
    let average = 1 * props.good + 0 * props.neutral + -1 * props.bad;
    if (average === 0) {
      return 0;
    } else {
      return average / (props.good + props.neutral + props.bad);
    }
  };

  const positive = (props) => {
    let sum = props.good + props.neutral + props.bad;
    if (sum === 0) {
      return 0;
    } else {
      return (props.good * 100) / (props.good + props.neutral + props.bad);
    }
  };

  if (props.good + props.neutral + props.bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticLine value={props.good} text="good" />
      <StatisticLine value={props.neutral} text="neutral" />
      <StatisticLine value={props.bad} text="bad" />
      <StatisticLine
        value={props.good + props.neutral + props.bad}
        text="all"
      />
      <StatisticLine value={average(props)} text="average" />
      <StatisticLine value={positive(props)} text="positive" />
    </div>
  );
};

export default Statistics;
