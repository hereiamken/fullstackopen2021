import React from "react";

const Line = (props) => {
  console.log(props);
  return (
    <p>
      {props.name} {props.number}
    </p>
  );
};

export default Line;
