import React from "react";
import useIncrement from "../hooks/useIncrement";

function Counter2() {
  const [counter, setCounter] = useIncrement(2);

  return (
    <div>
      <h1>Count:{counter}</h1>
      <button type="button" onClick={setCounter}> Counter +2 </button>
    </div>
  );
}
export default Counter2;
