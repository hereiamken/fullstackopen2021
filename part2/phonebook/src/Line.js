import React from "react";

const Line = ({ value, deletePerson }) => {
  console.log(value.id);

  return (
    <p>
      {value.name} {value.number}{" "}
      <button onClick={() => deletePerson(value)}>delete</button>
    </p>
  );
};

export default Line;
