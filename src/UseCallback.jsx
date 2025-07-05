import { useCallback, useState } from "react";
import Header from "./components/Header";

function Counter() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);

  return (
    <>
      <Header newFn={newFn} />
      <h1> {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default Counter;
