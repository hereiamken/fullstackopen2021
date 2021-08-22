import React from "react";

const Part = (props) => {
  //{part1} {exercises1}
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Part;
