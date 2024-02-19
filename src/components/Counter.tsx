import { useState } from "react";
import React from "react";

const useCounter = (initialValue: number = 123) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return { count, increment, decrement };
};

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div
      style={{ backgroundColor: "rgb(0,0,0)" }}
      className="counter-container"
    >
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <span className="counter-display">{count}</span>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
