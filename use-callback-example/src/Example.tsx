import { useState, useCallback } from "react";
import Button from "./Button";

export default function Example() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("parent re-render");

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Button onClick={handleClick} />
    </section>
  );
}
