import React from "react";

const Option = ({ arr }) => {
  return arr.map((el, idx) => <option key={idx}>{el}</option>);
};

export default Option;
