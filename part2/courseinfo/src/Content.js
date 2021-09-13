import React from "react";
import Part from "./Part";

const Content = (props) => {
  const values = props.parts;

  return (
    <div>
      {/* <Part name={values[0].name} exercises={values[0].exercises} />
      <Part name={values[1].name} exercises={values[1].exercises} />
      <Part name={values[2].name} exercises={values[2].exercises} /> */}
      {values.map((value) => (
        <Part key={value.id} name={value.name} exercises={value.exercises} />
      ))}
    </div>
  );
};

export default Content;
