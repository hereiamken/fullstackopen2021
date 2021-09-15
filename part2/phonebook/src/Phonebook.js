import React from "react";
import Line from "./Line";

const Phonebook = (props) => {
  const values = props.persons;
  return (
    <div>
      {values.map((value) => (
        <Line key={value.name} name={value.name} />
      ))}
    </div>
  );
};

export default Phonebook;
