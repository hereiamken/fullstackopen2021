import React from "react";

const Total = (props) => {
  //{part1} {exercises1}

  let sum = 0;
  props.parts.forEach((element) => {
    console.log("Before: " + sum);
    sum = sum + element.exercises;
    console.log("After: " + sum);
  });

  return <p>Number of exercises {sum}</p>;
};

export default Total;
