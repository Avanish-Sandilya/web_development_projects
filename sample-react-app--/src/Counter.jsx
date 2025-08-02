import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset=()=>{
    setCount(0);
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
