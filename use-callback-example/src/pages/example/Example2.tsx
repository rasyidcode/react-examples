import { useState, useCallback } from "react";
import Button2 from "./Button2";

export default function Example2() {
  console.log("Example2 re-rendered!");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Button2 onClick={handleClick} />
    </section>
  );
}
