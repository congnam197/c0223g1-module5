import React from "react";
import { useState } from "react";

function UseIncerment() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
  const increase1 = () => {
    setCounter1((prevState1) => prevState1 + 1);
  };
  const increase2 = () => {
    setCounter2((prevState2) => prevState2 + 1);
    setCounter2((prevState2) => prevState2 + 1);
  };

  return (
    <div className="container">
      <h3>Count : {counter1}</h3>
      <button onClick={increase1}>Add 1 </button>
      <h3>Count :{counter2}</h3>
      <button onClick={increase2}>Add 2</button>
    </div>
  );
}
export default UseIncerment;
