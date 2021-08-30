import React from "react";
import Part from "./Part";

const Content = (props) => {
  const values = props.parts;

  // <ListItem parts={props.parts} />;
  return (
    <div>
      <Part name={values[0].name} exercises={values[0].exercises} />
      <Part name={values[1].name} exercises={values[1].exercises} />
      <Part name={values[2].name} exercises={values[2].exercises} />
    </div>
  );
};

export default Content;
