import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

export default function ReactHooksDemo() {
  // useState
  const [count, setCount] = useState(0);

  // useEffect
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useMemo
  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    return num * 1000;
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // useRef
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // useCallback
  const resetCounter = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React Hooks Demo</h2>

      <hr />

      <h3>useState Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={resetCounter}>Reset</button>

      <hr />

      <h3>useEffect Timer</h3>
      <p>Timer running: {seconds} seconds</p>

      <hr />

      <h3>useMemo Expensive Calculation</h3>
      <p>Memoized Value: {memoizedValue}</p>

      <hr />

      <h3>useRef Input Focus</h3>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>

    </div>
  );
}