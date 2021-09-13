import React from "react";

const Total = (props) => {
  const reducer = (previousValue, currentValue) => {
    return previousValue + Number(currentValue.exercises);
  };

  return (
    <p>
      <strong>total of {props.parts.reduce(reducer, 0)} exercises</strong>
    </p>
  );
};

export default Total;
