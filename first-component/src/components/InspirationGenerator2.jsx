/* eslint-disable react/prop-types */
import { useState } from "react";
import { inspirations } from "../data";
import FancyText from "./FancyText";
import Color from "./Color";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
