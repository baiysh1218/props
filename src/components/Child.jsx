import React from "react";

const Child = ({ children, color }) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};

export default Child;
