import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [state, setState] = useState(10);

  return (
    <div>
      <Child color="black">Click me</Child>
      <Child color="blue">Hover</Child>
      <Child color="green">Change</Child>
      <Child color="yellow">bla bla</Child>
      <Child color="red">Lorem, ipsum.</Child>
    </div>
  );
};

export default App;
