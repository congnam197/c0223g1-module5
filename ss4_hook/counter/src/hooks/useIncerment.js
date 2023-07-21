import { useState } from "react";
export default function useIncerment(addAmount) {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((previousState) => previousState + addAmount);
    
  };
  return [counter, increase];
}
