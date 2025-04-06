import { useState } from "react";
import Button from "./Button";

export default function Example() {
  console.log(`Example re-rendered!`);

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }


  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Button onClick={handleClick} />
    </section>
  );
}
