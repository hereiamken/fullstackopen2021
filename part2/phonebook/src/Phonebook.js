import React from "react";
import Line from "./Line";

const Phonebook = (props) => {
  const values = props.persons ? props.persons : props.filterPersons;
  console.log(values);
  return (
    <div>
      {values.map((value) => (
        <Line key={value.id} name={value.name} number={value.number} />
      ))}
    </div>
  );
};

export default Phonebook;
