import React from "react";
import useIncerment from "../hooks/useIncerment";

function Counter1() {
  const [counter, setCounter] = useIncerment(1);

  return (
    <div>
      <h1>Count :{counter}</h1>
      <button type="button" onClick={setCounter}>  Counter + 1 </button>
    </div>
  );
}
export default Counter1;
