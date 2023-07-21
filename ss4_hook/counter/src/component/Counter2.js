import React from "react";
import useIncerment from "../hooks/useIncerment";

function Counter2() {
  const [counter, setCounter] = useIncerment(2);

  return (
    <div>
      <h1>Count:{counter}</h1>
      <button type="button" onClick={setCounter}>
        Counter +2
      </button>
    </div>
  );
}
export default Counter2;
