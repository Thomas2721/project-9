import React, { useState, useEffect } from "react";
import './Counter.css'
function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="box">
      <h1>Counter: {count}</h1>
      <button onClick={startCounter} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopCounter} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default Counter;
