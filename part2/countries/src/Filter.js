import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <div>
      filter countries <input onChange={onChange} value={value}></input>
    </div>
  );
};

export default Filter;
